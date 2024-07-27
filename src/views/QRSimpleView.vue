<template>
  <div class="qr-simple">
    <PageTitle>
      <template #icon>
        <IconQRCode2 />
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
      <label for="input-value">Value</label>
      <input id="input-value" v-model="option.value" type="text">

      <NumberRange id="input-width" label="Width" v-model="option.width" />
      <NumberRange id="input-mask" label="Mask" v-model="option.maskPattern" :min="1" :max="7" />
      <NumberRange id="input-version" label="Version" v-model="option.version" :min="1" :max="40" />

      <ColorSelector id="input-color-1" label="Color 1" v-model="option.color.light" />
      <ColorSelector id="input-color-2" label="Color 2" v-model="option.color.dark" />

      <label for="input-value">Correction level</label>
      <select
        id="input-correction-level"
        v-model="option.errorCorrectionLevel">
        <option
          v-for="level in correctionLevel"
          :value="level.value">
          {{ level.label }}
        </option>
      </select>

      <FileTypeSelector id="file-type-selector" label="Filetype" v-model="option.fileType"/>

      <NumberRange id="input-quality" label="Quality" type="float" v-model="option.quality" :min="0" :max="1" />
    </div>

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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import IconQRCode2 from '@/components/icons/IconQRCode2.vue'
import VueQrcode from 'vue-qrcode'
import NumberRange from '@/components/form/NumberRange.vue'
import ColorSelector from '@/components/form/ColorSelector.vue'
import FileTypeSelector from '@/components/form/FileTypeSelector.vue'

const correctionLevel = ref([
  { label: 'Low - 7%', value: 'low' },
  { label: 'Medium - 15%', value: 'medium' },
  { label: 'Quartile - 25%', value: 'quartile' },
  { label: 'High - 30%', value: 'high' },
])

const option = ref({
  value: 'https://peferb.github.io/fun-utils',
  maskPattern: 1,
  version: 4,
  width: 250,
  color: {
    light: '#FFFFFF',
    dark: '#000000'
  },
  errorCorrectionLevel: 'high',
  fileType: 'image/png',
  quality: 1.0
})

const dataUrl = ref({
  show: false,
  data: null
})

const copyToClipboard = text => navigator.clipboard.writeText(text)
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

.data-url-output {
  line-break: anywhere;
}
</style>
