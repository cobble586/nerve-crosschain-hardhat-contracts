const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    let price = await hre.ethers.provider.getGasPrice();

    console.log("Deploying contracts with the account:", deployer.address);

    const name = "NVT";
    const symbol = "NVT";
    const decimals = 8;
    const minter = "0x50074F4Bc4bC955622b49de16Fc6E3C1c73afBcA";

    const ERC20Minter = await hre.ethers.getContractFactory("ERC20Minter");
    const usd18 = await ERC20Minter.deploy(name, symbol, decimals, minter, {
        gasPrice: price.toString(),
        gasLimit: 2000000
    });
    console.log("ERC20Minter address:", usd18.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
