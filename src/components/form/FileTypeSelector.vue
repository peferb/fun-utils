<template>
  <div class="file-type-selector-container">
    <BaseSelector
      :id="id"
      label="Filetype"
      v-model="model"
      :items="fileType"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseSelector from '@/components/form/BaseSelector.vue'

const model = defineModel()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const fileType = ref(['image/png', 'image/jpeg', 'image/webp'])
</script>

<style>
.file-type-selector-container {
  display: flex;
  flex-direction: column;
}
</style>
