import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import ElementPlus from 'element-plus'

createApp(App).use(pinia).use(ElementPlus).mount('#app')
