<template>
  <Columns max-columns="two">
    <BaseSelector
      v-model="model.media"
      :items="['Mail', 'Call', 'SMS']"
      label="Communication method"
      id="communication-chain"
    />
    <div><!-- Empty space --></div>
    <Input
      v-if="model.media === 'Mail'"
      v-model="model.email"
      label="Recipient"
      type="email"
      id="communication-mail" />
    <Input
      v-if="model.media === 'Mail'"
      v-model="model.cc"
      label="CC"
      type="email"
      id="communication-cc" />
    <Input
      v-else
      v-model="model.phone"
      label="Phone"
      type="text"
      id="communication-phone" />
    <Input
      v-if="model.media === 'Mail'"
      v-model="model.subject"
      label="Subject"
      type="text"
      id="communication-subject" />
    <Input
      v-if="model.media === 'Mail'"
      v-model="model.mailBody"
      label="Message"
      type="text"
      id="communication-message" />
    <Input
      v-if="model.media === 'SMS'"
      v-model="model.smsBody"
      label="Message"
      type="text"
      id="communication-message" />
  </Columns>
</template>

<script setup>
import { computed, defineModel, onMounted, watch } from 'vue'
import Columns from '@/components/Columns.vue'
import Input from '@/components/form/Input.vue'
import BaseSelector from '@/components/form/BaseSelector.vue'

const model = defineModel({
  type: {
    media: String,
    email: String,
    cc: String,
    subject: String,
    mailBody: String,
    phone: String,
    smsBody: String
  }
})

const standardisedCryptoString = computed(() => {
  switch (model.value.media) {
    case 'Mail':
      return `mailto:${model.value.email}`
        + `?cc=${encodeURI(model.value.cc)}`
        + `&subject=${encodeURI(model.value.subject)}`
        + `&body=${encodeURI(model.value.mailBody)}`
    case 'Call':
      return `TEL:${model.value.phone}`
    case 'SMS':
      return `SMSTO:${model.value.phone}:${model.value.smsBody}`
  }
})

const emit = defineEmits(['output'])
onMounted(() => emit('output', standardisedCryptoString.value))
watch(standardisedCryptoString, val => emit('output', val))
</script>
