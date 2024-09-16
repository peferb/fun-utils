import { ethers } from 'ethers'

onmessage = function(event) {
  const { walletsToCreate, endsWith } = event.data

  let tries = 0
  const wallets = []
  while (wallets.length < walletsToCreate) {
    tries++

    const wallet = ethers.Wallet.createRandom()
    if (wallet.address.endsWith(endsWith)) {
      wallets.push({
        privateKey: wallet.privateKey,
        address: wallet.address,
        mnemonic: wallet.mnemonic.phrase,
        publicKey: wallet.publicKey,
        parentFingerprint: wallet.parentFingerprint,
        fingerprint: wallet.fingerprint
      })
    }
    postMessage({ tries, wallets, total: walletsToCreate })
  }
  postMessage('done')
}
