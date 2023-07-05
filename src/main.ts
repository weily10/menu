// import { createApp } from 'vue'
// import App from './App.vue'
// import './style.css' 
// import axios from 'axios'

// createApp(App).use(axios).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import './style.css' 
import axios from 'axios'
import { createPinia } from 'pinia'
import VueAxios from 'vue-axios'
import router  from "./router";

const pinia = createPinia()

createApp(App).use(VueAxios, axios).use(router).use(pinia).mount('#app')

