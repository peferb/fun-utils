<template>
  <div class="base-container half-box">
    <label :for="id">{{ label }}</label>
    <select
      :id="id"
      v-model="model">
      <option
        v-for="item in items"
        :value="valueExtractor(item)">
        {{ descriptionExtractor(item) }}
      </option>
    </select>
  </div>
</template>

<script setup>
const model = defineModel()
const props = defineProps({
  label: {
    type: String,
    default: 'label'
  },
  items: {
    type: Array,
    default: []
  },
  valueExtractor: {
    type: Function,
    default: item => item
  },
  descriptionExtractor: {
    type: Function,
    default: item => item
  },
  id: {
    type: String,
    required: true
  }
})
</script>

<style>
.base-container {
  display: flex;
  flex-direction: column;
}
</style>
