import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'



createApp(App).use(createPinia()).use(PrimeVue).use(router).mount('#app')
