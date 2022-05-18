// Automatically generated with Reach 0.1.10 (c0bba7d2)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c0bba7d2)';
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
              const [v548] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v548, v582, v583, v603, v604, v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616, v617, v618, v619, v620, v621, v622, v623] = svs;
              return (await ((async () => {
                
                const v624 = {
                  acceptedStatus: v603,
                  contractAddress: v614,
                  ctpyAddress: v616,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v613,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v612,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v624;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v548, v582, v583, v603, v604, v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616, v617, v618, v619, v620, v621, v622, v623, v629, v631] = svs;
              return (await ((async () => {
                
                const v624 = {
                  acceptedStatus: v603,
                  contractAddress: v614,
                  ctpyAddress: v616,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v613,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v612,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v624;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v548, v582, v583, v603, v604, v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616, v617, v618, v619, v620, v621, v622, v623, v629, v631] = svs;
              return (await ((async () => {
                
                const v624 = {
                  acceptedStatus: v603,
                  contractAddress: v614,
                  ctpyAddress: v616,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v613,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v612,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v624;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v548, v582, v583, v603, v604, v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616, v617, v618, v619, v620, v621, v622, v623, v629, v631] = svs;
              return (await ((async () => {
                
                const v624 = {
                  acceptedStatus: v603,
                  contractAddress: v614,
                  ctpyAddress: v616,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v613,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v612,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v624;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631] = svs;
              return (await ((async () => {
                
                const v719 = {
                  acceptedStatus: true,
                  contractAddress: v614,
                  ctpyAddress: v631,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v613,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v612,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v719;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
              const [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v1015] = svs;
              return (await ((async () => {
                
                const v1016 = {
                  acceptedStatus: true,
                  contractAddress: v614,
                  ctpyAddress: v631,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v728,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v1015,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v1016;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
              const [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v631, v728, v1015] = svs;
              return (await ((async () => {
                
                const v1016 = {
                  acceptedStatus: true,
                  contractAddress: v614,
                  ctpyAddress: v631,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v728,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v1015,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v1016;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
              const [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v750] = svs;
              return (await ((async () => {
                
                const v751 = {
                  acceptedStatus: true,
                  contractAddress: v614,
                  ctpyAddress: v631,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v728,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v750,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v751;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'))) {
              const [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v750, v771, v772, v773] = svs;
              return (await ((async () => {
                
                const v751 = {
                  acceptedStatus: true,
                  contractAddress: v614,
                  ctpyAddress: v631,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v728,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v750,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v751;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'))) {
              const [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v750, v772, v773, v790, v791] = svs;
              return (await ((async () => {
                
                const v751 = {
                  acceptedStatus: true,
                  contractAddress: v614,
                  ctpyAddress: v631,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v728,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v750,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v751;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'))) {
              const [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v750, v772, v773, v790, v791] = svs;
              return (await ((async () => {
                
                const v751 = {
                  acceptedStatus: true,
                  contractAddress: v614,
                  ctpyAddress: v631,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v728,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v750,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v751;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'))) {
              const [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v750, v790] = svs;
              return (await ((async () => {
                
                const v751 = {
                  acceptedStatus: true,
                  contractAddress: v614,
                  ctpyAddress: v631,
                  defaultStatus: v604,
                  haircut: v623,
                  interestTimeoutLimit: v606,
                  lockPrincipal: v622,
                  nextPmt: v728,
                  ownerAddress: v615,
                  pmtFrequency: v610,
                  prevPmt: v750,
                  principalAmtCtpy: v619,
                  principalAmtOwner: v617,
                  principalTimeoutLimit: v605,
                  spotExchangeRate: v618,
                  swapRateCtpyPay: v621,
                  swapRateOwnerPay: v620,
                  termToMaturity: v609,
                  token_Owner_borrow_Ctpy_lend: v607,
                  token_Owner_lend_Ctpy_borrow: v608,
                  totalNumPmts: v611
                  };
                
                return v751;}))(...args));
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
      4: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0],
      5: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0],
      6: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0],
      8: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3],
      9: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc3, ctc3],
      11: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3],
      12: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3],
      13: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc2, ctc1],
      14: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc2, ctc1],
      15: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3, ctc2]
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
  
  
  const v547 = stdlib.protect(ctc0, interact.passAddr, 'for Ctpy\'s interact field passAddr');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v550, time: v549, didSend: v23, from: v548 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc4, ctc3, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v581, v582, v583], secs: v585, time: v584, didSend: v64, from: v580 } = txn2;
  const v586 = stdlib.tokenEq(v582, v583);
  const v587 = v586 ? false : true;
  stdlib.assert(v587, {
    at: './index.rsh:109:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Ctpy'
    });
  ;
  ;
  ;
  const v602 = stdlib.addressEq(v548, v580);
  stdlib.assert(v602, {
    at: './index.rsh:109:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Ctpy'
    });
  const v603 = v581.acceptedStatus;
  const v604 = v581.defaultStatus;
  const v605 = v581.principalTimeoutLimit;
  const v606 = v581.interestTimeoutLimit;
  const v607 = v581.token_Owner_borrow_Ctpy_lend;
  const v608 = v581.token_Owner_lend_Ctpy_borrow;
  const v609 = v581.termToMaturity;
  const v610 = v581.pmtFrequency;
  const v611 = v581.totalNumPmts;
  const v612 = v581.prevPmt;
  const v613 = v581.nextPmt;
  const v614 = v581.contractAddress;
  const v615 = v581.ownerAddress;
  const v616 = v581.ctpyAddress;
  const v617 = v581.principalAmtOwner;
  const v618 = v581.spotExchangeRate;
  const v619 = v581.principalAmtCtpy;
  const v620 = v581.swapRateOwnerPay;
  const v621 = v581.swapRateCtpyPay;
  const v622 = v581.lockPrincipal;
  const v623 = v581.haircut;
  stdlib.protect(ctc5, await interact.getTokenIds(v582, v583), {
    at: './index.rsh:122:29:application',
    fs: ['at ./index.rsh:121:14:application call to [unknown function] (defined at: ./index.rsh:121:18:function exp)'],
    msg: 'getTokenIds',
    who: 'Ctpy'
    });
  stdlib.protect(ctc5, await interact.seeState(false), {
    at: './index.rsh:123:26:application',
    fs: ['at ./index.rsh:121:14:application call to [unknown function] (defined at: ./index.rsh:121:18:function exp)'],
    msg: 'seeState',
    who: 'Ctpy'
    });
  const v628 = stdlib.protect(ctc1, await interact.acceptTrade(), {
    at: './index.rsh:124:53:application',
    fs: ['at ./index.rsh:121:14:application call to [unknown function] (defined at: ./index.rsh:121:18:function exp)'],
    msg: 'acceptTrade',
    who: 'Ctpy'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v548, v582, v583, v603, v604, v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616, v617, v618, v619, v620, v621, v622, v623, v628, v547],
    evt_cnt: 2,
    funcNum: 2,
    lct: v584,
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:127:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v630, v631], secs: v633, time: v632, didSend: v100, from: v629 } = txn3;
      
      ;
      null;
      if (v630) {
        sim_r.isHalt = false;
        }
      else {
        const v635 = true;
        null;
        sim_r.txns.push({
          kind: 'halt',
          tok: v583
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v582
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
  const {data: [v630, v631], secs: v633, time: v632, didSend: v100, from: v629 } = txn3;
  ;
  null;
  if (v630) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v646, time: v645, didSend: v116, from: v644 } = txn4;
    ;
    ;
    const v656 = stdlib.addressEq(v548, v644);
    stdlib.assert(v656, {
      at: './index.rsh:143:15:dot',
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
    const {data: [], secs: v659, time: v658, didSend: v123, from: v657 } = txn5;
    ;
    ;
    const v669 = stdlib.addressEq(v548, v657);
    stdlib.assert(v669, {
      at: './index.rsh:145:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    ;
    ;
    const txn6 = await (ctc.sendrecv({
      args: [v548, v582, v583, v603, v604, v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616, v617, v618, v619, v620, v621, v622, v623, v629, v631],
      evt_cnt: 0,
      funcNum: 5,
      lct: v658,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:149:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v696, time: v695, didSend: v136, from: v694 } = txn6;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc3, ctc3, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v696, time: v695, didSend: v136, from: v694 } = txn6;
    ;
    const v697 = stdlib.addressEq(v629, v694);
    stdlib.assert(v697, {
      at: './index.rsh:149:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    stdlib.protect(ctc5, await interact.seeState(false), {
      at: './index.rsh:158:30:application',
      fs: ['at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:31:function exp)'],
      msg: 'seeState',
      who: 'Ctpy'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631],
      evt_cnt: 0,
      funcNum: 6,
      lct: v695,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:160:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v726, time: v725, didSend: v169, from: v724 } = txn7;
        
        ;
        const v728 = v613;
        const v729 = v725;
        
        if (await (async () => {
          const v749 = stdlib.le(v728, v611);
          
          return v749;})()) {
          const v750 = stdlib.sub(v728, stdlib.checkedBigNumberify('./index.rsh:168:74:decimal', stdlib.UInt_max, '1'));
          sim_r.isHalt = false;
          }
        else {
          const v1015 = stdlib.sub(v728, stdlib.checkedBigNumberify('./index.rsh:168:74:decimal', stdlib.UInt_max, '1'));
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v726, time: v725, didSend: v169, from: v724 } = txn7;
    ;
    const v727 = stdlib.addressEq(v629, v724);
    stdlib.assert(v727, {
      at: './index.rsh:160:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    let v728 = v613;
    let v729 = v725;
    
    while (await (async () => {
      const v749 = stdlib.le(v728, v611);
      
      return v749;})()) {
      const v750 = stdlib.sub(v728, stdlib.checkedBigNumberify('./index.rsh:168:74:decimal', stdlib.UInt_max, '1'));
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 4,
        funcNum: 10,
        out_tys: [ctc2, ctc2, ctc2, ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v771, v772, v773, v774], secs: v776, time: v775, didSend: v215, from: v770 } = txn8;
      ;
      const v777 = stdlib.addressEq(v548, v770);
      stdlib.assert(v777, {
        at: './index.rsh:178:19:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v778 = stdlib.ge(v771, stdlib.checkedBigNumberify('./index.rsh:179:30:decimal', stdlib.UInt_max, '0'));
      const v779 = stdlib.gt(v772, stdlib.checkedBigNumberify('./index.rsh:179:44:decimal', stdlib.UInt_max, '0'));
      const v780 = v778 ? v779 : false;
      const v781 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:179:58:decimal', stdlib.UInt_max, '0'));
      const v782 = v780 ? v781 : false;
      const v783 = stdlib.gt(v774, stdlib.checkedBigNumberify('./index.rsh:179:70:decimal', stdlib.UInt_max, '0'));
      const v784 = v782 ? v783 : false;
      stdlib.assert(v784, {
        at: './index.rsh:179:20:application',
        fs: [],
        msg: null,
        who: 'Ctpy'
        });
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 11,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v789, time: v788, didSend: v233, from: v787 } = txn9;
      const v790 = stdlib.eq(v771, stdlib.checkedBigNumberify('./index.rsh:185:42:decimal', stdlib.UInt_max, '0'));
      const v791 = v790 ? v583 : v582;
      ;
      ;
      const v831 = stdlib.addressEq(v548, v787);
      stdlib.assert(v831, {
        at: './index.rsh:185:19:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v834 = stdlib.protect(ctc1, await interact.accSwap(v771, v772, v773, v774), {
        at: './index.rsh:189:58:application',
        fs: ['at ./index.rsh:188:22:application call to [unknown function] (defined at: ./index.rsh:188:26:function exp)'],
        msg: 'accSwap',
        who: 'Ctpy'
        });
      
      const txn10 = await (ctc.sendrecv({
        args: [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v750, v772, v773, v790, v791, v834],
        evt_cnt: 1,
        funcNum: 12,
        lct: v788,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:190:18:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn10) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v836], secs: v838, time: v837, didSend: v243, from: v835 } = txn10;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc1, ctc3, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v836], secs: v838, time: v837, didSend: v243, from: v835 } = txn10;
      ;
      const v839 = stdlib.addressEq(v629, v835);
      stdlib.assert(v839, {
        at: './index.rsh:190:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v841 = v790 ? v582 : v583;
      
      const txn11 = await (ctc.sendrecv({
        args: [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v750, v772, v773, v790, v791],
        evt_cnt: 0,
        funcNum: 13,
        lct: v837,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:193:18:dot', stdlib.UInt_max, '0'), [[v773, v841]]],
        sim_p: (async (txn11) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v844, time: v843, didSend: v254, from: v842 } = txn11;
          
          const v846 = v790 ? v582 : v583;
          ;
          sim_r.txns.push({
            amt: v773,
            kind: 'to',
            tok: v846
            });
          sim_r.txns.push({
            kind: 'from',
            to: v548,
            tok: v846
            });
          sim_r.txns.push({
            kind: 'from',
            to: v629,
            tok: v791
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc1, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v844, time: v843, didSend: v254, from: v842 } = txn11;
      const v846 = v790 ? v582 : v583;
      ;
      ;
      const v886 = stdlib.addressEq(v629, v842);
      stdlib.assert(v886, {
        at: './index.rsh:193:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      ;
      ;
      const txn12 = await (ctc.sendrecv({
        args: [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v750, v790],
        evt_cnt: 0,
        funcNum: 14,
        lct: v843,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:199:18:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn12) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1007, time: v1006, didSend: v271, from: v1005 } = txn12;
          
          ;
          
          if (v790) {
            const v1012 = true;
            null;
            const v1013 = stdlib.add(v728, stdlib.checkedBigNumberify('./index.rsh:207:33:decimal', stdlib.UInt_max, '1'));
            const cv728 = v1013;
            const cv729 = v1006;
            
            await (async () => {
              const v728 = cv728;
              const v729 = cv729;
              
              if (await (async () => {
                const v749 = stdlib.le(v728, v611);
                
                return v749;})()) {
                const v750 = stdlib.sub(v728, stdlib.checkedBigNumberify('./index.rsh:168:74:decimal', stdlib.UInt_max, '1'));
                sim_r.isHalt = false;
                }
              else {
                const v1015 = stdlib.sub(v728, stdlib.checkedBigNumberify('./index.rsh:168:74:decimal', stdlib.UInt_max, '1'));
                sim_r.isHalt = false;
                }})();}
          else {
            const v1014 = stdlib.add(v728, stdlib.checkedBigNumberify('./index.rsh:207:33:decimal', stdlib.UInt_max, '1'));
            const cv728 = v1014;
            const cv729 = v1006;
            
            await (async () => {
              const v728 = cv728;
              const v729 = cv729;
              
              if (await (async () => {
                const v749 = stdlib.le(v728, v611);
                
                return v749;})()) {
                const v750 = stdlib.sub(v728, stdlib.checkedBigNumberify('./index.rsh:168:74:decimal', stdlib.UInt_max, '1'));
                sim_r.isHalt = false;
                }
              else {
                const v1015 = stdlib.sub(v728, stdlib.checkedBigNumberify('./index.rsh:168:74:decimal', stdlib.UInt_max, '1'));
                sim_r.isHalt = false;
                }})();}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1007, time: v1006, didSend: v271, from: v1005 } = txn12;
      ;
      const v1008 = stdlib.addressEq(v629, v1005);
      stdlib.assert(v1008, {
        at: './index.rsh:199:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      stdlib.protect(ctc5, await interact.seeTransfer(), {
        at: './index.rsh:201:59:application',
        fs: ['at ./index.rsh:201:17:application call to [unknown function] (defined at: ./index.rsh:201:36:function exp)'],
        msg: 'seeTransfer',
        who: 'Ctpy'
        });
      
      if (v790) {
        const v1012 = true;
        null;
        const v1013 = stdlib.add(v728, stdlib.checkedBigNumberify('./index.rsh:207:33:decimal', stdlib.UInt_max, '1'));
        const cv728 = v1013;
        const cv729 = v1006;
        
        v728 = cv728;
        v729 = cv729;
        
        continue;}
      else {
        const v1014 = stdlib.add(v728, stdlib.checkedBigNumberify('./index.rsh:207:33:decimal', stdlib.UInt_max, '1'));
        const cv728 = v1014;
        const cv729 = v1006;
        
        v728 = cv728;
        v729 = cv729;
        
        continue;}
      
      
      
      
      
      
      
      
      
      }
    const v1015 = stdlib.sub(v728, stdlib.checkedBigNumberify('./index.rsh:168:74:decimal', stdlib.UInt_max, '1'));
    const txn8 = await (ctc.sendrecv({
      args: [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v1015],
      evt_cnt: 0,
      funcNum: 8,
      lct: v729,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:223:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1019, time: v1018, didSend: v287, from: v1017 } = txn8;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1019, time: v1018, didSend: v287, from: v1017 } = txn8;
    ;
    const v1020 = stdlib.addressEq(v629, v1017);
    stdlib.assert(v1020, {
      at: './index.rsh:223:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 9,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1023, time: v1022, didSend: v292, from: v1021 } = txn9;
    ;
    const v1024 = stdlib.addressEq(v548, v1021);
    stdlib.assert(v1024, {
      at: './index.rsh:225:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const v1025 = true;
    null;
    return;
    
    
    
    
    
    
    
    
    
    
    
    
    }
  else {
    const v635 = true;
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
    lct: stdlib.checkedBigNumberify('./index.rsh:98:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:98:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v550, time: v549, didSend: v23, from: v548 } = txn1;
      
      ;
      const v551 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v550, time: v549, didSend: v23, from: v548 } = txn1;
  ;
  const v551 = await ctc.getContractAddress();
  const v554 = stdlib.protect(ctc4, await interact.setInitTerms(v551), {
    at: './index.rsh:104:59:application',
    fs: ['at ./index.rsh:103:15:application call to [unknown function] (defined at: ./index.rsh:103:19:function exp)'],
    msg: 'setInitTerms',
    who: 'Owner'
    });
  const v573 = v554.token_Owner_borrow_Ctpy_lend;
  const v574 = v554.token_Owner_lend_Ctpy_borrow;
  const v578 = stdlib.tokenEq(v573, v574);
  const v579 = v578 ? false : true;
  stdlib.assert(v579, {
    at: './index.rsh:107:14:application',
    fs: ['at ./index.rsh:103:15:application call to [unknown function] (defined at: ./index.rsh:103:19:function exp)'],
    msg: null,
    who: 'Owner'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v548, v554, v573, v574],
    evt_cnt: 3,
    funcNum: 1,
    lct: v549,
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:109:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v581, v582, v583], secs: v585, time: v584, didSend: v64, from: v580 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v582
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v583
        });
      ;
      const v603 = v581.acceptedStatus;
      const v604 = v581.defaultStatus;
      const v605 = v581.principalTimeoutLimit;
      const v606 = v581.interestTimeoutLimit;
      const v607 = v581.token_Owner_borrow_Ctpy_lend;
      const v608 = v581.token_Owner_lend_Ctpy_borrow;
      const v609 = v581.termToMaturity;
      const v610 = v581.pmtFrequency;
      const v611 = v581.totalNumPmts;
      const v612 = v581.prevPmt;
      const v613 = v581.nextPmt;
      const v614 = v581.contractAddress;
      const v615 = v581.ownerAddress;
      const v616 = v581.ctpyAddress;
      const v617 = v581.principalAmtOwner;
      const v618 = v581.spotExchangeRate;
      const v619 = v581.principalAmtCtpy;
      const v620 = v581.swapRateOwnerPay;
      const v621 = v581.swapRateCtpyPay;
      const v622 = v581.lockPrincipal;
      const v623 = v581.haircut;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc4, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v581, v582, v583], secs: v585, time: v584, didSend: v64, from: v580 } = txn2;
  const v586 = stdlib.tokenEq(v582, v583);
  const v587 = v586 ? false : true;
  stdlib.assert(v587, {
    at: './index.rsh:109:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Owner'
    });
  ;
  ;
  ;
  const v602 = stdlib.addressEq(v548, v580);
  stdlib.assert(v602, {
    at: './index.rsh:109:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v603 = v581.acceptedStatus;
  const v604 = v581.defaultStatus;
  const v605 = v581.principalTimeoutLimit;
  const v606 = v581.interestTimeoutLimit;
  const v607 = v581.token_Owner_borrow_Ctpy_lend;
  const v608 = v581.token_Owner_lend_Ctpy_borrow;
  const v609 = v581.termToMaturity;
  const v610 = v581.pmtFrequency;
  const v611 = v581.totalNumPmts;
  const v612 = v581.prevPmt;
  const v613 = v581.nextPmt;
  const v614 = v581.contractAddress;
  const v615 = v581.ownerAddress;
  const v616 = v581.ctpyAddress;
  const v617 = v581.principalAmtOwner;
  const v618 = v581.spotExchangeRate;
  const v619 = v581.principalAmtCtpy;
  const v620 = v581.swapRateOwnerPay;
  const v621 = v581.swapRateCtpyPay;
  const v622 = v581.lockPrincipal;
  const v623 = v581.haircut;
  stdlib.protect(ctc5, await interact.seeState(true), {
    at: './index.rsh:118:28:application',
    fs: ['at ./index.rsh:118:28:application call to [unknown function] (defined at: ./index.rsh:118:28:function exp)', 'at ./index.rsh:118:28:application call to "liftedInteract" (defined at: ./index.rsh:118:28:application)'],
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
  const {data: [v630, v631], secs: v633, time: v632, didSend: v100, from: v629 } = txn3;
  ;
  null;
  if (v630) {
    const txn4 = await (ctc.sendrecv({
      args: [v548, v582, v583, v603, v604, v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616, v617, v618, v619, v620, v621, v622, v623, v629, v631],
      evt_cnt: 0,
      funcNum: 3,
      lct: v632,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:143:15:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:143:27:application', stdlib.UInt_max, '50000000000'), v582]]],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v646, time: v645, didSend: v116, from: v644 } = txn4;
        
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:143:27:application', stdlib.UInt_max, '50000000000'),
          kind: 'to',
          tok: v582
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3, ctc3, ctc0, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v646, time: v645, didSend: v116, from: v644 } = txn4;
    ;
    ;
    const v656 = stdlib.addressEq(v548, v644);
    stdlib.assert(v656, {
      at: './index.rsh:143:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const txn5 = await (ctc.sendrecv({
      args: [v548, v582, v583, v603, v604, v605, v606, v607, v608, v609, v610, v611, v612, v613, v614, v615, v616, v617, v618, v619, v620, v621, v622, v623, v629, v631],
      evt_cnt: 0,
      funcNum: 4,
      lct: v645,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:145:15:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:145:26:application', stdlib.UInt_max, '5000000000'), v583]]],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v659, time: v658, didSend: v123, from: v657 } = txn5;
        
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:145:26:application', stdlib.UInt_max, '5000000000'),
          kind: 'to',
          tok: v583
          });
        sim_r.txns.push({
          kind: 'from',
          to: v629,
          tok: v582
          });
        sim_r.txns.push({
          kind: 'from',
          to: v629,
          tok: v583
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3, ctc3, ctc0, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v659, time: v658, didSend: v123, from: v657 } = txn5;
    ;
    ;
    const v669 = stdlib.addressEq(v548, v657);
    stdlib.assert(v669, {
      at: './index.rsh:145:15:dot',
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
    const {data: [], secs: v696, time: v695, didSend: v136, from: v694 } = txn6;
    ;
    const v697 = stdlib.addressEq(v629, v694);
    stdlib.assert(v697, {
      at: './index.rsh:149:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    stdlib.protect(ctc5, await interact.seeState(false), {
      at: './index.rsh:158:30:application',
      fs: ['at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:31:function exp)'],
      msg: 'seeState',
      who: 'Owner'
      });
    
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v726, time: v725, didSend: v169, from: v724 } = txn7;
    ;
    const v727 = stdlib.addressEq(v629, v724);
    stdlib.assert(v727, {
      at: './index.rsh:160:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    let v728 = v613;
    let v729 = v725;
    
    while (await (async () => {
      const v749 = stdlib.le(v728, v611);
      
      return v749;})()) {
      const v750 = stdlib.sub(v728, stdlib.checkedBigNumberify('./index.rsh:168:74:decimal', stdlib.UInt_max, '1'));
      const v754 = stdlib.protect(ctc6, await interact.getSwap(), {
        at: './index.rsh:176:85:application',
        fs: ['at ./index.rsh:175:23:application call to [unknown function] (defined at: ./index.rsh:175:27:function exp)'],
        msg: 'getSwap',
        who: 'Owner'
        });
      const v755 = v754[stdlib.checkedBigNumberify('./index.rsh:176:85:application', stdlib.UInt_max, '0')];
      const v756 = v754[stdlib.checkedBigNumberify('./index.rsh:176:85:application', stdlib.UInt_max, '1')];
      const v757 = v754[stdlib.checkedBigNumberify('./index.rsh:176:85:application', stdlib.UInt_max, '2')];
      const v758 = v754[stdlib.checkedBigNumberify('./index.rsh:176:85:application', stdlib.UInt_max, '3')];
      const v763 = stdlib.ge(v755, stdlib.checkedBigNumberify('./index.rsh:177:32:decimal', stdlib.UInt_max, '0'));
      const v764 = stdlib.gt(v756, stdlib.checkedBigNumberify('./index.rsh:177:46:decimal', stdlib.UInt_max, '0'));
      const v765 = v763 ? v764 : false;
      const v766 = stdlib.gt(v757, stdlib.checkedBigNumberify('./index.rsh:177:60:decimal', stdlib.UInt_max, '0'));
      const v767 = v765 ? v766 : false;
      const v768 = stdlib.gt(v758, stdlib.checkedBigNumberify('./index.rsh:177:72:decimal', stdlib.UInt_max, '0'));
      const v769 = v767 ? v768 : false;
      stdlib.assert(v769, {
        at: './index.rsh:177:22:application',
        fs: ['at ./index.rsh:175:23:application call to [unknown function] (defined at: ./index.rsh:175:27:function exp)'],
        msg: null,
        who: 'Owner'
        });
      
      const txn8 = await (ctc.sendrecv({
        args: [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v750, v755, v756, v757, v758],
        evt_cnt: 4,
        funcNum: 10,
        lct: v729,
        onlyIf: true,
        out_tys: [ctc2, ctc2, ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:178:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v771, v772, v773, v774], secs: v776, time: v775, didSend: v215, from: v770 } = txn8;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc3, ctc3, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v771, v772, v773, v774], secs: v776, time: v775, didSend: v215, from: v770 } = txn8;
      ;
      const v777 = stdlib.addressEq(v548, v770);
      stdlib.assert(v777, {
        at: './index.rsh:178:19:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const v778 = stdlib.ge(v771, stdlib.checkedBigNumberify('./index.rsh:179:30:decimal', stdlib.UInt_max, '0'));
      const v779 = stdlib.gt(v772, stdlib.checkedBigNumberify('./index.rsh:179:44:decimal', stdlib.UInt_max, '0'));
      const v780 = v778 ? v779 : false;
      const v781 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:179:58:decimal', stdlib.UInt_max, '0'));
      const v782 = v780 ? v781 : false;
      const v783 = stdlib.gt(v774, stdlib.checkedBigNumberify('./index.rsh:179:70:decimal', stdlib.UInt_max, '0'));
      const v784 = v782 ? v783 : false;
      stdlib.assert(v784, {
        at: './index.rsh:179:20:application',
        fs: [],
        msg: null,
        who: 'Owner'
        });
      const v785 = stdlib.eq(v771, stdlib.checkedBigNumberify('./index.rsh:185:42:decimal', stdlib.UInt_max, '0'));
      const v786 = v785 ? v583 : v582;
      
      const txn9 = await (ctc.sendrecv({
        args: [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v629, v631, v728, v750, v771, v772, v773],
        evt_cnt: 0,
        funcNum: 11,
        lct: v775,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:185:19:dot', stdlib.UInt_max, '0'), [[v772, v786]]],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v789, time: v788, didSend: v233, from: v787 } = txn9;
          
          const v790 = stdlib.eq(v771, stdlib.checkedBigNumberify('./index.rsh:185:42:decimal', stdlib.UInt_max, '0'));
          const v791 = v790 ? v583 : v582;
          ;
          sim_r.txns.push({
            amt: v772,
            kind: 'to',
            tok: v791
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc3, ctc3, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v789, time: v788, didSend: v233, from: v787 } = txn9;
      const v790 = stdlib.eq(v771, stdlib.checkedBigNumberify('./index.rsh:185:42:decimal', stdlib.UInt_max, '0'));
      const v791 = v790 ? v583 : v582;
      ;
      ;
      const v831 = stdlib.addressEq(v548, v787);
      stdlib.assert(v831, {
        at: './index.rsh:185:19:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const txn10 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 12,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v836], secs: v838, time: v837, didSend: v243, from: v835 } = txn10;
      ;
      const v839 = stdlib.addressEq(v629, v835);
      stdlib.assert(v839, {
        at: './index.rsh:190:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const txn11 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 13,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v844, time: v843, didSend: v254, from: v842 } = txn11;
      const v846 = v790 ? v582 : v583;
      ;
      ;
      const v886 = stdlib.addressEq(v629, v842);
      stdlib.assert(v886, {
        at: './index.rsh:193:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      ;
      ;
      const txn12 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 14,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1007, time: v1006, didSend: v271, from: v1005 } = txn12;
      ;
      const v1008 = stdlib.addressEq(v629, v1005);
      stdlib.assert(v1008, {
        at: './index.rsh:199:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      stdlib.protect(ctc5, await interact.seeTransfer(), {
        at: './index.rsh:201:59:application',
        fs: ['at ./index.rsh:201:17:application call to [unknown function] (defined at: ./index.rsh:201:36:function exp)'],
        msg: 'seeTransfer',
        who: 'Owner'
        });
      
      if (v790) {
        const v1012 = true;
        null;
        const v1013 = stdlib.add(v728, stdlib.checkedBigNumberify('./index.rsh:207:33:decimal', stdlib.UInt_max, '1'));
        const cv728 = v1013;
        const cv729 = v1006;
        
        v728 = cv728;
        v729 = cv729;
        
        continue;}
      else {
        const v1014 = stdlib.add(v728, stdlib.checkedBigNumberify('./index.rsh:207:33:decimal', stdlib.UInt_max, '1'));
        const cv728 = v1014;
        const cv729 = v1006;
        
        v728 = cv728;
        v729 = cv729;
        
        continue;}
      
      
      
      
      
      
      
      
      
      }
    const v1015 = stdlib.sub(v728, stdlib.checkedBigNumberify('./index.rsh:168:74:decimal', stdlib.UInt_max, '1'));
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1019, time: v1018, didSend: v287, from: v1017 } = txn8;
    ;
    const v1020 = stdlib.addressEq(v629, v1017);
    stdlib.assert(v1020, {
      at: './index.rsh:223:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const txn9 = await (ctc.sendrecv({
      args: [v548, v582, v583, v604, v605, v606, v607, v608, v609, v610, v611, v614, v615, v617, v618, v619, v620, v621, v622, v623, v631, v728, v1015],
      evt_cnt: 0,
      funcNum: 9,
      lct: v1018,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:225:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn9) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1023, time: v1022, didSend: v292, from: v1021 } = txn9;
        
        ;
        const v1025 = true;
        null;
        sim_r.txns.push({
          kind: 'halt',
          tok: v583
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v582
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
      tys: [ctc1, ctc3, ctc3, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1023, time: v1022, didSend: v292, from: v1021 } = txn9;
    ;
    const v1024 = stdlib.addressEq(v548, v1021);
    stdlib.assert(v1024, {
      at: './index.rsh:225:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const v1025 = true;
    null;
    return;
    
    
    
    
    
    
    
    
    
    
    
    
    }
  else {
    const v635 = true;
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
  stateSize: 331,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:100:13:after expr stmt semicolon',
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
    at: './index.rsh:140:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:144:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:148:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:156:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:210:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:224:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:233:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:173:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:183:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:186:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:191:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:198:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:134:17:after expr stmt semicolon',
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
