'reach 0.1';

// Cross-cryptocurrency swap derivative contract trading DApp - smart contract backend

// define common interact 
const CommonInteract = {
    seeState: Fun([], Null), // function where both participants can view the current state of the swap contract
    seeTransfer: Fun([], Null),
    seeTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
    
    // compilation options for Reach
    setOptions({
        connectors: [ALGO]
    });

    // define 'owner' or initiating participant that deploys the swap derivative smart contract
    const Owner = Participant('Owner', {
        ...CommonInteract,
        // object containing all the terms and their initial values set by the contract owner / initiator
        setInitTerms: Fun([Address], Object({'acceptedStatus': Bool, // has the trade been accepted or not
                                             'defaultStatus': Bool, // is the contract in default or not
                                             'principalTimeoutLimit': UInt,
                                             'interestTimeoutLimit': UInt,
                                             'token_Owner_borrow_Ctpy_lend': Token,
                                             'token_Owner_lend_Ctpy_borrow': Token,
                                             'termToMaturity': UInt,    // in years
                                             'pmtFrequency': UInt,   // number of payments per year (excluding initial exchange of principal), should require >= 1
                                             'totalNumPmts': UInt,  // number of payments over the full term of the swap contract = (termToMaturiy * pmtFrequency) + 1 for initial exchange of principal
                                             'prevPmt': UInt,
                                             'nextPmt': UInt,
                                             'contractAddress': Address,
                                             'ownerAddress': Address,
                                             'ctpyAddress': Address,
                                             'principalAmtOwner': UInt,
                                             'spotExchangeRate': UInt, // decimal? quoted as -> 1 Base = X Quote, where Base: Owner_lend_token , Quote: Ctpy_lend_token
                                             'principalAmtCtpy': UInt,
                                             'swapRateOwnerPay': UInt, // decimal?
                                             'swapRateCtpyPay': UInt, // decimal?
                                             'lockPrincipal': Bool,
                                             'haircut': UInt})), // haircut rate in % applied to principal on defaulting party
        isInitialised: Fun([], Null),    // function that reports back to Owner that the swap derivative contract terms have been set
        getSwap: Fun([], Tuple(Token, UInt, Token, UInt, UInt)),
        checkBal: Fun([UInt], Null)
    });

    // define counterparty participant attaching to the contract
    const Ctpy = Participant('Ctpy', {
        ...CommonInteract,
        acceptTrade: Fun([], Bool),   // function that returns true if ctpy accepts the trade
        passAddr: Address,
        accSwap: Fun([Token, UInt, Token, UInt, UInt], Bool),
        getTokenIds: Fun([Token, Token], Null)  // function only required for ctpy frontend for testing purposes with non-network tokens
    });

    const testTokenCreator = Participant('Creator', {});    // token creator participant only required for testing purposes with non-network tokens

    // define announcer object to track and announce key events
    const Announcer = Events('Announcer', {
        accepted: [Bool, Address],    // announces that the trade terms have been accepted or rejected
        executed: [Bool],    // announces that trade execution has succeeded or failed
        //payment: [UInt, UInt, UInt],  // may need to add tokens in as well
        default: [Address, UInt], // will announce that a default has occurred, who the defaulting participant is and on what payment / cashflow number
        contractEnd: [Bool] /* announces when the contract ends - either from:
                                    1) the owner ending the contract because the counterparty didn't accept
                                    2) closing the contract on default
                                    3) the swap derivative contract has reach maturity / full term  */
    });
    
    // struct object used in the view object defined below, will be used throughout the program / duration of the swap contract to maintain the current state of the swap contract
    const tradeTerms = Struct([['acceptedStatus', Bool],
                               ['defaultStatus', Bool],
                               ['principalTimeoutLimit', UInt],
                               ['interestTimeoutLimit', UInt],
                               ['token_Owner_borrow_Ctpy_lend', Token],
                               ['token_Owner_lend_Ctpy_borrow', Token],
                               ['termToMaturity', UInt],
                               ['pmtFrequency', UInt],
                               ['totalNumPmts', UInt],
                               ['prevPmt', UInt],
                               ['nextPmt', UInt],
                               ['contractAddress', Address], 
                               ['ownerAddress', Address],
                               ['ctpyAddress', Address],
                               ['principalAmtOwner', UInt],
                               ['spotExchangeRate', UInt],
                               ['principalAmtCtpy', UInt],
                               ['swapRateOwnerPay', UInt],
                               ['swapRateCtpyPay', UInt],
                               ['lockPrincipal', Bool],
                               ['haircut', UInt]
    ]);

    // view object - this shows the current state of the deployed cross-cryptocurrency swap contract as it is updated
    const tradeState = View('TradeState', {
        read: tradeTerms
    });

    init();

    // first publish to deploy the contract
    Owner.publish();
    const info = getAddress();
    commit();    

    // first local step by the contract Owner
    Owner.only(() => {
        const initTerms = declassify(interact.setInitTerms(info));   // owner declassifies the initial terms of the swap contract they have chosen
    });
    Owner.publish(initTerms);
    
    // initialise Trade State view object to show terms set out by the owner upon deployment
    tradeState.read.set(    
        tradeTerms.fromObject(initTerms)
    );

    commit();

    // interact call here confirms to owner what the terms of the cross-cryptocurrency swap contract are initially set to upon deployment
    Owner.interact.seeState();

    // interact call lets owner know that the terms of the swap contract have been set and waiting for the counterparty
    Owner.interact.isInitialised();

    // first local step by contract Counterparty
    Ctpy.only(() => {
        interact.getTokenIds(initTerms.token_Owner_borrow_Ctpy_lend, initTerms.token_Owner_lend_Ctpy_borrow); // only required for testing with non-network tokens
        interact.seeState();
        const resp = declassify(interact.acceptTrade());   // the attaching participant has to decide whether they will accept the terms of the trade (as the counterparty)
        const ctpyAddr = declassify(interact.passAddr); // could change this to separate local step so that ctpy doesn't give up their address unless they actually want to accept
    });
    Ctpy.publish(resp, ctpyAddr);
    
    Announcer.accepted(resp, ctpyAddr);

    // comment?
    if (resp) {
        commit();
        testTokenCreator.only(() =>{
            const tokenOBCL = initTerms.token_Owner_borrow_Ctpy_lend;
            const tokenOLCB = initTerms.token_Owner_lend_Ctpy_borrow;
            check(tokenOBCL != tokenOLCB); });
        testTokenCreator.publish(tokenOBCL, tokenOLCB);
        require(tokenOBCL != tokenOLCB);
        commit();
        // send non-network tokens to Ctpy from 'creator' account so they can be used in the swaps (owner mints balances in each non-network token in frontend) 
        // for testing purposes only - on Testnet/Mainnet the participants would need sufficient balances in the tokens prior with appropriate ASA ids to the trade
        testTokenCreator.pay([[50000, tokenOBCL]]); // essentially send 50k of created wETH tokens to contract
        commit();
        testTokenCreator.pay([[5000, tokenOLCB]]);  // essentially send 5k of created wBTC tokens to contract
        // check contact balance >= transferAmt
        transfer(50000, tokenOBCL).to(Ctpy);
        transfer(5000, tokenOLCB).to(Ctpy);
        
        // update trade state view based on ctpy response
        tradeState.read.set(
            tradeTerms.fromObject({...initTerms,acceptedStatus:resp,ctpyAddress:ctpyAddr})
        );
        each([Owner,Ctpy], () => {  // both participants view the state of the swap contract
            interact.seeState();
        });
        commit();
        // rest of the code... go into parallelReduce here

        // test atomic single atomic swap first...
        Owner.only(() => {
            const [ tokenOtC, amtOtC, tokenCtO, amtCtO, time ] = declassify(interact.getSwap());    // OtC = Owner to Ctpy, CtO = Ctpy to Owner
            check(((tokenOtC == tokenOLCB) && (tokenCtO == tokenOBCL)) || ((tokenOtC == tokenOBCL) && (tokenCtO == tokenOLCB))); });
        Owner.publish(tokenOtC, amtOtC, tokenCtO, amtCtO, time); 
        require(((tokenOtC == tokenOLCB) && (tokenCtO == tokenOBCL)) || ((tokenOtC == tokenOBCL) && (tokenCtO == tokenOLCB)));   
        commit();   
        Owner.pay([ [amtOtC, tokenOtC] ]);      // what about default by Owner? (I guess you can have a check somewhere that ensures Owner has sufficient balance?...)
        commit();
        Owner.interact.checkBal(balance(tokenOtC));

        Ctpy.only(() => {
            const bwhen = declassify(interact.accSwap(tokenOtC, amtOtC, tokenCtO, amtCtO, time)); });
        Ctpy.pay([ [amtCtO, tokenCtO] ])
            .when(bwhen)
            .timeout(relativeTime(time), () => {
              Owner.publish();
              transfer(amtOtC, tokenOtC).to(Owner);     // returns Owner's funds back to Owner on timeout (i.e. default) from Counterparty
              each([Owner, Ctpy], () => interact.seeTimeout());
              // default event
              commit();
              Owner.interact.checkBal(balance(tokenOtC));
              //exit();
        });
        transfer(amtCtO, tokenCtO).to(Owner);   // if lockPrincipal == true then could delay this transfer out of the contract escrow until the last payment / cash flow
        transfer([ [amtOtC, tokenOtC] ]).to(Ctpy);
        // executed event here
        //each([Owner, Ctpy], () => interact.seeTransfer());
        commit();

    } else { // the counterparty did not accept - the owner will have to find another willing counterparty to trade with in the market
        Announcer.contractEnd(true)
        // terminate contract
        commit();
        exit();
    }
    
    Ctpy.publish(); // need this publish and commit here for time being
    
    Announcer.contractEnd(true);

    //commit();
    //Owner.publish();
    commit();

    exit();
});    