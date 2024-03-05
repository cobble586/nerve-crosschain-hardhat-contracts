const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    let price = await hre.ethers.provider.getGasPrice();

    console.log("call contracts with the account:", deployer.address);

    const CreateERC20Minter = await hre.ethers.getContractFactory("CreateERC20Minter");
    const createERC20Minter = await CreateERC20Minter.attach("0x1EA3FfD41c3ed3e3f788830aAef553F8F691aD8C");
    console.log("CreateERC20Minter address:", createERC20Minter.address);
    const setupMinter = await createERC20Minter.setupMinter("0x5e7E2AbAa58e108f5B9D5D30A76253Fa8Cb81f9d", {
        gasPrice: price.toString(),
        gasLimit: 210000
    });
    console.log("setupMinter:", setupMinter.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
