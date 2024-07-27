<script setup lang="ts">
  import PageTitle from '@/components/PageTitle.vue'
  import IconQRCode2 from '@/components/icons/IconQRCode2.vue'
</script>

<template>
  <div class="qr-simple">
    <PageTitle>
      <template #icon>
        <IconQRCode2/>
      </template>
      Simple QR generator
    </PageTitle>
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
