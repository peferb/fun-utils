<template>
  <Columns max-columns="two">
    <NumberRange id="input-mask" label="Mask" v-model="setting.maskPattern" :min="1" :max="7" />
    <NumberRange id="input-version" label="Version" v-model="setting.version" :min="1" :max="40" />
    <ErrorCorrectionLevelSelector id="input-correction-level" v-model="setting.errorCorrectionLevel" />
    <FileTypeSelector id="file-type-selector" label="Filetype" v-model="setting.filetype" />
  </Columns>
</template>

<script setup>
import {defineModel} from 'vue'
import ErrorCorrectionLevelSelector from '@/components/form/qr/ErrorCorrectionLevelSelector.vue'
import FileTypeSelector from '@/components/form/qr/FileTypeSelector.vue'
import NumberRange from '@/components/form/NumberRange.vue'
import Columns from '@/components/Columns.vue'

const setting = defineModel({
  option: {
    maskPattern: 1,
    version: 1,
    errorCorrectionLevel: 'H',
    filetype: 'image/png',
  }
})
</script>
