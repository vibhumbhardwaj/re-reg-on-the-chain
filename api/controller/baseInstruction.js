import {deployBaseContract, getCustomerDetails, getConsolidatedView} from '../service/baseContract';
import {getContracts, addNewContract} from './../service/registry';
import {contracts} from './../config/config';
import {errorResponse} from './../service/utils/helper';

var addedToRegistry = (address) => {
	console.log('Contract is deployed. Added to registry even. Sweet.--> ' + address);
	return {
		success: true,
		contractAddress: address
	};
}

/*
Will return success only when contract is also added to the registry.
*/
var createBaseContract = (req, res, errorHandling) => {
	
	//Apply validations on req.body here
	
	deployBaseContract(req.body)
		.then(address => addNewContract(contracts.baseInst, address))
		.then(addedToRegistry)
		.then(res.json.bind(res))
		.catch(errorHandling)
}

/*
This one expects contract address to be included in frontend request.
*/
var getInstruction = (req, res, errorHandling)=> {
	
	let createResponse = (result) => ({
		success: true,
		customerName: result.customerName
	})
	
	//Fetches name only for now.
	getCustomerDetails(req.body.contractAddress)
		.then(createResponse)
	  .then(res.json.bind(res))
	  .catch(errorHandling);
}

/*
Will return consolidated list of all base instructions registered in registry contract.
*/
var getAllInstructions = (req, res, errorHandling) => {
	
	let createResponse = (arrObject) => ({
	  sucess: true,
	  instructions: arrObject
  })
	
	let spliceTotalInstructions = (arr) => {
		let limit = req.params.max;
		if(isNaN(limit))
			return arr.reverse();
		else
			return arr.splice(arr.length - limit).reverse();
	}
	
	getContracts(contracts.baseInst)
	  .then(spliceTotalInstructions)
		.then(getConsolidatedView)
		.then(createResponse)
	  .then(res.json.bind(res))
	  .catch(errorHandling)
}


export {
	createBaseContract,
	getAllInstructions,
	getInstruction
}
