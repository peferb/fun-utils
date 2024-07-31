<template>
  <Columns>
    <TextInput id="firstName" label="Firstname" v-model="firstName" />
    <TextInput id="lastName" label="Lastname" v-model="lastName" />
    <TextInput id="organisation" label="Organisation" v-model="organisation" />
    <TextInput id="title" label="Title" v-model="title" />
    <TextInput id="mobile" type="tel" label="Phone" v-model="mobile" />
    <TextInput id="phoneWork" type="tel" label="Phone work" v-model="phoneWork" />
    <TextInput id="email" label="Email" type="email" v-model="email" />
    <TextInput id="url" type="url" label="Url" v-model="url" />
    <TextInput id="street" label="Street" v-model="street" />
    <TextInput id="city" label="City" v-model="city" />
    <TextInput id="country" label="Country" v-model="country" />
  </Columns>
</template>

<script setup>
import TextInput from '@/components/form/Input.vue'
import Columns from '@/components/Columns.vue'

const firstName = defineModel('firstName', { required: true })
const lastName = defineModel('lastName', { required: true })
const organisation = defineModel('organisation', { required: true })
const title = defineModel('title', { required: true })
const mobile = defineModel('mobile', { required: true })
const phoneWork = defineModel('phoneWork', { required: true })
const email = defineModel('email', { required: true })
const url = defineModel('url', { required: true })
const street = defineModel('street', { required: true })
const city = defineModel('city', { required: true })
const country = defineModel('country', { required: true })

</script>
