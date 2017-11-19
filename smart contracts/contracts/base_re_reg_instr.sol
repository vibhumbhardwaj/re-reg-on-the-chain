pragma solidity ^0.4.1;

import "./common.sol";
import "./customer.sol";

contract BaseInst is mortal {

    bytes32 CedingSchemeName;
    bytes32 CedingSchemeAddress;
    bytes32 PolicyNumber;
    bytes32 SchemeType;
    bytes32 CashOrReReg;
    bytes32 Wrapper;
    bytes32 ExpectedOrExactAmount;
    bytes32 SafeguardedBenefitsFlag;
    bytes32 PensionSharingOrderFlag;
    bytes32 GuaranteesApply;
    bytes32 Adviser;
    Customer customer;

    function BaseInst(bytes32 _CedingSchemeName,
                      bytes32 _CedingSchemeAddress,
                      bytes32 _PolicyNumber,
                      bytes32 _SchemeType,
                      bytes32 _CashOrReReg,
                      bytes32 _Wrapper,
                      bytes32 _ExpectedOrExactAmount,
                      bytes32 _SafeguardedBenefitsFlag,
                      bytes32 _PensionSharingOrderFlag,
                      bytes32 _GuaranteesApply,
                      bytes32 _Adviser,
                      bytes32 _CustomerName,
                      bytes32 _CustomerDOB,
                      bytes32 _CustomerNIId) {
           CedingSchemeName = _CedingSchemeName;
           CedingSchemeAddress =  _CedingSchemeAddress;
           PolicyNumber = _PolicyNumber;
           SchemeType =  _SchemeType;
           CashOrReReg =  _CashOrReReg;
           Wrapper =  _Wrapper;
           ExpectedOrExactAmount =  _ExpectedOrExactAmount;
           SafeguardedBenefitsFlag = _SafeguardedBenefitsFlag;
           PensionSharingOrderFlag = _PensionSharingOrderFlag;
           GuaranteesApply = _GuaranteesApply;
           Adviser = _Adviser;
           customer = new Customer(_CustomerName, _CustomerDOB, _CustomerNIId);
    }

    function getCustomerDetails() returns (bytes32){
        
        var (CustName, CustDOB, CustNIId) = customer.getCustomerDetail();
        return CustName;
    }

}