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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v68], secs: v70, time: v69, didSend: v29, from: v67 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.getTradeState(), {
    at: './index.rsh:46:32:application',
    fs: ['at ./index.rsh:46:32:application call to [unknown function] (defined at: ./index.rsh:46:32:function exp)', 'at ./index.rsh:46:32:application call to "liftedInteract" (defined at: ./index.rsh:46:32:application)'],
    msg: 'getTradeState',
    who: 'Ctpy'
    });
  
  stdlib.protect(ctc2, await interact.acceptTrade(v68), {
    at: './index.rsh:49:29:application',
    fs: ['at ./index.rsh:48:14:application call to [unknown function] (defined at: ./index.rsh:48:18:function exp)'],
    msg: 'acceptTrade',
    who: 'Ctpy'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 1,
    lct: v69,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v78, time: v77, didSend: v45, from: v76 } = txn2;
      
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
  const {data: [], secs: v78, time: v77, didSend: v45, from: v76 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.getTradeState(), {
    at: './index.rsh:55:31:application',
    fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)'],
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Null;
  
  
  const v62 = stdlib.protect(ctc1, interact.initTerms, 'for Owner\'s interact field initTerms');
  
  stdlib.protect(ctc2, await interact.setInitTerms(v62), {
    at: './index.rsh:39:30:application',
    fs: ['at ./index.rsh:37:15:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'setInitTerms',
    who: 'Owner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v62],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v68], secs: v70, time: v69, didSend: v29, from: v67 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v68], secs: v70, time: v69, didSend: v29, from: v67 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.isInitialised(), {
    at: './index.rsh:44:33:application',
    fs: ['at ./index.rsh:44:33:application call to [unknown function] (defined at: ./index.rsh:44:33:function exp)', 'at ./index.rsh:44:33:application call to "liftedInteract" (defined at: ./index.rsh:44:33:application)'],
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
  const {data: [], secs: v78, time: v77, didSend: v45, from: v76 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.getTradeState(), {
    at: './index.rsh:55:31:application',
    fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:27:function exp)'],
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
  appApproval: `BiACAAEmAQAiNQAxGEEA1ihkSSJbNQGBCFs1AjYaABdJQQARIjUEIzUGga2b59cGEkQ0AQA2GgIXNQQ2GgM2GgEXSSMMQAAdIxJEIzQBEkQ0BEkiEkw0AhIRRIAEmouRdLBCADFIIjQBEkQ0BEkiEkw0AhIRREk1BTX/gAR25HU+NP9QsIGgjQaIAGMjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v68",
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
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v68",
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
  Bytecode: `0x6080604052604051610816380380610816833981016040819052610022916101b3565b600080554360035560408051338152825160208083019190915283015151518183015290517f1a777cf9717aa5a2afee2667e8cb6a17f3b63eb2b2be25f17a8074d1e506f5379181900360600190a161007d341560086100bb565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100b39260029201906100e4565b505050610270565b816100e05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f090610235565b90600052602060002090601f0160209004810192826101125760008555610158565b82601f1061012b57805160ff1916838001178555610158565b82800160010185558215610158579182015b8281111561015857825182559160200191906001019061013d565b50610164929150610168565b5090565b5b808211156101645760008155600101610169565b604051602081016001600160401b03811182821017156101ad57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360408112156101c657600080fd5b604080519081016001600160401b03811182821017156101f657634e487b7160e01b600052604160045260246000fd5b604052835181526020601f198301121561020f57600080fd5b61021761017d565b915061022161017d565b602094850151815282529283015250919050565b600181811c9082168061024957607f821691505b6020821081141561026a57634e487b7160e01b600052602260045260246000fd5b50919050565b6105978061027f6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a1591461007857806352768c8a1461008b57806383230757146100e3578063ab53f2c6146100f857005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61005261008636600461044d565b61011b565b34801561009757600080fd5b506100a0610249565b604080518251151581526020808401516001600160a01b03908116918301919091528383015116918101919091526060918201519181019190915260800161006f565b3480156100ef57600080fd5b50600154610065565b34801561010457600080fd5b5061010d610335565b60405161006f929190610465565b61012b600160005414600a6103d2565b6101458135158061013e57506001548235145b600b6103d2565b600080805560028054610157906104c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610183906104c2565b80156101d05780601f106101a5576101008083540402835291602001916101d0565b820191906000526020600020905b8154815290600101906020018083116101b357829003601f168201915b50505050508060200190518101906101e89190610505565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021b929190610529565b60405180910390a161022f341560096103d2565b60008080556001819055610245906002906103f7565b5050565b604080516080810182526000808252602082018190529181018290526060810182905290546001141561032657600060028054610285906104c2565b80601f01602080910402602001604051908101604052809291908181526020018280546102b1906104c2565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b50505050508060200190518101906103169190610505565b9050610324600060076103d2565b505b610332600060076103d2565b90565b60006060600054600280805461034a906104c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610376906104c2565b80156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b50505050509050915091509091565b816102455760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610403906104c2565b6000825580601f10610413575050565b601f0160209004906000526020600020908101906104319190610434565b50565b5b808211156104495760008155600101610435565b5090565b60006040828403121561045f57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156104995785810183015185820160600152820161047d565b818111156104ab576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806104d657607f821691505b6020821081141561045f57634e487b7160e01b600052602260045260246000fd5b801515811461043157600080fd5b60006020828403121561051757600080fd5b8151610522816104f7565b9392505050565b6001600160a01b038316815281356020808301919091526060820190830135610551816104f7565b801515604084015250939250505056fea2646970667358221220057a60631d843e173f3cedc0c0b8bd483b2211a5b928b1fb35c3cdd2e02714c464736f6c634300080c0033`,
  BytecodeLen: 2070,
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
    at: './index.rsh:42:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:52:13:after expr stmt semicolon',
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
