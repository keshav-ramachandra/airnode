import { ethers } from 'ethers';

type Log = ethers.providers.Log;

// =================================================================
// Regular requests
// =================================================================
export function buildClientRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 16,
    blockHash: '0x990a53d24138bd46c775538694c7925a7ecc7c6144bb66c7fdafe0d6d11a0a40',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000020000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e06e8fd87d8dc50766e9805b1c67bdbe836bade9482760a15e09a88e2f8c3035b60000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a46c4b41d72ada9d14157b28a8a2db97560fff120000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e048a4157c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000060316200000000000000000000000000000000000000000000000000000000000066726f6d000000000000000000000000000000000000000000000000000000004554480000000000000000000000000000000000000000000000000000000000',
    topics: [
      '0xaff6f5e5548953a11cbb1cfdd76562512f969b0eba0a2163f2420630d4dda97b',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0xe4413447744dfa328f09ab5a4166f80d9e99a30a7984728f5d53dfb211a7dd7b',
    ],
    transactionHash: '0x33187e7e8af331baa11ba964b39d65f3d9127dbcf285a34a4b6f0d5c5d7babd7',
    logIndex: 0,
    ...overrides,
  };
}

export function buildClientRequestFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 20,
    blockHash: '0x42264bc78c914bbdc0b7e0acb8da1a2be12ba1dc8fcb75a49116784d43d93412',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000043',
    topics: [
      '0xcde46e28d8d3e348e5f5b4fcc511fe3b1f9b0f549cd8332f0da31802a6f2bf61',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0xe4413447744dfa328f09ab5a4166f80d9e99a30a7984728f5d53dfb211a7dd7b',
    ],
    transactionHash: '0xb5e91680be948547b6959031040b3995348e33538a547859c12e2371cd7848a4',
    logIndex: 0,
    ...overrides,
  };
}

// =================================================================
// Full requests
// =================================================================
export function buildFullClientRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 17,
    blockHash: '0x13173782294cebccbf318755b283fc5b84a44b331305062e5b82bef96b262a5a',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000030000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e03c8e59646e688707ddd3b1f07c4dbc5ab55a0257362a18569ac2644ccf6faddb0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a46c4b41d72ada9d14157b28a8a2db97560fff120000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e048a4157c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000160316262626262000000000000000000000000000000000000000000000000000066726f6d000000000000000000000000000000000000000000000000000000004554480000000000000000000000000000000000000000000000000000000000746f00000000000000000000000000000000000000000000000000000000000055534400000000000000000000000000000000000000000000000000000000005f74797065000000000000000000000000000000000000000000000000000000696e7432353600000000000000000000000000000000000000000000000000005f70617468000000000000000000000000000000000000000000000000000000726573756c7400000000000000000000000000000000000000000000000000005f74696d657300000000000000000000000000000000000000000000000000003130303030300000000000000000000000000000000000000000000000000000',
    topics: [
      '0x775e78a8e7375d14ad03d31edd0a27b29a055f732bca987abfe8082c16ed7e44',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0x05862d676dc47662dcdadff3446a8b53af3011b821468c19a017db937b4a9479',
    ],
    transactionHash: '0xed554fbbb2971fb2af7f5c800b586de239d806a31785252eb957ac1a9cf72468',
    logIndex: 0,
    ...overrides,
  };
}

export function buildFullRequestFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 21,
    blockHash: '0xc7b5393a877e8bd1cb3bc44e9dde29fbe2c3c2e9df022d1277ca4e97505a07f2',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000043',
    topics: [
      '0xcde46e28d8d3e348e5f5b4fcc511fe3b1f9b0f549cd8332f0da31802a6f2bf61',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0x05862d676dc47662dcdadff3446a8b53af3011b821468c19a017db937b4a9479',
    ],
    transactionHash: '0xf731d66caaaf31565716d7a6f626def0584b8e3771a07739ddf3f676b5ec93da',
    logIndex: 0,
    ...overrides,
  };
}

// =================================================================
// Withdrawals
// =================================================================
export function buildWithdrawalRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 18,
    blockHash: '0x6a1cc2c95d739003d023b5ed3174979fed0a26c5ec3b2eec21d4950120abaa90',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000034e9a78d63c9ca2148c95e880c6b1f48ae7f121e0000000000000000000000006812efaf684aa899949212a2a6785305ec0f1474',
    topics: [
      '0x3d0ebccb4fc9730699221da0180970852f595ed5c78781346149123cbbe9f1d3',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0x0000000000000000000000000000000000000000000000000000000000000001',
      '0xd9db6b416bbd9a87f4e693d66a0323eafde6591cae537727cd1f4e7ff0b53d5a',
    ],
    transactionHash: '0xac3aa3683548a631dd7561cfa32d4e003f43bfc061bb40adc9920c9c1d4d6a60',
    logIndex: 0,
    ...overrides,
  };
}

export function buildWithdrawalFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 22,
    blockHash: '0x10036d3cc8f54317033f529627280652129644ce01301a5856d82219bd4250be',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000034e9a78d63c9ca2148c95e880c6b1f48ae7f121e0000000000000000000000006812efaf684aa899949212a2a6785305ec0f14740000000000000000000000000000000000000000000000000ddef4ab537b4000',
    topics: [
      '0x9e7b58b29aa3b972bb0f457499d0dfd00bf23905b0c3358fb864e7120402aefa',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0x0000000000000000000000000000000000000000000000000000000000000001',
      '0xd9db6b416bbd9a87f4e693d66a0323eafde6591cae537727cd1f4e7ff0b53d5a',
    ],
    transactionHash: '0xd7018b960a11f53e83763b2a3c582b5e9178caf24fe0e17e3d3367962af8885f',
    logIndex: 0,
    ...overrides,
  };
}