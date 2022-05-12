import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib({
    REACH_CONNECTOR_MODE: 'ALGO',   // here for Bounty Hack requirements but of course could be ETH or CFX
});

const MICRO_UNITS = 1000000;
const convertToMicroUnits = (amt) => Math.round(amt * MICRO_UNITS);
const convertFromMicroUnits = (amt) => amt / MICRO_UNITS;

console.log(`LAUNCHING: OTC cross-cryptocurrency swap trading DApp...\n\n` +
            `<Connected to: ${stdlib.connector} devnet>`);

const isOwner = await ask.ask(
    `\nNew Trade Request\n` +
    `Do you want to: initiate a new quote? [y] or accept an active quote? [n]`,
    ask.yesno
);
const who = isOwner ? `Owner` : 'Ctpy';

let acc = null;
acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));  // set up new test account for network (on ALGO) for each participant

const wBTC = await stdlib.launchToken(acc, "wBTC", "wBTC")   /* ASA token representing BTC launched (this is for testing purposes; 
                                                              we assume that both participants have a holding which is needed for the 
                                                              cross-cryptocurrency swap contract) */

const wETH = await stdlib.launchToken(acc, "wETH", "wETH")   /* ASA token representing ETH launched (this is for testing purposes; 
                                                              we assume that both participants have a holding which is needed for the 
                                                              cross-cryptocurrency swap contract) */                                                            

// the choices of wrapped BTC and ETH are deliberate as the project is meant to mimic the first (?) cross-cryptocurrency swap contract executed by Babel Finance (see https://babel.finance/notice-detail.html?id=8)
// this project showcases how this swap could effectively have been executed on-chain

let ctc = null;
if (isOwner) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
        console.log(`\nThe new trade quote's underlying smart contract has been deployed as = ${JSON.stringify(info)}`); 
    });
} else {
    const info = await ask.ask(
        `\nPlease enter the active quote's underlying smart contract address`,
        JSON.parse
    );
    ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));
const get_wBTC_Balance = async () => fmt(await stdlib.balanceOf(acc, wBTC.id));
const get_wETH_Balance = async () => fmt(await stdlib.balanceOf(acc, wETH.id));

const before = await getBalance();
const before_wBTC = await get_wBTC_Balance();
const before_wETH = await get_wETH_Balance();
console.log(`\nYour ${stdlib.connector} balance is ${before}`);
console.log(`Your wBTC balance is ${before_wBTC}`);
console.log(`Your wETH balance is ${before_wETH}`);

const viewTrade = ctc.v.TradeState;

const announceEvent = ctc.e.Announcer;
const eventAccepted = ({ when, what }) => {
    const [hasAccepted, who] = what;
    if (hasAccepted) {     
        console.log(`\n<!> Trade terms have been accepted!  [Ntime: ${when}]\n` +
                    `Accepted By: ${stdlib.formatAddress(who)}\n` + 
                    `Awaiting exchange of initial principal to complete trade execution...`)
    } else {
        console.log(`\n<!> Trade terms have been rejected... [Ntime: ${when}]\n` +
                    `This quote will be withdrawn from the market and smart contract terminated...`)
    }
};
announceEvent.accepted.monitor(eventAccepted);

const eventCtcEnd = ({ when, what }) => {
    if (what) {     
        console.log(`\n<!> End of Contract [Ntime: ${when}]`)
    }
};
announceEvent.contractEnd.monitor(eventCtcEnd);

const eventExecuted = ({ when, what }) => {
    if (what) {     
        console.log(`\n<!> Trade has been successfully executed!  [Ntime: ${when}]\n` +
                    `See below for final trade confirmation details...`)
    } else {
        console.log(`\n<!> Trade execution has failed, due to default on initial exchange of principal\n` +
                    `Any principal amounts deposited within the timeout limit will be returned\n` +
                    `This quote will be withdrawn from the market and smart contract terminated...`)
    }
};
announceEvent.executed.monitor(eventExecuted); 

const eventDefault = ({ when, what }) => {  // to be edited for default process
    if (what) {     
        console.log(`\n<!> End of Contract [Ntime: ${when}]`)
    }
};
announceEvent.default.monitor(eventDefault);

const interact = {};

if (isOwner) {
    // 'ask' for the two tokens/currencies being swapped in the contract
    const Owner_lend_token = await ask.ask(     // have something here to map to token objects created above ... if you have time
        `\nSet swap tokens:\nPlease enter the token you wish to lend`   // set to 'wBTC'
    );

    const Ctpy_lend_token = await ask.ask(      // have something here to map to token objects created above ... if you have time
        `\nPlease enter the token you wish to borrow`   // set to 'wETH'
    );

    // ask for the freq and number of payments
    const term = await ask.ask(
        `\nSet contract term:\nPlease enter the duration of the swap contract (in years)` // set to 2
    );

    // ask for the freq and number of payments
    const freq = await ask.ask(
        `\nSet interest payment frequency:\nPlease enter the number of interest payment per year` // set to 4 (i.e. quarterly)
    );

    const amt = await ask.ask(
        `\nPlease enter the principal amount being loaned (in units of ${Owner_lend_token})`,  // set to ~1,226.06807081 (representing ~50m USD equivalent)
        stdlib.parseCurrency
    );

    console.log(`\nApplying standard settings for payment timeout limits, haircut on default and principal locking...\n` +
                `Fetching fair value pricing...`);

    // default: haircut, lockPrincipal, timeouts
    // assumed pricing: spot exchange rate, swap rates
    const spot = 13;   // 1 BTC = ~13 ETH
    interact.setInitTerms = (info) => {
        const getTerms = {'acceptedStatus': false,
                          'defaultStatus': false,
                          'principalTimeoutLimit': 100,
                          'interestTimeoutLimit': 200,
                          'token_Owner_borrow_Ctpy_lend': wETH.id,
                          'token_Owner_lend_Ctpy_borrow': wBTC.id,
                          'termToMaturity': term,    
                          'pmtFrequency': freq,   
                          'totalNumPmts': ((term * freq)+1),  // might need to experiment with this
                          'prevPmt': 0,
                          'nextPmt': 1,
                          'contractAddress': stdlib.formatAddress(info),  
                          'ownerAddress': stdlib.formatAddress(acc.getAddress()),
                          'ctpyAddress': stdlib.formatAddress('0x'),      // dummy 'empty' address for initialisation - before ctpy is confirmed (need to fix this to work for ALGO & ETH)
                          'principalAmtOwner': amt,
                          'spotExchangeRate': spot,
                          'principalAmtCtpy': stdlib.bigNumberify(amt * spot),
                          'swapRateOwnerPay': 1, 
                          'swapRateCtpyPay': 2, 
                          'lockPrincipal': false,
                          'haircut': 15};
        return getTerms;
    };
    interact.isInitialised = () => {
        console.log(`\nTrade terms have been set\n\n` +
                    `Waiting for counterparty to accept...`)
    };
    interact.getSwap = () => {
        //let currTradeState = await viewTrade.read();
        //[ tokenOtC, amtOtC, tokenCtO, amtCtO, time ]
        //prevPmt, nextPmt, totalPmts, token_Owner_lend_Ctpy_borrow, token_Owner_borrow_Ctpy_lend, principalAmtOwner, principalAmtCtpy
        //swapRateOwner, swapRateCtpy, spotExchRate, timeouts, ...
        const [tokenOtC, amtOtC, tokenCtO, amtCtO, time] = [wBTC.id,1,wETH.id,13,100];
        console.log(`\nSwap payment due. Payment Type: Initial exchange of principal\n\n` +
                    `Owner pays ${amtOtC} (${tokenOtC}) => Counterparty\n` +    // need to figure a way to convert back from id to sym
                    `Owner receives ${amtCtO} (${tokenCtO}) <= Counterparty\n` +    // need to figure a way to convert back from id to sym
                    `Timeout limit set to: ${time}\n\n` +
                    `Sending payment to smart contract escrow...\n` +
                    `Waiting for Counterparty payment to contract escrow...`);
        return [tokenOtC, amtOtC, tokenCtO, amtCtO, time];
    };
} else {
  interact.passAddr = acc.getAddress();
  interact.acceptTrade = async () => {
    const accept = await ask.ask(
        `\nDo you accept these terms? [y/n]`,
        ask.yesno
    );
    return accept;
    if (!accept) {
        process.exit(0);
    }
  };
  interact.accSwap = async (tokenOtC, amtOtC, tokenCtO, amtCtO, time) => {
      const confirmSwap = await ask.ask(
        `\nSwap payment due. Payment Type: Initial exchange of principal\n\n` +
        `Counterparty pays ${amtCtO} (${tokenCtO}) => Owner\n` +    // need to figure a way to convert back from id to sym
        `Counterparty receives ${amtOtC} (${tokenOtC}) <= Owner\n` +    // need to figure a way to convert back from id to sym
        `Timeout limit set to: ${time}\n\n` +
        `Before proceeding ensure sufficient funds are available for payment to the swap within the timeout limit\n` +
        `Enter 'y' to confirm and send funds to the smart contract escrow and settle the swap payment...`,
        ask.yesno
      );
      return confirmSwap;
  };
}

interact.seeState = async () => {
    let currTradeState = await viewTrade.read();
    console.log(`\nCurrent state of the swap contract:\n\n` +
                `Accepted Status:                   ${currTradeState[1].acceptedStatus}\n` +
                `Default Status:                    ${currTradeState[1].defaultStatus}\n` +
                `Payment Timeout Limit (Principal): ${currTradeState[1].principalTimeoutLimit}\n` +
                `Payment Timeout Limit (Interest):  ${currTradeState[1].interestTimeoutLimit}\n` +
                `Owner Borrow / Counterparty Lend:  ${currTradeState[1].token_Owner_borrow_Ctpy_lend.sym}\n` +  // need to figure a way to convert back from id to sym
                `Owner Lend / Counterparty Borrow:  ${currTradeState[1].token_Owner_lend_Ctpy_borrow.sym}\n` +  // need to figure a way to convert back from id to sym
                `Term to Maturity (years):          ${currTradeState[1].termToMaturity}\n` +
                `Payment Frequency (per year):      ${currTradeState[1].pmtFrequency}\n` +
                `Total Number of Payments:          ${currTradeState[1].totalNumPmts}\n` +
                `Previous Payment Index:            ${currTradeState[1].prevPmt}\n` +
                `Next Payment Index:                ${currTradeState[1].nextPmt}\n` +
                `Contract Address:                  ${stdlib.formatAddress(currTradeState[1].contractAddress)}\n` +    
                `Owner Address:                     ${stdlib.formatAddress(currTradeState[1].ownerAddress)}\n` +
                `Counterparty Address:              ${stdlib.formatAddress(currTradeState[1].ctpyAddress)}\n` +
                `Principal Amt (Owner):             ${convertFromMicroUnits(currTradeState[1].principalAmtOwner)}\n` +
                `Spot Exchange Rate:                ${currTradeState[1].spotExchangeRate}\n` +
                `Principal Amt (Counterparty):      ${convertFromMicroUnits(currTradeState[1].principalAmtCtpy)}\n` +
                `Swap Rate - Owner Pays (%):        ${currTradeState[1].swapRateOwnerPay}\n` +
                `Swap Rate - Counterparty Pays (%): ${currTradeState[1].swapRateCtpyPay}\n` +
                `Principal Lock:                    ${currTradeState[1].lockPrincipal}\n` +
                `Haircut (%):                       ${currTradeState[1].haircut}`);
};

/*interact.seeTransfer = () => {
    console.log(`Transfer was successful`)  // flesh out
};
interact.seeTimeout = () => {
    console.log(`Timeout occurred`)     // flesh out
};*/

const part = isOwner ? ctc.p.Owner : ctc.p.Ctpy;
await part(interact);

const after = await getBalance();
const after_wBTC = await get_wBTC_Balance();
const after_wETH = await get_wETH_Balance();
console.log(`\nYour ${stdlib.connector} balance is ${after}`);
console.log(`Your wBTC balance is ${after_wBTC}`);
console.log(`Your wETH balance is ${after_wETH}`);

ask.done();