<script setup>
import WelcomeItem from './ContentItem.vue'
import Title from './Title.vue'
import QRCodeIcon1 from './icons/IconQRCode1.vue'
import QRCodeIcon2 from './icons/IconQRCode2.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Title>Table of Contents</Title>

  <WelcomeItem>
    <template #icon>
      <QRCodeIcon2 />
    </template>
    <template #heading><RouterLink to="/qr-simple">QR</RouterLink> - Basic QR code</template>
    <ul>
      <li>Resize</li>
      <li>Select foreground/background color</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <QRCodeIcon1 />
    </template>
    <template #heading><RouterLink to="/qr-simple">QR2</RouterLink> - QR code</template>
    <ul>
      <li>Resize</li>
      <li>Select foreground/background color</li>
      <li>Select positioning colors</li>
      <li>Spacing height</li>
      <li>Spacing color</li>
      <li>Timing X/Y color</li>
      <li>Binary Content</li>
      <li>Error recovery level</li>
    </ul>
  </WelcomeItem>
</template>

<style>
ul {
  list-style: circle;
  padding-inline-start: 18px;
}
</style>
