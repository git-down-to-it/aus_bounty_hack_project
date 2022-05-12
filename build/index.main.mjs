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
  const ctc4 = stdlib.T_Struct([['acceptedStatus', ctc1], ['defaultStatus', ctc1], ['principalTimeoutLimit', ctc2], ['interestTimeoutLimit', ctc2], ['token_Owner_borrow_Ctpy_lend', ctc3], ['token_Owner_lend_Ctpy_borrow', ctc3], ['termToMaturity', ctc2], ['pmtFrequency', ctc2], ['totalNumPmts', ctc2], ['prevPmt', ctc2], ['nextPmt', ctc2], ['contractAddress', ctc0], ['ownerAddress', ctc0], ['ctpyAddress', ctc0], ['principalAmtOwner', ctc2], ['spotExchangeRate', ctc2], ['principalAmtCtpy', ctc2], ['swapRateOwnerPay', ctc2], ['swapRateCtpyPay', ctc2], ['lockPrincipal', ctc1], ['haircut', ctc2]]);
  
  return {
    infos: {
      TradeState: {
        read: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v280] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v280, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v332, v333] = svs;
              return (await ((async () => {
                
                const v334 = {
                  acceptedStatus: v313,
                  contractAddress: v324,
                  ctpyAddress: v326,
                  defaultStatus: v314,
                  haircut: v333,
                  interestTimeoutLimit: v316,
                  lockPrincipal: v332,
                  nextPmt: v323,
                  ownerAddress: v325,
                  pmtFrequency: v320,
                  prevPmt: v322,
                  principalAmtCtpy: v329,
                  principalAmtOwner: v327,
                  principalTimeoutLimit: v315,
                  spotExchangeRate: v328,
                  swapRateCtpyPay: v331,
                  swapRateOwnerPay: v330,
                  termToMaturity: v319,
                  token_Owner_borrow_Ctpy_lend: v317,
                  token_Owner_lend_Ctpy_borrow: v318,
                  totalNumPmts: v321
                  };
                
                return v334;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v280, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342] = svs;
              return (await ((async () => {
                
                const v366 = {
                  acceptedStatus: true,
                  contractAddress: v324,
                  ctpyAddress: v342,
                  defaultStatus: v314,
                  haircut: v333,
                  interestTimeoutLimit: v316,
                  lockPrincipal: v332,
                  nextPmt: v323,
                  ownerAddress: v325,
                  pmtFrequency: v320,
                  prevPmt: v322,
                  principalAmtCtpy: v329,
                  principalAmtOwner: v327,
                  principalTimeoutLimit: v315,
                  spotExchangeRate: v328,
                  swapRateCtpyPay: v331,
                  swapRateOwnerPay: v330,
                  termToMaturity: v319,
                  token_Owner_borrow_Ctpy_lend: v317,
                  token_Owner_lend_Ctpy_borrow: v318,
                  totalNumPmts: v321
                  };
                
                return v366;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v280, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342, v387, v388, v389, v390, v391] = svs;
              return (await ((async () => {
                
                const v366 = {
                  acceptedStatus: true,
                  contractAddress: v324,
                  ctpyAddress: v342,
                  defaultStatus: v314,
                  haircut: v333,
                  interestTimeoutLimit: v316,
                  lockPrincipal: v332,
                  nextPmt: v323,
                  ownerAddress: v325,
                  pmtFrequency: v320,
                  prevPmt: v322,
                  principalAmtCtpy: v329,
                  principalAmtOwner: v327,
                  principalTimeoutLimit: v315,
                  spotExchangeRate: v328,
                  swapRateCtpyPay: v331,
                  swapRateOwnerPay: v330,
                  termToMaturity: v319,
                  token_Owner_borrow_Ctpy_lend: v317,
                  token_Owner_lend_Ctpy_borrow: v318,
                  totalNumPmts: v321
                  };
                
                return v366;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v280, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342, v387, v388, v389, v390, v430] = svs;
              return (await ((async () => {
                
                const v366 = {
                  acceptedStatus: true,
                  contractAddress: v324,
                  ctpyAddress: v342,
                  defaultStatus: v314,
                  haircut: v333,
                  interestTimeoutLimit: v316,
                  lockPrincipal: v332,
                  nextPmt: v323,
                  ownerAddress: v325,
                  pmtFrequency: v320,
                  prevPmt: v322,
                  principalAmtCtpy: v329,
                  principalAmtOwner: v327,
                  principalTimeoutLimit: v315,
                  spotExchangeRate: v328,
                  swapRateCtpyPay: v331,
                  swapRateOwnerPay: v330,
                  termToMaturity: v319,
                  token_Owner_borrow_Ctpy_lend: v317,
                  token_Owner_lend_Ctpy_borrow: v318,
                  totalNumPmts: v321
                  };
                
                return v366;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342, v387, v389] = svs;
              return (await ((async () => {
                
                const v366 = {
                  acceptedStatus: true,
                  contractAddress: v324,
                  ctpyAddress: v342,
                  defaultStatus: v314,
                  haircut: v333,
                  interestTimeoutLimit: v316,
                  lockPrincipal: v332,
                  nextPmt: v323,
                  ownerAddress: v325,
                  pmtFrequency: v320,
                  prevPmt: v322,
                  principalAmtCtpy: v329,
                  principalAmtOwner: v327,
                  principalTimeoutLimit: v315,
                  spotExchangeRate: v328,
                  swapRateCtpyPay: v331,
                  swapRateOwnerPay: v330,
                  termToMaturity: v319,
                  token_Owner_borrow_Ctpy_lend: v317,
                  token_Owner_lend_Ctpy_borrow: v318,
                  totalNumPmts: v321
                  };
                
                return v366;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
              const [v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342, v387, v389] = svs;
              return (await ((async () => {
                
                const v366 = {
                  acceptedStatus: true,
                  contractAddress: v324,
                  ctpyAddress: v342,
                  defaultStatus: v314,
                  haircut: v333,
                  interestTimeoutLimit: v316,
                  lockPrincipal: v332,
                  nextPmt: v323,
                  ownerAddress: v325,
                  pmtFrequency: v320,
                  prevPmt: v322,
                  principalAmtCtpy: v329,
                  principalAmtOwner: v327,
                  principalTimeoutLimit: v315,
                  spotExchangeRate: v328,
                  swapRateCtpyPay: v331,
                  swapRateOwnerPay: v330,
                  termToMaturity: v319,
                  token_Owner_borrow_Ctpy_lend: v317,
                  token_Owner_lend_Ctpy_borrow: v318,
                  totalNumPmts: v321
                  };
                
                return v366;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc4
          }
        }
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0],
      4: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc2, ctc3, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc2, ctc3, ctc2, ctc2],
      6: [ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc3],
      8: [ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc3]
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
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
    token_Owner_borrow_Ctpy_lend: ctc3,
    token_Owner_lend_Ctpy_borrow: ctc3,
    totalNumPmts: ctc2
    });
  const ctc5 = stdlib.T_Null;
  
  
  const v279 = stdlib.protect(ctc0, interact.passAddr, 'for Ctpy\'s interact field passAddr');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v282, time: v281, didSend: v23, from: v280 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v309], secs: v311, time: v310, didSend: v55, from: v308 } = txn2;
  ;
  const v312 = stdlib.addressEq(v280, v308);
  stdlib.assert(v312, {
    at: './index.rsh:108:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Ctpy'
    });
  const v313 = v309.acceptedStatus;
  const v314 = v309.defaultStatus;
  const v315 = v309.principalTimeoutLimit;
  const v316 = v309.interestTimeoutLimit;
  const v317 = v309.token_Owner_borrow_Ctpy_lend;
  const v318 = v309.token_Owner_lend_Ctpy_borrow;
  const v319 = v309.termToMaturity;
  const v320 = v309.pmtFrequency;
  const v321 = v309.totalNumPmts;
  const v322 = v309.prevPmt;
  const v323 = v309.nextPmt;
  const v324 = v309.contractAddress;
  const v325 = v309.ownerAddress;
  const v326 = v309.ctpyAddress;
  const v327 = v309.principalAmtOwner;
  const v328 = v309.spotExchangeRate;
  const v329 = v309.principalAmtCtpy;
  const v330 = v309.swapRateOwnerPay;
  const v331 = v309.swapRateCtpyPay;
  const v332 = v309.lockPrincipal;
  const v333 = v309.haircut;
  stdlib.protect(ctc5, await interact.seeState(), {
    at: './index.rsh:128:26:application',
    fs: ['at ./index.rsh:127:14:application call to [unknown function] (defined at: ./index.rsh:127:18:function exp)'],
    msg: 'seeState',
    who: 'Ctpy'
    });
  const v339 = stdlib.protect(ctc1, await interact.acceptTrade(), {
    at: './index.rsh:129:53:application',
    fs: ['at ./index.rsh:127:14:application call to [unknown function] (defined at: ./index.rsh:127:18:function exp)'],
    msg: 'acceptTrade',
    who: 'Ctpy'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v280, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, v331, v332, v333, v339, v279],
    evt_cnt: 2,
    funcNum: 2,
    lct: v310,
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:132:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v341, v342], secs: v344, time: v343, didSend: v95, from: v340 } = txn3;
      
      ;
      null;
      if (v341) {
        
        sim_r.isHalt = false;
        }
      else {
        const v514 = true;
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
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v341, v342], secs: v344, time: v343, didSend: v95, from: v340 } = txn3;
  ;
  null;
  if (v341) {
    stdlib.protect(ctc5, await interact.seeState(), {
      at: './index.rsh:143:30:application',
      fs: ['at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:31:function exp)'],
      msg: 'seeState',
      who: 'Ctpy'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 5,
      funcNum: 3,
      out_tys: [ctc3, ctc2, ctc3, ctc2, ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v387, v388, v389, v390, v391], secs: v393, time: v392, didSend: v152, from: v386 } = txn4;
    const v394 = stdlib.tokenEq(v387, v389);
    const v395 = v394 ? false : true;
    stdlib.assert(v395, {
      at: './index.rsh:152:15:dot',
      fs: [],
      msg: 'non-network tokens distinct',
      who: 'Ctpy'
      });
    ;
    ;
    ;
    const v410 = stdlib.addressEq(v280, v386);
    stdlib.assert(v410, {
      at: './index.rsh:152:15:dot',
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
    const {data: [], secs: v413, time: v412, didSend: v159, from: v411 } = txn5;
    ;
    ;
    const v423 = stdlib.addressEq(v280, v411);
    stdlib.assert(v423, {
      at: './index.rsh:154:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const v430 = stdlib.add(v412, v391);
    const v434 = stdlib.protect(ctc1, await interact.accSwap(v387, v388, v389, v390, v391), {
      at: './index.rsh:158:54:application',
      fs: ['at ./index.rsh:157:18:application call to [unknown function] (defined at: ./index.rsh:157:22:function exp)'],
      msg: 'accSwap',
      who: 'Ctpy'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v280, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342, v387, v388, v389, v390, v430],
      evt_cnt: 0,
      funcNum: 5,
      lct: v412,
      onlyIf: v434,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:159:14:dot', stdlib.UInt_max, '0'), [[v390, v389]]],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v437, time: v436, didSend: v170, from: v435 } = txn6;
        
        ;
        sim_r.txns.push({
          amt: v390,
          kind: 'to',
          tok: v389
          });
        sim_r.txns.push({
          amt: v390,
          kind: 'from',
          to: v280,
          tok: v389
          });
        sim_r.txns.push({
          amt: v388,
          kind: 'from',
          to: v340,
          tok: v387
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v430],
      tys: [ctc0, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc2, ctc3, ctc2, ctc2],
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
      const {data: [], secs: v487, time: v486, didSend: v195, from: v485 } = txn7;
      ;
      const v488 = stdlib.addressEq(v280, v485);
      stdlib.assert(v488, {
        at: './index.rsh:162:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      ;
      const txn8 = await (ctc.sendrecv({
        args: [v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342, v387, v389],
        evt_cnt: 0,
        funcNum: 7,
        lct: v486,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:182:10:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v503, time: v502, didSend: v207, from: v501 } = txn8;
          
          ;
          const v505 = true;
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v389
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v387
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
        tys: [ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v503, time: v502, didSend: v207, from: v501 } = txn8;
      ;
      const v504 = stdlib.addressEq(v340, v501);
      stdlib.assert(v504, {
        at: './index.rsh:182:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v505 = true;
      null;
      return;
      
      
      
      }
    else {
      const {data: [], secs: v437, time: v436, didSend: v170, from: v435 } = txn6;
      ;
      ;
      const v447 = stdlib.addressEq(v340, v435);
      stdlib.assert(v447, {
        at: './index.rsh:159:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      ;
      ;
      const txn7 = await (ctc.sendrecv({
        args: [v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342, v387, v389],
        evt_cnt: 0,
        funcNum: 8,
        lct: v436,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:182:10:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v474, time: v473, didSend: v207, from: v472 } = txn7;
          
          ;
          const v476 = true;
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v389
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v387
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
        tys: [ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc3, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v474, time: v473, didSend: v207, from: v472 } = txn7;
      ;
      const v475 = stdlib.addressEq(v340, v472);
      stdlib.assert(v475, {
        at: './index.rsh:182:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v476 = true;
      null;
      return;
      
      
      }
    
    
    
    
    
    }
  else {
    const v514 = true;
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
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
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
    token_Owner_borrow_Ctpy_lend: ctc3,
    token_Owner_lend_Ctpy_borrow: ctc3,
    totalNumPmts: ctc2
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc2, ctc3, ctc2, ctc2]);
  
  
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
      
      
      const {data: [], secs: v282, time: v281, didSend: v23, from: v280 } = txn1;
      
      ;
      const v283 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v282, time: v281, didSend: v23, from: v280 } = txn1;
  ;
  const v283 = await ctc.getContractAddress();
  const v286 = stdlib.protect(ctc4, await interact.setInitTerms(v283), {
    at: './index.rsh:106:59:application',
    fs: ['at ./index.rsh:105:15:application call to [unknown function] (defined at: ./index.rsh:105:19:function exp)'],
    msg: 'setInitTerms',
    who: 'Owner'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v280, v286],
    evt_cnt: 1,
    funcNum: 1,
    lct: v281,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:108:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v309], secs: v311, time: v310, didSend: v55, from: v308 } = txn2;
      
      ;
      const v313 = v309.acceptedStatus;
      const v314 = v309.defaultStatus;
      const v315 = v309.principalTimeoutLimit;
      const v316 = v309.interestTimeoutLimit;
      const v317 = v309.token_Owner_borrow_Ctpy_lend;
      const v318 = v309.token_Owner_lend_Ctpy_borrow;
      const v319 = v309.termToMaturity;
      const v320 = v309.pmtFrequency;
      const v321 = v309.totalNumPmts;
      const v322 = v309.prevPmt;
      const v323 = v309.nextPmt;
      const v324 = v309.contractAddress;
      const v325 = v309.ownerAddress;
      const v326 = v309.ctpyAddress;
      const v327 = v309.principalAmtOwner;
      const v328 = v309.spotExchangeRate;
      const v329 = v309.principalAmtCtpy;
      const v330 = v309.swapRateOwnerPay;
      const v331 = v309.swapRateCtpyPay;
      const v332 = v309.lockPrincipal;
      const v333 = v309.haircut;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v309], secs: v311, time: v310, didSend: v55, from: v308 } = txn2;
  ;
  const v312 = stdlib.addressEq(v280, v308);
  stdlib.assert(v312, {
    at: './index.rsh:108:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v313 = v309.acceptedStatus;
  const v314 = v309.defaultStatus;
  const v315 = v309.principalTimeoutLimit;
  const v316 = v309.interestTimeoutLimit;
  const v317 = v309.token_Owner_borrow_Ctpy_lend;
  const v318 = v309.token_Owner_lend_Ctpy_borrow;
  const v319 = v309.termToMaturity;
  const v320 = v309.pmtFrequency;
  const v321 = v309.totalNumPmts;
  const v322 = v309.prevPmt;
  const v323 = v309.nextPmt;
  const v324 = v309.contractAddress;
  const v325 = v309.ownerAddress;
  const v326 = v309.ctpyAddress;
  const v327 = v309.principalAmtOwner;
  const v328 = v309.spotExchangeRate;
  const v329 = v309.principalAmtCtpy;
  const v330 = v309.swapRateOwnerPay;
  const v331 = v309.swapRateCtpyPay;
  const v332 = v309.lockPrincipal;
  const v333 = v309.haircut;
  stdlib.protect(ctc5, await interact.seeState(), {
    at: './index.rsh:119:28:application',
    fs: ['at ./index.rsh:119:28:application call to [unknown function] (defined at: ./index.rsh:119:28:function exp)', 'at ./index.rsh:119:28:application call to "liftedInteract" (defined at: ./index.rsh:119:28:application)'],
    msg: 'seeState',
    who: 'Owner'
    });
  
  stdlib.protect(ctc5, await interact.isInitialised(), {
    at: './index.rsh:122:33:application',
    fs: ['at ./index.rsh:122:33:application call to [unknown function] (defined at: ./index.rsh:122:33:function exp)', 'at ./index.rsh:122:33:application call to "liftedInteract" (defined at: ./index.rsh:122:33:application)'],
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
  const {data: [v341, v342], secs: v344, time: v343, didSend: v95, from: v340 } = txn3;
  ;
  null;
  if (v341) {
    stdlib.protect(ctc5, await interact.seeState(), {
      at: './index.rsh:143:30:application',
      fs: ['at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:31:function exp)'],
      msg: 'seeState',
      who: 'Owner'
      });
    
    const v373 = stdlib.protect(ctc6, await interact.getSwap(), {
      at: './index.rsh:150:93:application',
      fs: ['at ./index.rsh:149:19:application call to [unknown function] (defined at: ./index.rsh:149:23:function exp)'],
      msg: 'getSwap',
      who: 'Owner'
      });
    const v374 = v373[stdlib.checkedBigNumberify('./index.rsh:150:93:application', stdlib.UInt_max, '0')];
    const v375 = v373[stdlib.checkedBigNumberify('./index.rsh:150:93:application', stdlib.UInt_max, '1')];
    const v376 = v373[stdlib.checkedBigNumberify('./index.rsh:150:93:application', stdlib.UInt_max, '2')];
    const v377 = v373[stdlib.checkedBigNumberify('./index.rsh:150:93:application', stdlib.UInt_max, '3')];
    const v378 = v373[stdlib.checkedBigNumberify('./index.rsh:150:93:application', stdlib.UInt_max, '4')];
    const v384 = stdlib.tokenEq(v374, v376);
    const v385 = v384 ? false : true;
    stdlib.assert(v385, {
      at: './index.rsh:151:19:application',
      fs: ['at ./index.rsh:149:19:application call to [unknown function] (defined at: ./index.rsh:149:23:function exp)'],
      msg: null,
      who: 'Owner'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v280, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342, v374, v375, v376, v377, v378],
      evt_cnt: 5,
      funcNum: 3,
      lct: v343,
      onlyIf: true,
      out_tys: [ctc3, ctc2, ctc3, ctc2, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:152:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v387, v388, v389, v390, v391], secs: v393, time: v392, didSend: v152, from: v386 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          kind: 'init',
          tok: v387
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          kind: 'init',
          tok: v389
          });
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc3, ctc2, ctc3, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v387, v388, v389, v390, v391], secs: v393, time: v392, didSend: v152, from: v386 } = txn4;
    const v394 = stdlib.tokenEq(v387, v389);
    const v395 = v394 ? false : true;
    stdlib.assert(v395, {
      at: './index.rsh:152:15:dot',
      fs: [],
      msg: 'non-network tokens distinct',
      who: 'Owner'
      });
    ;
    ;
    ;
    const v410 = stdlib.addressEq(v280, v386);
    stdlib.assert(v410, {
      at: './index.rsh:152:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const txn5 = await (ctc.sendrecv({
      args: [v280, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342, v387, v388, v389, v390, v391],
      evt_cnt: 0,
      funcNum: 4,
      lct: v392,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:154:15:dot', stdlib.UInt_max, '0'), [[v388, v387]]],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v413, time: v412, didSend: v159, from: v411 } = txn5;
        
        ;
        sim_r.txns.push({
          amt: v388,
          kind: 'to',
          tok: v387
          });
        const v430 = stdlib.add(v412, v391);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc3, ctc2, ctc3, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v413, time: v412, didSend: v159, from: v411 } = txn5;
    ;
    ;
    const v423 = stdlib.addressEq(v280, v411);
    stdlib.assert(v423, {
      at: './index.rsh:154:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const v430 = stdlib.add(v412, v391);
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: ['time', v430],
      waitIfNotPresent: false
      }));
    if (txn6.didTimeout) {
      const txn7 = await (ctc.sendrecv({
        args: [v280, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v327, v328, v329, v330, v331, v332, v333, v340, v342, v387, v388, v389, v390, v430],
        evt_cnt: 0,
        funcNum: 6,
        lct: v412,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:162:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v487, time: v486, didSend: v195, from: v485 } = txn7;
          
          ;
          sim_r.txns.push({
            amt: v388,
            kind: 'from',
            to: v280,
            tok: v387
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc3, ctc2, ctc3, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v487, time: v486, didSend: v195, from: v485 } = txn7;
      ;
      const v488 = stdlib.addressEq(v280, v485);
      stdlib.assert(v488, {
        at: './index.rsh:162:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      ;
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v503, time: v502, didSend: v207, from: v501 } = txn8;
      ;
      const v504 = stdlib.addressEq(v340, v501);
      stdlib.assert(v504, {
        at: './index.rsh:182:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const v505 = true;
      null;
      return;
      
      
      
      }
    else {
      const {data: [], secs: v437, time: v436, didSend: v170, from: v435 } = txn6;
      ;
      ;
      const v447 = stdlib.addressEq(v340, v435);
      stdlib.assert(v447, {
        at: './index.rsh:159:14:dot',
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
      const {data: [], secs: v474, time: v473, didSend: v207, from: v472 } = txn7;
      ;
      const v475 = stdlib.addressEq(v340, v472);
      stdlib.assert(v475, {
        at: './index.rsh:182:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const v476 = true;
      null;
      return;
      
      
      }
    
    
    
    
    
    }
  else {
    const v514 = true;
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
  appApproval: `BiAhAAQBCAUG0gEDAiEpMTlBSVFZYakBsQG5AcEByQGaAqoCugKiAqCNBoIC+gGyAkJKJgUBAQEAAQIFTcx58QEAIjUAMRhBDUInBGRJIls1ASVbNQI2GgAXSUEDbyI1BCQ1BoGO/IWRDRJENAFJIQQMQAGtSSEFDEABHUklDEAAiyUSRClkKGRQKmRQNQMoNANXAAFQNANXAQhQNANXCQhQNANXEQhQNANXGQhQNANXIQhQNANXKQhQNANXMQhQNANXOQhQNANXQQhQNANXSSBQNANXaSBQNANX2iBQNANXiQhQNANXkQhQNANXmQhQNANXoQhQNANXqQhQNANXsQFQNANXsghQNQdCDHchBRJEKWQoZFAqZFA1Ayg0A1cAAVA0A1cBCFA0A1cJCFA0A1cRCFA0A1cZCFA0A1chCFA0A1cpCFA0A1cxCFA0A1c5CFA0A1dBCFA0A1dJIFA0A1dpIFA0A1faIFA0A1eJCFA0A1eRCFA0A1eZCFA0A1ehCFA0A1epCFA0A1exAVA0A1eyCFA1B0IL60gpZChkUCpkUDUDKDQDVyABUDQDVyEIUDQDVykIUDQDVzEIUDQDVzkIUDQDV0EIUDQDV0kIUDQDV1EIUDQDV1kIUDQDV2EIUDQDV2kgUDQDV4kgUDQDV/ogUDQDV6kIUDQDV7EIUDQDV7kIUDQDV8EIUDQDV8kIUDQDV9EBUDQDV9IIUDUHQgtiSSEHDEABGEkjDEAAiUgpZChkUCpkUDUDKDQDVyABUDQDVyEIUDQDVykIUDQDVzEIUDQDVzkIUDQDV0EIUDQDV0kIUDQDV1EIUDQDV1kIUDQDV2EIUDQDV2kgUDQDV4kgUDQDV/ogUDQDV6kIUDQDV7EIUDQDV7kIUDQDV8EIUDQDV8kIUDQDV9EBUDQDV9IIUDUHQgrMSClkKGRQKmRQNQMoNANXIAFQNANXIQhQNANXKQhQNANXMQhQNANXOQhQNANXQQhQNANXSQhQNANXUQhQNANXWQhQNANXYQhQNANXaSBQNANXiSBQNANX+iBQNANXqQhQNANXsQhQNANXuQhQNANXwQhQNANXyQhQNANX0QFQNANX0ghQNQdCCkMhCBJEKWQoZFBJNQNXIAE0A1chAVA0A1ciCFA0A1cqCFA0A1cyCFA0A1c6CFA0A1dCCFA0A1dKCFA0A1dSCFA0A1daCFA0A1diCFA0A1dqIFA0A1eKIFA0A1eqIFA0A1fKCFA0A1fSCFA0A1faCFA0A1fiCFA0A1fqCFA0A1fyAVA0A1fzCFA1B0IJtzYaAhc1BDYaAzYaARdJIwxABPdJIQUMQAImSYEHDEAA0UklDEAAZiUSRCU0ARJENARJIhJMNAISEUQpZChkUCpkUDUDgAQX/NsusDQDV7ogMQASRCuwsSKyASKyEiOyEDIJshUyCrIUNAMhHFuyEbOxIrIBIrISI7IQMgmyFTIKshQ0AyEdW7IRs0II4UghBTQBEkQ0BEkiEkw0AhIRRClkKGRQKmRQNQOABOIbs6mwNANXuiAxABJEK7CxIrIBIrISI7IQMgmyFTIKshQ0AyEcW7IRs7EisgEishIjshAyCbIVMgqyFDQDIR1bshGzQgh8SCEENAESRDQESSISTDQCEhFEKWQoZFAqZFBJNQNJSkpKSkpKSkpKSkpXACA1/1cgARc1/iEJWzX9IQpbNfwhC1s1+yEMWzX6IQ1bNfkhDls1+CEPWzX3IRBbNfYhEVs19VdpIDX0V4kgNfMhEls18iETWzXxIRRbNfAhFVs17yEWWzXuV9EBFzXtIQZbNexX2iA161f6IDXqIRdbNekhGFs16IAEYbSsDLAyBjQDIRlbD0Q0/zEAEkSxIrIBNAMhGluyEiOyEDT/shQ06bIRszT+FlEHCDT9FlA0/BZQNPsWUDT6FlA0+RZQNPgWUDT3FlA09hZQNPUWUDT0UDTzUDTyFlA08RZQNPAWUDTvFlA07hZQNO0WUQcIUDTsFlA061A06lA06RZQNOgWUClLAVcAf2coSwFXf39nKksBV/4MZ0ghBTUBMgY1AkIHSkkhBAxAAWtIIQQ0ARJENARJIhJMNAISEUQpZChkUCpkUEk1A0lKSkpKSkpKSkpKSlcgARc1/yEJWzX+IQpbNf0hC1s1/CEMWzX7IQ1bNfohDls1+SEPWzX4IRBbNfchEVs19ldpIDX1V4kgNfQhEls18yETWzXyIRRbNfEhFVs18CEWWzXvV9EBFzXuIQZbNe1X2iA17Ff6IDXrIRdbNeohGFs16SEeWzXogATMmZJcsDIGNAMhGVsMRDToNOmIBt807DEAEkSxIrIBNOiyEiOyEDQDVwAgshQ06bIRs7EisgE0AyEaW7ISI7IQNOyyFDTqshGzNP8WUQcINP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZQNPgWUDT3FlA09hZQNPVQNPRQNPMWUDTyFlA08RZQNPAWUDTvFlA07hZRBwhQNO0WUDTsUDTrUDTqFlA06RZQKUsBVwB/ZyhLAVd/f2cqSwFX/gxnSCU1ATIGNQJCBdhIIzQBEkQ0BEkiEkw0AhIRRClkKGRQKmRQSTUDSUpKSkpKSkpKSkpKSlcAIDX/VyABFzX+IQlbNf0hCls1/CELWzX7IQxbNfohDVs1+SEOWzX4IQ9bNfchEFs19iERWzX1V2kgNfRXiSA18yESWzXyIRNbNfEhFFs18CEVWzXvIRZbNe5X0QEXNe0hBls17FfaIDXrV/ogNeohF1s16SEaWzXoIRhbNechHls15oAEkSc087A06DTpiAVzNP8xABJEMgY0AyEZWwg15TT/NP4WUQcIUDT9FlA0/BZQNPsWUDT6FlA0+RZQNPgWUDT3FlA09hZQNPUWUDT0UDTzUDTyFlA08RZQNPAWUDTvFlA07hZQNO0WUQcIUDTsFlA061A06lA06RZQNOgWUDTnFlA05hZQNOUWUClLAVcAf2coSwFXf39nKksBV/5EZ0ghBDUBMgY1AkIEgEkhCAxAAuJJIQcMQAGYSCEHNAESRDQESSISTDQCEhFEKWQoZFAqZFBJNQNJSkpKSkpKSkpKSlcAIDX/VyABFzX+IQlbNf0hCls1/CELWzX7IQxbNfohDVs1+SEOWzX4IQ9bNfchEFs19iERWzX1V2kgNfRXiSA18yESWzXyIRNbNfEhFFs18CEVWzXvIRZbNe5X0QEXNe0hBls17FfaIDXrV/ogNepJNQVJSkkiWzXpJVs16IEQWzXngRhbNeaBIFs15YAEfVzuMzTpFlA06BZQNOcWUDTmFlA05RZQsDTpNOcTRCEbiAPVsSKyASKyEiOyEDIKshQ06bIRsyEbiAO9sSKyASKyEiOyEDIKshQ057IRszT/MQASRDT/NP4WUQcIUDT9FlA0/BZQNPsWUDT6FlA0+RZQNPgWUDT3FlA09hZQNPUWUDT0UDTzUDTyFlA08RZQNPAWUDTvFlA07hZQNO0WUQcIUDTsFlA061A06lA06RZQNOgWUDTnFlA05hZQNOUWUClLAVcAf2coSwFXf39nKksBV/5EZ0gjNQEyBjUCQgLaSCEINAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSkpKVwAgNf9XIQEXNf6BIls1/YEqWzX8gTJbNfuBOls1+iEfWzX5ISBbNfiBUls194FaWzX2gWJbNfVXaiA19FeKIDXzgcoBWzXyIQZbNfGB2gFbNfCB4gFbNe+B6gFbNe5X8gEXNe2B8wFbNexJNQVJVwABFzXrVwEgNeqABJ5ohC806xZRBwhQNOpQsIAE7WJWoDTrFlEHCFA06lCwNOtBAHk0/zT+FlEHCFA0/RZQNPwWUDT7FlA0+hZQNPkWUDT4FlA09xZQNPYWUDT1FlA09FA081A08hZQNPEWUDTwFlA07xZQNO4WUDTtFlEHCFA07BZQMQBQNOpQKUsBVwB/ZyhLAVd/f2cqSwFX/hxnSCEHNQEyBjUCQgGcK7BCAXtJJAxAAURIJDQBEkQ0BEkiEkw0AhIRRClkSTUDNf9JNQU1/oAES4qUmTT+ULA0/zEAEkQ0/lcAARc1/TT+V0EBFzX8NP6BmwFbNfs0/iEgWzX6NP6BwwFbNfk0/oHLAVs1+DT+gbsBWzX3NP6Be1s19jT+gdMBWzX1NP6BgwFbNfQ0/oFTWzXzNP5XASA18jT+V1sgNfE0/lchIDXwNP6BkwFbNe80/oGjAVs17jT+gYsBWzXtNP6BswFbNew0/oGrAVs16zT+V1IBFzXqNP4hH1s16TT/NP0WUQcIUDT8FlEHCFA0+xZQNPoWUDT5FlA0+BZQNPcWUDT2FlA09RZQNPQWUDTzFlA08lA08VA08FA07xZQNO4WUDTtFlA07BZQNOsWUDTqFlEHCFA06RZQKUsBVwB/ZyhLAVd/fGdIIQg1ATIGNQJCAE1IIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAhG4gAbjEAKUsBVwAgZ0gkNQEyBjUCQgAcMRkhBBJEsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEJwQ0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSQIMgQSRDEWEkQkQzEZIhJEQv/fIjUBIjUCQv/CNABJSiQINQA4BzIKEkQ4ECQSRDgIEkSJNABJSkkkCDUAOBQyChJEOBAjEkQ4EU8CEkQ4EhJEiQ==`,
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
    at: './index.rsh:116:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:145:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:153:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:155:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:166:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:188:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:173:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:188:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:178:17:after expr stmt semicolon',
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
