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
      <ContactForm
        v-if="selectedContentTab === 'vcard'"
        v-model:first-name.trim="vCardSettings.firstName"
        v-model:last-name.trim="vCardSettings.lastName"
        v-model:organisation.trim="vCardSettings.organisation"
        v-model:title.trim="vCardSettings.title"
        v-model:phoneWork.trim="vCardSettings.phoneWork"
        v-model:mobile.trim="vCardSettings.mobile"
        v-model:email.trim="vCardSettings.email"
        v-model:url.trim="vCardSettings.url"
        v-model:street.trim="vCardSettings.street"
        v-model:postalNumber.trim="vCardSettings.postalNumber"
        v-model:city.trim="vCardSettings.city"
        v-model:country.trim="vCardSettings.country"
      />
      <TextField
        v-if="selectedContentTab === 'raw'"
        v-model="rawInput"
        id="raw-content-input"
        :rows="12"
        label="Content"/>
    </Tabs>

    <h2>Visual settings</h2>
    <QrSettingsForm
      v-model="qrSetting"
    />

    <h2>QR Code</h2>
    <VueQrcode
      :value="content"
      :mask-pattern="qrSetting.maskPattern"
      :errorCorrectionLevel="qrSetting.errorCorrectionLevel"
      :version="qrSetting.version"
      :width="qrSetting.width"
      :color="qrSetting.color"
      :margin="0"
      :type="qrSetting.filetype"
      :quality="qrSetting.quality"
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
import ContactForm from '@/components/form/ContactForm.vue'
import QrSettingsForm from '@/components/form/QrSettingsForm.vue'
import Tabs from '@/components/Tabs.vue'
import TextField from '@/components/form/TextField.vue'

const errorCorrectionLevel = inject('errorCorrectionLevel')
const rawInput = ref('https://peferb.github.io/fun-utils/#/qr-smart')
const showQrContent = ref(false)
const selectedContentTab = ref('raw')
const tabs = ref([{label: 'Raw', value: 'raw'}, {label: 'VCard', value: 'vcard'}])

const content = computed(() => selectedContentTab.value === 'raw' ? rawInput.value : standardisedVCardString.value)
const qrSetting = ref({
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
  country: 'Sweden',
})

const standardisedVCardString = computed(() => {
  return `BEGIN:VCARD\nVERSION:3.0\n`
    + `N:${vCardSettings.value.lastName};${vCardSettings.value.firstName}\n`
    + `FN:${vCardSettings.value.lastName} ${vCardSettings.value.firstName}\n`
    + `ORG:${vCardSettings.value.organisation}\n`
    + `TITLE:${vCardSettings.value.title}\n`
    + `ADR:;;${vCardSettings.value.street};${vCardSettings.value.city};;${vCardSettings.value.postalNumber};${vCardSettings.value.country}\n`
    + `TEL;WORK;VOICE:${vCardSettings.value.phoneWork}\n`
    + `TEL;CELL:${vCardSettings.value.mobile}\n`
    + `EMAIL;WORK;INTERNET:${vCardSettings.value.email}\n`
    + `URL:${vCardSettings.value.url}\n`
    + `END:VCARD`
})

const dataUrl = ref({
  show: false,
  data: null
})

</script>

<style>
.data-url-output {
  line-break: anywhere;
  font-family: monospace;
  padding: 16px 0;
}
</style>
