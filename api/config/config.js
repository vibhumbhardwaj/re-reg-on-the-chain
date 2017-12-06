const ethNode = 'http://localhost:8545';

//Default is "local" as of now.
const environment = process.env.NODE_ENV || 'local';

//Current implementation only for local
const registryAddress = '0x00';

//Contracts' names
const contracts = {
  baseInst: 'BaseInst'
}

export {
  ethNode,
  environment,
  registryAddress,
  contracts
};