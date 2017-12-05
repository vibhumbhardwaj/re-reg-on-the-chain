import {environment, registryAddress} from './../config/config';
import registryJson from './../../smart contracts/build/contracts/Registry.json';
import {deployer, estimateGasAndGo, sendCallTransaction, sendTransaction} from './utils/adapter';

var contract;

var setupRegistryContract = () => {
  var setVariable = (address)=> {
    contract = new web3.eth.Contract(registryJson.abi, address);
  }
  
  if(environment == 'local')
    deployer(registryJson)
      .then(x => x.options.address)
      .then(setVariable)
  else
    setVariable(registryAddress)
}

var getContracts = (contractName) => {
  contractName = web3.utils.asciiToHex(contractName);
  let getAllAddressOfContract = contract.methods.getAllAddressOfContract(contractName);
  
  return estimateGasAndGo(getAllAddressOfContract, sendCallTransaction)
    .then((result) => {
    console.log('Received this much instantiated contracts--> ' + result.length);
    return result;
  })
}

var addNewContract = (contractName, address) => {
  let addAddress = contract.methods.addAddress(web3.utils.asciiToHex(contractName), address);
  return estimateGasAndGo(addAddress, sendTransaction)
    .then( () => address)
}


export {
  setupRegistryContract,
  getContracts,
  addNewContract
};
