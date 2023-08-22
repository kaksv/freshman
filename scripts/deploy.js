
// Import the hardhat package
const hre = require("hardhat");

async function main(){
  // Using hre -Hardhat runtime Environment, We find and deploy a contract named NFTee.sol
  
  const nftContract = await hre.ethers.deployContract("NFTee");
  // we wait for the contract to finish deploying
  await nftContract.waitForDeployment();
  // We print the address of the deployed contract to the console
  console.log("NFT Contract Address:", nftContract.target);
}

// Call the main function and catch for errors if any.
main()
.then(() =>process.exit(0))
.catch((error) => {
  console.log(error);
  process.exit(1);
});