// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  return {
    Announcer: {
      accepted: [ctc0, ctc1],
      contractEnd: [ctc0],
      default: [ctc1, ctc2],
      executed: [ctc0]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Struct([['acceptedStatus', ctc1], ['defaultStatus', ctc1], ['principalTimeoutLimit', ctc2], ['interestTimeoutLimit', ctc2], ['token_Owner_borrow_Ctpy_lend', ctc2], ['token_Owner_lend_Ctpy_borrow', ctc2], ['termToMaturity', ctc2], ['pmtFrequency', ctc2], ['totalNumPmts', ctc2], ['prevPmt', ctc2], ['nextPmt', ctc2], ['contractAddress', ctc0], ['ownerAddress', ctc0], ['ctpyAddress', ctc0], ['principalAmtOwner', ctc2], ['spotExchangeRate', ctc2], ['principalAmtCtpy', ctc2], ['swapRateOwnerPay', ctc2], ['swapRateCtpyPay', ctc2], ['lockPrincipal', ctc1], ['haircut', ctc2]]);
  
  return {
    infos: {
      TradeState: {
        read: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v286] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v286, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v332, v333, v334, v335, v336, v337, v338, v339] = svs;
              return (await ((async () => {
                
                const v340 = {
                  acceptedStatus: v319,
                  contractAddress: v330,
                  ctpyAddress: v332,
                  defaultStatus: v320,
                  haircut: v339,
                  interestTimeoutLimit: v322,
                  lockPrincipal: v338,
                  nextPmt: v329,
                  ownerAddress: v331,
                  pmtFrequency: v326,
                  prevPmt: v328,
                  principalAmtCtpy: v335,
                  principalAmtOwner: v333,
                  principalTimeoutLimit: v321,
                  spotExchangeRate: v334,
                  swapRateCtpyPay: v337,
                  swapRateOwnerPay: v336,
                  termToMaturity: v325,
                  token_Owner_borrow_Ctpy_lend: v323,
                  token_Owner_lend_Ctpy_borrow: v324,
                  totalNumPmts: v327
                  };
                
                return v340;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v286, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348] = svs;
              return (await ((async () => {
                
                const v372 = {
                  acceptedStatus: true,
                  contractAddress: v330,
                  ctpyAddress: v348,
                  defaultStatus: v320,
                  haircut: v339,
                  interestTimeoutLimit: v322,
                  lockPrincipal: v338,
                  nextPmt: v329,
                  ownerAddress: v331,
                  pmtFrequency: v326,
                  prevPmt: v328,
                  principalAmtCtpy: v335,
                  principalAmtOwner: v333,
                  principalTimeoutLimit: v321,
                  spotExchangeRate: v334,
                  swapRateCtpyPay: v337,
                  swapRateOwnerPay: v336,
                  termToMaturity: v325,
                  token_Owner_borrow_Ctpy_lend: v323,
                  token_Owner_lend_Ctpy_borrow: v324,
                  totalNumPmts: v327
                  };
                
                return v372;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v286, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348, v393, v394, v395, v396, v397] = svs;
              return (await ((async () => {
                
                const v372 = {
                  acceptedStatus: true,
                  contractAddress: v330,
                  ctpyAddress: v348,
                  defaultStatus: v320,
                  haircut: v339,
                  interestTimeoutLimit: v322,
                  lockPrincipal: v338,
                  nextPmt: v329,
                  ownerAddress: v331,
                  pmtFrequency: v326,
                  prevPmt: v328,
                  principalAmtCtpy: v335,
                  principalAmtOwner: v333,
                  principalTimeoutLimit: v321,
                  spotExchangeRate: v334,
                  swapRateCtpyPay: v337,
                  swapRateOwnerPay: v336,
                  termToMaturity: v325,
                  token_Owner_borrow_Ctpy_lend: v323,
                  token_Owner_lend_Ctpy_borrow: v324,
                  totalNumPmts: v327
                  };
                
                return v372;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v286, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348, v393, v394, v395, v396, v436] = svs;
              return (await ((async () => {
                
                const v372 = {
                  acceptedStatus: true,
                  contractAddress: v330,
                  ctpyAddress: v348,
                  defaultStatus: v320,
                  haircut: v339,
                  interestTimeoutLimit: v322,
                  lockPrincipal: v338,
                  nextPmt: v329,
                  ownerAddress: v331,
                  pmtFrequency: v326,
                  prevPmt: v328,
                  principalAmtCtpy: v335,
                  principalAmtOwner: v333,
                  principalTimeoutLimit: v321,
                  spotExchangeRate: v334,
                  swapRateCtpyPay: v337,
                  swapRateOwnerPay: v336,
                  termToMaturity: v325,
                  token_Owner_borrow_Ctpy_lend: v323,
                  token_Owner_lend_Ctpy_borrow: v324,
                  totalNumPmts: v327
                  };
                
                return v372;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348, v393, v395] = svs;
              return (await ((async () => {
                
                const v372 = {
                  acceptedStatus: true,
                  contractAddress: v330,
                  ctpyAddress: v348,
                  defaultStatus: v320,
                  haircut: v339,
                  interestTimeoutLimit: v322,
                  lockPrincipal: v338,
                  nextPmt: v329,
                  ownerAddress: v331,
                  pmtFrequency: v326,
                  prevPmt: v328,
                  principalAmtCtpy: v335,
                  principalAmtOwner: v333,
                  principalTimeoutLimit: v321,
                  spotExchangeRate: v334,
                  swapRateCtpyPay: v337,
                  swapRateOwnerPay: v336,
                  termToMaturity: v325,
                  token_Owner_borrow_Ctpy_lend: v323,
                  token_Owner_lend_Ctpy_borrow: v324,
                  totalNumPmts: v327
                  };
                
                return v372;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
              const [v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348, v393, v395] = svs;
              return (await ((async () => {
                
                const v372 = {
                  acceptedStatus: true,
                  contractAddress: v330,
                  ctpyAddress: v348,
                  defaultStatus: v320,
                  haircut: v339,
                  interestTimeoutLimit: v322,
                  lockPrincipal: v338,
                  nextPmt: v329,
                  ownerAddress: v331,
                  pmtFrequency: v326,
                  prevPmt: v328,
                  principalAmtCtpy: v335,
                  principalAmtOwner: v333,
                  principalTimeoutLimit: v321,
                  spotExchangeRate: v334,
                  swapRateCtpyPay: v337,
                  swapRateOwnerPay: v336,
                  termToMaturity: v325,
                  token_Owner_borrow_Ctpy_lend: v323,
                  token_Owner_lend_Ctpy_borrow: v324,
                  totalNumPmts: v327
                  };
                
                return v372;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc4
          }
        }
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0],
      4: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc2, ctc3, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc2, ctc3, ctc2, ctc2],
      6: [ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc3],
      8: [ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Ctpy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Ctpy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Ctpy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    acceptedStatus: ctc1,
    contractAddress: ctc0,
    ctpyAddress: ctc0,
    defaultStatus: ctc1,
    haircut: ctc2,
    interestTimeoutLimit: ctc2,
    lockPrincipal: ctc1,
    nextPmt: ctc2,
    ownerAddress: ctc0,
    pmtFrequency: ctc2,
    prevPmt: ctc2,
    principalAmtCtpy: ctc2,
    principalAmtOwner: ctc2,
    principalTimeoutLimit: ctc2,
    spotExchangeRate: ctc2,
    swapRateCtpyPay: ctc2,
    swapRateOwnerPay: ctc2,
    termToMaturity: ctc2,
    token_Owner_borrow_Ctpy_lend: ctc2,
    token_Owner_lend_Ctpy_borrow: ctc2,
    totalNumPmts: ctc2
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Token;
  
  
  const v285 = stdlib.protect(ctc0, interact.passAddr, 'for Ctpy\'s interact field passAddr');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v288, time: v287, didSend: v23, from: v286 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v315], secs: v317, time: v316, didSend: v55, from: v314 } = txn2;
  ;
  const v318 = stdlib.addressEq(v286, v314);
  stdlib.assert(v318, {
    at: './index.rsh:108:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Ctpy'
    });
  const v319 = v315.acceptedStatus;
  const v320 = v315.defaultStatus;
  const v321 = v315.principalTimeoutLimit;
  const v322 = v315.interestTimeoutLimit;
  const v323 = v315.token_Owner_borrow_Ctpy_lend;
  const v324 = v315.token_Owner_lend_Ctpy_borrow;
  const v325 = v315.termToMaturity;
  const v326 = v315.pmtFrequency;
  const v327 = v315.totalNumPmts;
  const v328 = v315.prevPmt;
  const v329 = v315.nextPmt;
  const v330 = v315.contractAddress;
  const v331 = v315.ownerAddress;
  const v332 = v315.ctpyAddress;
  const v333 = v315.principalAmtOwner;
  const v334 = v315.spotExchangeRate;
  const v335 = v315.principalAmtCtpy;
  const v336 = v315.swapRateOwnerPay;
  const v337 = v315.swapRateCtpyPay;
  const v338 = v315.lockPrincipal;
  const v339 = v315.haircut;
  stdlib.protect(ctc4, await interact.seeState(), {
    at: './index.rsh:125:26:application',
    fs: ['at ./index.rsh:124:14:application call to [unknown function] (defined at: ./index.rsh:124:18:function exp)'],
    msg: 'seeState',
    who: 'Ctpy'
    });
  const v345 = stdlib.protect(ctc1, await interact.acceptTrade(), {
    at: './index.rsh:126:53:application',
    fs: ['at ./index.rsh:124:14:application call to [unknown function] (defined at: ./index.rsh:124:18:function exp)'],
    msg: 'acceptTrade',
    who: 'Ctpy'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v286, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v332, v333, v334, v335, v336, v337, v338, v339, v345, v285],
    evt_cnt: 2,
    funcNum: 2,
    lct: v316,
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:129:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v347, v348], secs: v350, time: v349, didSend: v95, from: v346 } = txn3;
      
      ;
      null;
      if (v347) {
        
        sim_r.isHalt = false;
        }
      else {
        const v522 = true;
        null;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v347, v348], secs: v350, time: v349, didSend: v95, from: v346 } = txn3;
  ;
  null;
  if (v347) {
    stdlib.protect(ctc4, await interact.seeState(), {
      at: './index.rsh:140:30:application',
      fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:31:function exp)'],
      msg: 'seeState',
      who: 'Ctpy'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 5,
      funcNum: 3,
      out_tys: [ctc5, ctc2, ctc5, ctc2, ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v393, v394, v395, v396, v397], secs: v399, time: v398, didSend: v152, from: v392 } = txn4;
    const v400 = stdlib.tokenEq(v393, v395);
    const v401 = v400 ? false : true;
    stdlib.assert(v401, {
      at: './index.rsh:149:15:dot',
      fs: [],
      msg: 'non-network tokens distinct',
      who: 'Ctpy'
      });
    ;
    ;
    ;
    const v416 = stdlib.addressEq(v286, v392);
    stdlib.assert(v416, {
      at: './index.rsh:149:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v419, time: v418, didSend: v159, from: v417 } = txn5;
    ;
    ;
    const v429 = stdlib.addressEq(v286, v417);
    stdlib.assert(v429, {
      at: './index.rsh:151:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const v436 = stdlib.add(v418, v397);
    const v440 = stdlib.protect(ctc1, await interact.accSwap(v393, v394, v395, v396, v397), {
      at: './index.rsh:155:54:application',
      fs: ['at ./index.rsh:154:18:application call to [unknown function] (defined at: ./index.rsh:154:22:function exp)'],
      msg: 'accSwap',
      who: 'Ctpy'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v286, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348, v393, v394, v395, v396, v436],
      evt_cnt: 0,
      funcNum: 5,
      lct: v418,
      onlyIf: v440,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:156:14:dot', stdlib.UInt_max, '0'), [[v396, v395]]],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v443, time: v442, didSend: v170, from: v441 } = txn6;
        
        ;
        sim_r.txns.push({
          amt: v396,
          kind: 'to',
          tok: v395
          });
        sim_r.txns.push({
          amt: v396,
          kind: 'from',
          to: v286,
          tok: v395
          });
        sim_r.txns.push({
          amt: v394,
          kind: 'from',
          to: v346,
          tok: v393
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v436],
      tys: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc5, ctc2, ctc5, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    if (txn6.didTimeout) {
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 6,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v493, time: v492, didSend: v195, from: v491 } = txn7;
      ;
      const v494 = stdlib.addressEq(v286, v491);
      stdlib.assert(v494, {
        at: './index.rsh:159:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      ;
      stdlib.protect(ctc4, await interact.seeTimeout(), {
        at: './index.rsh:161:60:application',
        fs: ['at ./index.rsh:161:19:application call to [unknown function] (defined at: ./index.rsh:161:38:function exp)'],
        msg: 'seeTimeout',
        who: 'Ctpy'
        });
      
      const txn8 = await (ctc.sendrecv({
        args: [v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348, v393, v395],
        evt_cnt: 0,
        funcNum: 7,
        lct: v492,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:179:10:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v511, time: v510, didSend: v213, from: v509 } = txn8;
          
          ;
          const v513 = true;
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v395
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v393
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc5, ctc5],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v511, time: v510, didSend: v213, from: v509 } = txn8;
      ;
      const v512 = stdlib.addressEq(v346, v509);
      stdlib.assert(v512, {
        at: './index.rsh:179:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v513 = true;
      null;
      return;
      
      
      
      }
    else {
      const {data: [], secs: v443, time: v442, didSend: v170, from: v441 } = txn6;
      ;
      ;
      const v453 = stdlib.addressEq(v346, v441);
      stdlib.assert(v453, {
        at: './index.rsh:156:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      ;
      ;
      const txn7 = await (ctc.sendrecv({
        args: [v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348, v393, v395],
        evt_cnt: 0,
        funcNum: 8,
        lct: v442,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:179:10:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v480, time: v479, didSend: v213, from: v478 } = txn7;
          
          ;
          const v482 = true;
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v395
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v393
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc5, ctc5],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v480, time: v479, didSend: v213, from: v478 } = txn7;
      ;
      const v481 = stdlib.addressEq(v346, v478);
      stdlib.assert(v481, {
        at: './index.rsh:179:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v482 = true;
      null;
      return;
      
      
      }
    
    
    
    
    
    }
  else {
    const v522 = true;
    null;
    return;
    }
  
  
  
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    acceptedStatus: ctc0,
    contractAddress: ctc1,
    ctpyAddress: ctc1,
    defaultStatus: ctc0,
    haircut: ctc2,
    interestTimeoutLimit: ctc2,
    lockPrincipal: ctc0,
    nextPmt: ctc2,
    ownerAddress: ctc1,
    pmtFrequency: ctc2,
    prevPmt: ctc2,
    principalAmtCtpy: ctc2,
    principalAmtOwner: ctc2,
    principalTimeoutLimit: ctc2,
    spotExchangeRate: ctc2,
    swapRateCtpyPay: ctc2,
    swapRateOwnerPay: ctc2,
    termToMaturity: ctc2,
    token_Owner_borrow_Ctpy_lend: ctc2,
    token_Owner_lend_Ctpy_borrow: ctc2,
    totalNumPmts: ctc2
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc2, ctc5, ctc2, ctc2]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:100:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:100:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v288, time: v287, didSend: v23, from: v286 } = txn1;
      
      ;
      const v289 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v288, time: v287, didSend: v23, from: v286 } = txn1;
  ;
  const v289 = await ctc.getContractAddress();
  const v292 = stdlib.protect(ctc3, await interact.setInitTerms(v289), {
    at: './index.rsh:106:59:application',
    fs: ['at ./index.rsh:105:15:application call to [unknown function] (defined at: ./index.rsh:105:19:function exp)'],
    msg: 'setInitTerms',
    who: 'Owner'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v286, v292],
    evt_cnt: 1,
    funcNum: 1,
    lct: v287,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:108:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v315], secs: v317, time: v316, didSend: v55, from: v314 } = txn2;
      
      ;
      const v319 = v315.acceptedStatus;
      const v320 = v315.defaultStatus;
      const v321 = v315.principalTimeoutLimit;
      const v322 = v315.interestTimeoutLimit;
      const v323 = v315.token_Owner_borrow_Ctpy_lend;
      const v324 = v315.token_Owner_lend_Ctpy_borrow;
      const v325 = v315.termToMaturity;
      const v326 = v315.pmtFrequency;
      const v327 = v315.totalNumPmts;
      const v328 = v315.prevPmt;
      const v329 = v315.nextPmt;
      const v330 = v315.contractAddress;
      const v331 = v315.ownerAddress;
      const v332 = v315.ctpyAddress;
      const v333 = v315.principalAmtOwner;
      const v334 = v315.spotExchangeRate;
      const v335 = v315.principalAmtCtpy;
      const v336 = v315.swapRateOwnerPay;
      const v337 = v315.swapRateCtpyPay;
      const v338 = v315.lockPrincipal;
      const v339 = v315.haircut;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v315], secs: v317, time: v316, didSend: v55, from: v314 } = txn2;
  ;
  const v318 = stdlib.addressEq(v286, v314);
  stdlib.assert(v318, {
    at: './index.rsh:108:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v319 = v315.acceptedStatus;
  const v320 = v315.defaultStatus;
  const v321 = v315.principalTimeoutLimit;
  const v322 = v315.interestTimeoutLimit;
  const v323 = v315.token_Owner_borrow_Ctpy_lend;
  const v324 = v315.token_Owner_lend_Ctpy_borrow;
  const v325 = v315.termToMaturity;
  const v326 = v315.pmtFrequency;
  const v327 = v315.totalNumPmts;
  const v328 = v315.prevPmt;
  const v329 = v315.nextPmt;
  const v330 = v315.contractAddress;
  const v331 = v315.ownerAddress;
  const v332 = v315.ctpyAddress;
  const v333 = v315.principalAmtOwner;
  const v334 = v315.spotExchangeRate;
  const v335 = v315.principalAmtCtpy;
  const v336 = v315.swapRateOwnerPay;
  const v337 = v315.swapRateCtpyPay;
  const v338 = v315.lockPrincipal;
  const v339 = v315.haircut;
  stdlib.protect(ctc4, await interact.seeState(), {
    at: './index.rsh:118:28:application',
    fs: ['at ./index.rsh:118:28:application call to [unknown function] (defined at: ./index.rsh:118:28:function exp)', 'at ./index.rsh:118:28:application call to "liftedInteract" (defined at: ./index.rsh:118:28:application)'],
    msg: 'seeState',
    who: 'Owner'
    });
  
  stdlib.protect(ctc4, await interact.isInitialised(), {
    at: './index.rsh:121:33:application',
    fs: ['at ./index.rsh:121:33:application call to [unknown function] (defined at: ./index.rsh:121:33:function exp)', 'at ./index.rsh:121:33:application call to "liftedInteract" (defined at: ./index.rsh:121:33:application)'],
    msg: 'isInitialised',
    who: 'Owner'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v347, v348], secs: v350, time: v349, didSend: v95, from: v346 } = txn3;
  ;
  null;
  if (v347) {
    stdlib.protect(ctc4, await interact.seeState(), {
      at: './index.rsh:140:30:application',
      fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:31:function exp)'],
      msg: 'seeState',
      who: 'Owner'
      });
    
    const v379 = stdlib.protect(ctc6, await interact.getSwap(), {
      at: './index.rsh:147:93:application',
      fs: ['at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:23:function exp)'],
      msg: 'getSwap',
      who: 'Owner'
      });
    const v380 = v379[stdlib.checkedBigNumberify('./index.rsh:147:93:application', stdlib.UInt_max, '0')];
    const v381 = v379[stdlib.checkedBigNumberify('./index.rsh:147:93:application', stdlib.UInt_max, '1')];
    const v382 = v379[stdlib.checkedBigNumberify('./index.rsh:147:93:application', stdlib.UInt_max, '2')];
    const v383 = v379[stdlib.checkedBigNumberify('./index.rsh:147:93:application', stdlib.UInt_max, '3')];
    const v384 = v379[stdlib.checkedBigNumberify('./index.rsh:147:93:application', stdlib.UInt_max, '4')];
    const v390 = stdlib.tokenEq(v380, v382);
    const v391 = v390 ? false : true;
    stdlib.assert(v391, {
      at: './index.rsh:148:19:application',
      fs: ['at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:23:function exp)'],
      msg: null,
      who: 'Owner'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v286, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348, v380, v381, v382, v383, v384],
      evt_cnt: 5,
      funcNum: 3,
      lct: v349,
      onlyIf: true,
      out_tys: [ctc5, ctc2, ctc5, ctc2, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:149:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v393, v394, v395, v396, v397], secs: v399, time: v398, didSend: v152, from: v392 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          kind: 'init',
          tok: v393
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          kind: 'init',
          tok: v395
          });
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc5, ctc2, ctc5, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v393, v394, v395, v396, v397], secs: v399, time: v398, didSend: v152, from: v392 } = txn4;
    const v400 = stdlib.tokenEq(v393, v395);
    const v401 = v400 ? false : true;
    stdlib.assert(v401, {
      at: './index.rsh:149:15:dot',
      fs: [],
      msg: 'non-network tokens distinct',
      who: 'Owner'
      });
    ;
    ;
    ;
    const v416 = stdlib.addressEq(v286, v392);
    stdlib.assert(v416, {
      at: './index.rsh:149:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const txn5 = await (ctc.sendrecv({
      args: [v286, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348, v393, v394, v395, v396, v397],
      evt_cnt: 0,
      funcNum: 4,
      lct: v398,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:151:15:dot', stdlib.UInt_max, '0'), [[v394, v393]]],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v419, time: v418, didSend: v159, from: v417 } = txn5;
        
        ;
        sim_r.txns.push({
          amt: v394,
          kind: 'to',
          tok: v393
          });
        const v436 = stdlib.add(v418, v397);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc5, ctc2, ctc5, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v419, time: v418, didSend: v159, from: v417 } = txn5;
    ;
    ;
    const v429 = stdlib.addressEq(v286, v417);
    stdlib.assert(v429, {
      at: './index.rsh:151:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const v436 = stdlib.add(v418, v397);
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: ['time', v436],
      waitIfNotPresent: false
      }));
    if (txn6.didTimeout) {
      const txn7 = await (ctc.sendrecv({
        args: [v286, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v333, v334, v335, v336, v337, v338, v339, v346, v348, v393, v394, v395, v396, v436],
        evt_cnt: 0,
        funcNum: 6,
        lct: v418,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:159:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v493, time: v492, didSend: v195, from: v491 } = txn7;
          
          ;
          sim_r.txns.push({
            amt: v394,
            kind: 'from',
            to: v286,
            tok: v393
            });
          
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc5, ctc2, ctc5, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v493, time: v492, didSend: v195, from: v491 } = txn7;
      ;
      const v494 = stdlib.addressEq(v286, v491);
      stdlib.assert(v494, {
        at: './index.rsh:159:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      ;
      stdlib.protect(ctc4, await interact.seeTimeout(), {
        at: './index.rsh:161:60:application',
        fs: ['at ./index.rsh:161:19:application call to [unknown function] (defined at: ./index.rsh:161:38:function exp)'],
        msg: 'seeTimeout',
        who: 'Owner'
        });
      
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v511, time: v510, didSend: v213, from: v509 } = txn8;
      ;
      const v512 = stdlib.addressEq(v346, v509);
      stdlib.assert(v512, {
        at: './index.rsh:179:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const v513 = true;
      null;
      return;
      
      
      
      }
    else {
      const {data: [], secs: v443, time: v442, didSend: v170, from: v441 } = txn6;
      ;
      ;
      const v453 = stdlib.addressEq(v346, v441);
      stdlib.assert(v453, {
        at: './index.rsh:156:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      ;
      ;
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 8,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v480, time: v479, didSend: v213, from: v478 } = txn7;
      ;
      const v481 = stdlib.addressEq(v346, v478);
      stdlib.assert(v481, {
        at: './index.rsh:179:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const v482 = true;
      null;
      return;
      
      
      }
    
    
    
    
    
    }
  else {
    const v522 = true;
    null;
    return;
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [`TradeState_read()(byte,byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,address,address,uint64,uint64,uint64,uint64,uint64,byte,uint64)`],
    sigs: [`TradeState_read()(byte,byte,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64,address,address,address,uint64,uint64,uint64,uint64,uint64,byte,uint64)`]
    },
  appApproval: `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`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 3,
  stateSize: 322,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:102:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:115:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:142:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:150:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:152:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:163:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:185:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:170:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:185:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:175:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Ctpy": Ctpy,
  "Owner": Owner
  };
export const _APIs = {
  };
