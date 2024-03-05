require("@nomicfoundation/hardhat-toolbox");

// 测试网部署NerveMultiSigWalletIII: 0x4F50AB8Ae16d0643C9dad2cc9debbb0E9F714507
// const PRIVATE_KEY = "3b1a5e193825fe0c4551998ed4aa6d490b617bad0709f11a149b4c8829e6b24a";

// 测试网部署CreateERC20Minter: 0x2804A4296211Ab079AED4e12120808F1703841b3
const PRIVATE_KEY = "c48f55dbe619e83502be1f72c875ed616aeaab6108196f0d644d72e992f6a155";

// 新开发环境: 0x7a9a9223830e58a53f47972255a99edba0332617
// const PRIVATE_KEY = "2f9df30325528074753f3be473dec781f28038691ec94b72900a1eec8db82cc9";

// 旧开发环境: 0xf173805F1e3fE6239223B17F0807596Edc283012
// const PRIVATE_KEY = "d15fdd6030ab81cee6b519645f0c8b758d112cd322960ee910f65ad7dbb03c2b";

// mode blast merlin

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "merlin",
  networks: {
    hardhat: {
    },
    enuls: {
      url: "https://beta.evmapi.nuls.io",
      accounts: [PRIVATE_KEY],
      chainId: 120
    },
    janus: {
      url: "https://rpc.test.janusnetwork.io/",
      accounts: [PRIVATE_KEY],
      chainId: 66988
    },
    manta: {
      url: "https://manta-testnet.calderachain.xyz/http",
      accounts: [PRIVATE_KEY],
      chainId: 3441005
    },
    x1: {
      url: "https://x1testrpc.okx.com",
      accounts: [PRIVATE_KEY],
      chainId: 195
    },
    zeta: {
      url: "https://zetachain-athens-evm.blockpi.network/v1/rpc/public",
      accounts: [PRIVATE_KEY],
      chainId: 7001
    },
    kroma: {
      url: "https://api.sepolia.kroma.network",
      accounts: [PRIVATE_KEY],
      chainId: 2358
    },
    shm: {
      url: "https://sphinx.shardeum.org",
      accounts: [PRIVATE_KEY],
      chainId: 8082
    },
    mode: {
      url: "https://sepolia.mode.network/",
      accounts: [PRIVATE_KEY],
      chainId: 919
    },
    blast: {
      url: "https://sepolia.blast.io",
      accounts: [PRIVATE_KEY],
      chainId: 168587773
    },
    merlin: {
      url: "https://testnet-rpc.merlinchain.io",
      accounts: [PRIVATE_KEY],
      chainId: 686868
    }
  },
  solidity: {
    // compilers: [
    //   {version: "0.6.12"},
    //   {version: "0.5.17"},
    //   {version: "0.4.26"}
    // ],
    // version: "0.4.26",
    version: "0.6.12",
    // version: "0.5.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
