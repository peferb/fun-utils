<template>
  <div
    class="columns-container"
    :class="maxColumns === 'three' ? 'columns-container-3' : null">
    <slot name="default"/>
  </div>
</template>

<script setup>
const props = defineProps({
  maxColumns: {
    validator(value) {
      return ['two', 'three'].includes(value)
    },
    default: 'three'
  }
})
</script>

<style>
.columns-container {
  width: 100%;;
  display: flex;
  flex-wrap: wrap;
}
.columns-container >* {
  display: flex;
  flex-direction: column;
  width: 50%;
}

@media (min-width: 1024px) {
  .columns-container-3 >* {
    width: 33%;
  }
}
</style>
