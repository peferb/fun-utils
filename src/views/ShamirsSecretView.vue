<template>
  <div class="page page-shamirs-secret-sharing">
    <PageTitle>
      <template #icon>
        <IconEnhancedEncryption />
      </template>
      Shamir's secret sharing
    </PageTitle>
    <p>
      Using secrets.js: <a href="https://github.com/scrtlabs/secret.js">Github</a>,
      <a href="https://www.npmjs.com/package/secretjs">NPM</a>.
    </p>
    <Tabs
      v-model="tabs.selected"
      :tabs="tabs.available"
      style="margin-top: 24px">
      <div v-if="tabs.selected === 'Split secret'">
        <Input id="secret-input" label="Secret" v-model="splitSettings.secret" />
        <Columns max-columns="two">
          <NumberRange id="parts-input" label="Parts" v-model="splitSettings.parts" :min="2" :max="100" />
          <NumberRange id="required-parts-input" label="Required parts" v-model="splitSettings.requiredParts" :min="2"
                       :max="splitSettings.parts" />
        </Columns>

        <div style="display: flex; justify-content: center; align-items: center; margin-top: 8px">
          <button @click="copyToCombine" style="width: max-content">Copy parts to 'Combine parts' &nbsp; &rarr;</button>
        </div>

        <h2>Secret parts</h2>
        <div
          v-for="part in splitParts"
          class="list-row">
          {{ part }}
        </div>
      </div>
      <div v-else>
        <div style="display: flex; margin-bottom: 12px">
          <div style="margin-right: 12px">Parts #{{ partsInputsInput.length }}</div>
          <button @click="() => partsInputsInput.push('')" style="width: max-content">Add part</button>
        </div>
        <div
          v-for="(_, index) in partsInputsInput"
          :ref="`combine-part-${index}`"
          :key="_"
          style="display: flex; margin: 4px 0">
          <input
            v-model="partsInputsInput[index]"
            :id="`parts-input-${index}`"
            type="text"
            style="width: 100%" />
          <div
            @click="removePartByIndex(index)"
            class="delete-action"
            title="Delete this row">
            &#10006;
          </div>
        </div>

        <h2>Restored secret</h2>
        <div class="list-row">{{ restoredSecret }}</div>
      </div>
    </Tabs>
  </div>
</template>

<script setup>
import PageTitle from '@/components/PageTitle.vue'
import IconEnhancedEncryption from '@/components/icons/IconEnhancedEncryption.vue'
import Tabs from '@/components/Tabs.vue'
import { computed, ref, watch } from 'vue'
import Input from '@/components/form/Input.vue'
import Columns from '@/components/Columns.vue'
import NumberRange from '@/components/form/NumberRange.vue'
import secrets from 'secrets.js'

const tabs = ref({ available: ['Split secret', 'Combine parts'], selected: 'Split secret' })

const splitSettings = ref({
  secret: 'My secret',
  parts: 3,
  requiredParts: 2
})

watch(splitSettings, val => {
  if (val.requiredParts > val.parts)
    splitSettings.value.requiredParts = val.parts
}, { deep: true })

const splitParts = computed(() => {
  const hexedSecret = secrets.str2hex(splitSettings.value.secret)
  return secrets.share(hexedSecret, splitSettings.value.parts, splitSettings.value.requiredParts)
})

const copyToCombine = () => {
  partsInputsInput.value = JSON.parse(JSON.stringify(splitParts.value))
  tabs.value.selected = 'Combine parts'
}

const partsInputsInput = ref(['', '', ''])

const restoredSecret = computed(() => combine())

const combine = () => {
  try {
    const hexedRestoredSecret = secrets.combine(partsInputsInput.value.filter(val => !!val))
    return secrets.hex2str(hexedRestoredSecret)
  } catch (e) {
    console.error('cannot combine parts', e)
    return 'Error! See console log.'
  }
}

function removePartByIndex(index) {
  partsInputsInput.value.splice(index, 1)
}
</script>

<style scoped>
div.list-row {
  font-family: monospace;
  padding: 8px 12px;
  word-wrap: anywhere;
  background-color: var(--color-background-mute);
}

div.list-row:nth-child(even) {
  background-color: var(--color-background-soft);
}

.delete-action {
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 25px;
  transition: all 200ms ease-out;
}

.delete-action:hover {
  color: var(--vt-c-green);
  scale: 1.2;
}
</style>
