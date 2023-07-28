import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '../pages/ProductPage.vue';
import CartPage from '../pages/CartPage.vue';
import Home from '../pages/Home.vue';
import CheckOut from "../pages/CheckOut.vue";




const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/menu/:id", name:"Product", component: ProductPage },
  { path:"/cartPage",name:"CartPage",component:CartPage },
  { path:"/checkOut",name:"CheckOut",component:CheckOut}
]

const history = createWebHistory();
const router = createRouter({
  history,
  routes
})





export default router;
