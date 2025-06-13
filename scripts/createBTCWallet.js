import * as ecc from 'tiny-secp256k1'
import * as bitcoin from 'bitcoinjs-lib'
import ECPairFactory from 'ecpair'

const ECPair = ECPairFactory(ecc);

const walletsToCreate = 1
const endsWith = '042'

let tries = 0
const wallets = []
while (wallets.length < walletsToCreate) {
    tries++

    const network = bitcoin.networks.bitcoin
    const keyPair = ECPair.makeRandom({ network: network });
    const { address } = bitcoin.payments.p2wpkh({
        pubkey: Buffer.from(keyPair.publicKey),
        network: network,
    });
    if (address.endsWith(endsWith)) {
        wallets.push({
            p2wpkhAddress: address,
            privateKey: keyPair.toWIF(),
        })
    }
    console.clear()
    console.log(`wanted: ${walletsToCreate}\ntries: ${tries}\nfound: ${wallets.length}`)
}
console.log(wallets)
