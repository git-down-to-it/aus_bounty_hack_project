'reach 0.1';

const tradeTerms = {
    'accepted': Bool,
    'owner': Address,
    'ctpy': Address,
    'principalAmtOwner': UInt};

const CommonInteract = {
    getTradeState: Fun([], Null)
};

export const main = Reach.App(() => {
    
    // define 'owner' or initiating participant that deploys the swap derivative smart contract
    const Owner = Participant('Owner', {
        ...CommonInteract,
        initTerms: Fun([],tradeTerms), // array containing all the terms and their initial values set by the contract owner / initiator
        isInitialised: Fun([], Null)
    });

    // define counterparty participant agreeing and attaching to the contract
    const Ctpy = Participant('Ctpy', {
        ...CommonInteract,
        acceptTrade: Fun([Object({'accepted':Bool,'owner':Address,'principalAmtOwner':UInt})], Null),   // function that updates tradeTerms field 'accepted' to true and 'ctpy' to ctpy address reflecting that the ctpy has accepted the trade
        confirmAccept: Fun([], Null)
    });
    
    const tradeState = View('TradeState', {
        read: tradeTerms
    });

    init();

    Owner.only(() => {
        const initTerms = declassify(interact.initTerms());   // declassify the initial terms of the swap contrac the owner has chosen
    });
    Owner.publish(initTerms);
    commit();

    Owner.interact.isInitialised();

    Ctpy.publish();

    const [swapTerms] = parallelReduce([initTerms])
    .define(() => {
      
      tradeState.read.set(
        {
          ...swapTerms,
        }
      );

    })
    // .paySpec([tok])
    .invariant(balance() >= 0)
    .while(swapTerms.accepted == false)
    .case(Ctpy, (() => ({
        when: declassify(interact.acceptTerms()) })),
        (_) => {
            return [{...swapTerms,accepted:true}]
         }) 
    .timeout(20, () => {
        return [swapTerms];
    });

    //each([Owner,Ctpy], () => {
    //    interact.getTradeState(initTerms);
    //});

    exit();
});    