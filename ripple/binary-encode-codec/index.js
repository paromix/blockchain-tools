var rippleBinaryCodec = require("ripple-binary-codec")

var jsonStr = null
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
  if(index == 2){
    jsonStr = val
  }
});

if(jsonStr == null){
  jsonStr = '{  "TransactionType": "PaymentChannelClaim",  "Channel": "C1AE6DDDEEC05CF2978C0BAD6FE302948E9533691DC749DCDD3B9E5992CA6198",  "Balance": "1000000",  "Amount": "1000000",  "Signature": "30440220718D264EF05CAED7C781FF6DE298DCAC68D002562C9BF3A07C1E721B420C0DAB02203A5A4779EF4D2CCC7BC3EF886676D803A9981B928D3B8ACA483B80ECA3CD7B9B",  "PublicKey": "32D2471DB72B27E3310F355BB33E339BF26F8392D5A93D3BC0FC3B566612DA0F0A"}'
}

console.log("JSON : " + jsonStr)

var binrv = rippleBinaryCodec.encode(JSON.parse(jsonStr))

console.log("BIN")
console.log(binrv)
