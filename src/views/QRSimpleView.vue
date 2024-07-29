<template>
  <div class="page qr-simple">
    <PageTitle>
      <template #icon>
        <IconQRCode1 />
      </template>
      Simple QR generator
    </PageTitle>
    <p>
      Using rx-ts vue-qrcode: <a href="https://github.com/rx-ts/vue/tree/master/packages/vue-qrcode">Github</a>,
      <a href="https://www.npmjs.com/package/vue-qrcode">NPM</a>.
    </p>
    <p>
      How do I get a good result? Read
      <a href="https://www.uniqode.com/blog/qr-code/how-much-data-can-qr-code-hold">uniqodes article</a> about how QR
      codes work.
    </p>
    <div class="form">
      <TextField id="input-content" label="Content" v-model="setting.value"/>
      <QrSettingsForm v-model="setting" />
    </div>

    <h2>QR Code</h2>
    <VueQrcode
      :value="setting.value"
      :mask-pattern="setting.maskPattern"
      :errorCorrectionLevel="setting.errorCorrectionLevel"
      :version="setting.version"
      :width="setting.width"
      :color="setting.color"
      :margin="0"
      :type="setting.fileType"
      :quality="setting.quality"
      @change="val => dataUrl.data = val"
      style="margin-top: 12px"
    />

    <h2>See data</h2>
    <hr style="margin: 12px 0">
    <button @click="dataUrl.show = !dataUrl.show" style="margin-right: 8px">
      Show data
    </button>
    <button @click="copyToClipboard(dataUrl.data)" style="margin-right: 8px">
      Copy data to clipboard
    </button>
    <div
      v-if="dataUrl.show"
      class="data-url-output">
      {{ dataUrl.data }}
    </div>
    <hr style="margin: 12px 0">
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import VueQrcode from 'vue-qrcode'
import IconQRCode1 from '@/components/icons/IconQRCode1.vue'
import TextField from '@/components/form/TextField.vue'
import QrSettingsForm from '@/components/form/QrSettingsForm.vue'

const setting = ref({
  value: 'https://peferb.github.io/fun-utils',
  maskPattern: 1,
  version: 4,
  width: 250,
  color: {
    light: '#FFFFFF',
    dark: '#000000'
  },
  errorCorrectionLevel: 'H',
  filetype: 'image/png',
  quality: 1.0
})

const dataUrl = ref({
  show: false,
  data: null
})

const copyToClipboard = text => navigator.clipboard.writeText(text)
</script>

<style>
.data-url-output {
  line-break: anywhere;
}
</style>
