import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/routes'
import App from './App.vue'
import '@renderer/assets/css/tailwind.css'
import piniaPersist from 'pinia-plugin-persist'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.mount('#app')
