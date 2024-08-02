<template>
  <div class="page qr-automation">
    <PageTitle>
      <template #icon>
        <IconQRCode1 />
      </template>
      Create QR codes
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
      v-model="selectedTabs.content"
      :tabs="contentTabs">
      <TextField
        v-if="selectedTabs.content === 'Raw'"
        v-model="rawInput"
        id="raw-content-input"
        :rows="12"
        label="Content" />
      <ContactForm
        v-if="selectedTabs.content === 'VCard'"
        v-model="vCardSettings"
      />
      <WIFIForm
        v-if="selectedTabs.content === 'WIFI'"
        v-model="wifiSettings" />
    </Tabs>

    <!-- TODO make these settings hidden toggable -->
    <h2>Settings</h2>
    <Tabs
      v-model="selectedTabs.qr"
      :tabs="qrTabs">
      <QRVisualForm
        v-if="selectedTabs.qr === 'Visual'"
        v-model="qrSettings" />
      <QRFormatForm
        v-if="selectedTabs.qr === 'Format'"
        v-model="qrSettings" />
    </Tabs>

    <h2>QR Code</h2>
    <!-- TODO make wrapping div resizable and the qr movable inside of it -->
    <div class="box qr-container">
      <VueQrcode
        :value="content"
        :mask-pattern="qrSettings.maskPattern"
        :errorCorrectionLevel="qrSettings.errorCorrectionLevel"
        :version="qrSettings.version"
        :width="qrSettings.width"
        :color="qrSettings.color"
        :margin="0"
        :type="qrSettings.filetype"
        @change="val => dataUrl = val"
      />
    </div>

    <h2>Data</h2>
    <Tabs
      v-model="selectedTabs.seeData"
      :tabs="seeDataTabs">
      <div
        v-if="selectedTabs.seeData === 'Content'"
        class="data-url-output">
        {{ content }}
      </div>
      <div
        v-if="selectedTabs.seeData === 'Data URL'"
        class="data-url-output">
        {{ dataUrl }}
      </div>
    </Tabs>
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import IconQRCode1 from '@/components/icons/IconQRCode1.vue'
import VueQrcode from 'vue-qrcode'
import ContactForm from '@/components/form/ContactForm.vue'
import QRFormatForm from '@/components/form/QRFormatForm.vue'
import Tabs from '@/components/Tabs.vue'
import TextField from '@/components/form/TextField.vue'
import WIFIForm from '@/components/form/WIFIForm.vue'
import QRVisualForm from '@/components/form/QRVisualForm.vue'

const errorCorrectionLevel = inject('errorCorrectionLevel')
const rawInput = ref('https://peferb.github.io/fun-utils/#/qr-smart')
const contentTabs = ref(['Raw', 'VCard', 'WIFI'])
const qrTabs = ref(['Visual', 'Format'])
const seeDataTabs = ref(['Content', 'Data URL'])
const selectedTabs = ref({ content: 'Raw', qr: 'Visual', seeData: 'Content' })

const content = computed(() => selectedTabs.value.content === 'Raw' ? rawInput.value
  : selectedTabs.value.content === 'VCard' ? standardisedVCardString.value
    : standardisedWIFIString.value
)

const qrSettings = ref({
  maskPattern: 5,
  version: 10,
  width: 250,
  color: {
    light: '#FFFFFF',
    dark: '#000000'
  },
  errorCorrectionLevel: errorCorrectionLevel.LOW.short,
  filetype: 'image/png',
  quality: 1
})

const wifiSettings = ref({
  SSID: 'My-network',
  encryptionType: 'WPA',
  password: 'My not so secret password',
  hiddenNetwork: false
})
const standardisedWIFIString = computed(() => `WIFI:`
  + `T:${wifiSettings.value.encryptionType};`
  + `S:${wifiSettings.value.SSID};`
  + `P:${(!!wifiSettings.value.encryptionType) ? wifiSettings.value.password : ''};H:${wifiSettings.value.hiddenNetwork};`)

const vCardSettings = ref({
  firstName: 'peferb',
  lastName: '',
  organisation: '',
  title: 'Developer',
  mobile: '',
  phoneWork: '',
  email: '',
  url: 'github.com/peferb',
  street: '',
  city: '',
  postalNumber: '',
  country: 'Sweden'
})
const standardisedVCardString = computed(() => `BEGIN:VCARD\nVERSION:3.0\n`
  + `N:${vCardSettings.value.lastName};${vCardSettings.value.firstName}\n`
  + `FN:${vCardSettings.value.lastName} ${vCardSettings.value.firstName}\n`
  + `ORG:${vCardSettings.value.organisation}\n`
  + `TITLE:${vCardSettings.value.title}\n`
  + `ADR:;;${vCardSettings.value.street};${vCardSettings.value.city};;${vCardSettings.value.postalNumber};${vCardSettings.value.country}\n`
  + `TEL;WORK;VOICE:${vCardSettings.value.phoneWork}\n`
  + `TEL;CELL:${vCardSettings.value.mobile}\n`
  + `EMAIL;WORK;INTERNET:${vCardSettings.value.email}\n`
  + `URL:${vCardSettings.value.url}\n`
  + `END:VCARD`)

const dataUrl = ref(null)

</script>

<style>
.qr-container {
  background-color: var(--vt-c-code-monster-v2);
}
.data-url-output {
  line-break: anywhere;
  font-family: monospace;
  padding: 16px 0;
}
</style>
