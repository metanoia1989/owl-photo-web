import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import store from './store'
import router from './router'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
