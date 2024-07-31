<template>
  <div class="tabs-container">
    <div class="tabs">
      <div
        v-for="tab in tabs"
        @click="handleClick(tab.value)"
        :class="tab.value === modelValue ? 'active' : null"
        class="tab">
        {{ tab.label }}
      </div>
    </div>
    <div class="slot-wrapper">
      <slot name="default" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    default: [
      { label: 'label', value: 'tab' }
    ]
  }
})

const handleClick = val => emit('update:modelValue', val)

const model = defineModel()
const emit = defineEmits(['update:modelValue'])
</script>

<style>
.tabs-container {
}

.tabs {
  display: flex;
  border: #444 1px solid;
}

.slot-wrapper {
  border: #444 1px solid;
  border-top: 0;
  padding: 16px;
}

.tab {
  flex-grow: 1;
  text-align: center;
  color: white;
  font-weight: 600;
  opacity: .75;
  cursor: pointer;
  padding: 4px 0;
  background-color: transparent;

  &.active {
    cursor: default;
    background-color: #444;
  }

  &:hover:not(.active) {
    opacity: 1;
  }
}
</style>
