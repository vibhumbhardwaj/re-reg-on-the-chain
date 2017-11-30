import Web3 from 'web3';
import ethNode from './config';

export default () => {
  if (typeof web3 !== 'undefined') {
    global.web3 = new Web3(web3.currentProvider);
  } else {
    global.web3 = new Web3(new Web3.providers.HttpProvider(ethNode));
  }
  return web3.eth.getAccounts().then((accounts) => {
    web3.eth.defaultAddress = accounts[0];
    console.log('web3 Configuration Complete');
  })
}