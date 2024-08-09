<template>
  <BaseSelector
    :id="id"
    label="Filetype"
    v-model="model"
    :items="filetype"/>
</template>

<script setup>
import { inject } from 'vue'
import BaseSelector from '@/components/form/BaseSelector.vue'

const model = defineModel()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const filetype = inject('filetype')
</script>
