const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    let price = await hre.ethers.provider.getGasPrice();
    // wallet地址
    const multiSigWalletAddress = "0x50074F4Bc4bC955622b49de16Fc6E3C1c73afBcA";
    const nvtERC20 = "0xE6b360C49A316fcc71d55B3074160ee043a7BD8B";

    const walletAbi = require("../artifacts/contracts/NerveMultiSigWalletIII.sol/NerveMultiSigWalletIII.json");
    const wallet = new hre.ethers.Contract(multiSigWalletAddress, walletAbi.abi, deployer);
    // 调用参数
    const register = await wallet.registerMinterERC20(nvtERC20, {
        gasPrice: price.toString(),
        gasLimit: 500000
    });
    console.log("registerMinterERC20:", register.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
