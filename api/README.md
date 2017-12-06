# re-reg-on-the-chain
Smart contract based solution for mutual fund re-registration

Default port, _if not specified in environment variable_--> 8080

### 1. /api/createBaseContract: POST  
For Instantiating base contract by calling its constructor.  
Returns "newContractAddress" of the instantiated contract.  
**Request:**  
{  
  edingSchemeName: string,  
  cedingSchemeAddress: string,  
  policyNumber: string,  
  schemeType: string,  
  cashOrRereg: string,  
  wrapper: string,  
  expectedOrExactAmout: string,  
  safeguardedBenefitsFlag: string,  
  pensionSharingOrderFlag: string,  
  guaranteesApply: string,  
  adviser: string,  
  _**customerName**_: string, <-- getCustomerDetails will return this arg  
  customerDOB: string,  
  customerNIID: string  
}  
**Response:**  
{ "newContractAddress": #hex address of the deployed contract }  
  
### 2. /api/getCustomerDetails: POST  
Calls getCustomerDetails method of the previously instantiated base contract.  
  
**Request:**  
{"contractAddress": #hex address of the contract to be used}  

**Response:**  
{ "customerName" : string }

### 3. /api/viewInstructions/all: Get/Post

Will retrieve all the instructions added to registry contract and return an array of that.

**Request:**  
* Request body not required.  
* Replace all in URL with a number to limit the total output.  
_e.g._ /api/viewInstructions/5 will return an array of only recent 5 instructions .
  
**Response:**  
Only returns customerName in instruction as of now...  
{  
  sucess: true,  
  instructions: [{customerName: "string"}, ...]  
}  