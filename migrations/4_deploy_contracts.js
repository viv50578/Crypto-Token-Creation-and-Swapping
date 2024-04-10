const TokenSwap = artifacts.require("TokenSwap");
const Token1 = artifacts.require("Token1");
const Token2 = artifacts.require("Token2");

module.exports = async function(deployer) {
  const owner1 = "0x0eae0aa10f470894b894f87afc7064005a87c9ab";
  const owner2 = "0x775c4d0592ea3a58a776146b652f26b0b2b5b07c";
  const amount1 = "10000000000000000000"; // 10 tokens
  const amount2 = "20000000000000000000"; // 20 tokens

  // Deploy Token1
  await deployer.deploy(Token1, owner1);
  const token1Instance = await Token1.deployed();
  const token1Address = token1Instance.address;

  // Deploy Token2
  await deployer.deploy(Token2, owner2);
  const token2Instance = await Token2.deployed();
  const token2Address = token2Instance.address;

  // Deploy TokenSwap
  await deployer.deploy(TokenSwap, token1Address, owner1, amount1, token2Address, owner2, amount2);
};
