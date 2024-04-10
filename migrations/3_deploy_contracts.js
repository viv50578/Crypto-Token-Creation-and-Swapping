const Token2 = artifacts.require("Token2");

module.exports = function (deployer, network, accounts) {
  // Deploy Token2 contract with the specified address as the initial owner
  const owner2 = "0x775c4d0592ea3a58a776146b652f26b0b2b5b07c";
  deployer.deploy(Token2, owner2);
};
