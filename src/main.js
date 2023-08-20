import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import "./style.css"
import setAuthHeader from './utils/setAuthHeader'

if(localStorage.token) {
    setAuthHeader(localStorage.token)
}else{
    setAuthHeader(false)
}

createApp(App).use(store).use(router).use(plugin, defaultConfig).mount('#app')
