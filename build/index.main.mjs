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
              const [v300] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v300, v333, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353] = svs;
              return (await ((async () => {
                
                const v354 = {
                  acceptedStatus: v333,
                  contractAddress: v344,
                  ctpyAddress: v346,
                  defaultStatus: v334,
                  haircut: v353,
                  interestTimeoutLimit: v336,
                  lockPrincipal: v352,
                  nextPmt: v343,
                  ownerAddress: v345,
                  pmtFrequency: v340,
                  prevPmt: v342,
                  principalAmtCtpy: v349,
                  principalAmtOwner: v347,
                  principalTimeoutLimit: v335,
                  spotExchangeRate: v348,
                  swapRateCtpyPay: v351,
                  swapRateOwnerPay: v350,
                  termToMaturity: v339,
                  token_Owner_borrow_Ctpy_lend: v337,
                  token_Owner_lend_Ctpy_borrow: v338,
                  totalNumPmts: v341
                  };
                
                return v354;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v300, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364] = svs;
              return (await ((async () => {
                
                const v388 = {
                  acceptedStatus: true,
                  contractAddress: v344,
                  ctpyAddress: v364,
                  defaultStatus: v334,
                  haircut: v353,
                  interestTimeoutLimit: v336,
                  lockPrincipal: v352,
                  nextPmt: v343,
                  ownerAddress: v345,
                  pmtFrequency: v340,
                  prevPmt: v342,
                  principalAmtCtpy: v349,
                  principalAmtOwner: v347,
                  principalTimeoutLimit: v335,
                  spotExchangeRate: v348,
                  swapRateCtpyPay: v351,
                  swapRateOwnerPay: v350,
                  termToMaturity: v339,
                  token_Owner_borrow_Ctpy_lend: v337,
                  token_Owner_lend_Ctpy_borrow: v338,
                  totalNumPmts: v341
                  };
                
                return v388;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v300, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364, v409, v410, v411, v412, v413] = svs;
              return (await ((async () => {
                
                const v388 = {
                  acceptedStatus: true,
                  contractAddress: v344,
                  ctpyAddress: v364,
                  defaultStatus: v334,
                  haircut: v353,
                  interestTimeoutLimit: v336,
                  lockPrincipal: v352,
                  nextPmt: v343,
                  ownerAddress: v345,
                  pmtFrequency: v340,
                  prevPmt: v342,
                  principalAmtCtpy: v349,
                  principalAmtOwner: v347,
                  principalTimeoutLimit: v335,
                  spotExchangeRate: v348,
                  swapRateCtpyPay: v351,
                  swapRateOwnerPay: v350,
                  termToMaturity: v339,
                  token_Owner_borrow_Ctpy_lend: v337,
                  token_Owner_lend_Ctpy_borrow: v338,
                  totalNumPmts: v341
                  };
                
                return v388;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v300, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364, v409, v410, v411, v412, v454] = svs;
              return (await ((async () => {
                
                const v388 = {
                  acceptedStatus: true,
                  contractAddress: v344,
                  ctpyAddress: v364,
                  defaultStatus: v334,
                  haircut: v353,
                  interestTimeoutLimit: v336,
                  lockPrincipal: v352,
                  nextPmt: v343,
                  ownerAddress: v345,
                  pmtFrequency: v340,
                  prevPmt: v342,
                  principalAmtCtpy: v349,
                  principalAmtOwner: v347,
                  principalTimeoutLimit: v335,
                  spotExchangeRate: v348,
                  swapRateCtpyPay: v351,
                  swapRateOwnerPay: v350,
                  termToMaturity: v339,
                  token_Owner_borrow_Ctpy_lend: v337,
                  token_Owner_lend_Ctpy_borrow: v338,
                  totalNumPmts: v341
                  };
                
                return v388;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364, v409, v411] = svs;
              return (await ((async () => {
                
                const v388 = {
                  acceptedStatus: true,
                  contractAddress: v344,
                  ctpyAddress: v364,
                  defaultStatus: v334,
                  haircut: v353,
                  interestTimeoutLimit: v336,
                  lockPrincipal: v352,
                  nextPmt: v343,
                  ownerAddress: v345,
                  pmtFrequency: v340,
                  prevPmt: v342,
                  principalAmtCtpy: v349,
                  principalAmtOwner: v347,
                  principalTimeoutLimit: v335,
                  spotExchangeRate: v348,
                  swapRateCtpyPay: v351,
                  swapRateOwnerPay: v350,
                  termToMaturity: v339,
                  token_Owner_borrow_Ctpy_lend: v337,
                  token_Owner_lend_Ctpy_borrow: v338,
                  totalNumPmts: v341
                  };
                
                return v388;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
              const [v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364, v409, v411] = svs;
              return (await ((async () => {
                
                const v388 = {
                  acceptedStatus: true,
                  contractAddress: v344,
                  ctpyAddress: v364,
                  defaultStatus: v334,
                  haircut: v353,
                  interestTimeoutLimit: v336,
                  lockPrincipal: v352,
                  nextPmt: v343,
                  ownerAddress: v345,
                  pmtFrequency: v340,
                  prevPmt: v342,
                  principalAmtCtpy: v349,
                  principalAmtOwner: v347,
                  principalTimeoutLimit: v335,
                  spotExchangeRate: v348,
                  swapRateCtpyPay: v351,
                  swapRateOwnerPay: v350,
                  termToMaturity: v339,
                  token_Owner_borrow_Ctpy_lend: v337,
                  token_Owner_lend_Ctpy_borrow: v338,
                  totalNumPmts: v341
                  };
                
                return v388;}))(...args));
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
  
  
  const v299 = stdlib.protect(ctc0, interact.passAddr, 'for Ctpy\'s interact field passAddr');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v302, time: v301, didSend: v23, from: v300 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v55, from: v328 } = txn2;
  ;
  const v332 = stdlib.addressEq(v300, v328);
  stdlib.assert(v332, {
    at: './index.rsh:114:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Ctpy'
    });
  const v333 = v329.acceptedStatus;
  const v334 = v329.defaultStatus;
  const v335 = v329.principalTimeoutLimit;
  const v336 = v329.interestTimeoutLimit;
  const v337 = v329.token_Owner_borrow_Ctpy_lend;
  const v338 = v329.token_Owner_lend_Ctpy_borrow;
  const v339 = v329.termToMaturity;
  const v340 = v329.pmtFrequency;
  const v341 = v329.totalNumPmts;
  const v342 = v329.prevPmt;
  const v343 = v329.nextPmt;
  const v344 = v329.contractAddress;
  const v345 = v329.ownerAddress;
  const v346 = v329.ctpyAddress;
  const v347 = v329.principalAmtOwner;
  const v348 = v329.spotExchangeRate;
  const v349 = v329.principalAmtCtpy;
  const v350 = v329.swapRateOwnerPay;
  const v351 = v329.swapRateCtpyPay;
  const v352 = v329.lockPrincipal;
  const v353 = v329.haircut;
  stdlib.protect(ctc5, await interact.getTokenIds(v337, v338), {
    at: './index.rsh:131:29:application',
    fs: ['at ./index.rsh:130:14:application call to [unknown function] (defined at: ./index.rsh:130:18:function exp)'],
    msg: 'getTokenIds',
    who: 'Ctpy'
    });
  stdlib.protect(ctc5, await interact.seeState(), {
    at: './index.rsh:132:26:application',
    fs: ['at ./index.rsh:130:14:application call to [unknown function] (defined at: ./index.rsh:130:18:function exp)'],
    msg: 'seeState',
    who: 'Ctpy'
    });
  const v361 = stdlib.protect(ctc1, await interact.acceptTrade(), {
    at: './index.rsh:133:53:application',
    fs: ['at ./index.rsh:130:14:application call to [unknown function] (defined at: ./index.rsh:130:18:function exp)'],
    msg: 'acceptTrade',
    who: 'Ctpy'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v300, v333, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v361, v299],
    evt_cnt: 2,
    funcNum: 2,
    lct: v330,
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:136:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v363, v364], secs: v366, time: v365, didSend: v97, from: v362 } = txn3;
      
      ;
      null;
      if (v363) {
        
        sim_r.isHalt = false;
        }
      else {
        const v544 = true;
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
  const {data: [v363, v364], secs: v366, time: v365, didSend: v97, from: v362 } = txn3;
  ;
  null;
  if (v363) {
    stdlib.protect(ctc5, await interact.seeState(), {
      at: './index.rsh:147:30:application',
      fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:31:function exp)'],
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
    const {data: [v409, v410, v411, v412, v413], secs: v415, time: v414, didSend: v154, from: v408 } = txn4;
    const v416 = stdlib.tokenEq(v409, v411);
    const v417 = v416 ? false : true;
    stdlib.assert(v417, {
      at: './index.rsh:156:15:dot',
      fs: [],
      msg: 'non-network tokens distinct',
      who: 'Ctpy'
      });
    ;
    ;
    ;
    const v432 = stdlib.addressEq(v300, v408);
    stdlib.assert(v432, {
      at: './index.rsh:156:15:dot',
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
    const {data: [], secs: v435, time: v434, didSend: v161, from: v433 } = txn5;
    ;
    ;
    const v445 = stdlib.addressEq(v300, v433);
    stdlib.assert(v445, {
      at: './index.rsh:158:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const v454 = stdlib.add(v434, v413);
    const v459 = stdlib.protect(ctc1, await interact.accSwap(v409, v410, v411, v412, v413), {
      at: './index.rsh:163:54:application',
      fs: ['at ./index.rsh:162:18:application call to [unknown function] (defined at: ./index.rsh:162:22:function exp)'],
      msg: 'accSwap',
      who: 'Ctpy'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v300, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364, v409, v410, v411, v412, v454],
      evt_cnt: 0,
      funcNum: 5,
      lct: v434,
      onlyIf: v459,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:164:14:dot', stdlib.UInt_max, '0'), [[v412, v411]]],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v462, time: v461, didSend: v177, from: v460 } = txn6;
        
        ;
        sim_r.txns.push({
          amt: v412,
          kind: 'to',
          tok: v411
          });
        sim_r.txns.push({
          amt: v412,
          kind: 'from',
          to: v300,
          tok: v411
          });
        sim_r.txns.push({
          amt: v410,
          kind: 'from',
          to: v362,
          tok: v409
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v454],
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
      const {data: [], secs: v512, time: v511, didSend: v202, from: v510 } = txn7;
      ;
      const v513 = stdlib.addressEq(v300, v510);
      stdlib.assert(v513, {
        at: './index.rsh:167:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      ;
      stdlib.protect(ctc5, await interact.seeTimeout(), {
        at: './index.rsh:169:60:application',
        fs: ['at ./index.rsh:169:19:application call to [unknown function] (defined at: ./index.rsh:169:38:function exp)'],
        msg: 'seeTimeout',
        who: 'Ctpy'
        });
      
      const txn8 = await (ctc.sendrecv({
        args: [v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364, v409, v411],
        evt_cnt: 0,
        funcNum: 7,
        lct: v511,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:188:10:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v533, time: v532, didSend: v225, from: v531 } = txn8;
          
          ;
          const v535 = true;
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v411
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v409
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
      const {data: [], secs: v533, time: v532, didSend: v225, from: v531 } = txn8;
      ;
      const v534 = stdlib.addressEq(v362, v531);
      stdlib.assert(v534, {
        at: './index.rsh:188:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v535 = true;
      null;
      return;
      
      
      
      }
    else {
      const {data: [], secs: v462, time: v461, didSend: v177, from: v460 } = txn6;
      ;
      ;
      const v472 = stdlib.addressEq(v362, v460);
      stdlib.assert(v472, {
        at: './index.rsh:164:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      ;
      ;
      const txn7 = await (ctc.sendrecv({
        args: [v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364, v409, v411],
        evt_cnt: 0,
        funcNum: 8,
        lct: v461,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:188:10:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v499, time: v498, didSend: v225, from: v497 } = txn7;
          
          ;
          const v501 = true;
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v411
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v409
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
      const {data: [], secs: v499, time: v498, didSend: v225, from: v497 } = txn7;
      ;
      const v500 = stdlib.addressEq(v362, v497);
      stdlib.assert(v500, {
        at: './index.rsh:188:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v501 = true;
      null;
      return;
      
      
      }
    
    
    
    
    
    }
  else {
    const v544 = true;
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
  
  
  const v294 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v295 = [v294, v294];
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:106:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:106:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v302, time: v301, didSend: v23, from: v300 } = txn1;
      
      ;
      const v303 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v302, time: v301, didSend: v23, from: v300 } = txn1;
  ;
  const v303 = await ctc.getContractAddress();
  const v306 = stdlib.protect(ctc4, await interact.setInitTerms(v303), {
    at: './index.rsh:112:59:application',
    fs: ['at ./index.rsh:111:15:application call to [unknown function] (defined at: ./index.rsh:111:19:function exp)'],
    msg: 'setInitTerms',
    who: 'Owner'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v300, v306],
    evt_cnt: 1,
    funcNum: 1,
    lct: v301,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:114:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v329], secs: v331, time: v330, didSend: v55, from: v328 } = txn2;
      
      ;
      const v333 = v329.acceptedStatus;
      const v334 = v329.defaultStatus;
      const v335 = v329.principalTimeoutLimit;
      const v336 = v329.interestTimeoutLimit;
      const v337 = v329.token_Owner_borrow_Ctpy_lend;
      const v338 = v329.token_Owner_lend_Ctpy_borrow;
      const v339 = v329.termToMaturity;
      const v340 = v329.pmtFrequency;
      const v341 = v329.totalNumPmts;
      const v342 = v329.prevPmt;
      const v343 = v329.nextPmt;
      const v344 = v329.contractAddress;
      const v345 = v329.ownerAddress;
      const v346 = v329.ctpyAddress;
      const v347 = v329.principalAmtOwner;
      const v348 = v329.spotExchangeRate;
      const v349 = v329.principalAmtCtpy;
      const v350 = v329.swapRateOwnerPay;
      const v351 = v329.swapRateCtpyPay;
      const v352 = v329.lockPrincipal;
      const v353 = v329.haircut;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v55, from: v328 } = txn2;
  ;
  const v332 = stdlib.addressEq(v300, v328);
  stdlib.assert(v332, {
    at: './index.rsh:114:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v333 = v329.acceptedStatus;
  const v334 = v329.defaultStatus;
  const v335 = v329.principalTimeoutLimit;
  const v336 = v329.interestTimeoutLimit;
  const v337 = v329.token_Owner_borrow_Ctpy_lend;
  const v338 = v329.token_Owner_lend_Ctpy_borrow;
  const v339 = v329.termToMaturity;
  const v340 = v329.pmtFrequency;
  const v341 = v329.totalNumPmts;
  const v342 = v329.prevPmt;
  const v343 = v329.nextPmt;
  const v344 = v329.contractAddress;
  const v345 = v329.ownerAddress;
  const v346 = v329.ctpyAddress;
  const v347 = v329.principalAmtOwner;
  const v348 = v329.spotExchangeRate;
  const v349 = v329.principalAmtCtpy;
  const v350 = v329.swapRateOwnerPay;
  const v351 = v329.swapRateCtpyPay;
  const v352 = v329.lockPrincipal;
  const v353 = v329.haircut;
  stdlib.protect(ctc5, await interact.seeState(), {
    at: './index.rsh:124:28:application',
    fs: ['at ./index.rsh:124:28:application call to [unknown function] (defined at: ./index.rsh:124:28:function exp)', 'at ./index.rsh:124:28:application call to "liftedInteract" (defined at: ./index.rsh:124:28:application)'],
    msg: 'seeState',
    who: 'Owner'
    });
  
  stdlib.protect(ctc5, await interact.isInitialised(), {
    at: './index.rsh:127:33:application',
    fs: ['at ./index.rsh:127:33:application call to [unknown function] (defined at: ./index.rsh:127:33:function exp)', 'at ./index.rsh:127:33:application call to "liftedInteract" (defined at: ./index.rsh:127:33:application)'],
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
  const {data: [v363, v364], secs: v366, time: v365, didSend: v97, from: v362 } = txn3;
  ;
  null;
  if (v363) {
    stdlib.protect(ctc5, await interact.seeState(), {
      at: './index.rsh:147:30:application',
      fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:31:function exp)'],
      msg: 'seeState',
      who: 'Owner'
      });
    
    const v395 = stdlib.protect(ctc6, await interact.getSwap(), {
      at: './index.rsh:154:93:application',
      fs: ['at ./index.rsh:153:19:application call to [unknown function] (defined at: ./index.rsh:153:23:function exp)'],
      msg: 'getSwap',
      who: 'Owner'
      });
    const v396 = v395[stdlib.checkedBigNumberify('./index.rsh:154:93:application', stdlib.UInt_max, '0')];
    const v397 = v395[stdlib.checkedBigNumberify('./index.rsh:154:93:application', stdlib.UInt_max, '1')];
    const v398 = v395[stdlib.checkedBigNumberify('./index.rsh:154:93:application', stdlib.UInt_max, '2')];
    const v399 = v395[stdlib.checkedBigNumberify('./index.rsh:154:93:application', stdlib.UInt_max, '3')];
    const v400 = v395[stdlib.checkedBigNumberify('./index.rsh:154:93:application', stdlib.UInt_max, '4')];
    const v406 = stdlib.tokenEq(v396, v398);
    const v407 = v406 ? false : true;
    stdlib.assert(v407, {
      at: './index.rsh:155:19:application',
      fs: ['at ./index.rsh:153:19:application call to [unknown function] (defined at: ./index.rsh:153:23:function exp)'],
      msg: null,
      who: 'Owner'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v300, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364, v396, v397, v398, v399, v400],
      evt_cnt: 5,
      funcNum: 3,
      lct: v365,
      onlyIf: true,
      out_tys: [ctc3, ctc2, ctc3, ctc2, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:156:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v409, v410, v411, v412, v413], secs: v415, time: v414, didSend: v154, from: v408 } = txn4;
        
        const v418 = v295[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '0')];
        const v420 = v418[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '1')];
        const v421 = v418[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '2')];
        const v422 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v420, v421];
        const v423 = stdlib.Array_set(v295, stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '0'), v422);
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          kind: 'init',
          tok: v409
          });
        const v425 = v423[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '1')];
        const v427 = v425[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '1')];
        const v428 = v425[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '2')];
        const v429 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v427, v428];
        const v430 = stdlib.Array_set(v423, stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '1'), v429);
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          kind: 'init',
          tok: v411
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
    const {data: [v409, v410, v411, v412, v413], secs: v415, time: v414, didSend: v154, from: v408 } = txn4;
    const v416 = stdlib.tokenEq(v409, v411);
    const v417 = v416 ? false : true;
    stdlib.assert(v417, {
      at: './index.rsh:156:15:dot',
      fs: [],
      msg: 'non-network tokens distinct',
      who: 'Owner'
      });
    const v418 = v295[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '0')];
    const v420 = v418[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '1')];
    const v421 = v418[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '2')];
    const v422 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v420, v421];
    const v423 = stdlib.Array_set(v295, stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '0'), v422);
    ;
    const v425 = v423[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '1')];
    const v427 = v425[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '1')];
    const v428 = v425[stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '2')];
    const v429 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v427, v428];
    const v430 = stdlib.Array_set(v423, stdlib.checkedBigNumberify('./index.rsh:156:15:dot', stdlib.UInt_max, '1'), v429);
    ;
    ;
    const v432 = stdlib.addressEq(v300, v408);
    stdlib.assert(v432, {
      at: './index.rsh:156:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const txn5 = await (ctc.sendrecv({
      args: [v300, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364, v409, v410, v411, v412, v413],
      evt_cnt: 0,
      funcNum: 4,
      lct: v414,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '0'), [[v410, v409]]],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v435, time: v434, didSend: v161, from: v433 } = txn5;
        
        ;
        const v436 = v430[stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '0')];
        const v437 = v436[stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '0')];
        const v438 = stdlib.add(v437, v410);
        const v441 = v436[stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '1')];
        const v442 = v436[stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '2')];
        const v443 = [v438, v441, v442];
        const v444 = stdlib.Array_set(v430, stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '0'), v443);
        sim_r.txns.push({
          amt: v410,
          kind: 'to',
          tok: v409
          });
        const v446 = v444[stdlib.checkedBigNumberify('./index.rsh:160:40:application', stdlib.UInt_max, '0')];
        const v447 = v446[stdlib.checkedBigNumberify('./index.rsh:160:40:application', stdlib.UInt_max, '0')];
        const v454 = stdlib.add(v434, v413);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc3, ctc2, ctc3, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v435, time: v434, didSend: v161, from: v433 } = txn5;
    ;
    const v436 = v430[stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '0')];
    const v437 = v436[stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '0')];
    const v438 = stdlib.add(v437, v410);
    const v441 = v436[stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '1')];
    const v442 = v436[stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '2')];
    const v443 = [v438, v441, v442];
    const v444 = stdlib.Array_set(v430, stdlib.checkedBigNumberify('./index.rsh:158:15:dot', stdlib.UInt_max, '0'), v443);
    ;
    const v445 = stdlib.addressEq(v300, v433);
    stdlib.assert(v445, {
      at: './index.rsh:158:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const v446 = v444[stdlib.checkedBigNumberify('./index.rsh:160:40:application', stdlib.UInt_max, '0')];
    const v447 = v446[stdlib.checkedBigNumberify('./index.rsh:160:40:application', stdlib.UInt_max, '0')];
    const v454 = stdlib.add(v434, v413);
    stdlib.protect(ctc5, await interact.checkBal(v447), {
      at: './index.rsh:160:32:application',
      fs: ['at ./index.rsh:160:32:application call to [unknown function] (defined at: ./index.rsh:160:32:function exp)', 'at ./index.rsh:160:32:application call to "liftedInteract" (defined at: ./index.rsh:160:32:application)'],
      msg: 'checkBal',
      who: 'Owner'
      });
    
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: ['time', v454],
      waitIfNotPresent: false
      }));
    if (txn6.didTimeout) {
      const txn7 = await (ctc.sendrecv({
        args: [v300, v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v347, v348, v349, v350, v351, v352, v353, v362, v364, v409, v410, v411, v412, v454],
        evt_cnt: 0,
        funcNum: 6,
        lct: v434,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:167:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v512, time: v511, didSend: v202, from: v510 } = txn7;
          
          ;
          const v519 = stdlib.sub(v447, v410);
          const v522 = v446[stdlib.checkedBigNumberify('./index.rsh:168:44:application', stdlib.UInt_max, '1')];
          const v523 = v446[stdlib.checkedBigNumberify('./index.rsh:168:44:application', stdlib.UInt_max, '2')];
          const v524 = [v519, v522, v523];
          const v525 = stdlib.Array_set(v444, stdlib.checkedBigNumberify('./index.rsh:168:44:application', stdlib.UInt_max, '0'), v524);
          sim_r.txns.push({
            amt: v410,
            kind: 'from',
            to: v300,
            tok: v409
            });
          
          const v528 = v525[stdlib.checkedBigNumberify('./index.rsh:172:46:application', stdlib.UInt_max, '0')];
          const v529 = v528[stdlib.checkedBigNumberify('./index.rsh:172:46:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc3, ctc2, ctc3, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v512, time: v511, didSend: v202, from: v510 } = txn7;
      ;
      const v513 = stdlib.addressEq(v300, v510);
      stdlib.assert(v513, {
        at: './index.rsh:167:21:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const v519 = stdlib.sub(v447, v410);
      const v522 = v446[stdlib.checkedBigNumberify('./index.rsh:168:44:application', stdlib.UInt_max, '1')];
      const v523 = v446[stdlib.checkedBigNumberify('./index.rsh:168:44:application', stdlib.UInt_max, '2')];
      const v524 = [v519, v522, v523];
      const v525 = stdlib.Array_set(v444, stdlib.checkedBigNumberify('./index.rsh:168:44:application', stdlib.UInt_max, '0'), v524);
      ;
      stdlib.protect(ctc5, await interact.seeTimeout(), {
        at: './index.rsh:169:60:application',
        fs: ['at ./index.rsh:169:19:application call to [unknown function] (defined at: ./index.rsh:169:38:function exp)'],
        msg: 'seeTimeout',
        who: 'Owner'
        });
      
      const v528 = v525[stdlib.checkedBigNumberify('./index.rsh:172:46:application', stdlib.UInt_max, '0')];
      const v529 = v528[stdlib.checkedBigNumberify('./index.rsh:172:46:application', stdlib.UInt_max, '0')];
      stdlib.protect(ctc5, await interact.checkBal(v529), {
        at: './index.rsh:172:38:application',
        fs: ['at ./index.rsh:172:38:application call to [unknown function] (defined at: ./index.rsh:172:38:function exp)', 'at ./index.rsh:172:38:application call to "liftedInteract" (defined at: ./index.rsh:172:38:application)'],
        msg: 'checkBal',
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
      const {data: [], secs: v533, time: v532, didSend: v225, from: v531 } = txn8;
      ;
      const v534 = stdlib.addressEq(v362, v531);
      stdlib.assert(v534, {
        at: './index.rsh:188:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const v535 = true;
      null;
      return;
      
      
      
      }
    else {
      const {data: [], secs: v462, time: v461, didSend: v177, from: v460 } = txn6;
      ;
      ;
      const v472 = stdlib.addressEq(v362, v460);
      stdlib.assert(v472, {
        at: './index.rsh:164:14:dot',
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
      const {data: [], secs: v499, time: v498, didSend: v225, from: v497 } = txn7;
      ;
      const v500 = stdlib.addressEq(v362, v497);
      stdlib.assert(v500, {
        at: './index.rsh:188:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const v501 = true;
      null;
      return;
      
      
      }
    
    
    
    
    
    }
  else {
    const v544 = true;
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
    at: './index.rsh:108:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:121:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:149:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:157:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:159:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:171:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:194:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:179:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:194:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:184:17:after expr stmt semicolon',
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
