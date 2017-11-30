import {convertAllToHex, readFromResponse} from './utils/helper';
import {estimateGasAndGo, deployer, sendCallTransaction} from './utils/adapter';
import jsonForBaseContract from './../../smart contracts/build/contracts/BaseInst.json';

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

var createBaseContract = (req, res) => {
  let args = getDeployArguments(req.body);
  
  deployer(jsonForBaseContract, args)
    .then((newContract) => {
      res.json({
        success: true,
        contractAddress: newContract.options.address
      })
    })
    .catch((err) => {
      console.error(err);
      res.json({success: false, message: 'Something Happened'});
    })
}

var getCustomerDetails = (req, res) => {
  let baseContract = new web3.eth.Contract(jsonForBaseContract.abi, req.body.contractAddress),
      methodToCall = baseContract.methods.getCustomerDetails();

  estimateGasAndGo(methodToCall, sendCallTransaction)
 // .then(readFromResponse)
    .then((result) => {
      let str = web3.utils.hexToAscii(result).replace(/\u0000/g, '');
      res.json({
        success: true,
        customerName: str
      })
    })
   .catch((err) => {
      console.error(err);
      res.json({success: false, message: 'Something Happened'});
    })
}



export {createBaseContract, getCustomerDetails};
