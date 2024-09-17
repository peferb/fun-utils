<template>
  <div class="page crypto">
    <PageTitle>
      <template #icon>
        <IconWallet />
      </template>
      Crypto
    </PageTitle>
    <p>
      Using ethers &rarr; <a href="https://ethers.org/">Github</a>,
      <a href="https://www.npmjs.com/package/ethers">NPM</a>
    </p>
    <p>
      See this code &rarr;
      <a href="https://github.com/peferb/fun-utils/blob/main/src/views/CryptoView.vue">CryptoView.vue</a>,
      <a href="https://github.com/peferb/fun-utils/blob/main/public/wallet-worker.js">wallet-worker.js</a>
    </p>
    <h2>About</h2>
    <p>
      <em>"Ends with"</em>, if set, will only generate wallets that end with the specified characters. For
      each more char added, the time to find a wallet that match <em>increases exponentially</em>.
    </p>
    <p>
      Only hexadecimal characters are allowed in Ethereum addresses. That's why the input field will
      <em>only accept a-f and 0-9 characters</em>.
    </p>
    <h2>Generate Ethereum wallets</h2>
    <Columns max-columns="two" style="margin-top: 8px;">
      <NumberRange
        v-model="walletsToCreate"
        :min="1"
        :max="100"
        label="Wallets to create"
        id="walletsToCreate"
        style="" />
      <Input
        v-model="endsWith"
        @input="cleanInput"
        label="Ends with"
        type="text"
        id="endsWith" />
    </Columns>
    <button
      @click="handleButtonClick"
      :disabled="disableButton || !browserSupportsWorkers">
      {{ generateButtonText }}
    </button>
    <p
      v-if="!browserSupportsWorkers"
      style="color: red">
      Your browser does not support workers. Generation of wallets will not work.
    </p>
    <p>Tries: {{ progress.tries }}</p>
    <p style="margin-top: 0">Found: {{ progress.wallets.length }} of {{ progress.total }}</p>
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

const browserSupportsWorkers = computed(() => !!window.Worker)
const worker = ref(null)
const workerIsRunning = computed(() => !!worker.value)
const walletsToCreate = ref(1)
const progress = ref({ tries: 0, wallets: [], total: walletsToCreate.value })
const endsWith = ref('42')
const generateButtonText = computed(() => workerIsRunning.value ? 'Stop generating' : 'Generate wallets')
const disableButton = ref(false)

// Remove all characters that are not hexadecimal which is does not exist in Ethereum addresses
const cleanInput = () => endsWith.value = endsWith.value.replace(/[^0-9a-fA-F]/g, '')

const handleButtonClick = () => {
  if (workerIsRunning.value) {
    buttonCooldown()
    stopGenerating()
  } else {
    startGenerating()
  }
}
const startGenerating = () => {
  const workerScript = new Worker(new URL('/wallet-worker.js', import.meta.url), { type: 'module' })
  workerScript.onmessage = (event) => {
    if (event.data.type === 'progress') {
      progress.value = event.data
    } else if (event.data.type === 'done') {
      stopGenerating()
    }
  }
  workerScript.postMessage({ walletsToCreate: walletsToCreate.value, endsWith: endsWith.value })
  worker.value = workerScript
}

const stopGenerating = () => {
  worker.value.terminate()
  worker.value = null
}

const buttonCooldown = () => {
  disableButton.value = true
  setTimeout(() => disableButton.value = false, 3000)
}
</script>

<style scoped>
.half-box {
  /* hacky fix to align half-box lines when not wrapped inside a box as it usually is */
  padding-left: 0;

  &:after {
    left: 0;
  }
}

pre {
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
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
