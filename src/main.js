import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {errorCorrectionLevel, filetype} from '@/global.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.provide('filetype', filetype)
app.provide('errorCorrectionLevel', errorCorrectionLevel)
app.use(createPinia())
app.use(router)

app.mount('#app')
