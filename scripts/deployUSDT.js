const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    let price = await hre.ethers.provider.getGasPrice();

    console.log("Deploying contracts with the account:", deployer.address);

    const amount = "100000000000000";
    const name = "USDT";
    const symbol = "USDT";
    const decimals = 6;

    const TetherToken = await hre.ethers.getContractFactory("TetherToken");
    const usd18 = await TetherToken.deploy(amount, name, symbol, decimals, {
        gasPrice: price.toString(),
        gasLimit: 2000000
    });
    console.log("usdt address:", usd18.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
