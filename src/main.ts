import { createApp } from 'vue'
import App from './App.vue'
import './style.css' 
import axios from 'axios'
import { createPinia } from 'pinia'
import VueAxios from 'vue-axios'
import router  from "./router";
//@ts-ignore
import LazyLoadDirective from "./directives/LazyLoadDirective";

const pinia = createPinia()



createApp(App).use(VueAxios, axios).use(router).use(pinia).directive("lazyload", LazyLoadDirective).mount('#app')

