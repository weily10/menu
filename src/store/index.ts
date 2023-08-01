import { defineStore } from 'pinia'
import { ref } from "vue";


export const useStore = defineStore('counter', () => {
  const items = ref([
    {}
  ])

  function increment(item:object){
      items.value.push({'order':item})
  }

  function addQtd(order:{quantity:number}){
    order.quantity++;
  }
   function minusQtd(order:{quantity:number}){
    order.quantity --
   }

  


  return {items,increment,addQtd,minusQtd}
})