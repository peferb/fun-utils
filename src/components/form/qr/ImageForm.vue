<template>
  <Columns max-columns="two">
    <ImageInput id="image-image-input" label="Your image" v-model="model.src" />
    <NumberRange id="image-width-input" label="Width" :min="10" :max="1000" v-model="model.width" />
    <NumberRange id="image-top-input" label="Position top" :min="0" :max="1000" v-model="model.positionTop" />
    <NumberRange id="image-left-input" label="Position left" :min="0" :max="1000" v-model="model.positionLeft" />
    <NumberRange id="image-border-width-input" label="Border thickness" :min="0" :max="100" v-model="model.borderSize" />
    <ColorSelector id="image-border-color-input" label="Border color" :min="0" :max="100" v-model="model.borderColor" />
    <div class="half-box">
      <label>Remove image</label>
      <input type="button" value="Clear" style="width: max-content;" @click="() => model.src = ''"/>
    </div>
  </Columns>
</template>

<script setup>
import Columns from '@/components/Columns.vue'
import { defineModel } from 'vue'
import NumberRange from '@/components/form/NumberRange.vue'
import ImageInput from '@/components/form/ImageInput.vue'
import ColorSelector from '@/components/form/ColorSelector.vue'

const model = defineModel({
  type: {
    src: String,
    width: Number,
    positionTop: String,
    positionLeft: String,
    borderSize: Number,
    borderColor: String,
  }
})
</script>
