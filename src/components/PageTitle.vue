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
  color: #f2f2f2;
}
.page-title {
  font-size: xx-large;
  padding-bottom: 12px;
}
.page-title-icon {
  margin-right: 8px;
}
</style>
