import './assets/main.css'

import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setComponents } from './modules/components.module'
import { setPrimeVue } from './modules/primevue.module'

const app = createApp(App)
setPrimeVue(app)
setComponents(app)
app.use(createPinia())
app.use(router)

app.mount('#app')
