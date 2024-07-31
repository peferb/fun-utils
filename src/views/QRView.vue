<template>
  <div class="page qr-automation">
    <PageTitle>
      <template #icon>
        <IconQRCode1 />
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

    <h2>Content</h2>
    <Tabs
      v-model="selectedContentTab"
      :tabs="tabs">
      <VCardForm
        v-if="selectedContentTab === 'vcard'"
        @input="setVCardInput"/>
      <TextField
        v-if="selectedContentTab === 'raw'"
        v-model="rawInput"
        id="raw-content-input"
        :rows="12"
        label="Content"/>
    </Tabs>

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
    <div
      v-if="showQrContent"
      class="data-url-output">{{ content }}</div>
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
import { computed, inject, ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import IconQRCode1 from '@/components/icons/IconQRCode1.vue'
import VueQrcode from 'vue-qrcode'
import VCardForm from '@/components/form/VCardForm.vue'
import QrSettingsForm from '@/components/form/QrSettingsForm.vue'
import Tabs from '@/components/Tabs.vue'
import TextField from '@/components/form/TextField.vue'

const errorCorrectionLevel = inject('errorCorrectionLevel')
const rawInput = ref('https://peferb.github.io/fun-utils/#/qr-smart')
const vCardInput = ref('')
const showQrContent = ref(false)
const selectedContentTab = ref('raw')
const tabs = ref([{label: 'Raw', value: 'raw'}, {label: 'VCard', value: 'vcard'}])

const content = computed(() => selectedContentTab.value === 'raw' ? rawInput.value : vCardInput.value)
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

const dataUrl = ref({
  show: false,
  data: null
})

const setVCardInput = val => vCardInput.value = val
</script>

<style>
.data-url-output {
  line-break: anywhere;
  font-family: monospace;
  padding: 16px 0;
}
</style>
