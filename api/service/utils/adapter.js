import {readFromResponse, round} from './helper';

var estimateGasAndGo = (contractInstance, next) => {

  return contractInstance.estimateGas({
    gas: 1000000
  }).then((gasNeeded) => {
    //console.log('Gas Estimation: ' + gasNeeded);
    return next(contractInstance, gasNeeded);
  }, (err) => {
    console.error('Trouble getting the gas estimation: ' + err);
  })
}

var sendDeployTransaction = (instance, gasNeeded) => {
  return instance.send({
      from: web3.eth.defaultAddress,
      gas: round(gasNeeded * 1.1)
    }, (err, transactionHash) => {
      if (transactionHash)
        console.log('Transaction ID for Contract Instance Creation--> ' + transactionHash);
      if (err)
        console.error('Error sending the deploy transaction--> ' + err);
    })
    .on('receipt', (receipt) => {
      console.log('Receipt for new contract initialised: ' + receipt.contractAddress);
    })

}

var sendTransaction = (instance, gasNeeded) => {
  return instance.send({
    from: web3.eth.defaultAddress,
    gas: round(gasNeeded * 1.1)
  }, (err) => {
    if (err) console.error('Error during send transaction--> ' + err);
  }).then((hash) => {
    console.log('Contract\'s state changed successfully');
    return hash;
  })
}

var sendCallTransaction = (instance, gasNeeded) => {
  return instance.call({
    from: web3.eth.defaultAddress,
    gas: round(gasNeeded * 1.1)
  }, (err) => {
    if (err) console.error('Error calling the instance method' + err);
  })
  /*.then((result)=>{
      console.log('Response from method call -->' + result);
      return result;
    }) Noise logging*/
}

var deployer = (json, args) => {
  let newInstance = new web3.eth.Contract(json.abi);
  let binary = json.bytecode;
  if (!binary)
    binary = json.unlinked_binary;
  let instanceToDeploy = newInstance.deploy({
    data: binary,
    arguments: args
  });
  return estimateGasAndGo(instanceToDeploy, sendDeployTransaction);
}

export {
  deployer,
  estimateGasAndGo,
  sendCallTransaction,
  sendTransaction
}