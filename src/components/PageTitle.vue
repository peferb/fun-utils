<template>
  <div class="page-title-container">
    <div
      v-if="$slots.icon"
      class="page-title-icon">
      <slot name="icon"/>
    </div>
    <h1 class="page-title"><slot name="default"/></h1>
  </div>
</template>

<style>
.page-title-container {
  display: flex;
  align-items: baseline;
  color: var(--color-heading);;
}
.page-title {
  font-size: xx-large;
}
.page-title-icon {
  margin-right: 8px;
}
</style>
