<template>
  <div class="color-selector-container half-box">
    <label :for="id">{{ label }}</label>
    <div class="row">
      <input
        :id="id"
        v-model="model"
        type="color"
        style="width: 50%">
      <input
        type="text"
        v-model="model"
        style="width: 50%">
    </div>
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
})
</script>

<style>
.color-selector-container {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  >input:first-child {
    margin-right: 8px;
  }
}
</style>
