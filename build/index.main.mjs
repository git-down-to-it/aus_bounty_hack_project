// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
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
              const [v506] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v506, v540, v541, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581] = svs;
              return (await ((async () => {
                
                const v582 = {
                  acceptedStatus: v561,
                  contractAddress: v572,
                  ctpyAddress: v574,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v582;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v506, v540, v541, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581, v587, v589] = svs;
              return (await ((async () => {
                
                const v582 = {
                  acceptedStatus: v561,
                  contractAddress: v572,
                  ctpyAddress: v574,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v582;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v506, v540, v541, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581, v587, v589] = svs;
              return (await ((async () => {
                
                const v582 = {
                  acceptedStatus: v561,
                  contractAddress: v572,
                  ctpyAddress: v574,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v582;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v506, v540, v541, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581, v587, v589] = svs;
              return (await ((async () => {
                
                const v582 = {
                  acceptedStatus: v561,
                  contractAddress: v572,
                  ctpyAddress: v574,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v582;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589] = svs;
              return (await ((async () => {
                
                const v667 = {
                  acceptedStatus: true,
                  contractAddress: v572,
                  ctpyAddress: v589,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v667;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
              const [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589, v691, v692, v693] = svs;
              return (await ((async () => {
                
                const v667 = {
                  acceptedStatus: true,
                  contractAddress: v572,
                  ctpyAddress: v589,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v667;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
              const [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589, v692, v693, v710, v711] = svs;
              return (await ((async () => {
                
                const v667 = {
                  acceptedStatus: true,
                  contractAddress: v572,
                  ctpyAddress: v589,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v667;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
              const [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589, v692, v693, v710, v711] = svs;
              return (await ((async () => {
                
                const v667 = {
                  acceptedStatus: true,
                  contractAddress: v572,
                  ctpyAddress: v589,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v667;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'))) {
              const [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589] = svs;
              return (await ((async () => {
                
                const v667 = {
                  acceptedStatus: true,
                  contractAddress: v572,
                  ctpyAddress: v589,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v667;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
              const [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v589] = svs;
              return (await ((async () => {
                
                const v667 = {
                  acceptedStatus: true,
                  contractAddress: v572,
                  ctpyAddress: v589,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v667;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'))) {
              const [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589] = svs;
              return (await ((async () => {
                
                const v667 = {
                  acceptedStatus: true,
                  contractAddress: v572,
                  ctpyAddress: v589,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v667;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'))) {
              const [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v589] = svs;
              return (await ((async () => {
                
                const v667 = {
                  acceptedStatus: true,
                  contractAddress: v572,
                  ctpyAddress: v589,
                  defaultStatus: v562,
                  haircut: v581,
                  interestTimeoutLimit: v564,
                  lockPrincipal: v580,
                  nextPmt: v571,
                  ownerAddress: v573,
                  pmtFrequency: v568,
                  prevPmt: v570,
                  principalAmtCtpy: v577,
                  principalAmtOwner: v575,
                  principalTimeoutLimit: v563,
                  spotExchangeRate: v576,
                  swapRateCtpyPay: v579,
                  swapRateOwnerPay: v578,
                  termToMaturity: v567,
                  token_Owner_borrow_Ctpy_lend: v565,
                  token_Owner_lend_Ctpy_borrow: v566,
                  totalNumPmts: v569
                  };
                
                return v667;}))(...args));
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
      7: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3],
      8: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0, ctc3, ctc3, ctc2, ctc1],
      10: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0],
      11: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0],
      13: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0, ctc0],
      14: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc3, ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3, ctc3, ctc3, ctc3, ctc3, ctc2, ctc3, ctc0]
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
  
  
  const v505 = stdlib.protect(ctc0, interact.passAddr, 'for Ctpy\'s interact field passAddr');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v508, time: v507, didSend: v23, from: v506 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc4, ctc3, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v539, v540, v541], secs: v543, time: v542, didSend: v64, from: v538 } = txn2;
  const v544 = stdlib.tokenEq(v540, v541);
  const v545 = v544 ? false : true;
  stdlib.assert(v545, {
    at: './index.rsh:110:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Ctpy'
    });
  ;
  ;
  ;
  const v560 = stdlib.addressEq(v506, v538);
  stdlib.assert(v560, {
    at: './index.rsh:110:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Ctpy'
    });
  const v561 = v539.acceptedStatus;
  const v562 = v539.defaultStatus;
  const v563 = v539.principalTimeoutLimit;
  const v564 = v539.interestTimeoutLimit;
  const v565 = v539.token_Owner_borrow_Ctpy_lend;
  const v566 = v539.token_Owner_lend_Ctpy_borrow;
  const v567 = v539.termToMaturity;
  const v568 = v539.pmtFrequency;
  const v569 = v539.totalNumPmts;
  const v570 = v539.prevPmt;
  const v571 = v539.nextPmt;
  const v572 = v539.contractAddress;
  const v573 = v539.ownerAddress;
  const v574 = v539.ctpyAddress;
  const v575 = v539.principalAmtOwner;
  const v576 = v539.spotExchangeRate;
  const v577 = v539.principalAmtCtpy;
  const v578 = v539.swapRateOwnerPay;
  const v579 = v539.swapRateCtpyPay;
  const v580 = v539.lockPrincipal;
  const v581 = v539.haircut;
  stdlib.protect(ctc5, await interact.getTokenIds(v540, v541), {
    at: './index.rsh:123:29:application',
    fs: ['at ./index.rsh:122:14:application call to [unknown function] (defined at: ./index.rsh:122:18:function exp)'],
    msg: 'getTokenIds',
    who: 'Ctpy'
    });
  stdlib.protect(ctc5, await interact.seeState(false), {
    at: './index.rsh:124:26:application',
    fs: ['at ./index.rsh:122:14:application call to [unknown function] (defined at: ./index.rsh:122:18:function exp)'],
    msg: 'seeState',
    who: 'Ctpy'
    });
  const v586 = stdlib.protect(ctc1, await interact.acceptTrade(), {
    at: './index.rsh:125:53:application',
    fs: ['at ./index.rsh:122:14:application call to [unknown function] (defined at: ./index.rsh:122:18:function exp)'],
    msg: 'acceptTrade',
    who: 'Ctpy'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v506, v540, v541, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581, v586, v505],
    evt_cnt: 2,
    funcNum: 2,
    lct: v542,
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:128:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v588, v589], secs: v591, time: v590, didSend: v100, from: v587 } = txn3;
      
      ;
      null;
      if (v588) {
        sim_r.isHalt = false;
        }
      else {
        const v963 = true;
        null;
        sim_r.txns.push({
          kind: 'halt',
          tok: v541
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v540
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
  const {data: [v588, v589], secs: v591, time: v590, didSend: v100, from: v587 } = txn3;
  ;
  null;
  if (v588) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v594, time: v593, didSend: v107, from: v592 } = txn4;
    ;
    ;
    const v604 = stdlib.addressEq(v506, v592);
    stdlib.assert(v604, {
      at: './index.rsh:144:15:dot',
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
    const {data: [], secs: v607, time: v606, didSend: v114, from: v605 } = txn5;
    ;
    ;
    const v617 = stdlib.addressEq(v506, v605);
    stdlib.assert(v617, {
      at: './index.rsh:146:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    ;
    ;
    const txn6 = await (ctc.sendrecv({
      args: [v506, v540, v541, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581, v587, v589],
      evt_cnt: 0,
      funcNum: 5,
      lct: v606,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:151:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v644, time: v643, didSend: v127, from: v642 } = txn6;
        
        ;
        const v645 = stdlib.addressEq(v587, v642);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc3, ctc3, ctc1, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v644, time: v643, didSend: v127, from: v642 } = txn6;
    ;
    const v645 = stdlib.addressEq(v587, v642);
    stdlib.assert(v645, {
      at: './index.rsh:151:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    stdlib.protect(ctc5, await interact.seeState(false), {
      at: './index.rsh:160:30:application',
      fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:31:function exp)'],
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
    const {data: [v691, v692, v693, v694], secs: v696, time: v695, didSend: v183, from: v690 } = txn7;
    ;
    const v697 = stdlib.addressEq(v506, v690);
    stdlib.assert(v697, {
      at: './index.rsh:177:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const v698 = stdlib.gt(v691, stdlib.checkedBigNumberify('./index.rsh:178:37:decimal', stdlib.UInt_max, '0'));
    const v699 = stdlib.gt(v692, stdlib.checkedBigNumberify('./index.rsh:178:51:decimal', stdlib.UInt_max, '0'));
    const v700 = v698 ? v699 : false;
    const v701 = stdlib.gt(v693, stdlib.checkedBigNumberify('./index.rsh:178:65:decimal', stdlib.UInt_max, '0'));
    const v702 = v700 ? v701 : false;
    const v703 = stdlib.gt(v694, stdlib.checkedBigNumberify('./index.rsh:178:77:decimal', stdlib.UInt_max, '0'));
    const v704 = v702 ? v703 : false;
    stdlib.assert(v704, {
      at: './index.rsh:178:28:application',
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
    const {data: [], secs: v709, time: v708, didSend: v201, from: v707 } = txn8;
    const v710 = stdlib.eq(v691, stdlib.checkedBigNumberify('./index.rsh:183:50:decimal', stdlib.UInt_max, '0'));
    const v711 = v710 ? v541 : v540;
    ;
    ;
    const v751 = stdlib.addressEq(v506, v707);
    stdlib.assert(v751, {
      at: './index.rsh:183:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const v754 = stdlib.protect(ctc1, await interact.accSwap(v691, v692, v693, v694), {
      at: './index.rsh:197:66:application',
      fs: ['at ./index.rsh:196:30:application call to [unknown function] (defined at: ./index.rsh:196:34:function exp)'],
      msg: 'accSwap',
      who: 'Ctpy'
      });
    
    const txn9 = await (ctc.sendrecv({
      args: [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589, v692, v693, v710, v711, v754],
      evt_cnt: 1,
      funcNum: 8,
      lct: v708,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:198:26:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn9) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v756], secs: v758, time: v757, didSend: v211, from: v755 } = txn9;
        
        ;
        const v759 = stdlib.addressEq(v587, v755);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc1, ctc3, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v756], secs: v758, time: v757, didSend: v211, from: v755 } = txn9;
    ;
    const v759 = stdlib.addressEq(v587, v755);
    stdlib.assert(v759, {
      at: './index.rsh:198:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    const v761 = v710 ? v540 : v541;
    
    const txn10 = await (ctc.sendrecv({
      args: [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589, v692, v693, v710, v711],
      evt_cnt: 0,
      funcNum: 9,
      lct: v757,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:200:26:dot', stdlib.UInt_max, '0'), [[v693, v761]]],
      sim_p: (async (txn10) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v764, time: v763, didSend: v222, from: v762 } = txn10;
        
        const v766 = v710 ? v540 : v541;
        ;
        sim_r.txns.push({
          amt: v693,
          kind: 'to',
          tok: v766
          });
        const v806 = stdlib.addressEq(v587, v762);
        ;
        sim_r.txns.push({
          amt: v693,
          kind: 'from',
          to: v506,
          tok: v766
          });
        sim_r.txns.push({
          amt: v692,
          kind: 'from',
          to: v587,
          tok: v711
          });
        
        if (v710) {
          const v928 = true;
          null;
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0, ctc2, ctc2, ctc1, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v764, time: v763, didSend: v222, from: v762 } = txn10;
    const v766 = v710 ? v540 : v541;
    ;
    ;
    const v806 = stdlib.addressEq(v587, v762);
    stdlib.assert(v806, {
      at: './index.rsh:200:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ctpy'
      });
    ;
    ;
    stdlib.protect(ctc5, await interact.seeTransfer(), {
      at: './index.rsh:203:67:application',
      fs: ['at ./index.rsh:203:25:application call to [unknown function] (defined at: ./index.rsh:203:44:function exp)'],
      msg: 'seeTransfer',
      who: 'Ctpy'
      });
    
    if (v710) {
      const v928 = true;
      null;
      const txn11 = await (ctc.sendrecv({
        args: [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589],
        evt_cnt: 0,
        funcNum: 10,
        lct: v763,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:257:10:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn11) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v931, time: v930, didSend: v254, from: v929 } = txn11;
          
          ;
          const v932 = stdlib.addressEq(v587, v929);
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v931, time: v930, didSend: v254, from: v929 } = txn11;
      ;
      const v932 = stdlib.addressEq(v587, v929);
      stdlib.assert(v932, {
        at: './index.rsh:257:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const txn12 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 11,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v935, time: v934, didSend: v259, from: v933 } = txn12;
      ;
      const v936 = stdlib.addressEq(v506, v933);
      stdlib.assert(v936, {
        at: './index.rsh:259:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v937 = true;
      null;
      return;
      
      
      
      
      }
    else {
      const txn11 = await (ctc.sendrecv({
        args: [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589],
        evt_cnt: 0,
        funcNum: 12,
        lct: v763,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:257:10:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn11) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v948, time: v947, didSend: v254, from: v946 } = txn11;
          
          ;
          const v949 = stdlib.addressEq(v587, v946);
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc3, ctc3, ctc1, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v948, time: v947, didSend: v254, from: v946 } = txn11;
      ;
      const v949 = stdlib.addressEq(v587, v946);
      stdlib.assert(v949, {
        at: './index.rsh:257:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const txn12 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 13,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v952, time: v951, didSend: v259, from: v950 } = txn12;
      ;
      const v953 = stdlib.addressEq(v506, v950);
      stdlib.assert(v953, {
        at: './index.rsh:259:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Ctpy'
        });
      const v954 = true;
      null;
      return;
      
      
      
      
      }
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
  else {
    const v963 = true;
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
    lct: stdlib.checkedBigNumberify('./index.rsh:99:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:99:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v508, time: v507, didSend: v23, from: v506 } = txn1;
      
      ;
      const v509 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v508, time: v507, didSend: v23, from: v506 } = txn1;
  ;
  const v509 = await ctc.getContractAddress();
  const v512 = stdlib.protect(ctc4, await interact.setInitTerms(v509), {
    at: './index.rsh:105:59:application',
    fs: ['at ./index.rsh:104:15:application call to [unknown function] (defined at: ./index.rsh:104:19:function exp)'],
    msg: 'setInitTerms',
    who: 'Owner'
    });
  const v531 = v512.token_Owner_borrow_Ctpy_lend;
  const v532 = v512.token_Owner_lend_Ctpy_borrow;
  const v536 = stdlib.tokenEq(v531, v532);
  const v537 = v536 ? false : true;
  stdlib.assert(v537, {
    at: './index.rsh:108:14:application',
    fs: ['at ./index.rsh:104:15:application call to [unknown function] (defined at: ./index.rsh:104:19:function exp)'],
    msg: null,
    who: 'Owner'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v506, v512, v531, v532],
    evt_cnt: 3,
    funcNum: 1,
    lct: v507,
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:110:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v539, v540, v541], secs: v543, time: v542, didSend: v64, from: v538 } = txn2;
      
      const v544 = stdlib.tokenEq(v540, v541);
      const v545 = v544 ? false : true;
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v540
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v541
        });
      ;
      const v560 = stdlib.addressEq(v506, v538);
      ;
      const v561 = v539.acceptedStatus;
      const v562 = v539.defaultStatus;
      const v563 = v539.principalTimeoutLimit;
      const v564 = v539.interestTimeoutLimit;
      const v565 = v539.token_Owner_borrow_Ctpy_lend;
      const v566 = v539.token_Owner_lend_Ctpy_borrow;
      const v567 = v539.termToMaturity;
      const v568 = v539.pmtFrequency;
      const v569 = v539.totalNumPmts;
      const v570 = v539.prevPmt;
      const v571 = v539.nextPmt;
      const v572 = v539.contractAddress;
      const v573 = v539.ownerAddress;
      const v574 = v539.ctpyAddress;
      const v575 = v539.principalAmtOwner;
      const v576 = v539.spotExchangeRate;
      const v577 = v539.principalAmtCtpy;
      const v578 = v539.swapRateOwnerPay;
      const v579 = v539.swapRateCtpyPay;
      const v580 = v539.lockPrincipal;
      const v581 = v539.haircut;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc4, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v539, v540, v541], secs: v543, time: v542, didSend: v64, from: v538 } = txn2;
  const v544 = stdlib.tokenEq(v540, v541);
  const v545 = v544 ? false : true;
  stdlib.assert(v545, {
    at: './index.rsh:110:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Owner'
    });
  ;
  ;
  ;
  const v560 = stdlib.addressEq(v506, v538);
  stdlib.assert(v560, {
    at: './index.rsh:110:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v561 = v539.acceptedStatus;
  const v562 = v539.defaultStatus;
  const v563 = v539.principalTimeoutLimit;
  const v564 = v539.interestTimeoutLimit;
  const v565 = v539.token_Owner_borrow_Ctpy_lend;
  const v566 = v539.token_Owner_lend_Ctpy_borrow;
  const v567 = v539.termToMaturity;
  const v568 = v539.pmtFrequency;
  const v569 = v539.totalNumPmts;
  const v570 = v539.prevPmt;
  const v571 = v539.nextPmt;
  const v572 = v539.contractAddress;
  const v573 = v539.ownerAddress;
  const v574 = v539.ctpyAddress;
  const v575 = v539.principalAmtOwner;
  const v576 = v539.spotExchangeRate;
  const v577 = v539.principalAmtCtpy;
  const v578 = v539.swapRateOwnerPay;
  const v579 = v539.swapRateCtpyPay;
  const v580 = v539.lockPrincipal;
  const v581 = v539.haircut;
  stdlib.protect(ctc5, await interact.seeState(true), {
    at: './index.rsh:119:28:application',
    fs: ['at ./index.rsh:119:28:application call to [unknown function] (defined at: ./index.rsh:119:28:function exp)', 'at ./index.rsh:119:28:application call to "liftedInteract" (defined at: ./index.rsh:119:28:application)'],
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
  const {data: [v588, v589], secs: v591, time: v590, didSend: v100, from: v587 } = txn3;
  ;
  null;
  if (v588) {
    const txn4 = await (ctc.sendrecv({
      args: [v506, v540, v541, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581, v587, v589],
      evt_cnt: 0,
      funcNum: 3,
      lct: v590,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:144:15:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:144:27:application', stdlib.UInt_max, '50000000000'), v540]]],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v594, time: v593, didSend: v107, from: v592 } = txn4;
        
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:144:27:application', stdlib.UInt_max, '50000000000'),
          kind: 'to',
          tok: v540
          });
        const v604 = stdlib.addressEq(v506, v592);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3, ctc3, ctc0, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v594, time: v593, didSend: v107, from: v592 } = txn4;
    ;
    ;
    const v604 = stdlib.addressEq(v506, v592);
    stdlib.assert(v604, {
      at: './index.rsh:144:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const txn5 = await (ctc.sendrecv({
      args: [v506, v540, v541, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581, v587, v589],
      evt_cnt: 0,
      funcNum: 4,
      lct: v593,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:146:15:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:146:26:application', stdlib.UInt_max, '5000000000'), v541]]],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v607, time: v606, didSend: v114, from: v605 } = txn5;
        
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:146:26:application', stdlib.UInt_max, '5000000000'),
          kind: 'to',
          tok: v541
          });
        const v617 = stdlib.addressEq(v506, v605);
        ;
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:148:24:application', stdlib.UInt_max, '50000000000'),
          kind: 'from',
          to: v587,
          tok: v540
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:149:23:application', stdlib.UInt_max, '5000000000'),
          kind: 'from',
          to: v587,
          tok: v541
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3, ctc3, ctc0, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v607, time: v606, didSend: v114, from: v605 } = txn5;
    ;
    ;
    const v617 = stdlib.addressEq(v506, v605);
    stdlib.assert(v617, {
      at: './index.rsh:146:15:dot',
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
    const {data: [], secs: v644, time: v643, didSend: v127, from: v642 } = txn6;
    ;
    const v645 = stdlib.addressEq(v587, v642);
    stdlib.assert(v645, {
      at: './index.rsh:151:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    stdlib.protect(ctc5, await interact.seeState(false), {
      at: './index.rsh:160:30:application',
      fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:31:function exp)'],
      msg: 'seeState',
      who: 'Owner'
      });
    
    const v674 = stdlib.protect(ctc6, await interact.getSwap(), {
      at: './index.rsh:175:93:application',
      fs: ['at ./index.rsh:174:31:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)'],
      msg: 'getSwap',
      who: 'Owner'
      });
    const v675 = v674[stdlib.checkedBigNumberify('./index.rsh:175:93:application', stdlib.UInt_max, '0')];
    const v676 = v674[stdlib.checkedBigNumberify('./index.rsh:175:93:application', stdlib.UInt_max, '1')];
    const v677 = v674[stdlib.checkedBigNumberify('./index.rsh:175:93:application', stdlib.UInt_max, '2')];
    const v678 = v674[stdlib.checkedBigNumberify('./index.rsh:175:93:application', stdlib.UInt_max, '3')];
    const v683 = stdlib.gt(v675, stdlib.checkedBigNumberify('./index.rsh:176:39:decimal', stdlib.UInt_max, '0'));
    const v684 = stdlib.gt(v676, stdlib.checkedBigNumberify('./index.rsh:176:53:decimal', stdlib.UInt_max, '0'));
    const v685 = v683 ? v684 : false;
    const v686 = stdlib.gt(v677, stdlib.checkedBigNumberify('./index.rsh:176:67:decimal', stdlib.UInt_max, '0'));
    const v687 = v685 ? v686 : false;
    const v688 = stdlib.gt(v678, stdlib.checkedBigNumberify('./index.rsh:176:79:decimal', stdlib.UInt_max, '0'));
    const v689 = v687 ? v688 : false;
    stdlib.assert(v689, {
      at: './index.rsh:176:30:application',
      fs: ['at ./index.rsh:174:31:application call to [unknown function] (defined at: ./index.rsh:174:35:function exp)'],
      msg: null,
      who: 'Owner'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589, v675, v676, v677, v678],
      evt_cnt: 4,
      funcNum: 6,
      lct: v643,
      onlyIf: true,
      out_tys: [ctc2, ctc2, ctc2, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:177:27:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v691, v692, v693, v694], secs: v696, time: v695, didSend: v183, from: v690 } = txn7;
        
        ;
        const v697 = stdlib.addressEq(v506, v690);
        ;
        const v698 = stdlib.gt(v691, stdlib.checkedBigNumberify('./index.rsh:178:37:decimal', stdlib.UInt_max, '0'));
        const v699 = stdlib.gt(v692, stdlib.checkedBigNumberify('./index.rsh:178:51:decimal', stdlib.UInt_max, '0'));
        const v700 = v698 ? v699 : false;
        const v701 = stdlib.gt(v693, stdlib.checkedBigNumberify('./index.rsh:178:65:decimal', stdlib.UInt_max, '0'));
        const v702 = v700 ? v701 : false;
        const v703 = stdlib.gt(v694, stdlib.checkedBigNumberify('./index.rsh:178:77:decimal', stdlib.UInt_max, '0'));
        const v704 = v702 ? v703 : false;
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3, ctc3, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v691, v692, v693, v694], secs: v696, time: v695, didSend: v183, from: v690 } = txn7;
    ;
    const v697 = stdlib.addressEq(v506, v690);
    stdlib.assert(v697, {
      at: './index.rsh:177:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const v698 = stdlib.gt(v691, stdlib.checkedBigNumberify('./index.rsh:178:37:decimal', stdlib.UInt_max, '0'));
    const v699 = stdlib.gt(v692, stdlib.checkedBigNumberify('./index.rsh:178:51:decimal', stdlib.UInt_max, '0'));
    const v700 = v698 ? v699 : false;
    const v701 = stdlib.gt(v693, stdlib.checkedBigNumberify('./index.rsh:178:65:decimal', stdlib.UInt_max, '0'));
    const v702 = v700 ? v701 : false;
    const v703 = stdlib.gt(v694, stdlib.checkedBigNumberify('./index.rsh:178:77:decimal', stdlib.UInt_max, '0'));
    const v704 = v702 ? v703 : false;
    stdlib.assert(v704, {
      at: './index.rsh:178:28:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v705 = stdlib.eq(v691, stdlib.checkedBigNumberify('./index.rsh:183:50:decimal', stdlib.UInt_max, '0'));
    const v706 = v705 ? v541 : v540;
    
    const txn8 = await (ctc.sendrecv({
      args: [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v587, v589, v691, v692, v693],
      evt_cnt: 0,
      funcNum: 7,
      lct: v695,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:183:27:dot', stdlib.UInt_max, '0'), [[v692, v706]]],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v709, time: v708, didSend: v201, from: v707 } = txn8;
        
        const v710 = stdlib.eq(v691, stdlib.checkedBigNumberify('./index.rsh:183:50:decimal', stdlib.UInt_max, '0'));
        const v711 = v710 ? v541 : v540;
        ;
        sim_r.txns.push({
          amt: v692,
          kind: 'to',
          tok: v711
          });
        const v751 = stdlib.addressEq(v506, v707);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3, ctc3, ctc0, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0, ctc2, ctc1, ctc1, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v709, time: v708, didSend: v201, from: v707 } = txn8;
    const v710 = stdlib.eq(v691, stdlib.checkedBigNumberify('./index.rsh:183:50:decimal', stdlib.UInt_max, '0'));
    const v711 = v710 ? v541 : v540;
    ;
    ;
    const v751 = stdlib.addressEq(v506, v707);
    stdlib.assert(v751, {
      at: './index.rsh:183:27:dot',
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
    const {data: [v756], secs: v758, time: v757, didSend: v211, from: v755 } = txn9;
    ;
    const v759 = stdlib.addressEq(v587, v755);
    stdlib.assert(v759, {
      at: './index.rsh:198:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    const txn10 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 9,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v764, time: v763, didSend: v222, from: v762 } = txn10;
    const v766 = v710 ? v540 : v541;
    ;
    ;
    const v806 = stdlib.addressEq(v587, v762);
    stdlib.assert(v806, {
      at: './index.rsh:200:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Owner'
      });
    ;
    ;
    stdlib.protect(ctc5, await interact.seeTransfer(), {
      at: './index.rsh:203:67:application',
      fs: ['at ./index.rsh:203:25:application call to [unknown function] (defined at: ./index.rsh:203:44:function exp)'],
      msg: 'seeTransfer',
      who: 'Owner'
      });
    
    if (v710) {
      const v928 = true;
      null;
      const txn11 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v931, time: v930, didSend: v254, from: v929 } = txn11;
      ;
      const v932 = stdlib.addressEq(v587, v929);
      stdlib.assert(v932, {
        at: './index.rsh:257:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const txn12 = await (ctc.sendrecv({
        args: [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v589],
        evt_cnt: 0,
        funcNum: 11,
        lct: v930,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:259:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn12) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v935, time: v934, didSend: v259, from: v933 } = txn12;
          
          ;
          const v936 = stdlib.addressEq(v506, v933);
          ;
          const v937 = true;
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v541
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v540
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
      const {data: [], secs: v935, time: v934, didSend: v259, from: v933 } = txn12;
      ;
      const v936 = stdlib.addressEq(v506, v933);
      stdlib.assert(v936, {
        at: './index.rsh:259:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const v937 = true;
      null;
      return;
      
      
      
      
      }
    else {
      const txn11 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 12,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v948, time: v947, didSend: v254, from: v946 } = txn11;
      ;
      const v949 = stdlib.addressEq(v587, v946);
      stdlib.assert(v949, {
        at: './index.rsh:257:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const txn12 = await (ctc.sendrecv({
        args: [v506, v540, v541, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v575, v576, v577, v578, v579, v580, v581, v589],
        evt_cnt: 0,
        funcNum: 13,
        lct: v947,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:259:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn12) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v952, time: v951, didSend: v259, from: v950 } = txn12;
          
          ;
          const v953 = stdlib.addressEq(v506, v950);
          ;
          const v954 = true;
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v541
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v540
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
      const {data: [], secs: v952, time: v951, didSend: v259, from: v950 } = txn12;
      ;
      const v953 = stdlib.addressEq(v506, v950);
      stdlib.assert(v953, {
        at: './index.rsh:259:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Owner'
        });
      const v954 = true;
      null;
      return;
      
      
      
      
      }
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
  else {
    const v963 = true;
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
    at: './index.rsh:101:13:after expr stmt semicolon',
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
    at: './index.rsh:134:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:145:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:150:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:158:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:182:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:192:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:199:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:207:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:258:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:261:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:207:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:258:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:261:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:253:17:after expr stmt semicolon',
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
