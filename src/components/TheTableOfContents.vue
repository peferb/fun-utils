<script setup>
import ContentItem from './ContentItem.vue'
import Title from './Title.vue'
import QRCodeIcon1 from './icons/IconQRCode1.vue'
import QRCodeIcon2 from './icons/IconQRCode2.vue'
import EnhancedEncryptionIcon from '@/components/icons/IconEnhancedEncryption.vue'
import WalletIcon from '@/components/icons/IconWallet.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Title>Table of Contents</Title>

  <ContentItem>
    <template #icon>
      <QRCodeIcon2/>
    </template>
    <template #heading><RouterLink to="/qr-simple">QR</RouterLink> - Basic QR code</template>
    <ul>
      <li>Resize</li>
      <li>Select foreground/background color</li>
      <li>Manually set mask</li>
      <li>Error correction level</li>
      <li>Filetype</li>
      <li>Quality</li>
      <li>See "raw" data</li>
      <li>Copy to clipboard</li>
    </ul>
  </ContentItem>

  <ContentItem>
    <template #icon>
      <QRCodeIcon1/>
    </template>
    <template #heading><RouterLink to="/qr-simple">QR2</RouterLink> - QR code</template>
    <span style="font-weight: bolder">// TODO</span>
    <ul style="text-decoration: line-through;">
      <li>Resize</li>
      <li>Select foreground/background color</li>
      <li>Select positioning colors</li>
      <li>Spacing height</li>
      <li>Spacing color</li>
      <li>Timing X/Y color</li>
      <li>Binary Content</li>
      <li>Error recovery level</li>
      <li>Add image/logo</li>
    </ul>
  </ContentItem>

  <ContentItem>
    <template #icon>
      <EnhancedEncryptionIcon/>
    </template>
    <template #heading><RouterLink to="/shamirs-secret">SS</RouterLink> - Shamirs Secret</template>
    <p style="padding-bottom: 12px; font-style: italic">
      <a href="https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing">Shamir's secret sharing on Wikipedia</a>
    </p>
    <span style="font-weight: bolder">// TODO</span>
    <ul style="text-decoration: line-through;">
      <li>split secret into n parts</li>
      <li>set parts required for restoration</li>
      <li>restore secret</li>
    </ul>
  </ContentItem>

  <ContentItem>
    <template #icon>
      <WalletIcon/>
    </template>
    <template #heading><RouterLink to="/ethereum-wallet">ETH</RouterLink> - generate Ethereum wallets</template>
    <span style="font-weight: bolder">// TODO</span>
    <ul style="text-decoration: line-through;">
      <li>generate n wallets</li>
      <li>output includes private key, address and mnemonic</li>
      <li>match in end</li>
      <li>match in start</li>
      <li>chars included in address</li>
      <li>case-sensitive or case-insensitive</li>
    </ul>
  </ContentItem>
</template>

<style>
ul {
  list-style: circle;
  padding-inline-start: 18px;
}
</style>
