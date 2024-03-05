const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    let price = await hre.ethers.provider.getGasPrice();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log('price', price.toString())

    // 开发环境
    const chainId = hre.network.config.chainId;
    // const managers = ["0x2804A4296211Ab079AED4e12120808F1703841b3","0x4202726a119F7784085B04264BfF716267a51032","0x4dAE32e287D43Ba6F6fE9323864e67A9c66B47e6"];
    // 测试网
    const managers = ["0x1a9f8b818a73B0F9FDe200cd88C42B626d2661Cd", "0x6c2039B5fDaE068baD4931E8Cc0b8E3a542937ac", "0x3c2ff003fF996836d39601cA22394A58ca9c473b"];

    const NerveMultiSigWalletIII = await hre.ethers.getContractFactory("NerveMultiSigWalletIII");
    const wallet = await NerveMultiSigWalletIII.deploy(chainId, managers, {
        gasPrice: price.toString(),
        gasLimit: 5500000
    });
    console.log("NerveMultiSigWalletIII address:", wallet.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
