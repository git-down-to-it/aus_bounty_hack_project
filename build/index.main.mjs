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
  return {
    Announcer: {
      accepted: [ctc0, ctc1],
      contractEnd: [ctc0],
      default: [ctc1],
      executed: [ctc0]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['acceptedStatus', ctc2], ['defaultStatus', ctc2], ['principalTimeoutLimit', ctc3], ['interestTimeoutLimit', ctc3], ['token_Owner_borrow_Ctpy_lend', ctc1], ['token_Owner_lend_Ctpy_borrow', ctc1], ['termToMaturity', ctc3], ['pmtFrequency', ctc3], ['totalNumPmts', ctc3], ['prevPmt', ctc3], ['nextPmt', ctc3], ['contractAddress', ctc0], ['ownerAddress', ctc0], ['ctpyAddress', ctc0], ['principalAmtOwner', ctc3], ['spotExchangeRate', ctc3], ['principalAmtCtpy', ctc3], ['swapRateOwnerPay', ctc3], ['swapRateCtpyPay', ctc3], ['lockPrincipal', ctc2], ['haircut', ctc3]]);
  
  return {
    infos: {
      TradeState: {
        read: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v589] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v589, v623, v624, v644, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v657, v658, v659, v660, v661, v662, v663, v664] = svs;
              return (await ((async () => {
                
                const v665 = {
                  acceptedStatus: v644,
                  contractAddress: v655,
                  ctpyAddress: v657,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v665;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v589, v623, v624, v644, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v657, v658, v659, v660, v661, v662, v663, v664, v670, v672] = svs;
              return (await ((async () => {
                
                const v665 = {
                  acceptedStatus: v644,
                  contractAddress: v655,
                  ctpyAddress: v657,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v665;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v589, v623, v624, v644, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v657, v658, v659, v660, v661, v662, v663, v664, v670, v672, v675] = svs;
              return (await ((async () => {
                
                const v665 = {
                  acceptedStatus: v644,
                  contractAddress: v655,
                  ctpyAddress: v657,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v665;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v589, v623, v624, v644, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v657, v658, v659, v660, v661, v662, v663, v664, v670, v672] = svs;
              return (await ((async () => {
                
                const v665 = {
                  acceptedStatus: v644,
                  contractAddress: v655,
                  ctpyAddress: v657,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v665;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672] = svs;
              return (await ((async () => {
                
                const v749 = {
                  acceptedStatus: true,
                  contractAddress: v655,
                  ctpyAddress: v672,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v749;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672, v773, v774, v775, v776] = svs;
              return (await ((async () => {
                
                const v749 = {
                  acceptedStatus: true,
                  contractAddress: v655,
                  ctpyAddress: v672,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v749;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
              const [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672, v774, v775, v776, v792, v793] = svs;
              return (await ((async () => {
                
                const v749 = {
                  acceptedStatus: true,
                  contractAddress: v655,
                  ctpyAddress: v672,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v749;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
              const [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672, v774, v775, v792, v793, v848] = svs;
              return (await ((async () => {
                
                const v749 = {
                  acceptedStatus: true,
                  contractAddress: v655,
                  ctpyAddress: v672,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v749;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
              const [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672] = svs;
              return (await ((async () => {
                
                const v749 = {
                  acceptedStatus: true,
                  contractAddress: v655,
                  ctpyAddress: v672,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v749;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'))) {
              const [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v672] = svs;
              return (await ((async () => {
                
                const v749 = {
                  acceptedStatus: true,
                  contractAddress: v655,
                  ctpyAddress: v672,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v749;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'))) {
              const [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672] = svs;
              return (await ((async () => {
                
                const v749 = {
                  acceptedStatus: true,
                  contractAddress: v655,
                  ctpyAddress: v672,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v749;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'))) {
              const [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v672] = svs;
              return (await ((async () => {
                
                const v749 = {
                  acceptedStatus: true,
                  contractAddress: v655,
                  ctpyAddress: v672,
                  defaultStatus: v645,
                  haircut: v664,
                  interestTimeoutLimit: v647,
                  lockPrincipal: v663,
                  nextPmt: v654,
                  ownerAddress: v656,
                  pmtFrequency: v651,
                  prevPmt: v653,
                  principalAmtCtpy: v660,
                  principalAmtOwner: v658,
                  principalTimeoutLimit: v646,
                  spotExchangeRate: v659,
                  swapRateCtpyPay: v662,
                  swapRateOwnerPay: v661,
                  termToMaturity: v650,
                  token_Owner_borrow_Ctpy_lend: v648,
                  token_Owner_lend_Ctpy_borrow: v649,
                  totalNumPmts: v652
                  };
                
                return v749;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc4
          }
        }
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3],
      3: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0],
      4: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc0],
      5: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0],
      6: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0],
      7: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3],
      8: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3, ctc2, ctc1, ctc3],
      11: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0],
      12: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0],
      14: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0],
      15: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0]
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
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
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
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v591, time: v590, didSend: v23, from: v589 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc4, ctc3, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v622, v623, v624], secs: v626, time: v625, didSend: v64, from: v621 } = txn2;
  const v627 = stdlib.tokenEq(v623, v624);
  const v628 = v627 ? false : true;
  stdlib.assert(v628, {
    at: './index.rsh:112:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  ;
  ;
  ;
  const v643 = stdlib.addressEq(v589, v621);
  stdlib.assert(v643, {
    at: './index.rsh:112:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v644 = v622.acceptedStatus;
  const v645 = v622.defaultStatus;
  const v646 = v622.principalTimeoutLimit;
  const v647 = v622.interestTimeoutLimit;
  const v648 = v622.token_Owner_borrow_Ctpy_lend;
  const v649 = v622.token_Owner_lend_Ctpy_borrow;
  const v650 = v622.termToMaturity;
  const v651 = v622.pmtFrequency;
  const v652 = v622.totalNumPmts;
  const v653 = v622.prevPmt;
  const v654 = v622.nextPmt;
  const v655 = v622.contractAddress;
  const v656 = v622.ownerAddress;
  const v657 = v622.ctpyAddress;
  const v658 = v622.principalAmtOwner;
  const v659 = v622.spotExchangeRate;
  const v660 = v622.principalAmtCtpy;
  const v661 = v622.swapRateOwnerPay;
  const v662 = v622.swapRateCtpyPay;
  const v663 = v622.lockPrincipal;
  const v664 = v622.haircut;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v671, v672], secs: v674, time: v673, didSend: v100, from: v670 } = txn3;
  ;
  null;
  if (v671) {
    const txn4 = await (ctc.sendrecv({
      args: [v589, v623, v624, v644, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v657, v658, v659, v660, v661, v662, v663, v664, v670, v672],
      evt_cnt: 0,
      funcNum: 3,
      lct: v673,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:146:26:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:146:32:decimal', stdlib.UInt_max, '50000'), v623]]],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v677, time: v676, didSend: v106, from: v675 } = txn4;
        
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:146:32:decimal', stdlib.UInt_max, '50000'),
          kind: 'to',
          tok: v623
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3, ctc3, ctc0, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v677, time: v676, didSend: v106, from: v675 } = txn4;
    ;
    ;
    const txn5 = await (ctc.sendrecv({
      args: [v589, v623, v624, v644, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v657, v658, v659, v660, v661, v662, v663, v664, v670, v672, v675],
      evt_cnt: 0,
      funcNum: 4,
      lct: v676,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:148:26:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:148:32:decimal', stdlib.UInt_max, '5000'), v624]]],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v689, time: v688, didSend: v113, from: v687 } = txn5;
        
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:148:32:decimal', stdlib.UInt_max, '5000'),
          kind: 'to',
          tok: v624
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:150:18:decimal', stdlib.UInt_max, '50000'),
          kind: 'from',
          to: v670,
          tok: v623
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:151:18:decimal', stdlib.UInt_max, '5000'),
          kind: 'from',
          to: v670,
          tok: v624
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3, ctc3, ctc0, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v689, time: v688, didSend: v113, from: v687 } = txn5;
    ;
    ;
    const v699 = stdlib.addressEq(v675, v687);
    stdlib.assert(v699, {
      at: './index.rsh:148:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    ;
    ;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v726, time: v725, didSend: v126, from: v724 } = txn6;
    ;
    const v727 = stdlib.addressEq(v670, v724);
    stdlib.assert(v727, {
      at: './index.rsh:153:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 4,
      funcNum: 6,
      out_tys: [ctc2, ctc2, ctc2, ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v773, v774, v775, v776], secs: v778, time: v777, didSend: v182, from: v772 } = txn7;
    ;
    const v779 = stdlib.addressEq(v589, v772);
    stdlib.assert(v779, {
      at: './index.rsh:179:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v780 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:180:37:decimal', stdlib.UInt_max, '0'));
    const v781 = stdlib.gt(v774, stdlib.checkedBigNumberify('./index.rsh:180:51:decimal', stdlib.UInt_max, '0'));
    const v782 = v780 ? v781 : false;
    const v783 = stdlib.gt(v775, stdlib.checkedBigNumberify('./index.rsh:180:65:decimal', stdlib.UInt_max, '0'));
    const v784 = v782 ? v783 : false;
    const v785 = stdlib.gt(v776, stdlib.checkedBigNumberify('./index.rsh:180:77:decimal', stdlib.UInt_max, '0'));
    const v786 = v784 ? v785 : false;
    stdlib.assert(v786, {
      at: './index.rsh:180:28:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v791, time: v790, didSend: v200, from: v789 } = txn8;
    const v792 = stdlib.eq(v773, stdlib.checkedBigNumberify('./index.rsh:185:50:decimal', stdlib.UInt_max, '0'));
    const v793 = v792 ? v624 : v623;
    ;
    ;
    const v833 = stdlib.addressEq(v589, v789);
    stdlib.assert(v833, {
      at: './index.rsh:185:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v838], secs: v840, time: v839, didSend: v210, from: v837 } = txn9;
    ;
    const v841 = stdlib.addressEq(v670, v837);
    stdlib.assert(v841, {
      at: './index.rsh:200:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v848 = stdlib.add(v839, v776);
    const txn10 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 9,
      out_tys: [],
      timeoutAt: ['time', v848],
      waitIfNotPresent: false
      }));
    if (txn10.didTimeout) {
      const txn11 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1055, time: v1054, didSend: v258, from: v1053 } = txn11;
      ;
      const v1056 = stdlib.addressEq(v589, v1053);
      stdlib.assert(v1056, {
        at: './index.rsh:205:39:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
        });
      ;
      null;
      return;
      
      }
    else {
      const {data: [], secs: v854, time: v853, didSend: v221, from: v852 } = txn10;
      const v856 = v792 ? v623 : v624;
      ;
      ;
      const v896 = stdlib.addressEq(v670, v852);
      stdlib.assert(v896, {
        at: './index.rsh:202:26:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Creator'
        });
      ;
      ;
      if (v792) {
        const v1018 = true;
        null;
        const txn11 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 11,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1021, time: v1020, didSend: v282, from: v1019 } = txn11;
        ;
        const v1022 = stdlib.addressEq(v670, v1019);
        stdlib.assert(v1022, {
          at: './index.rsh:267:10:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Creator'
          });
        const txn12 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 12,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1025, time: v1024, didSend: v287, from: v1023 } = txn12;
        ;
        const v1026 = stdlib.addressEq(v589, v1023);
        stdlib.assert(v1026, {
          at: './index.rsh:269:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Creator'
          });
        const v1027 = true;
        null;
        return;
        
        
        
        
        }
      else {
        const txn11 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 13,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1038, time: v1037, didSend: v282, from: v1036 } = txn11;
        ;
        const v1039 = stdlib.addressEq(v670, v1036);
        stdlib.assert(v1039, {
          at: './index.rsh:267:10:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Creator'
          });
        const txn12 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 14,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1042, time: v1041, didSend: v287, from: v1040 } = txn12;
        ;
        const v1043 = stdlib.addressEq(v589, v1040);
        stdlib.assert(v1043, {
          at: './index.rsh:269:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Creator'
          });
        const v1044 = true;
        null;
        return;
        
        
        
        
        }}
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
  else {
    const v1124 = true;
    null;
    return;
    }
  
  
  
  
  
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
  
  
  const v588 = stdlib.protect(ctc0, interact.passAddr, 'for Ctpy\'s interact field passAddr');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v591, time: v590, didSend: v23, from: v589 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc4, ctc3, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v622, v623, v624], secs: v626, time: v625, didSend: v64, from: v621 } = txn2;
  const v627 = stdlib.tokenEq(v623, v624);
  const v628 = v627 ? false : true;
  stdlib.assert(v628, {
    at: './index.rsh:112:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Ctpy'
    });
  ;
  ;
  ;
  const v643 = stdlib.addressEq(v589, v621);
  stdlib.assert(v643, {
    at: './index.rsh:112:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Ctpy'
    });
  const v644 = v622.acceptedStatus;
  const v645 = v622.defaultStatus;
  const v646 = v622.principalTimeoutLimit;
  const v647 = v622.interestTimeoutLimit;
  const v648 = v622.token_Owner_borrow_Ctpy_lend;
  const v649 = v622.token_Owner_lend_Ctpy_borrow;
  const v650 = v622.termToMaturity;
  const v651 = v622.pmtFrequency;
  const v652 = v622.totalNumPmts;
  const v653 = v622.prevPmt;
  const v654 = v622.nextPmt;
  const v655 = v622.contractAddress;
  const v656 = v622.ownerAddress;
  const v657 = v622.ctpyAddress;
  const v658 = v622.principalAmtOwner;
  const v659 = v622.spotExchangeRate;
  const v660 = v622.principalAmtCtpy;
  const v661 = v622.swapRateOwnerPay;
  const v662 = v622.swapRateCtpyPay;
  const v663 = v622.lockPrincipal;
  const v664 = v622.haircut;
  stdlib.protect(ctc5, await interact.getTokenIds(v623, v624), {
    at: './index.rsh:125:29:application',
    fs: ['at ./index.rsh:124:14:application call to [unknown function] (defined at: ./index.rsh:124:18:function exp)'],
    msg: 'getTokenIds',
    who: 'Ctpy'
    });
  stdlib.protect(ctc5, await interact.seeState(false), {
    at: './index.rsh:126:26:application',
    fs: ['at ./index.rsh:124:14:application call to [unknown function] (defined at: ./index.rsh:124:18:function exp)'],
    msg: 'seeState',
    who: 'Ctpy'
    });
  const v669 = stdlib.protect(ctc1, await interact.acceptTrade(), {
    at: './index.rsh:127:53:application',
    fs: ['at ./index.rsh:124:14:application call to [unknown function] (defined at: ./index.rsh:124:18:function exp)'],
    msg: 'acceptTrade',
    who: 'Ctpy'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v589, v623, v624, v644, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v657, v658, v659, v660, v661, v662, v663, v664, v669, v588],
    evt_cnt: 2,
    funcNum: 2,
    lct: v625,
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:130:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v671, v672], secs: v674, time: v673, didSend: v100, from: v670 } = txn3;
      
      ;
      null;
      if (v671) {
        sim_r.isHalt = false;
        }
      else {
        const v1124 = true;
        null;
        sim_r.txns.push({
          kind: 'halt',
          tok: v624
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v623
          })
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
    tys: [ctc0, ctc3, ctc3, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v671, v672], secs: v674, time: v673, didSend: v100, from: v670 } = txn3;
  ;
  null;
  if (v671) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v677, time: v676, didSend: v106, from: v675 } = txn4;
    ;
    ;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v689, time: v688, didSend: v113, from: v687 } = txn5;
    ;
    ;
    const v699 = stdlib.addressEq(v675, v687);
    stdlib.assert(v699, {
      at: './index.rsh:148:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    ;
    ;
    const txn6 = await (ctc.sendrecv({
      args: [v589, v623, v624, v644, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v657, v658, v659, v660, v661, v662, v663, v664, v670, v672],
      evt_cnt: 0,
      funcNum: 5,
      lct: v688,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:153:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v726, time: v725, didSend: v126, from: v724 } = txn6;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc3, ctc3, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v726, time: v725, didSend: v126, from: v724 } = txn6;
    ;
    const v727 = stdlib.addressEq(v670, v724);
    stdlib.assert(v727, {
      at: './index.rsh:153:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    stdlib.protect(ctc5, await interact.seeState(false), {
      at: './index.rsh:162:30:application',
      fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:31:function exp)'],
      msg: 'seeState',
      who: 'Ctpy'
      });
    
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 4,
      funcNum: 6,
      out_tys: [ctc2, ctc2, ctc2, ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v773, v774, v775, v776], secs: v778, time: v777, didSend: v182, from: v772 } = txn7;
    ;
    const v779 = stdlib.addressEq(v589, v772);
    stdlib.assert(v779, {
      at: './index.rsh:179:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const v780 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:180:37:decimal', stdlib.UInt_max, '0'));
    const v781 = stdlib.gt(v774, stdlib.checkedBigNumberify('./index.rsh:180:51:decimal', stdlib.UInt_max, '0'));
    const v782 = v780 ? v781 : false;
    const v783 = stdlib.gt(v775, stdlib.checkedBigNumberify('./index.rsh:180:65:decimal', stdlib.UInt_max, '0'));
    const v784 = v782 ? v783 : false;
    const v785 = stdlib.gt(v776, stdlib.checkedBigNumberify('./index.rsh:180:77:decimal', stdlib.UInt_max, '0'));
    const v786 = v784 ? v785 : false;
    stdlib.assert(v786, {
      at: './index.rsh:180:28:application',
      fs: [],
      msg: null,
      who: 'Ctpy'
      });
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v791, time: v790, didSend: v200, from: v789 } = txn8;
    const v792 = stdlib.eq(v773, stdlib.checkedBigNumberify('./index.rsh:185:50:decimal', stdlib.UInt_max, '0'));
    const v793 = v792 ? v624 : v623;
    ;
    ;
    const v833 = stdlib.addressEq(v589, v789);
    stdlib.assert(v833, {
      at: './index.rsh:185:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const v836 = stdlib.protect(ctc1, await interact.accSwap(v773, v774, v775, v776), {
      at: './index.rsh:199:66:application',
      fs: ['at ./index.rsh:198:30:application call to [unknown function] (defined at: ./index.rsh:198:34:function exp)'],
      msg: 'accSwap',
      who: 'Ctpy'
      });
    
    const txn9 = await (ctc.sendrecv({
      args: [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672, v774, v775, v776, v792, v793, v836],
      evt_cnt: 1,
      funcNum: 8,
      lct: v790,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:200:26:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn9) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v838], secs: v840, time: v839, didSend: v210, from: v837 } = txn9;
        
        ;
        const v848 = stdlib.add(v839, v776);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc1, ctc3, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v838], secs: v840, time: v839, didSend: v210, from: v837 } = txn9;
    ;
    const v841 = stdlib.addressEq(v670, v837);
    stdlib.assert(v841, {
      at: './index.rsh:200:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const v848 = stdlib.add(v839, v776);
    const v851 = v792 ? v623 : v624;
    
    const txn10 = await (ctc.sendrecv({
      args: [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672, v774, v775, v792, v793, v848],
      evt_cnt: 0,
      funcNum: 9,
      lct: v839,
      onlyIf: v838,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:202:26:dot', stdlib.UInt_max, '0'), [[v775, v851]]],
      sim_p: (async (txn10) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v854, time: v853, didSend: v221, from: v852 } = txn10;
        
        const v856 = v792 ? v623 : v624;
        ;
        sim_r.txns.push({
          amt: v775,
          kind: 'to',
          tok: v856
          });
        sim_r.txns.push({
          amt: v775,
          kind: 'from',
          to: v589,
          tok: v856
          });
        sim_r.txns.push({
          amt: v774,
          kind: 'from',
          to: v670,
          tok: v793
          });
        
        if (v792) {
          const v1018 = true;
          null;
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v848],
      tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc1, ctc3, ctc2],
      waitIfNotPresent: false
      }));
    if (txn10.didTimeout) {
      const txn11 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1055, time: v1054, didSend: v258, from: v1053 } = txn11;
      ;
      const v1056 = stdlib.addressEq(v589, v1053);
      stdlib.assert(v1056, {
        at: './index.rsh:205:39:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      ;
      null;
      return;
      
      }
    else {
      const {data: [], secs: v854, time: v853, didSend: v221, from: v852 } = txn10;
      const v856 = v792 ? v623 : v624;
      ;
      ;
      const v896 = stdlib.addressEq(v670, v852);
      stdlib.assert(v896, {
        at: './index.rsh:202:26:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      ;
      ;
      stdlib.protect(ctc5, await interact.seeTransfer(), {
        at: './index.rsh:213:67:application',
        fs: ['at ./index.rsh:213:25:application call to [unknown function] (defined at: ./index.rsh:213:44:function exp)'],
        msg: 'seeTransfer',
        who: 'Ctpy'
        });
      
      if (v792) {
        const v1018 = true;
        null;
        const txn11 = await (ctc.sendrecv({
          args: [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672],
          evt_cnt: 0,
          funcNum: 11,
          lct: v853,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:267:10:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn11) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1021, time: v1020, didSend: v282, from: v1019 } = txn11;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1021, time: v1020, didSend: v282, from: v1019 } = txn11;
        ;
        const v1022 = stdlib.addressEq(v670, v1019);
        stdlib.assert(v1022, {
          at: './index.rsh:267:10:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Ctpy'
          });
        const txn12 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 12,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1025, time: v1024, didSend: v287, from: v1023 } = txn12;
        ;
        const v1026 = stdlib.addressEq(v589, v1023);
        stdlib.assert(v1026, {
          at: './index.rsh:269:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Ctpy'
          });
        const v1027 = true;
        null;
        return;
        
        
        
        
        }
      else {
        const txn11 = await (ctc.sendrecv({
          args: [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672],
          evt_cnt: 0,
          funcNum: 13,
          lct: v853,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:267:10:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn11) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1038, time: v1037, didSend: v282, from: v1036 } = txn11;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1038, time: v1037, didSend: v282, from: v1036 } = txn11;
        ;
        const v1039 = stdlib.addressEq(v670, v1036);
        stdlib.assert(v1039, {
          at: './index.rsh:267:10:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Ctpy'
          });
        const txn12 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 14,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1042, time: v1041, didSend: v287, from: v1040 } = txn12;
        ;
        const v1043 = stdlib.addressEq(v589, v1040);
        stdlib.assert(v1043, {
          at: './index.rsh:269:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Ctpy'
          });
        const v1044 = true;
        null;
        return;
        
        
        
        
        }}
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
  else {
    const v1124 = true;
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
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:101:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:101:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v591, time: v590, didSend: v23, from: v589 } = txn1;
      
      ;
      const v592 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v591, time: v590, didSend: v23, from: v589 } = txn1;
  ;
  const v592 = await ctc.getContractAddress();
  const v595 = stdlib.protect(ctc4, await interact.setInitTerms(v592), {
    at: './index.rsh:107:59:application',
    fs: ['at ./index.rsh:106:15:application call to [unknown function] (defined at: ./index.rsh:106:19:function exp)'],
    msg: 'setInitTerms',
    who: 'Owner'
    });
  const v614 = v595.token_Owner_borrow_Ctpy_lend;
  const v615 = v595.token_Owner_lend_Ctpy_borrow;
  const v619 = stdlib.tokenEq(v614, v615);
  const v620 = v619 ? false : true;
  stdlib.assert(v620, {
    at: './index.rsh:110:14:application',
    fs: ['at ./index.rsh:106:15:application call to [unknown function] (defined at: ./index.rsh:106:19:function exp)'],
    msg: null,
    who: 'Owner'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v589, v595, v614, v615],
    evt_cnt: 3,
    funcNum: 1,
    lct: v590,
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:112:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v622, v623, v624], secs: v626, time: v625, didSend: v64, from: v621 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v623
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v624
        });
      ;
      const v644 = v622.acceptedStatus;
      const v645 = v622.defaultStatus;
      const v646 = v622.principalTimeoutLimit;
      const v647 = v622.interestTimeoutLimit;
      const v648 = v622.token_Owner_borrow_Ctpy_lend;
      const v649 = v622.token_Owner_lend_Ctpy_borrow;
      const v650 = v622.termToMaturity;
      const v651 = v622.pmtFrequency;
      const v652 = v622.totalNumPmts;
      const v653 = v622.prevPmt;
      const v654 = v622.nextPmt;
      const v655 = v622.contractAddress;
      const v656 = v622.ownerAddress;
      const v657 = v622.ctpyAddress;
      const v658 = v622.principalAmtOwner;
      const v659 = v622.spotExchangeRate;
      const v660 = v622.principalAmtCtpy;
      const v661 = v622.swapRateOwnerPay;
      const v662 = v622.swapRateCtpyPay;
      const v663 = v622.lockPrincipal;
      const v664 = v622.haircut;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc4, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v622, v623, v624], secs: v626, time: v625, didSend: v64, from: v621 } = txn2;
  const v627 = stdlib.tokenEq(v623, v624);
  const v628 = v627 ? false : true;
  stdlib.assert(v628, {
    at: './index.rsh:112:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Owner'
    });
  ;
  ;
  ;
  const v643 = stdlib.addressEq(v589, v621);
  stdlib.assert(v643, {
    at: './index.rsh:112:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v644 = v622.acceptedStatus;
  const v645 = v622.defaultStatus;
  const v646 = v622.principalTimeoutLimit;
  const v647 = v622.interestTimeoutLimit;
  const v648 = v622.token_Owner_borrow_Ctpy_lend;
  const v649 = v622.token_Owner_lend_Ctpy_borrow;
  const v650 = v622.termToMaturity;
  const v651 = v622.pmtFrequency;
  const v652 = v622.totalNumPmts;
  const v653 = v622.prevPmt;
  const v654 = v622.nextPmt;
  const v655 = v622.contractAddress;
  const v656 = v622.ownerAddress;
  const v657 = v622.ctpyAddress;
  const v658 = v622.principalAmtOwner;
  const v659 = v622.spotExchangeRate;
  const v660 = v622.principalAmtCtpy;
  const v661 = v622.swapRateOwnerPay;
  const v662 = v622.swapRateCtpyPay;
  const v663 = v622.lockPrincipal;
  const v664 = v622.haircut;
  stdlib.protect(ctc5, await interact.seeState(true), {
    at: './index.rsh:121:28:application',
    fs: ['at ./index.rsh:121:28:application call to [unknown function] (defined at: ./index.rsh:121:28:function exp)', 'at ./index.rsh:121:28:application call to "liftedInteract" (defined at: ./index.rsh:121:28:application)'],
    msg: 'seeState',
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
  const {data: [v671, v672], secs: v674, time: v673, didSend: v100, from: v670 } = txn3;
  ;
  null;
  if (v671) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v677, time: v676, didSend: v106, from: v675 } = txn4;
    ;
    ;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v689, time: v688, didSend: v113, from: v687 } = txn5;
    ;
    ;
    const v699 = stdlib.addressEq(v675, v687);
    stdlib.assert(v699, {
      at: './index.rsh:148:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    ;
    ;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v726, time: v725, didSend: v126, from: v724 } = txn6;
    ;
    const v727 = stdlib.addressEq(v670, v724);
    stdlib.assert(v727, {
      at: './index.rsh:153:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    stdlib.protect(ctc5, await interact.seeState(false), {
      at: './index.rsh:162:30:application',
      fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:31:function exp)'],
      msg: 'seeState',
      who: 'Owner'
      });
    
    const v756 = stdlib.protect(ctc6, await interact.getSwap(), {
      at: './index.rsh:177:93:application',
      fs: ['at ./index.rsh:176:31:application call to [unknown function] (defined at: ./index.rsh:176:35:function exp)'],
      msg: 'getSwap',
      who: 'Owner'
      });
    const v757 = v756[stdlib.checkedBigNumberify('./index.rsh:177:93:application', stdlib.UInt_max, '0')];
    const v758 = v756[stdlib.checkedBigNumberify('./index.rsh:177:93:application', stdlib.UInt_max, '1')];
    const v759 = v756[stdlib.checkedBigNumberify('./index.rsh:177:93:application', stdlib.UInt_max, '2')];
    const v760 = v756[stdlib.checkedBigNumberify('./index.rsh:177:93:application', stdlib.UInt_max, '3')];
    const v765 = stdlib.gt(v757, stdlib.checkedBigNumberify('./index.rsh:178:39:decimal', stdlib.UInt_max, '0'));
    const v766 = stdlib.gt(v758, stdlib.checkedBigNumberify('./index.rsh:178:53:decimal', stdlib.UInt_max, '0'));
    const v767 = v765 ? v766 : false;
    const v768 = stdlib.gt(v759, stdlib.checkedBigNumberify('./index.rsh:178:67:decimal', stdlib.UInt_max, '0'));
    const v769 = v767 ? v768 : false;
    const v770 = stdlib.gt(v760, stdlib.checkedBigNumberify('./index.rsh:178:79:decimal', stdlib.UInt_max, '0'));
    const v771 = v769 ? v770 : false;
    stdlib.assert(v771, {
      at: './index.rsh:178:30:application',
      fs: ['at ./index.rsh:176:31:application call to [unknown function] (defined at: ./index.rsh:176:35:function exp)'],
      msg: null,
      who: 'Owner'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672, v757, v758, v759, v760],
      evt_cnt: 4,
      funcNum: 6,
      lct: v725,
      onlyIf: true,
      out_tys: [ctc2, ctc2, ctc2, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:179:27:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v773, v774, v775, v776], secs: v778, time: v777, didSend: v182, from: v772 } = txn7;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3, ctc3, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v773, v774, v775, v776], secs: v778, time: v777, didSend: v182, from: v772 } = txn7;
    ;
    const v779 = stdlib.addressEq(v589, v772);
    stdlib.assert(v779, {
      at: './index.rsh:179:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const v780 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:180:37:decimal', stdlib.UInt_max, '0'));
    const v781 = stdlib.gt(v774, stdlib.checkedBigNumberify('./index.rsh:180:51:decimal', stdlib.UInt_max, '0'));
    const v782 = v780 ? v781 : false;
    const v783 = stdlib.gt(v775, stdlib.checkedBigNumberify('./index.rsh:180:65:decimal', stdlib.UInt_max, '0'));
    const v784 = v782 ? v783 : false;
    const v785 = stdlib.gt(v776, stdlib.checkedBigNumberify('./index.rsh:180:77:decimal', stdlib.UInt_max, '0'));
    const v786 = v784 ? v785 : false;
    stdlib.assert(v786, {
      at: './index.rsh:180:28:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v787 = stdlib.eq(v773, stdlib.checkedBigNumberify('./index.rsh:185:50:decimal', stdlib.UInt_max, '0'));
    const v788 = v787 ? v624 : v623;
    
    const txn8 = await (ctc.sendrecv({
      args: [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672, v773, v774, v775, v776],
      evt_cnt: 0,
      funcNum: 7,
      lct: v777,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:185:27:dot', stdlib.UInt_max, '0'), [[v774, v788]]],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v791, time: v790, didSend: v200, from: v789 } = txn8;
        
        const v792 = stdlib.eq(v773, stdlib.checkedBigNumberify('./index.rsh:185:50:decimal', stdlib.UInt_max, '0'));
        const v793 = v792 ? v624 : v623;
        ;
        sim_r.txns.push({
          amt: v774,
          kind: 'to',
          tok: v793
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3, ctc3, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v791, time: v790, didSend: v200, from: v789 } = txn8;
    const v792 = stdlib.eq(v773, stdlib.checkedBigNumberify('./index.rsh:185:50:decimal', stdlib.UInt_max, '0'));
    const v793 = v792 ? v624 : v623;
    ;
    ;
    const v833 = stdlib.addressEq(v589, v789);
    stdlib.assert(v833, {
      at: './index.rsh:185:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v838], secs: v840, time: v839, didSend: v210, from: v837 } = txn9;
    ;
    const v841 = stdlib.addressEq(v670, v837);
    stdlib.assert(v841, {
      at: './index.rsh:200:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const v848 = stdlib.add(v839, v776);
    const txn10 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 9,
      out_tys: [],
      timeoutAt: ['time', v848],
      waitIfNotPresent: false
      }));
    if (txn10.didTimeout) {
      const txn11 = await (ctc.sendrecv({
        args: [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v670, v672, v774, v775, v792, v793, v848],
        evt_cnt: 0,
        funcNum: 10,
        lct: v839,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:205:39:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn11) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1055, time: v1054, didSend: v258, from: v1053 } = txn11;
          
          ;
          sim_r.txns.push({
            amt: v774,
            kind: 'from',
            to: v589,
            tok: v793
            });
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v624
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v623
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
        tys: [ctc1, ctc3, ctc3, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1055, time: v1054, didSend: v258, from: v1053 } = txn11;
      ;
      const v1056 = stdlib.addressEq(v589, v1053);
      stdlib.assert(v1056, {
        at: './index.rsh:205:39:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      ;
      null;
      return;
      
      }
    else {
      const {data: [], secs: v854, time: v853, didSend: v221, from: v852 } = txn10;
      const v856 = v792 ? v623 : v624;
      ;
      ;
      const v896 = stdlib.addressEq(v670, v852);
      stdlib.assert(v896, {
        at: './index.rsh:202:26:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      ;
      ;
      stdlib.protect(ctc5, await interact.seeTransfer(), {
        at: './index.rsh:213:67:application',
        fs: ['at ./index.rsh:213:25:application call to [unknown function] (defined at: ./index.rsh:213:44:function exp)'],
        msg: 'seeTransfer',
        who: 'Owner'
        });
      
      if (v792) {
        const v1018 = true;
        null;
        const txn11 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 11,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1021, time: v1020, didSend: v282, from: v1019 } = txn11;
        ;
        const v1022 = stdlib.addressEq(v670, v1019);
        stdlib.assert(v1022, {
          at: './index.rsh:267:10:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Owner'
          });
        const txn12 = await (ctc.sendrecv({
          args: [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v672],
          evt_cnt: 0,
          funcNum: 12,
          lct: v1020,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:269:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn12) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1025, time: v1024, didSend: v287, from: v1023 } = txn12;
            
            ;
            const v1027 = true;
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v624
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v623
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
          tys: [ctc1, ctc3, ctc3, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1025, time: v1024, didSend: v287, from: v1023 } = txn12;
        ;
        const v1026 = stdlib.addressEq(v589, v1023);
        stdlib.assert(v1026, {
          at: './index.rsh:269:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Owner'
          });
        const v1027 = true;
        null;
        return;
        
        
        
        
        }
      else {
        const txn11 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 13,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1038, time: v1037, didSend: v282, from: v1036 } = txn11;
        ;
        const v1039 = stdlib.addressEq(v670, v1036);
        stdlib.assert(v1039, {
          at: './index.rsh:267:10:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Owner'
          });
        const txn12 = await (ctc.sendrecv({
          args: [v589, v623, v624, v645, v646, v647, v648, v649, v650, v651, v652, v653, v654, v655, v656, v658, v659, v660, v661, v662, v663, v664, v672],
          evt_cnt: 0,
          funcNum: 14,
          lct: v1037,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:269:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn12) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1042, time: v1041, didSend: v287, from: v1040 } = txn12;
            
            ;
            const v1044 = true;
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v624
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v623
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
          tys: [ctc1, ctc3, ctc3, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1042, time: v1041, didSend: v287, from: v1040 } = txn12;
        ;
        const v1043 = stdlib.addressEq(v589, v1040);
        stdlib.assert(v1043, {
          at: './index.rsh:269:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Owner'
          });
        const v1044 = true;
        null;
        return;
        
        
        
        
        }}
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
  else {
    const v1124 = true;
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
  extraPages: 3,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 3,
  stateSize: 363,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:103:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:118:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:136:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:147:17:after expr stmt semicolon',
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
    at: './index.rsh:160:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:184:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:194:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:201:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:208:41:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:217:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:268:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:271:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:217:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:268:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:271:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:263:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Creator": Creator,
  "Ctpy": Ctpy,
  "Owner": Owner
  };
export const _APIs = {
  };
