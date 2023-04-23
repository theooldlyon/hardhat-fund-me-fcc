async function main() {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log("Funding....");
  const txResponse = await fundMe.withdraw();
  await txResponse.wait(1);
  console.log("Got it Back!");
  console.log("---------------------------!");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
