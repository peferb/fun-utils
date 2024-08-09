<template>
  <Columns>
    <TextInput id="firstName" label="Firstname" v-model="model.firstName" />
    <TextInput id="lastName" label="Lastname" v-model="model.lastName" />
    <TextInput id="organisation" label="Organisation" v-model="model.organisation" />
    <TextInput id="title" label="Title" v-model="model.title" />
    <TextInput id="mobile" type="tel" label="Phone" v-model="model.mobile" />
    <TextInput id="phoneWork" type="tel" label="Phone work" v-model="model.phoneWork" />
    <TextInput id="email" label="Email" type="email" v-model="model.email" />
    <TextInput id="url" type="url" label="Url" v-model="model.url" />
    <TextInput id="street" label="Street" v-model="model.street" />
    <TextInput id="city" label="City" v-model="model.city" />
    <TextInput id="country" label="Country" v-model="model.country" />
  </Columns>
</template>

<script setup>
import TextInput from '@/components/form/Input.vue'
import Columns from '@/components/Columns.vue'
import { computed, defineModel, onMounted, watch } from 'vue'

const model = defineModel({
  type: {
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    organisation: { type: String, default: '' },
    title: { type: String, default: '' },
    mobile: { type: String, default: '' },
    phoneWork: { type: String, default: '' },
    email: { type: String, default: '' },
    url: { type: String, default: '' },
    street: { type: String, default: '' },
    city: { type: String, default: '' },
    postalNumber: { type: String, default: '' },
    country: { type: String, default: '' }
  }
})

const vCardData = computed(() => `BEGIN:VCARD\nVERSION:3.0\n`
  + `N:${model.value.lastName};${model.value.firstName}\n`
  + `FN:${model.value.lastName} ${model.value.firstName}\n`
  + `ORG:${model.value.organisation}\n`
  + `TITLE:${model.value.title}\n`
  + `ADR:;;${model.value.street};${model.value.city};;${model.value.postalNumber};${model.value.country}\n`
  + `TEL;WORK;VOICE:${model.value.phoneWork}\n`
  + `TEL;CELL:${model.value.mobile}\n`
  + `EMAIL;WORK;INTERNET:${model.value.email}\n`
  + `URL:${model.value.url}\n`
  + `END:VCARD`)

const emit = defineEmits(['output'])
onMounted(() => emit('output', vCardData.value))
watch(vCardData, val => emit('output', val))
</script>
