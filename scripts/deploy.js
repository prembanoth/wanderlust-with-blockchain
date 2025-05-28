const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);

  const unlockTime = Math.floor(Date.now() / 1000) + 60; // 60 seconds from now

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime); // This already deploys the contract

  console.log("Lock contract deployed to:", lock.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
