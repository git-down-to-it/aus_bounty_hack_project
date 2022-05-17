'reach 0.1';

// Cross-cryptocurrency swap derivative contract trading DApp - smart contract backend

// define common interact 
const CommonInteract = {
    seeState: Fun([Bool], Null), // function where both participants can view the current state of the swap contract, bool is true if this is the first view (i.e. when terms are first set)
    seeTransfer: Fun([], Null),
    checkBal: Fun([Token], Null)
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
        getSwap: Fun([], Tuple(UInt, UInt, UInt, UInt)),
    });

    // define counterparty participant attaching to the contract
    const Ctpy = Participant('Ctpy', {
        ...CommonInteract,
        acceptTrade: Fun([], Bool),   // function that returns true if ctpy accepts the trade
        passAddr: Address,
        accSwap: Fun([UInt, UInt, UInt, UInt], Bool),
        getTokenIds: Fun([Token, Token], Null)  // function only required for ctpy frontend for testing purposes with non-network tokens
    });

    const testTokenCreator = Participant('Creator', {});    // token creator participant only required for testing purposes with non-network tokens

    // define announcer object to track and announce key events
    const Announcer = Events('Announcer', {
        accepted: [Bool, Address],    // announces that the trade terms have been accepted or rejected
        executed: [Bool],    // announces that trade execution has succeeded or failed
        default: [Address], // will announce that a default has occurred and who the defaulting participant is
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
        const tokenOBCL = initTerms.token_Owner_borrow_Ctpy_lend;
        const tokenOLCB = initTerms.token_Owner_lend_Ctpy_borrow;
        check(tokenOBCL != tokenOLCB);
    });
    Owner.publish(initTerms, tokenOBCL, tokenOLCB);
    
    // initialise Trade State view object to show terms set out by the owner upon deployment
    tradeState.read.set(    
        tradeTerms.fromObject(initTerms)
    );
    commit();

    // interact call here confirms to owner what the terms of the cross-cryptocurrency swap contract are initially set to upon deployment, and waiting for counterparty
    Owner.interact.seeState(true);

    // first local step by contract Counterparty
    Ctpy.only(() => {
        interact.getTokenIds(tokenOBCL, tokenOLCB); // only required for testing with non-network tokens
        interact.seeState(false);
        const resp = declassify(interact.acceptTrade());   // the attaching participant has to decide whether they will accept the terms of the trade (as the counterparty)
        const ctpyAddr = declassify(interact.passAddr); // could change this to separate local step so that ctpy doesn't give up their address unless they actually want to accept
    });
    Ctpy.publish(resp, ctpyAddr);
    
    Announcer.accepted(resp, ctpyAddr);

    // comment?
    if (resp) {
        commit();
        /*testTokenCreator.only(() =>{
            const tokenOBCL = initTerms.token_Owner_borrow_Ctpy_lend;
            const tokenOLCB = initTerms.token_Owner_lend_Ctpy_borrow;
            check(tokenOBCL != tokenOLCB); });
        testTokenCreator.publish(tokenOBCL, tokenOLCB); // need to publish already declared variables?
        require(tokenOBCL != tokenOLCB);
        commit();*/
        // send non-network tokens to Ctpy from 'creator' account so they can be used in the swaps (owner mints balances in each non-network token in frontend so doesn't need any transfers) 
        // for testing purposes only - on TestNet/MainNet the participants would need sufficient balances in the tokens prior with appropriate ASA ids to the trade
        testTokenCreator.pay([[50000, tokenOBCL]]); // send 50k of created wETH tokens to contract
        commit();
        testTokenCreator.pay([[5000, tokenOLCB]]);  // send 5k of created wBTC tokens to contract
        // check contact balance >= transferAmt
        transfer(50000, tokenOBCL).to(Ctpy);
        transfer(5000, tokenOLCB).to(Ctpy);
        commit();
        Ctpy.publish();

        // update trade state view based on ctpy response
        const acceptedTerms = {...initTerms,acceptedStatus:resp,ctpyAddress:ctpyAddr};
        tradeState.read.set(
            tradeTerms.fromObject(acceptedTerms)
        );
        commit();
        each([Owner,Ctpy], () => {  // both participants view the state of the swap contract
            interact.seeState(false);
        });
        //commit();
        /*const totalPmts = acceptedTerms.totalNumPmts;
        const [updatedState, inDefault, nextPmt] = parallelReduce([acceptedTerms, false, 1])
          .define(() => {
            tradeState.read.set(
                tradeTerms.fromObject(updatedState)
            );
          })
          .invariant(balance()=0)   // for time being - not sure what else to put
          .while(!inDefault && (nextPmt <= totalPmts))
          .case(Owner,
            (() => ({*/ // atomic swap code
                    Owner.only(() => {
                        const [ pmtNum, amtOtC, amtCtO, time ] = declassify(interact.getSwap());    // get swap payment details from the frontend
                        check((pmtNum>0) && (amtOtC>0) && (amtCtO>0) && (time>0)); });
                    Owner.publish(pmtNum, amtOtC, amtCtO, time); 
                    require((pmtNum>0) && (amtOtC>0) && (amtCtO>0) && (time>0));    
                                                  /* tokenOtC, tokenCTO */
                    const tokenLookUp = {'first' : [tokenOLCB, tokenOBCL],
                                         'rest' :  [tokenOBCL, tokenOLCB]}
                    commit();
                    Owner.pay([[amtOtC,((pmtNum==0) ? tokenLookUp.first[0] : tokenLookUp.rest[0])]])
                    /*if (pmtNum == 0) {
                        commit();
                        Owner.pay([ [amtOtC, tokenOLCB] ]);
                    } else {
                        commit();
                        Owner.pay([ [amtOtC, tokenOBCL] ]);
                    }*/
                    // what about default by Owner? (I guess you can have a check somewhere that ensures Owner has sufficient balance?...)
                    commit();
                    /*Owner.interact.checkBal(tokenOLCB);
                    Owner.interact.checkBal(tokenOBCL);*/

                    Ctpy.only(() => {
                        const bwhen = declassify(interact.accSwap(pmtNum, amtOtC, amtCtO, time)); });
                    Ctpy.publish(bwhen);
                    commit();
                    Ctpy.pay([ [amtCtO, ((pmtNum==0) ? tokenLookUp.first[1] : tokenLookUp.rest[1])] ])
                            .when(bwhen)
                            .timeout(relativeTime(time), () => {
                                Owner.publish();
                                transfer(amtOtC, ((pmtNum==0) ? tokenLookUp.first[0] : tokenLookUp.rest[0])).to(Owner);     // returns Owner's funds back to Owner on timeout (i.e. default) from Counterparty
                                Announcer.default(ctpyAddr); // default event
                                commit();
                                exit();
                    });
                    transfer(amtCtO, ((pmtNum==0) ? tokenLookUp.first[1] : tokenLookUp.rest[1])).to(Owner);   // if lockPrincipal == true then could delay this transfer out of the contract escrow until the last payment / cash flow
                    transfer([ [amtOtC, ((pmtNum==0) ? tokenLookUp.first[0] : tokenLookUp.rest[0])] ]).to(Ctpy);
                    each([Owner, Ctpy], () => interact.seeTransfer());
                    if (pmtNum == 0) {
                        Announcer.executed(true) // trade successfully executed
                    }
                    commit();
                    /*if (pmtNum == 0) {
                        commit();
                        Ctpy.pay([ [amtCtO, tokenOBCL] ])
                            .when(bwhen)
                            .timeout(relativeTime(time), () => {
                                Owner.publish();
                                transfer(amtOtC, tokenOLCB).to(Owner);     // returns Owner's funds back to Owner on timeout (i.e. default) from Counterparty
                                each([Owner, Ctpy], () => interact.seeTimeout());
                                Announcer.default(ctpyAddr); // default event
                                commit();
                                exit();
                        });
                        transfer(amtCtO, tokenOBCL).to(Owner);   // if lockPrincipal == true then could delay this transfer out of the contract escrow until the last payment / cash flow
                        transfer([ [amtOtC, tokenOLCB] ]).to(Ctpy);
                        each([Owner, Ctpy], () => interact.seeTransfer());
                        Announcer.executed(true) // trade successfully executed
                        commit();
                    } else {
                        commit();
                        Ctpy.pay([ [amtCtO, tokenOLCB] ])
                            .when(bwhen)
                            .timeout(relativeTime(time), () => {
                                Owner.publish();
                                transfer(amtOtC, tokenOBCL).to(Owner);     // returns Owner's funds back to Owner on timeout (i.e. default) from Counterparty
                                each([Owner, Ctpy], () => interact.seeTimeout());
                                Announcer.default(ctpyAddr); // default event
                                commit();
                                exit();
                        });
                        transfer(amtCtO, tokenOLCB).to(Owner);   // if lockPrincipal == true then could delay this transfer out of the contract escrow until the last payment / cash flow
                        transfer([ [amtOtC, tokenOBCL] ]).to(Ctpy);
                        each([Owner, Ctpy], () => interact.seeTransfer());
                        commit(); 
                    }
                    /*Ctpy.interact.checkBal(tokenOLCB);
                    Ctpy.interact.checkBal(tokenOBCL);
                    
            /*})),
           .timeout(DEADLINE, () => {
             TIMEOUT_BLOCK
           });*/

    } else { // the counterparty did not accept - the owner will have to find another willing counterparty to trade with in the market
        Announcer.contractEnd(true)
        // terminate contract
        commit();
        exit();
    }
    
    Ctpy.publish(); // need this publish and commit here for time being
    commit();
    Owner.publish();
    Announcer.contractEnd(true);
    commit();

    exit();
});    