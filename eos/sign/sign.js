const Eos = require('eosjs')
const readline = require('readline-sync')

// wif = 'PRIVATE-KEY'

const mySignProvider = ({buf, sign, transaction}) => {
    console.log("transaction : " + JSON.stringify(transaction))
    console.log("buffer : " + buf.toString('hex'))

    var signature = readline.question("SIGNATURE] ")
    //signature = sign(buf, wif);
    console.log("signature : " + signature);

    return signature
};

eos = Eos({signProvider: mySignProvider})

options = {
    authorization: 'dcentaccount@active',
    broadcast : true,
    sign : true
}

console.log("TX BEGIN")
eos.transfer('dcentaccount', 'eosio', '1.0000 EOS', '', options)

