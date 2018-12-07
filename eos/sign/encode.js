Eos = require('eosjs')
Fcbuffer = require('fcbuffer') // or: Fcbuffer = require('./src')
eos = Eos()

assert = require('assert')

const schema = require('./schema')
//console.log("schema : " + JSON.stringify(schema))

// Warning: Do not use {defaults: true} in production
fcbuffer = Fcbuffer(schema)

// Check for errors anywhere in the definitions structure
assert(fcbuffer.errors.length === 0, fcbuffer.errors)

// If there are no errors, you'll get your structs
var {transaction_header, transaction} = fcbuffer.structs
console.log("============================================")
console.log("transaction : " + JSON.stringify(transaction))
console.log("transaction_header : " + JSON.stringify(transaction_header))
console.log("============================================")

// Create JSON serializable object
// returns { from: '', to: '', cc: [ '' ], type: '', data: '' }
//console.log("transaction_header.toObject")
//transaction_header.toObject()
//console.log("transaction_header : " + JSON.stringify(transaction_header))

//console.log("transaction.toObject")
//transaction.toObject()
//console.log("============================================")
//console.log("transaction : " + JSON.stringify(transaction))

// Convert JSON into a more compact fcbuffer serializable object
//msg = { from: 'jc', to: 'dan', cc: [ 'abc' ], type: '', data: '0f0f0f' }
tx_head = {
      "expiration": "2018-08-14T15:15:40",
      "ref_block_num": 1817,
      "ref_block_prefix": 3903165098,
      "context_free_actions": [],
      "max_net_usage_words" : 42949694,
      "max_cpu_usage_ms" : 255,
      "delay_sec" : 0,
}

msg = {
      "expiration": "2018-08-14T15:15:40",
      "ref_block_num": 1817,
      "ref_block_prefix": 3903165098,
      "context_free_actions": [],
      "max_net_usage_words" : 0,
      "max_cpu_usage_ms" : 0,
      "delay_sec" : 0,
      "actions": [{
          "account": "eosio.token",
          "name": "transfer",
          "authorization": [{
              "actor": "eosio",
              "permission": "active"
            }
          ],
          "data": "0000000000ea305590a7a608993c154aa08601000000000004454f530000000000"
        }
      ],
      "transaction_extensions": [],
      "signatures": [
      ]
}

buf_tx = eos.fc.toBuffer('transaction', msg)
buf_head = eos.fc.toBuffer('transaction_header', tx_head)
// Serialize fcbuffer object into a single binary buffer
//buf = Fcbuffer.toBuffer(schema, msg)
// returns <Buffer 02 6a 63 07 63 68 61 72 6c 65 73 01 03 61 62 63 00 03 0f 0f 0f>
console.log("head json : " + JSON.stringify(tx_head))
console.log("buf_head : " + buf_head.toString('hex'))
console.log("tx json : " + JSON.stringify(msg))
console.log("tx : " + buf_tx.toString('hex'))

