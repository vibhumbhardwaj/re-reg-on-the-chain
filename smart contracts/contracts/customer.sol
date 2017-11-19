pragma solidity ^0.4.1;

import "./common.sol";

contract Customer is mortal {

    bytes32 CustomerName;
    bytes32 CustomerDOB;
    bytes32 CustomerNIId;

    function Customer(bytes32 _CustomerName,
                      bytes32 _CustomerDOB,
                      bytes32 _CustomerNIId) {
           CustomerName = _CustomerName;
           CustomerDOB = _CustomerDOB;
           CustomerNIId = _CustomerNIId;
    }

    function getCustomerDetail() returns (bytes32, bytes32, bytes32){
        return (CustomerName, CustomerDOB, CustomerNIId);
    }

}