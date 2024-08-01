<template>
    <BaseSelector
      :id="id"
      label="Encryption"
      v-model="model"
      :items="encryption"/>
</template>

<script setup>
import { inject, ref } from 'vue'
import BaseSelector from '@/components/form/BaseSelector.vue'

const model = defineModel()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const wifiEncryption = inject('wifiEncryption')
const encryption = ref(Object.values(wifiEncryption))
</script>
