<template>
  <div class="page crypto">
    <PageTitle>
      <template #icon>
        <IconWallet />
      </template>
      Crypto
    </PageTitle>
    <h2>Generate wallets</h2>
    <Columns>
      <NumberRange
        v-model="walletsToCreate"
        :min="1"
        :max="100"
        label="Wallets to create"
        id="walletsToCreate" />
      <Input
        v-model="endsWith"
        label="Ends with"
        type="text"
        id="endsWith" />
    </Columns>
    <button @click="handleButtonClick">{{ generateButtonText }}</button>
    <div style="margin: 16px 0">
      <p>Progress: {{ progress.tries }} tries</p>
      <p>Found: {{ progress.wallets.length }} of {{ progress.total }}</p>
    </div>
    <div
      v-for="wallet in progress.wallets"
      :key="wallet.address"
      class="list-row">
      <pre style="word-wrap: break-word">{{ wallet }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import IconWallet from '@/components/icons/IconWallet.vue'
import NumberRange from '@/components/form/NumberRange.vue'
import { ref, computed } from 'vue'
import Columns from '@/components/Columns.vue'
import Input from '@/components/form/Input.vue'

const generating = ref(false)
const worker = ref(null)
const walletsToCreate = ref(1)
const progress = ref({ tries: 0, wallets: [], total: walletsToCreate.value })
const endsWith = ref('42')

const generateButtonText = computed(() => generating.value ? 'Stop generating' : 'Generate wallets')

// TODO do not need to keep track of isGenerating bool, just check if worker exists
const handleButtonClick = () => {
  if (generating.value) {
    stopGenerating()
  } else {
    startGenerating()
  }
}

const startGenerating = () => {
  generating.value = true
  const ethWorker = new Worker(new URL('/wallet-worker.js', import.meta.url), { type: 'module' })
  ethWorker.onmessage = (event) => {
    if (event.data === 'done') {
      stopGenerating()
    } else {
      progress.value = event.data
    }
  }
  ethWorker.postMessage({ walletsToCreate: walletsToCreate.value, endsWith: endsWith.value })
  worker.value = ethWorker
}

const stopGenerating = () => {
  generating.value = false
  worker.value.terminate()
  worker.value = null
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

div.list-row {
  font-family: monospace;
  padding: 8px 12px;
  word-wrap: anywhere;
  background-color: var(--color-background-mute);
}

div.list-row:nth-child(even) {
  background-color: var(--color-background-soft);
}
</style>
