<template>
  <Columns max-columns="two">
    <Input
      v-model="model.SSID"
      label="SSID"
      type="text"
      id="wifi-ssid-input" />

    <BaseSelector
      v-model="model.hiddenNetwork"
      :items="[{label: 'Yes', value: true}, {label: 'No', value: false}]"
      :description-extractor="item => item.label"
      :value-extractor="item => item.value"
      label="Hidden network"
      id="wifi-hidden-selector"
    />

    <WIFIEncryptionSelector
      v-model="model.encryptionType"
      id="wifi-encryption-selector" />

    <Input
      v-if="!!model.encryptionType"
      v-model="model.password"
      label="Password"
      type="text"
      id="wifi-password-input" />
  </Columns>
</template>

<script setup>
import { computed, defineModel, onMounted, watch } from 'vue'
import Columns from '@/components/Columns.vue'
import WIFIEncryptionSelector from '@/components/form/qr/WIFIEncryptionSelector.vue'
import Input from '@/components/form/Input.vue'
import BaseSelector from '@/components/form/BaseSelector.vue'

const model = defineModel({
  type: {
    SSID: { type: String, default: '' },
    encryptionType: { type: String, default: '' },
    password: { type: String, default: '' },
    hiddenNetwork: { type: Boolean, default: false }
  }
})

const standardisedWIFIString = computed(() => `WIFI:`
  + `T:${model.value.encryptionType};`
  + `S:${model.value.SSID};`
  + `P:${(!!model.value.encryptionType) ? model.value.password : ''};H:${model.value.hiddenNetwork};`)

const emit = defineEmits(['output'])
onMounted(() => emit('output', standardisedWIFIString.value))
watch(standardisedWIFIString, val => emit('output', val))
</script>
