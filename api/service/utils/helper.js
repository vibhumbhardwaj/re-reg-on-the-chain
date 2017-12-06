var convertAllToHex = (args) => {
  args.forEach((arg, i, arr) => {
    arr[i] = (arg) ? web3.utils.asciiToHex(arg) : "0x00";
  })
  return args;
}

var convertToString = result => web3.utils.hexToAscii(result).replace(/\u0000/g, '')


var round = (value) => {
  return Number(Math.round(value + 'e' + 0) + 'e-' + 0);
}

var readFromResponse = (result) => {
  //result = result.toString();
  console.log('Uh Hey Rick, This thing worked!? I guess..-->\n' + result);
  console.log('20% accurate as usual Mo-arrr-rty.');
  return result;
}

var errorResponse = {
  success: false,
  message: 'Something Happened'
}


export {
  convertAllToHex,
  round,
  readFromResponse,
  errorResponse,
  convertToString
};