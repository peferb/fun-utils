<template>
  <Columns max-columns="two">
    <ColorSelector id="input-color-1" label="Color 1" v-model="setting.color.light" />
    <ColorSelector id="input-color-2" label="Color 2" v-model="setting.color.dark" />
    <NumberRange id="input-width" label="Size" v-model="setting.width" />
    <NumberRange id="input-mask" label="Mask" v-model="setting.maskPattern" :min="1" :max="7" />
    <NumberRange id="input-version" label="Version" v-model="setting.version" :min="1" :max="40" />
    <NumberRange id="input-quality" label="Quality" type="float" v-model="setting.quality" :min="0" :max="1" />
    <ErrorCorrectionLevelSelector id="input-correction-level" v-model="setting.errorCorrectionLevel" />
    <FileTypeSelector id="file-type-selector" label="Filetype" v-model="setting.filetype" />
  </Columns>
</template>

<script setup>
import {defineModel} from 'vue'
import ColorSelector from '@/components/form/ColorSelector.vue'
import ErrorCorrectionLevelSelector from '@/components/form/ErrorCorrectionLevelSelector.vue'
import FileTypeSelector from '@/components/form/FileTypeSelector.vue'
import NumberRange from '@/components/form/NumberRange.vue'
import Columns from '@/components/Columns.vue'

const setting = defineModel({
  option: {
    color: {
      light: '#FFFFFF',
      dark: '#000000'
    },
    width: 250,
    maskPattern: 1,
    version: 1,
    quality: 1,
    errorCorrectionLevel: 'H',
    filetype: 'image/png',
  }
})
</script>
