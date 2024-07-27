<script setup lang="ts">
  import IconQRCode2 from '@/components/icons/IconQRCode2.vue'
  import PageTitle from '@/components/PageTitle.vue'
</script>

<template>
  <div class="ethereum-wallet">
    <PageTitle>
      <template #icon>
        <IconQRCode2/>
      </template>
      Ethereum wallet
    </PageTitle>
  </div>
</template>
