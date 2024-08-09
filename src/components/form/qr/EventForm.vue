<template>
  <Columns>
    <TextInput id="event-summary" type="text" label="Title" v-model="model.summary" />
    <TextInput id="event-description" type="text" label="Notes" v-model="model.description" />
    <TextInput id="event-location" label="Location" type="text" v-model="model.location" />
    <Input id="event-start" type="Date" label="Start" v-model="model.start" />
    <Input id="event-end" type="Date" label="End" v-model="model.end" />
  </Columns>
</template>

<script setup>
import TextInput from '@/components/form/Input.vue'
import Columns from '@/components/Columns.vue'
import { computed, defineModel, onMounted, watch } from 'vue'
import Input from '@/components/form/Input.vue'

const model = defineModel({
  type: {
    summary: { type: String, default: '' },
    description: { type: String, default: '' },
    start: { type: String, default: '' },
    end: { type: String, default: '' },
    location: { type: String, default: '' }
  }
})

const vEvent = computed(() => `BEGIN:VEVENT\n`
  + `SUMMARY:${model.value.summary}\n`
  + `DESCRIPTION:${model.value.description}\n`
  + `LOCATION:${model.value.location}\n`
  + `DTSTART:${model.value.start.replaceAll('-', '')}\n`
  + `DTEND:${model.value.end.replaceAll('-', '')}\n`
  + `END:VEVENT`)

const emit = defineEmits(['output'])
onMounted(() => emit('output', vEvent.value))
watch(vEvent, val => emit('output', val))
</script>
