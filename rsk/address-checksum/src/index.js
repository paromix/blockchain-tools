const stripHexPrefix = require('strip-hex-prefix');
const createKeccakHash = require('keccak');

function keccak(message){
	return createKeccakHash('keccak256').update(message).digest()
}

function toChecksumAddress(address, chainId = null) {
    const strip_address = stripHexPrefix(address).toLowerCase()

    const prefix = chainId != null ? (chainId.toString() + '0x') : ''
    const keccak_hash = keccak(prefix + strip_address).toString('hex')
    let output = '0x'

    for (let i = 0; i < strip_address.length; i++)
        output += parseInt(keccak_hash[i], 16) >= 8 ?
            strip_address[i].toUpperCase() :
            strip_address[i]

    return output
}

var addr = toChecksumAddress("0x59B1e729B5c65D2c25F6A16164cF0Db0E9fA5754", 31);
console.log("addr : " + addr)

