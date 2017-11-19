pragma solidity ^0.4.1;

contract owned {
    function owned() { owner = msg.sender; }
    address owner;

    modifier onlyowner { 
        if (msg.sender == owner) _;
    }
}

contract mortal is owned {
    function kill() onlyowner {
        suicide(owner);
    }
}