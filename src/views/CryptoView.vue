<script setup lang="ts">
  import PageTitle from '@/components/PageTitle.vue'
  import IconWallet from '@/components/icons/IconWallet.vue'
</script>

<template>
  <div class="page crypto">
    <PageTitle>
      <template #icon>
        <IconWallet/>
      </template>
      Crypto
      <!-- TODO Add Trijo invite link -->
    </PageTitle>
  </div>
</template>
