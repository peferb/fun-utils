<script setup>
import ContentItem from './ContentItem.vue'
import Title from './Title.vue'
import QRCodeIcon1 from './icons/IconQRCode1.vue'
import EnhancedEncryptionIcon from '@/components/icons/IconEnhancedEncryption.vue'
import WalletIcon from '@/components/icons/IconWallet.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Title>Table of Contents</Title>

  <ContentItem>
    <template #icon>
      <QRCodeIcon1 />
    </template>
    <template #heading>
      <RouterLink to="/qr">QR</RouterLink>
      - Create QR codes
    </template>
    <ul class="checked">
      <li>Create WIFI QR</li>
      <li>Create vCard (digital contact)</li>
      <li>Create custom "raw" QR</li>
      <li>Select QR colors</li>
      <li>Select QR context color</li>
      <li>Select error correction level</li>
      <li>Select image filetype</li>
      <li>Select mask</li>
      <li>See qr content</li>
      <li>See qr as image data</li>
      <li>Resize</li>
    </ul>
    <ul class="unchecked">
      <li>Select positioning colors</li>
      <li>Spacing</li>
      <li>Timing X/Y color</li>
      <li>Binary Content</li>
      <li>Add image/logo</li>
    </ul>
  </ContentItem>

  <ContentItem>
    <template #icon>
      <EnhancedEncryptionIcon />
    </template>
    <template #heading>
      <RouterLink to="/shamirs-secret-sharing">SSS</RouterLink>
      - Shamirs Secret Sharing
    </template>
    <p style="padding-bottom: 12px; font-style: italic">
      <a href="https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing">Shamir's secret sharing on Wikipedia</a>
    </p>
    <pre>// TODO</pre>
    <ul class="unchecked">
      <li>split secret into n parts</li>
      <li>set parts required for restoration</li>
      <li>restore secret</li>
    </ul>
  </ContentItem>

  <ContentItem>
    <template #icon>
      <WalletIcon />
    </template>
    <template #heading>
      <RouterLink to="/ethereum-wallet">ETH</RouterLink>
      - generate Ethereum wallets
    </template>
    <pre>// TODO</pre>
    <ul class="unchecked">
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
  padding-inline-start: 18px;

  &.checked {
    list-style-type: "\2714";
  }

  &.unchecked {
    list-style-type: "\00D7";
  }
}

li {
  padding-left: 8px;
}
</style>
