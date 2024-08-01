<template>
  <Columns>
    <TextInput id="firstName" label="Firstname" v-model="contactModel.firstName" />
    <TextInput id="lastName" label="Lastname" v-model="contactModel.lastName" />
    <TextInput id="organisation" label="Organisation" v-model="contactModel.organisation" />
    <TextInput id="title" label="Title" v-model="contactModel.title" />
    <TextInput id="mobile" type="tel" label="Phone" v-model="contactModel.mobile" />
    <TextInput id="phoneWork" type="tel" label="Phone work" v-model="contactModel.phoneWork" />
    <TextInput id="email" label="Email" type="email" v-model="contactModel.email" />
    <TextInput id="url" type="url" label="Url" v-model="contactModel.url" />
    <TextInput id="street" label="Street" v-model="contactModel.street" />
    <TextInput id="city" label="City" v-model="contactModel.city" />
    <TextInput id="country" label="Country" v-model="contactModel.country" />
  </Columns>
</template>

<script setup>
import TextInput from '@/components/form/Input.vue'
import Columns from '@/components/Columns.vue'
import { defineModel } from 'vue'

const contactModel = defineModel({
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
</script>
