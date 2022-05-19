import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '/node_modules/primeflex/primeflex.min.css'
import '/node_modules/primeflex/themes/vela-blue.css'

createApp(App).use(router).mount('#app')
