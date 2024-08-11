<template>
  <div class="half-box">
    <label :for="id">{{ label }}</label>
    <input
      id="image-image-input"
      accept="image/*"
      type='file'
      @change="handleImageInput" />
  </div>
</template>

<script setup>
import Input from '@/components/form/Input.vue'

const props = defineProps(['modelValue', 'label', 'id'])
const emit = defineEmits(['update:modelValue'])

const handleImageInput = event => {
  const [file] = event.currentTarget.files
  const src = file ? URL.createObjectURL(file) : ''
  emit('update:modelValue', src)
}
</script>
