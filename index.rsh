'reach 0.1';

const tradeTerms = Struct([
         ['accepted', Bool],
         ['owner', Address],
         ['ctpy', Address],
         ['principalAmtOwner', UInt]
]);

const CommonInteract = {
    getTradeState: Fun([], Null)
};

export const main = Reach.App(() => {
    
    // define 'owner' or initiating participant that deploys the swap derivative smart contract
    const Owner = Participant('Owner', {
        ...CommonInteract,
        initTerms: Tuple(UInt), // array containing all the terms and their initial values set by the contract owner / initiator
        setInitTerms: Fun([Tuple(UInt)], Null), // function to create instance of 'tradeTerms' structure that maintains the terms of the swap contract
        isInitialised: Fun([], Null)
    });

    // define counterparty participant agreeing and attaching to the contract
    const Ctpy = Participant('Ctpy', {
        ...CommonInteract,
        acceptTrade: Fun([Tuple(UInt)], Null),   // function that updates tradeTerms field 'accepted' to true and 'ctpy' to ctpy address reflecting that the ctpy has accepted the trade
        confirmAccept: Fun([], Null)
    });

    const tradeState = View('TradeState', {
        read: tradeTerms
    });

    init();

    Owner.only(() => {
        const initTerms = declassify(interact.initTerms);   // declassify the initial terms of the swap contrac the owner has chosen
        interact.setInitTerms(initTerms);   // create instance of 'tradeTerms' structure and set values for fields (terms)
    });
    Owner.publish(initTerms);
    commit();

    Owner.interact.isInitialised();

    Ctpy.interact.getTradeState();

    Ctpy.only(() => {
        interact.acceptTrade(initTerms);
    });
    Ctpy.publish();
    commit();

    each([Owner,Ctpy], () => {
        interact.getTradeState();
    });

    exit();
});    