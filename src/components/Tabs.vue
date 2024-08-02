<template>
  <div class="tabs-container">
    <div class="tabs">
      <div
        v-for="tab in tabs"
        @click="handleClick(tab)"
        :class="tab === modelValue ? 'active' : null"
        class="tab">
        {{ tab }}
      </div>
    </div>
    <div class="box slot-wrapper">
      <slot name="default" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    default: ['Tab1', 'Tab2']
  }
})

const handleClick = val => emit('update:modelValue', val)

const model = defineModel()
const emit = defineEmits(['update:modelValue'])
</script>

<style>
.tabs {
  display: flex;
  border: #444 1px solid;
}

.slot-wrapper {
  border-top: 0;
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
