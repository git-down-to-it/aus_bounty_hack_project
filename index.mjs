import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

console.log(`New trade request: cross-cryptocurrency swap`);

const isOwner = await ask.ask(
    `Do you want to: initiate a quote? [y] or accept quote? [n]`,
    ask.yesno
);
const who = isOwner ? `Owner` : 'Ctpy'

let acc = null;
const createAcc = await ask.ask(
    'Would you like to: create a new account? (only on devnet) [y] or connect account from wallet? [n]',
    ask.yesno
);
if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
    const secret = await ask.ask(
        'Please enter account secret',
        (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);    // substitute in for myAlgo wallet later using mnemonic
}



let ctc = null;
if (isOwner) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
        console.log(`The trade quote's underlying smart contract has been deployed as = ${JSON.stringify(info)}`); 
    });
} else {
    const info = await ask.ask(
        `Please enter the trade quote's underlying smart contract address`,
        JSON.parse
    );
    ctc = acc.contract(backend, info);
}

// get before balances (do later)

if (isOwner) {
    const amt = await ask.ask(
        `Please enter principal amount`,
        stdlib.parseCurrency
    );
    interact.initTerms = {"accepted": false,
                         "owner": acc.getAddress(),
                         "ctpy": null,
                         "principalAmtOwner": amt};
    interact.setInitTerms = (initTerms) => {
        const terms = tradeTerms.fromTuple([initTerms['accepted'],initTerms['owner'],initTerms['ctpy'],initTerms['principalAmtOwner']])
    };
    interact.isInitialised = () => {
        console.log(`Trade terms have been set`);
    }
} else {
  interact.acceptTrade = async (initTerms) => {
    const accept = await ask.ask(
        `Do you accept these terms: ${initTerms} ? [y/n]`,
        ask.yesno
    );
    if (accept) {
        terms.accepted = true;
        terms.ctpy = acc.getAddress();
    } else {
        process.exit(0);
    }
  };
  interact.confirmAccept = () => {
    console.log(`Trade terms have been accepted by ${acc.getAddress()}`);
  };
}

interact.getTradeState = async () => {
    const state = tradeState.read();
};

const part = isOwner ? ctc.p.Owner : ctc.p.Ctpy;
await part(interact);

ask.done();