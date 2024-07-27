<template>
  <div class="file-type-selector-container">
    <label :for="id">{{ label }}</label>
    <select
      :id="id"
      v-model="model">
      <option
        v-for="type in fileType"
        :value="type">
        {{ type }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const model = defineModel()
const props = defineProps({
  label: {
    type: String,
    default: 'Label'
  },
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
