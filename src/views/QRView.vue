<template>
  <div class="page qr-automation">
    <PageTitle>
      <template #icon>
        <IconQRCode1 />
      </template>
      Create QR code
    </PageTitle>
    <p>
      Using rx-ts vue-qrcode: <a href="https://github.com/rx-ts/vue/tree/master/packages/vue-qrcode">Github</a>,
      <a href="https://www.npmjs.com/package/vue-qrcode">NPM</a>.
    </p>

    <h2>Content</h2>
    <Tabs
      v-model="selectedContentTab"
      :tabs="contentTabs">
      <TextField
        v-if="selectedContentTab === 'Raw'"
        v-model="rawInput"
        id="raw-content-input"
        :rows="12"
        label="Content" />
      <ContactForm
        v-if="selectedContentTab === 'vCard'"
        v-model="vCardSettings"
        @output="val => vCardOutput = val"
      />
      <CommunicationForm
        v-if="selectedContentTab === 'Com'"
        v-model="communicationSettings"
        @output="val => communicationOutput = val"
      />
      <EventForm
        v-if="selectedContentTab === 'vEvent'"
        v-model="vEventSettings"
        @output="val => vEventOutput = val"
      />
      <WIFIForm
        v-if="selectedContentTab === 'WIFI'"
        v-model="wifiSettings"
        @output="val => wifiOutput = val" />
    </Tabs>

    <h2>Settings</h2>
    <Tabs
      v-model="selectedQrTab"
      :tabs="qrTabs">
      <QRVisualForm
        v-if="selectedQrTab === 'Visual'"
        v-model="qrSettings" />
      <div v-if="selectedQrTab === 'Image'">
        <ImageForm v-model="imageSettings"/>
      </div>
      <QRFormatForm
        v-if="selectedQrTab === 'Format'"
        v-model="qrSettings" />
    </Tabs>

    <h2>QR Code</h2>
    <Tabs
      v-model="qrSettings.colorSetting"
      :tabs="['Regular', 'Inverted']"
      only-tabs />
    <div
      class="box"
      :style="`background-color: ${qrSettings.background}`">
      <!-- TODO make wrapping div resizable and the qr movable inside of it -->
      <div style="position: relative">
        <VueQrcode
          :value="content"
          :mask-pattern="qrSettings.maskPattern"
          :errorCorrectionLevel="qrSettings.errorCorrectionLevel"
          :version="qrSettings.version"
          :width="qrSettings.width"
          :color="qrSettings.colorSetting === 'Regular' ? qrSettings.color : {light: qrSettings.color.dark, dark: qrSettings.color.light}"
          :margin="0"
          :type="qrSettings.filetype"
          @change="val => dataUrl = val"
        />
        <img
          v-if="imageSettings.src"
          :src="imageSettings.src"
          :style="imageStyle"
          id="qr-image"
          alt="Image of your choice" />
      </div>
    </div>
    <!-- TODO add "wHy IsNt iT wOrKinG?!?!"-FAQ box -->

    <!-- TODO Link to https://www.webfx.com/blog/web-design/qr-codes-uri-schemes/ -->
    <!-- TODO and tell them to look at content and use "RAW" -->

    <!-- TODO explain data size -->
    <!-- TODO explain image size and color contrast effect on camera -->
    <!-- TODO explain spacing/context effect on camera -->
    <!-- TODO explain monster v2 color (+invert) + link -->
    <!-- TODO explain qr scanner vs regular camera -->
    <!-- TODO explain correction level and how it relates to image/logo -->

    <h2>Data</h2>
    <Tabs
      v-model="selectedSeeDataTab"
      :tabs="seeDataTabs">
      <div
        v-if="selectedSeeDataTab === 'Content'"
        class="data-url-output">
        {{ content }}
      </div>
      <div
        v-if="selectedSeeDataTab === 'Data URL'"
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
import ContactForm from '@/components/form/qr/ContactForm.vue'
import QRFormatForm from '@/components/form/qr/QRFormatForm.vue'
import Tabs from '@/components/Tabs.vue'
import TextField from '@/components/form/TextField.vue'
import WIFIForm from '@/components/form/qr/WIFIForm.vue'
import QRVisualForm from '@/components/form/qr/QRVisualForm.vue'
import EventForm from '@/components/form/qr/EventForm.vue'
import CommunicationForm from '@/components/form/qr/CommunicationForm.vue'
import ImageForm from '@/components/form/qr/ImageForm.vue'

const errorCorrectionLevel = inject('errorCorrectionLevel')
const rawInput = ref('https://peferb.github.io/fun-utils/#/qr')
const vEventOutput = ref()
const vCardOutput = ref()
const communicationOutput = ref()
const wifiOutput = ref()

const contentTabs = ref(['Raw', 'vCard', 'vEvent','Com', 'WIFI'])
const selectedContentTab = ref('Raw')

const qrTabs = ref(['Visual', 'Format', 'Image'])
const selectedQrTab = ref('Visual')

const seeDataTabs = ref(['Content', 'Data URL'])
const selectedSeeDataTab = ref('Content')

const content = computed(() => {
    switch (selectedContentTab.value) {
      case 'Raw':
        return rawInput.value
      case 'vCard':
        return vCardOutput.value || ''
      case 'vEvent':
        return vEventOutput.value || ''
      case 'WIFI':
        return wifiOutput.value || ''
      case 'Com':
        return communicationOutput.value || ''
      default:
        return 'Something went wrong'
    }
  }
)

/** @type {string} codeMonsterV2Background - https://huggingface.co/monster-labs/control_v1p_sd15_qrcode_monster*/
const codeMonsterV2Background = '#808080'
const qrSettings = ref({
  maskPattern: 5,
  version: 10,
  width: 250,
  color: {
    light: '#FFFFFF',
    dark: '#000000'
  },
  background: codeMonsterV2Background,
  colorSetting: 'Regular',
  errorCorrectionLevel: errorCorrectionLevel.LOW.short,
  filetype: 'image/png',
  quality: 1
})

const wifiSettings = ref({
  SSID: 'my-network-name',
  encryptionType: 'WPA',
  password: 'My not so secret password',
  hiddenNetwork: false
})

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
const communicationSettings = ref({
  media: "Mail",
  email: "",
  cc: "",
  subject: "",
  mailBody: "",
  phone: "",
  smsBody: "",
})

const vEventSettings = ref({
  start: new Date().toISOString().split('T')[0],
  end: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  summary: 'Celebrate peferb!',
  description: 'Today is the day today.',
  location: 'Sweden, Bålsta'
})

const imageSettings = ref({
  src: '',
  width: 50,
  positionTop: 100,
  positionLeft: 100,
  borderSize: 0,
  borderColor: '#FF0000',
})

const imageStyle = computed(() => `width: ${imageSettings.value.width}px; `
  + `position: absolute; `
  + `top: ${imageSettings.value.positionTop}px; `
  + `left: ${imageSettings.value.positionLeft}px; `
  + `border: ${imageSettings.value.borderSize}px ${imageSettings.value.borderColor} solid; `
)

const dataUrl = ref(null)
</script>

<style>
.data-url-output {
  line-break: anywhere;
  font-family: monospace;
}
</style>
