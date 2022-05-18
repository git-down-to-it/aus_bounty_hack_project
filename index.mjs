import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib({
    REACH_CONNECTOR_MODE: 'ALGO',   // here for Bounty Hack requirements but of course could be ETH or CFX
    WBTC_ID: 1,     // need this to hold common id for both participants to refer to the same tokens when it comes to swapping the wBTC token
    WETH_ID: 2      // similarly, this is needed for wETH
});

const MICRO_UNITS = 1000000;
const convertToMicroUnits = (amt) => Math.round(amt * MICRO_UNITS);
const convertFromMicroUnits = (amt) => amt / MICRO_UNITS;

const startingBalance = stdlib.parseCurrency(1000);
const acc = await stdlib.newTestAccount(startingBalance);    // set up new test account for network (on ALGO) for each participant                                                           

const getTok = (sym) => {
    if (sym == 'wBTC') {
        return process.env.WBTC_ID;
    } else {
        return process.env.WETH_ID;
    }
};

const getSym = (id) => {
    if (id == process.env.WBTC_ID) {
        return 'wBTC';
    } else {
        return 'wETH';
    }
};

console.log(`LAUNCHING: OTC cross-cryptocurrency swap trading DApp...\n\n` +
            `<Connected to: ${stdlib.connector} devnet>`);

const isOwner = await ask.ask(
    `\nNew Trade Request\n` +
    `Do you want to: initiate a new quote? [y] or accept an active quote? [n]`,
    ask.yesno
);
const who = isOwner ? `Owner` : 'Ctpy';

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (p) => fmt(await stdlib.balanceOf(p));
const get_wBTC_Balance = async (p) => fmt(await stdlib.balanceOf(p, process.env.WBTC_ID));
const get_wETH_Balance = async (p) => fmt(await stdlib.balanceOf(p, process.env.WETH_ID));
const connector_before = await getBalance(acc);
var wBTC_before_Owner = 0;
var wETH_before_Owner = 0;
var wBTC_before_Ctpy = 0;
var wETH_before_Ctpy = 0;

let ctc = null;
if (isOwner) {
    console.log(`\nYour ${stdlib.connector} balance is ${await getBalance(acc)}`);
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
        console.log(`\nThe new trade quote's underlying smart contract has been deployed as = ${JSON.stringify(info)}`); 
    });
    // const accCreator = await stdlib.newTestAccount(startingBalance);
    const wBTC = await stdlib.launchToken(acc, "wBTC", "wBTC"); /* ASA token representing 'wrapped' BTC launched (this is for testing purposes; 
                                                                         we assume that both participants have a holding which is needed for the 
                                                                        cross-cryptocurrency swap contract) */
    const wETH = await stdlib.launchToken(acc, "wETH", "wETH"); /* ASA token representing 'wrapped' ETH launched (this is for testing purposes; 
                                                                        we assume that both participants have a holding which is needed for the 
                                                                        cross-cryptocurrency swap contract) */

    // the choices of wrapped BTC and ETH are deliberate as the project is meant to mimic the first (?) cross-cryptocurrency swap contract executed by Babel Finance (see https://babel.finance/notice-detail.html?id=8)
    // this project showcases how this swap could effectively have been executed on-chain                                                                        
    
    process.env.WBTC_ID = wBTC.id;
    process.env.WETH_ID = wETH.id;
    await acc.tokenAccept(process.env.WBTC_ID);
    await acc.tokenAccept(process.env.WETH_ID);
    /*await wBTC.mint(acc, convertToMicroUnits(5000));
    await wETH.mint(acc, convertToMicroUnits(50000));*/
    wBTC_before_Owner = (await get_wBTC_Balance(acc))+5000;
    wETH_before_Owner = (await get_wETH_Balance(acc))+50000;
    console.log(`Your wBTC balance is ${wBTC_before_Owner}`);
    console.log(`Your wETH balance is ${wETH_before_Owner}`);
} else {
    console.log(`\nYour ${stdlib.connector} balance is ${await getBalance(acc)}`);
    console.log(`Your wBTC balance is 5000\nYour wETH balance is 50000`)
    const info = await ask.ask(
        `\nPlease enter the active quote's underlying smart contract address`,
        JSON.parse
    );
    ctc = acc.contract(backend, info);  
}

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
        console.log(`\n<!> Trade has been successfully executed!  [Ntime: ${when}]\n`)
    } else {
        console.log(`\n<!> Trade execution has failed, due to default on initial exchange of principal [Ntime: ${when}]\n` +
                    `Any principal amounts deposited within the timeout limit will be returned\n` +
                    `This quote will be withdrawn from the market and smart contract terminated...`)
    }
};
announceEvent.executed.monitor(eventExecuted); 

const eventDefault = ({ when, what }) => {   
    console.log(`\n<!> A default on payment has occurred [Ntime: ${when}]\n` +
                `Defaulting party: ${stdlib.formatAddress(what)}\n` +
                `This contract will now follow standard default procedures and the smart contract will be terminated...`)
    
};
announceEvent.default.monitor(eventDefault);

const interact = {};

if (isOwner) {
    // 'ask' for the two tokens/currencies being swapped in the contract
    const Owner_lend_token_str = await ask.ask(     
        `\nSet swap tokens:\nPlease enter the token you wish to lend`   // set to 'wBTC'
    );
    const Owner_lend_token_id = getTok(Owner_lend_token_str);

    const Ctpy_lend_token_str = await ask.ask(      
        `\nPlease enter the token you wish to borrow`   // set to 'wETH'
    );
    const Ctpy_lend_token_id = getTok(Ctpy_lend_token_str);

    // ask for the freq and number of payments
    const term = await ask.ask(
        `\nSet contract term:\nPlease enter the duration of the swap contract (in years)` // set to 2
    );

    // ask for the freq and number of payments
    const freq = await ask.ask(
        `\nSet interest payment frequency:\nPlease enter the number of interest payment per year` // set to 4 (i.e. quarterly)
    );

    const amt = await ask.ask(
        `\nPlease enter the principal amount being loaned (in units of ${Owner_lend_token_str})`,  // set to ~1,684 (representing ~50m USD equivalent as at 15/05/2022)
        stdlib.parseCurrency
    );

    console.log(`\nApplying standard settings for payment timeout limits, haircut on default and principal locking...\n` +
                `Fetching fair value pricing...`);

    // default: haircut, lockPrincipal, timeouts
    // assumed pricing: spot exchange rate, swap rates
    const spot = 1472112471;   // = 14.72112471 * 10 ^ 8 => 1 BTC = ~14 ETH, as at 15/05/2022
    const haircut = 15;
    const lock = false;
    interact.setInitTerms = (info) => {
        const getTerms = {'acceptedStatus': false,
                          'defaultStatus': false,
                          'principalTimeoutLimit': 10,
                          'interestTimeoutLimit': 10,
                          'token_Owner_borrow_Ctpy_lend': Ctpy_lend_token_id,      // should be wETH.id
                          'token_Owner_lend_Ctpy_borrow': Owner_lend_token_id,  // should be wBTC.id
                          'termToMaturity': term,    
                          'pmtFrequency': freq,   
                          'totalNumPmts': ((term * freq)+1),  // might need to experiment with this
                          'prevPmt': 0,
                          'nextPmt': 1,
                          'contractAddress': stdlib.formatAddress(info),  
                          'ownerAddress': stdlib.formatAddress(acc.getAddress()),
                          'ctpyAddress': stdlib.formatAddress('0x'),      // dummy 'empty' address for initialisation - before ctpy is confirmed (need to fix this to work for ALGO & ETH)
                          'principalAmtOwner': amt,
                          'spotExchangeRate': spot,     // rate * 10 ^ 18, so can pass a
                          'principalAmtCtpy': stdlib.bigNumberify(amt * spot),
                          'swapRateOwnerPay': 44683,    // = 4.4683% rate * 10 ^ 4, so can pass a % with up to 4 dp to backend which can only handle integers. this will be scaled back in frontend accordingly.
                          'swapRateCtpyPay': 9212,     // = 0.9212% rate * 10 ^ 4, so can pass a % with up to 4 dp to backend which can only handle integers. this will be scaled back in frontend accordingly.
                          'lockPrincipal': lock,
                          'haircut': haircut};
        return getTerms;
    };
    interact.getSwap = async () => {
        let currTradeState = await viewTrade.read();
        // calculate interest payable by owner to counterparty (result scaled up to an UInt from 6 d.p.) i.e. will be in microunits
        const intPayOtC = Math.round((currTradeState[1].principalAmtCtpy / 100000000) * (Math.E ** (((currTradeState[1].swapRateOwnerPay) / 1000000) * (1 / (currTradeState[1].pmtFrequency))) - 1));
        // calculate interest payable by counterparty to owner (result scaled up to an UInt from 6.p.) i.e. will be in microunits
        const intPayCtO = Math.round(1000000 * (currTradeState[1].principalAmtOwner / 1000000) * (Math.E ** (((currTradeState[1].swapRateCtpyPay) / 1000000) * (1 / (currTradeState[1].pmtFrequency))) - 1));
        const tokOBCL = currTradeState[1].token_Owner_borrow_Ctpy_lend;
        const tokOLCB = currTradeState[1].token_Owner_lend_Ctpy_borrow;
        const pOwner = Math.round((currTradeState[1].principalAmtOwner));
        const pCtpy = Math.round(((currTradeState[1].principalAmtCtpy) / 100000000));
        const payNum = currTradeState[1].prevPmt;
        const pTime = currTradeState[1].principalTimeoutLimit;
        const iTime = currTradeState[1].interestTimeoutLimit;
        const totPayNum = currTradeState[1].totalNumPmts;
        const                         [pmtNum,              amtOtC,               amtCtO,  time, tokenOtC, tokenCtO] =
                        payNum == 0 ? [payNum,              pOwner,                pCtpy, pTime, tokOLCB,   tokOBCL] :
            payNum == (totPayNum-1) ? [payNum, (pCtpy + intPayOtC), (pOwner + intPayCtO), pTime, tokOBCL,   tokOLCB] :
            /* interest pmts only */  [payNum,           intPayOtC,            intPayCtO, iTime, tokOBCL,   tokOLCB]

        //const [tokenOtC, amtOtC, tokenCtO, amtCtO, time] = [process.env.WBTC_ID,1,process.env.WETH_ID,13,5];
        const msgOwner = 
                            payNum == 0 ? `\nSwap payment due. Payment Type: Initial exchange of principal\n\n` :
              payNum == (totPayNum-1) ? `\nSwap payment due. Payment Type: Final exchange of principal and interest\n\n` :
                 /* interest pmts only */ `\nSwap payment due. Payment Type: Exchange of interest\n\n`
        console.log(`${msgOwner}` +
                    `Owner pays ${(amtOtC / 1000000)} (${getSym(tokenOtC)}) => Counterparty\n` +    // need to figure a way to convert back from id to sym
                    `Owner receives ${((amtCtO) / 1000000)} (${getSym(tokenCtO)}) <= Counterparty\n` +    // need to figure a way to convert back from id to sym
                    `Timeout limit set to: ${time}\n\n` +
                    `Sending payment to smart contract escrow...\n` +
                    `Waiting for Counterparty payment to contract escrow...`);
        return [pmtNum, amtOtC, amtCtO, time];
    };
} else {
  interact.passAddr = acc.getAddress();
  interact.getTokenIds = async (wETHid,wBTCid) => {
    process.env.WBTC_ID = wBTCid;
    process.env.WETH_ID = wETHid;
    await acc.tokenAccept(process.env.WBTC_ID);
    await acc.tokenAccept(process.env.WETH_ID);
  };
  interact.acceptTrade = async () => {
    const accept = await ask.ask(
        `\nDo you accept these terms? [y/n]`,
        ask.yesno
    ); 
    return accept;
  };
  interact.accSwap = async (pmtNum, amtOtC, amtCtO, time) => {
      // try do a balance check here for Owner to see if any funds have moved
      let currTradeState = await viewTrade.read();
      const totPayIndex = currTradeState[1].totalNumPmts;
      const tok_wBTC = currTradeState[1].token_Owner_lend_Ctpy_borrow;
      const tok_wETH = currTradeState[1].token_Owner_borrow_Ctpy_lend;
      const msgCtpy =
                          pmtNum == 0 ? `\nSwap payment due. Payment Type: Initial exchange of principal\n\n` :
            pmtNum == (totPayIndex-1) ? `\nSwap payment due. Payment Type: Final exchange of principal and interest\n\n` :
                      /* interest only */ `\nSwap payment due. Payment Type: Exchange of interest\n\n`
      const confirmSwap = await ask.ask(
        `${msgCtpy}` +
        `Counterparty pays ${(amtCtO / 1000000)} (${getSym((pmtNum == 0) ? tok_wETH : tok_wBTC)}) => Owner\n` +    
        `Counterparty receives ${(amtOtC / 1000000)} (${getSym((pmtNum == 0) ? tok_wBTC : tok_wETH)}) <= Owner\n` +    
        `Timeout limit set to: ${time}\n\n` +
        `Before proceeding ensure sufficient funds are available for payment to the swap within the timeout limit\n` +
        `Enter 'y' to confirm and send funds to the smart contract escrow and settle the swap payment...`,
        ask.yesno
      );
      if (pmtNum==0) {
      wBTC_before_Ctpy = await get_wBTC_Balance(acc);
      wETH_before_Ctpy = await get_wETH_Balance(acc);
      }
      return confirmSwap;
  };
}

interact.seeState = async (first) => {
    let currTradeState = await viewTrade.read();
    const anyCtpyAddr = (currTradeState[1].acceptedStatus==false) ? `<n/a - waiting for counterparty to accept>` : stdlib.formatAddress(currTradeState[1].ctpyAddress);
    const footer = (first == true) ? `\n\nTrade terms have been set\n\nWaiting for counterparty to accept...` : `\n`
    console.log(`\nCurrent state of the swap contract:\n\n` +
                `Accepted Status:                   ${currTradeState[1].acceptedStatus}\n` +
                `Default Status:                    ${currTradeState[1].defaultStatus}\n` +
                `Payment Timeout Limit (Principal): ${currTradeState[1].principalTimeoutLimit}\n` +
                `Payment Timeout Limit (Interest):  ${currTradeState[1].interestTimeoutLimit}\n` +
                `Owner Borrow / Counterparty Lend:  ${getSym(currTradeState[1].token_Owner_borrow_Ctpy_lend)}\n` +  
                `Owner Lend / Counterparty Borrow:  ${getSym(currTradeState[1].token_Owner_lend_Ctpy_borrow)}\n` +  
                `Term to Maturity (years):          ${currTradeState[1].termToMaturity}\n` +
                `Payment Frequency (per year):      ${currTradeState[1].pmtFrequency}\n` +
                `Total Number of Payments:          ${currTradeState[1].totalNumPmts}\n` +
                `Previous Payment Index:            ${currTradeState[1].prevPmt}\n` +
                `Next Payment Index:                ${currTradeState[1].nextPmt}\n` +
                `Contract Address:                  ${stdlib.formatAddress(currTradeState[1].contractAddress)}\n` +    
                `Owner Address:                     ${stdlib.formatAddress(currTradeState[1].ownerAddress)}\n` +
                `Counterparty Address:              ${anyCtpyAddr}\n` +
                `Principal Amt (Owner):             ${convertFromMicroUnits(currTradeState[1].principalAmtOwner)}\n` +
                `Spot Exchange Rate:                ${currTradeState[1].spotExchangeRate / 100000000}\n` +
                `Principal Amt (Counterparty):      ${convertFromMicroUnits(currTradeState[1].principalAmtCtpy) / 100000000}\n` +
                `Swap Rate - Owner Pays (%):        ${currTradeState[1].swapRateOwnerPay / 10000}\n` +
                `Swap Rate - Counterparty Pays (%): ${currTradeState[1].swapRateCtpyPay / 10000}\n` +
                `Principal Lock:                    ${currTradeState[1].lockPrincipal}\n` +
                `Haircut (%):                       ${currTradeState[1].haircut}` +
                `${footer}`);
};

interact.seeTransfer = () => {
    console.log(`\nTransfer was successful!\n`)  // flesh out
};

const part = isOwner ? ctc.p.Owner : ctc.p.Ctpy;
await part(interact);

const connector_after = await getBalance(acc);
const delta_connector = connector_after - connector_before;
const wBTC_after = await get_wBTC_Balance(acc);
const wETH_after = await get_wETH_Balance(acc);
console.log(`\nYour ${stdlib.connector} balance is ${connector_after} (Delta: ${delta_connector})`);
console.log(`Your wBTC balance is ${wBTC_after} (Delta: ${(((isOwner) ? (wBTC_after - wBTC_before_Owner + 5000) : (wBTC_after - wBTC_before_Ctpy)))})`);
console.log(`Your wETH balance is ${wETH_after} (Delta: ${(((isOwner) ? (wETH_after - wETH_before_Owner + 50000) : (wETH_after - wETH_before_Ctpy) ))})`);

ask.done();