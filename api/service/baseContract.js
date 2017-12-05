import {convertAllToHex, readFromResponse, convertToString} from './utils/helper';
import {estimateGasAndGo, deployer, sendCallTransaction} from './utils/adapter';
import baseContractJson from './../../smart contracts/build/contracts/BaseInst.json';

var getDeployArguments = (body) => {
  let args =  [
    body.cedingSchemeName,
    body.cedingSchemeAddress,
    body.policyNumber,
    body.schemeType,
    body.cashOrRereg,
    body.wrapper,
    body.expectedOrExactAmout,
    body.safeguardedBenefitsFlag,
    body.pensionSharingOrderFlag,
    body.guaranteesApply,
    body.adviser,
    body.customerName,
    body.customerDOB,
    body.customerNIID
  ];
  return convertAllToHex(args);
}



var deployBaseContract = (args) => {
  args = getDeployArguments(args);
  return deployer(baseContractJson, args)
		.then(contract => contract.options.address);
}

var getCustomerDetails = (contractAddress) => {
  let baseContract = new web3.eth.Contract(baseContractJson.abi, contractAddress),
    methodToCall = baseContract.methods.getCustomerDetails();

  return estimateGasAndGo(methodToCall, sendCallTransaction)
    //.then(readFromResponse)
    .then(convertToString)
    .then(response => ({
      customerName: response
    }));
}



var getConsolidatedView = (addresses) => {
	let responseArray = addresses.map(x => 
		getCustomerDetails(x).then(response => ({
			customerName: response.customerName
		})) //TODO: Add more fields to the return object
	)
	
	return Promise.all(responseArray);
}


export {
	deployBaseContract,
	getCustomerDetails,
	getConsolidatedView
};

