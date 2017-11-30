var BaseInstr = artifacts.require("./BaseInst.sol");
var Common = artifacts.require("./mortal.sol");

module.exports = function(deployer) {
  deployer.deploy(BaseInstr);
  deployer.link(BaseInstr, Common);
  deployer.deploy(Common);
};
