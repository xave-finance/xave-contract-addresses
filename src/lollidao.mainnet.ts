import { AddressCollection } from './types'

const addresses: AddressCollection = {
  protocol: {
    RNBW: '0x0000000000000000000000000000000000000000',
    xRNBW: '0x0000000000000000000000000000000000000000',
    LPOP: '0x6335A2E4a2E304401fcA4Fc0deafF066B813D055',
    xLPOP: '0x75aeD8009f1c3B92b5691a580cc8a5A96b952966'
  },
  rewards: {
    ammRewards: '0x9E04B7a4Bea3C827FEdf5f86E76F889C459D0f98',
    rewardsManager: '0x12B6773A0057B1a35248159555883a524246C746',
    epochManager: '0x0000000000000000000000000000000000000000'
  },
  ammV1: {
    factory: '0x796aF82AbaB46D68FFA66c5B56b953A1ABFda101',
    router: '0xEcDB730E5a58AC94fbAc7d0E216727D1732DD554',
    zap: '0x072E42Ef99aFC6FDc0823fB0a03750E6555999e3',
    libraries: {
      curves: '0xd7345B283a8d8aDC7Ce718B2250D651062ACc958',
      orchestrator: '0x59b7FbD7239c06D03788b2c28e7a9AF7372E6A5b',
      proportionalLiquidity: '0x47a803a7B87a83F691427F6226803643399122eA',
      swaps: '0x8E330219fc45A5CE56a4CEa47A2D49b73De29994',
      viewLiquidity: '0xE8654a57B8d2930c621401758A9a534c1FDec71d'
    },
    curves: {
      enabled: [
        '0x2C0b301F942dE7a43f5BAc4A5DdcCCC67E52DcBd', // EURS:USDC
        '0xDf930B5F4F21AE97439d2A211845F499D50A78A0', // XSGD:USDC
        '0xf830ebbab536ca376120565e377fa9cfba9d5a34' // LPHP:USDC
      ],
      disabled: [
      ]
    },
    assimilators: {
      usdToUsdcAssimilator: '0xDB70e4cF1eE40Ed01A6eE3E4a200AabBf0facCbC'
    },
  },
  ammV2: {
    vault: '0x0000000000000000000000000000000000000000',
    pools: {
      genesis: [],
      enabled: [],
      disabled: []
    }
  },
  tokens: {}
}

export default addresses
