import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '../pages/ProductPage.vue';
import Home from '../pages/Home.vue'




const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/product", component: ProductPage },
]

const history = createWebHistory();
const router = createRouter({
  history,
  routes
})





export default router;
