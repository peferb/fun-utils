<template>
  <div class="text-field half-box">
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      v-model="model"
      style="resize: block"/>
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
  }
})
</script>

<style>
.text-field {
  display: flex;
  flex-direction: column;
}
</style>
