<script setup lang="ts">
  import PageTitle from '@/components/PageTitle.vue'
  import IconQRCode1 from '@/components/icons/IconQRCode1.vue'
</script>

<template>
  <div class="qr-advanced">
    <PageTitle>
      <template #icon>
        <IconQRCode1/>
      </template>
      QR generator
    </PageTitle>
  </div>
</template>
