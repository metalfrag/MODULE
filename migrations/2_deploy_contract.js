const Migrations = artifacts.require("Migrations");
const Mycontract = artifacts.require("Mycontract");
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Mycontract);
};
