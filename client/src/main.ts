import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VuePLyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(createPinia())

app.use(VuePLyr, {
  plyrs: {

  }
})

app.mount('#app')
