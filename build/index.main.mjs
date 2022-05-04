// Automatically generated with Reach 0.1.10 (9f925e05)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (9f925e05)';
export const _backendVersion = 14;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Struct([['accepted', ctc0], ['owner', ctc1], ['ctpy', ctc1], ['principalAmtOwner', ctc2]]);
  
  return {
    infos: {
      TradeState: {
        read: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [] = svs;
              stdlib.assert(false, 'illegal view')
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          }
        }
      },
    views: {
      1: []
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
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    accepted: ctc0,
    owner: ctc1,
    principalAmtOwner: ctc2
    });
  const ctc4 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v74], secs: v76, time: v75, didSend: v30, from: v73 } = txn1;
  ;
  stdlib.protect(ctc4, await interact.acceptTrade(v74), {
    at: './index.rsh:46:29:application',
    fs: ['at ./index.rsh:45:14:application call to [unknown function] (defined at: ./index.rsh:45:18:function exp)'],
    msg: 'acceptTrade',
    who: 'Ctpy'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 1,
    lct: v75,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v85, time: v84, didSend: v44, from: v83 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v85, time: v84, didSend: v44, from: v83 } = txn2;
  ;
  stdlib.protect(ctc4, await interact.getTradeState(), {
    at: './index.rsh:56:31:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:27:function exp)'],
    msg: 'getTradeState',
    who: 'Ctpy'
    });
  
  return;
  
  
  
  
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
    accepted: ctc0,
    owner: ctc1,
    principalAmtOwner: ctc2
    });
  const ctc4 = stdlib.T_Null;
  
  
  const v67 = stdlib.protect(ctc3, interact.initTerms, 'for Owner\'s interact field initTerms');
  
  const txn1 = await (ctc.sendrecv({
    args: [v67],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v74], secs: v76, time: v75, didSend: v30, from: v73 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v74], secs: v76, time: v75, didSend: v30, from: v73 } = txn1;
  ;
  stdlib.protect(ctc4, await interact.isInitialised(), {
    at: './index.rsh:43:33:application',
    fs: ['at ./index.rsh:43:33:application call to [unknown function] (defined at: ./index.rsh:43:33:function exp)', 'at ./index.rsh:43:33:application call to "liftedInteract" (defined at: ./index.rsh:43:33:application)'],
    msg: 'isInitialised',
    who: 'Owner'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v85, time: v84, didSend: v44, from: v83 } = txn2;
  ;
  stdlib.protect(ctc4, await interact.setInitTerms(v74), {
    at: './index.rsh:52:30:application',
    fs: ['at ./index.rsh:51:15:application call to [unknown function] (defined at: ./index.rsh:51:19:function exp)'],
    msg: 'setInitTerms',
    who: 'Owner'
    });
  
  stdlib.protect(ctc4, await interact.getTradeState(), {
    at: './index.rsh:56:31:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:27:function exp)'],
    msg: 'getTradeState',
    who: 'Owner'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [`TradeState_read()(byte,address,address,uint64)`],
    sigs: [`TradeState_read()(byte,address,address,uint64)`]
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA1ihkSSJbNQGBCFs1AjYaABdJQQARIjUEIzUGga2b59cGEkQ0AQA2GgIXNQQ2GgM2GgEXSSMMQAAdIxJEIzQBEkQ0BEkiEkw0AhIRRIAEmouRdLBCADFIIjQBEkQ0BEkiEkw0AhIRREk1BTX/gAT0ka6TNP9QsIGgjQaIAGMjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bool",
                    "name": "_accepted",
                    "type": "bool"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_principalAmtOwner",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v74",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bool",
                    "name": "_accepted",
                    "type": "bool"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_principalAmtOwner",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v74",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "TradeState_read",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "accepted",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "ctpy",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "principalAmtOwner",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516108a53803806108a583398101604081905261002291610231565b600080554360035560408051338152825160208083019190915280840151518051151583850152908101516001600160a01b03166060830152820151608082015290517fb38c8ab59299fb76aff8af55cba4dbee4ed21fbaf979007843f262de4279f7ca9181900360a00190a161009b341560086100d9565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100d1926002920190610102565b5050506102ff565b816100fe5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461010e906102c4565b90600052602060002090601f0160209004810192826101305760008555610176565b82601f1061014957805160ff1916838001178555610176565b82800160010185558215610176579182015b8281111561017657825182559160200191906001019061015b565b50610182929150610186565b5090565b5b808211156101825760008155600101610187565b604080519081016001600160401b03811182821017156101cb57634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156101cb57634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156101cb57634e487b7160e01b600052604160045260246000fd5b6000818303608081121561024457600080fd5b61024c61019b565b835181526060601f198301121561026257600080fd5b61026a6101d1565b9150610274610201565b6020850151801515811461028757600080fd5b815260408501516001600160a01b03811681146102a357600080fd5b60208281019190915260609590950151604082015282529283015250919050565b600181811c908216806102d857607f821691505b602082108114156102f957634e487b7160e01b600052602260045260246000fd5b50919050565b6105978061030e6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a1591461007857806352768c8a1461008b57806383230757146100e3578063ab53f2c6146100f857005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61005261008636600461044d565b61011b565b34801561009757600080fd5b506100a0610249565b604080518251151581526020808401516001600160a01b03908116918301919091528383015116918101919091526060918201519181019190915260800161006f565b3480156100ef57600080fd5b50600154610065565b34801561010457600080fd5b5061010d610335565b60405161006f929190610465565b61012b600160005414600a6103d2565b6101458135158061013e57506001548235145b600b6103d2565b600080805560028054610157906104c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610183906104c2565b80156101d05780601f106101a5576101008083540402835291602001916101d0565b820191906000526020600020905b8154815290600101906020018083116101b357829003601f168201915b50505050508060200190518101906101e89190610505565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021b929190610529565b60405180910390a161022f341560096103d2565b60008080556001819055610245906002906103f7565b5050565b604080516080810182526000808252602082018190529181018290526060810182905290546001141561032657600060028054610285906104c2565b80601f01602080910402602001604051908101604052809291908181526020018280546102b1906104c2565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b50505050508060200190518101906103169190610505565b9050610324600060076103d2565b505b610332600060076103d2565b90565b60006060600054600280805461034a906104c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610376906104c2565b80156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b50505050509050915091509091565b816102455760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610403906104c2565b6000825580601f10610413575050565b601f0160209004906000526020600020908101906104319190610434565b50565b5b808211156104495760008155600101610435565b5090565b60006040828403121561045f57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156104995785810183015185820160600152820161047d565b818111156104ab576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806104d657607f821691505b6020821081141561045f57634e487b7160e01b600052602260045260246000fd5b801515811461043157600080fd5b60006020828403121561051757600080fd5b8151610522816104f7565b9392505050565b6001600160a01b038316815281356020808301919091526060820190830135610551816104f7565b801515604084015250939250505056fea26469706673582212205e37c848b7503439d227ecbed0e8cfb7792d2073d091e32ac39bcabce9c3aa4864736f6c634300080c0033`,
  BytecodeLen: 2213,
  Which: `oD`,
  version: 7,
  views: {
    TradeState: {
      read: `TradeState_read`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:41:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:49:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Ctpy": Ctpy,
  "Owner": Owner
  };
export const _APIs = {
  };
