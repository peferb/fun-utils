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
      <EnhancedEncryptionIcon />
    </template>
    <template #heading>
      <RouterLink to="/shamirs-secret-sharing">SSS</RouterLink>
      - Shamirs Secret Sharing
    </template>
    <p style="padding-bottom: 12px; font-style: italic">
      <a href="https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing">Shamir's secret sharing on Wikipedia</a>
    </p>
    <ul class="checked">
      <li>split secret into n parts</li>
      <li>set parts required for restoration</li>
      <li>restore secret</li>
    </ul>
  </ContentItem>

  <ContentItem>
    <template #icon>
      <QRCodeIcon1 />
    </template>
    <template #heading>
      <RouterLink to="/qr">QR</RouterLink>
      - Create QR codes
    </template>
    <ul class="checked">
      <li>Create WIFI connection</li>
      <li>Create contact card</li>
      <li>Create calendar event</li>
      <li>Create mail</li>
      <li>Create SMS</li>
      <li>Create phone call</li>
      <li>Create custom "raw" QR</li>
      <li>Add image/logo</li>
      <li>Position image/logo</li>
      <li>Image/logo border</li>
      <li>Select colors</li>
      <li>Select context color</li>
      <li>Select image filetype</li>
      <li>Select error correction level</li>
      <li>Select mask</li>
      <li>See qr content</li>
      <li>See qr as image data</li>
      <li>Resize</li>
    </ul>
    <br>
    <pre>// TODO</pre>
    <ul class="unchecked">
      <li>Set context size</li>
      <li>Position QR in context</li>
      <li>FAQ</li>
    </ul>
  </ContentItem>

  <ContentItem>
    <template #icon>
      <WalletIcon />
    </template>
    <template #heading>
      <RouterLink to="/crypto">Crypto</RouterLink>
      - generate Ethereum wallets
    </template>
    <ul class="checked">
      <li>generate ethereum wallets</li>
      <li>match in end</li>
      <li>output includes private key, address and mnemonic</li>
    </ul>
    <pre>// TODO</pre>
    <ul class="unchecked">
      <li>validate input</li>
      <li>error message for browsers not supporting workers</li>
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
