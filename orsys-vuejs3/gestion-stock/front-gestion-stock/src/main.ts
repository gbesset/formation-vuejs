import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.component('FaIcon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
