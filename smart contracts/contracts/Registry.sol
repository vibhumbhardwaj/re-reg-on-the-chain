pragma solidity ^0.4.1;

import "./common.sol";

contract Registry is mortal {

    mapping (bytes32 => address[]) public contractNameWithAddress;
    
    function addAddress(bytes32 name, address contractAddress) {
      address[] conAdd = contractNameWithAddress[name];
      if(conAdd.length > 0) {
        conAdd.push(contractAddress);
      } else {
        conAdd.push(contractAddress);
        contractNameWithAddress[name] = conAdd;
      }
    }

    function getAllAddressOfContract(bytes32 name) returns(address[] addressess) {    
      return contractNameWithAddress[name];
    }
}