var convertAllToHex = (args) => {
  args.forEach((arg, i, arr)=>{
    arr[i] = (arg) ?  web3.utils.asciiToHex(arg) : "0x00";
  })
  return args;
}

var round = (value) => {
  return Number(Math.round(value+'e'+0)+'e-'+0);
}

var readFromResponse = (result) => {
  //result = result.toString();
  console.log('Uh Hey Rick, This thing worked!? I guess..-->\n' + result);
  console.log('20% accurate as usual Mo-arrr-rty.');
  return result;
}


export {convertAllToHex, round, readFromResponse}