<template>
  <Columns max-columns="two">
    <Input
      v-model="model.SSSID"
      label="SSSID"
      type="text"
      id="ssid-input" />

    <BaseSelector
      v-model="model.hiddenNetwork"
      :items="[{label: 'Yes', value: true}, {label: 'No', value: false}]"
      :description-extractor="item => item.label"
      :value-extractor="item => item.value"
      label="Hidden network"
      id="wifi-hidden"
    />

    <WIFIEncryptionSelector
      v-model="model.encryptionType"
      id="wifi-encryption-selector" />

    <Input
      v-if="!!model.encryptionType"
      v-model="model.password"
      label="Password"
      type="text"
      id="password-input" />
  </Columns>
</template>

<script setup>
import { defineModel } from 'vue'
import Columns from '@/components/Columns.vue'
import WIFIEncryptionSelector from '@/components/form/WIFIEncryptionSelector.vue'
import Input from '@/components/form/Input.vue'
import BaseSelector from '@/components/form/BaseSelector.vue'

const model = defineModel({
  type: {
    SSSID: { type: String, default: '' },
    encryptionType: { type: String, default: '' },
    password: { type: String, default: '' },
    hiddenNetwork: { type: Boolean, default: false }
  }
})
</script>
