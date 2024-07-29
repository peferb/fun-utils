<template>
  <div class="page qr-automation">
    <PageTitle>
      <template #icon>
        <IconQRCode2 />
      </template>
      Smart QR codes
    </PageTitle>
    <p>
      Using rx-ts vue-qrcode: <a href="https://github.com/rx-ts/vue/tree/master/packages/vue-qrcode">Github</a>,
      <a href="https://www.npmjs.com/package/vue-qrcode">NPM</a>.
    </p>
    <p>
      Create a digital contact card.
    </p>

    <h2>VCard settings</h2>
    <div class="content-tab">
      <VCardForm @input="setContent" />
    </div>

    <h2>Visual settings</h2>
    <QrSettingsForm
      v-model="setting"
    />

    <h2>QR Code</h2>
    <VueQrcode
      :value="content"
      :mask-pattern="setting.maskPattern"
      :errorCorrectionLevel="setting.errorCorrectionLevel"
      :version="setting.version"
      :width="setting.width"
      :color="setting.color"
      :margin="0"
      :type="setting.filetype"
      :quality="setting.quality"
      @change="val => dataUrl.data = val"
      style="margin-top: 24px"
    />

    <h2>See data</h2>
    <hr style="margin: 12px 0">
    <button @click="showQrContent = !showQrContent" style="margin-right: 8px">
      Show QR content
    </button>
    <pre
      v-if="showQrContent"
      class="data-url-output">{{ content }}</pre>
    <hr style="margin: 12px 0">
    <button @click="dataUrl.show = !dataUrl.show" style="margin-right: 8px">
      Show QR data
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
import { inject, ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import IconQRCode2 from '@/components/icons/IconQRCode2.vue'
import VueQrcode from 'vue-qrcode'
import VCardForm from '@/components/form/VCardForm.vue'
import QrSettingsForm from '@/components/form/QrSettingsForm.vue'

const errorCorrectionLevel = inject('errorCorrectionLevel')

const setting = ref({
  maskPattern: 5,
  version: 10,
  width: 250,
  color: {
    light: '#FFFFFF',
    dark: '#000000'
  },
  errorCorrectionLevel: errorCorrectionLevel.LOW.short,
  filetype: 'image/png',
  quality: 1.0
})

const content = ref('')

const dataUrl = ref({
  show: false,
  data: null
})

const showQrContent = ref(false)

const setContent = val => content.value = val
</script>

<style>
.content-tab, .options-form {
  display: flex;
  flex-direction: column;
}

.data-url-output {
  line-break: anywhere;
}
@media (min-width: 1024px) {
}
</style>
