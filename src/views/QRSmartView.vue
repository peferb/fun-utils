<template>
  <div class="qr-automation">
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
      <VCardForm @input="handleVCardInput" />
    </div>

    <h2>Visual settings</h2>
    <div class="options-form">
      <Columns max-columns="two">
        <ColorSelector id="input-color-1" label="Color 1" v-model="option.color.light" />
        <ColorSelector id="input-color-2" label="Color 2" v-model="option.color.dark" />
        <NumberRange id="input-width" label="Width" v-model="option.width" />
        <FileTypeSelector id="file-type-selector" label="Filetype" v-model="option.fileType"/>
      </Columns>
    </div>

    <VueQrcode
      :value="option.value"
      :mask-pattern="option.maskPattern"
      :errorCorrectionLevel="option.errorCorrectionLevel"
      :version="option.version"
      :width="option.width"
      :color="option.color"
      :margin="0"
      :type="option.fileType"
      :quality="option.quality"
      @change="val => dataUrl.data = val"
      style="margin-top: 12px"
    />


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
    <button @click="showQrContent = !showQrContent" style="margin-right: 8px">
      Show QR content
    </button>
    <pre
      v-if="showQrContent"
      class="data-url-output">{{ option.value }}</pre>
    <hr style="margin: 12px 0">
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import IconQRCode2 from '@/components/icons/IconQRCode2.vue'
import VueQrcode from 'vue-qrcode'
import VCardForm from '@/components/form/VCardForm.vue'
import ColorSelector from '@/components/form/ColorSelector.vue'
import NumberRange from '@/components/form/NumberRange.vue'
import FileTypeSelector from '@/components/form/FileTypeSelector.vue'
import Columns from '@/components/Columns.vue'

const option = ref({
  value: '',
  maskPattern: 5,
  version: 10,
  width: 250,
  color: {
    light: '#FFFFFF',
    dark: '#000000'
  },
  errorCorrectionLevel: 'low',
  fileType: 'image/png',
  quality: 1.0
})

const dataUrl = ref({
  show: false,
  data: null
})

const showQrContent = ref(false)

const handleVCardInput = val => option.value.value = val

const copyToClipboard = text => navigator.clipboard.writeText(text)
</script>

<style>
.content-tab, .options-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

.data-url-output {
  line-break: anywhere;
}
@media (min-width: 1024px) {
}
</style>
