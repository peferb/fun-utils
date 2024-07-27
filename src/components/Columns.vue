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
  padding-top: 8px;
}
.columns-container >*:nth-child(odd) {
  padding-right: 8px;
}
.columns-container >*:nth-child(even) {
  padding-left: 8px;
}

@media (min-width: 1024px) {
  .columns-container-3 >* {
    width: 33%;
  }
  .columns-container-3 >*:nth-child(3n+1) {
    padding-left: 0;
    padding-right: 8px;
  }
  .columns-container-3 >*:nth-child(3n+2) {
    padding-left: 8px;
    padding-right: 8px;
  }
  .columns-container-3 >*:nth-child(3n) {
    padding-left: 8px;
    padding-right: 0;
  }
}
</style>
