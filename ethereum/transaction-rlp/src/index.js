// see full article here https://wanderer.github.io/ethereum/2014/06/14/creating-and-verifying-transaction-with-node/

var Transaction = require('ethereumjs-tx')
var RLP = require('rlp')

// create a blank transaction
//var tx = new Transaction(null, 3) // mainnet Tx EIP155
var tx = new Transaction(null, 42) // Kovan Tx EIP155

// So now we have created a blank transaction but Its not quiet valid yet. We
// need to add some things to it. Lets start:
// notice we don't set the `to` field because we are creating a new contract.
tx.nonce = 0
tx.gasPrice = 4300000000
tx.gasLimit = 21000
tx.to = '0x59B1e729B5c65D2c25F6A16164cF0Db0E9fA5754'
tx.value = 1000000000000000
tx.data = '0x'

tx.v = '0x78'
tx.r = '0xa53f9a4042182d19c759414167eaf73ff417ed8d434c9db3082e28cc8cde166b'
tx.s = '0x1901c9e446a18092b323a5b22425c69ba308af23ea2dfd23f40c900d4d5ec0f8'

// Good Signature example
//tx.v = '0x77'
//tx.r = '0xe182a644b507815576e8d722adef0b8de5e91a6c60972a6c92b839a1bb55f679'
//tx.s = '0x79886a7c607d1d604b55f95eb15a9ed9827bf8752afd004891981982ca2f1d17'

// lets serialize the transaction

var serialized_tx = tx.serialize();
console.log('--- Serialized TX to be SENT ----')
console.log(serialized_tx.toString('hex'))
console.log('---------------------------------')

/* //////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////// */

var decoded = RLP.decode(serialized_tx)
//console.log("decoded : " + decoded)

var rawTx = decoded;
var tx2 = new Transaction(rawTx)
console.log('Senders Address: ' + tx2.getSenderAddress().toString('hex'))
console.log('ChainID : ' + tx2.getChainId())

if (tx2.verifySignature()) {
  console.log('Signature Good')
}else{
  console.log('Signature Verify Failed')
}

/* //////////////////////////////////////////////////////////////////// */
/* */
/* //////////////////////////////////////////////////////////////////// */

