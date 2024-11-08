const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    let price = await hre.ethers.provider.getGasPrice();

    console.log("Deploying contracts with the account:", deployer.address);

    const Multicall2 = await hre.ethers.getContractFactory("Multicall2");
    const multicall2 = await Multicall2.deploy({
        gasPrice: price.toString(),
        gasLimit: 1900000
    });
    console.log("Multicall2 address:", multicall2.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
