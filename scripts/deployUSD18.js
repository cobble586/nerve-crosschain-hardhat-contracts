const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    let price = await hre.ethers.provider.getGasPrice();

    console.log("Deploying contracts with the account:", deployer.address);

    const amount = "100000000000000000000000000";
    const name = "USD18";
    const symbol = "USD18";
    const decimals = 18;

    const ERC20 = await hre.ethers.getContractFactory("ERC20");
    const usd18 = await ERC20.deploy(amount, name, symbol, decimals, {
        gasPrice: price.toString(),
        gasLimit: 2000000
    });
    console.log("usd18 address:", usd18.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
