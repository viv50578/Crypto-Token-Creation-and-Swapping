const Token1 = artifacts.require("Token1");

module.exports = function (deployer, network, accounts) {
  // Deploy Token1 contract with the specified address as the initial owner
  const owner1 = "0x0eae0aa10f470894b894f87afc7064005a87c9ab";
  deployer.deploy(Token1, owner1);
};
