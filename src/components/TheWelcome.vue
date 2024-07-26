<script setup>
import WelcomeItem from './WelcomeItem.vue'
import PageTitle from './PageTitle.vue'
import Title from './Title.vue'
import QRCodeIcon1 from './icons/IconQRCode1.vue'
import QRCodeIcon2 from './icons/IconQRCode2.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <PageTitle>About peferb/fun-utils</PageTitle>
  <p>
    This is a Vue/"Github Pages" implementation of
    <a href="https://github.com/peferb/utils">github.com/peferb/utils</a>. If you are interested in
    the code I would suggest taking a look at
    <a href="https://github.com/peferb/utils">github.com/peferb/utils</a> instead, which is
    implemented only using vanilla JS and HTML.
  </p>

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
