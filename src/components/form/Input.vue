<template>
  <div class="text-input">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      v-model="model"
      :type="type">
  </div>
</template>

<script setup>
const model = defineModel()
const props = defineProps({
  label: {
    type: String,
    default: 'Label'
  },
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
})
</script>

<style>
.text-input {
  display: flex;
  flex-direction: column;
}
</style>
