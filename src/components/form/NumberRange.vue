<template>
  <div class="number-range-container half-box">
    <label :for="id">{{ label }}</label>
    <div class="row">
      <input
        :id="id"
        :value="props.modelValue"
        type="range"
        :min="min"
        :max="max"
        :step="step || 'any'"
        @input="emit('update:modelValue', parseNumber($event.target.value))"
        style="width: 50%">
      <input
        type="number"
        :value="props.modelValue"
        :step="step || 'any'"
        @input="emit('update:modelValue', parseNumber($event.target.value))"
        style="width: 50%">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {},
  label: {
    type: String,
    default: 'Label'
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 1000
  },
  step: {
    default: undefined
  },
  id: {
    type: String,
    required: true
  },
  type: {
    validator(value) {
      return ['float', 'int'].includes(value)
    },
    default: 'int'
  }
})
const emit = defineEmits(['update:modelValue'])

const parseNumber = val => props.type === 'int' ? Number.parseInt(val) :Number.parseFloat(Number.parseFloat(val).toFixed(2))
</script>

<style>
.number-range-container {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;

  > input:first-child {
    margin-right: 8px;
  }
}
</style>
