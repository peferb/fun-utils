<template>
  <Columns max-columns="two">
    <ColorSelector id="input-color-1" label="Color 1" v-model="setting.color.light" />
    <ColorSelector id="input-color-2" label="Color 2" v-model="setting.color.dark" />
    <ColorSelector id="input-color-3" label="Background" v-model="setting.background" />
    <NumberRange id="input-width" label="Size" v-model="setting.width" />
  </Columns>
</template>

<script setup>
import {defineModel} from 'vue'
import ColorSelector from '@/components/form/ColorSelector.vue'
import NumberRange from '@/components/form/NumberRange.vue'
import Columns from '@/components/Columns.vue'

const setting = defineModel({
  option: {
    color: {
      light: '#FFFFFF',
      dark: '#000000'
    },
    background: '#808080',
    width: 250,
  }
})
</script>
