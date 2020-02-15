var SmartContract = artifacts.require("./Transfer.sol");

module.exports = function(deployer) {
  deployer.deploy(SmartContract);
};
