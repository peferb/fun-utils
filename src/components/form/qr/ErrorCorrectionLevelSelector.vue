<template>
    <BaseSelector
      :id="id"
      label="Correction level"
      v-model="model"
      :items="correctionLevelArray"
      :value-extractor="level => level.short"
      :description-extractor="level => level.label"/>
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
const correctionLevel = inject('errorCorrectionLevel')
const correctionLevelArray = ref(Object.values(correctionLevel))
</script>
