const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    let price = await hre.ethers.provider.getGasPrice();

    console.log("Deploying contracts with the account:", deployer.address);

    const CreateERC20Minter = await hre.ethers.getContractFactory("CreateERC20Minter");
    const createERC20Minter = await CreateERC20Minter.deploy({
        gasPrice: price.toString(),
        gasLimit: 1900000
    });
    console.log("CreateERC20Minter address:", createERC20Minter.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
