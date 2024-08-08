<template>
  <Columns>
    <TextInput id="event-summary" type="text" label="Title" v-model="model.summary" @input="handleChange" />
    <TextInput id="event-description" type="text" label="Description" v-model="model.description" @input="handleChange" />
    <Input id="event-start" type="Date" label="Start" v-model="model.start" @input="handleChange" />
    <Input id="event-end" type="Date" label="End" v-model="model.end" @input="handleChange" />
    <TextInput id="event-location" label="Location" type="text" v-model="model.location" @input="handleChange" />
  </Columns>
</template>

<script setup>
import TextInput from '@/components/form/Input.vue'
import Columns from '@/components/Columns.vue'
import { computed, defineModel, onMounted } from 'vue'
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

/*
const vEvent = computed(() => `BEGIN:VEVENT`
  + `UID:20020630T230445Z-3895-69-1-7@jammer`
  + `DTSTART;VALUE=DATE:${model.value.start.replaceAll('-', '')}`
  + `DTEND;VALUE=DATE:${model.value.end.replaceAll('-', '')}`
  + `RRULE:FREQ=${model.value.frequency};INTERVAL=${model.value.interval};BYDAY=${model.value.byDay}`
  + `SUMMARY:${model.value.summary}`
  + `LOCATION:${model.value.location}`
  + `END:VEVENT`)
* */

const emit = defineEmits(['output'])
const handleChange = () => emit('output', vEvent.value)

onMounted(handleChange)
</script>
