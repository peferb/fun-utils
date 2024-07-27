<template>
  <Columns>
    <TextInput id="fn" label="Firstname" v-model="data.firstName" @input="handleInput" class="v-card-form-item"/>
    <TextInput id="ln" label="Lastname" v-model="data.lastName" @input="handleInput" class="v-card-form-item"/>
    <TextInput id="org" label="Organisation" v-model="data.organisation" @input="handleInput" class="v-card-form-item"/>
    <TextInput id="title" label="Title" v-model="data.title" @input="handleInput" class="v-card-form-item"/>
    <TextInput id="mobile" type="tel" label="Phone" v-model="data.mobile" @input="handleInput" class="v-card-form-item"/>
    <TextInput id="phone-work" type="tel" label="Phone work" v-model="data.phoneWork" @input="handleInput" class="v-card-form-item"/>
    <TextInput id="email" label="Email" type="email" v-model="data.email" @input="handleInput" class="v-card-form-item"/>
    <TextInput id="url" type="url" label="Url" v-model="data.url" @input="handleInput" class="v-card-form-item"/>
    <TextInput id="street" label="Street" v-model="data.street" @input="handleInput" class="v-card-form-item"/>
    <TextInput id="city" label="City" v-model="data.city" @input="handleInput" class="v-card-form-item"/>
    <TextInput id="country" label="Country" v-model="data.country" @input="handleInput" class="v-card-form-item"/>
  </Columns>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TextInput from '@/components/form/Input.vue'
import Columns from '@/components/Columns.vue'

const emit = defineEmits(['input'])
const data = ref({
  firstName: 'peferb',
  lastName: '',
  organisation: '',
  title: 'Developer',
  mobile: '',
  phoneWork: '',
  email: '',
  url: '',
  street: '',
  city: '',
  postalNumber: '',
  country: 'Sweden',
})

const format = () => {
  return `BEGIN:VCARD\nVERSION:3.0\n`
      + `N:${data.value.lastName};${data.value.firstName}\n`
      + `FN:${data.value.lastName} ${data.value.firstName}\n`
      + `ORG:${data.value.organisation}\n`
      + `TITLE:${data.value.title}\n`
      + `ADR:;;${data.value.street};${data.value.city};;${data.value.postalNumber};${data.value.country}\n`
      + `TEL;WORK;VOICE:${data.value.phoneWork}\n`
      + `TEL;CELL:${data.value.mobile}\n`
      + `EMAIL;WORK;INTERNET:${data.value.email}\n`
      + `URL:${data.value.url}\n`
      + `END:VCARD`
}

const handleInput = () => emit('input', format())

onMounted(handleInput)
</script>
