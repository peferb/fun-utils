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
    <div
      v-if="!onlyTabs"
      class="box slot-wrapper">
      <slot name="default" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    default: ['Tab1', 'Tab2']
  },
  onlyTabs: {
    type: Boolean,
    default: false
  }
})

const handleClick = val => emit('update:modelValue', val)

const model = defineModel()
const emit = defineEmits(['update:modelValue'])
</script>

<style>
.tabs {
  display: flex;
  border: var(--color-border) 1px solid;
}

.slot-wrapper {
  border-top: 0;
}

.tab {
  flex-grow: 1;
  text-align: center;
  color: var(--color-text);
  font-weight: 600;
  cursor: pointer;
  padding: 4px 0;

  &.active {
    cursor: default;
    background-color: var(--color-background-mute);
  }

  &:hover:not(.active) {
    background-color: var(--color-border-hover);
    color: var(--vt-c-white);
  }
}
</style>
