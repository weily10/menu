import { defineStore } from 'pinia'
import { ref,Ref } from "vue";
import Item from '../global/types.ts';


export const useStore = defineStore('counter', () => {
  
  const items : Ref<Item[]>=ref([])

  function increment(item:Item){
      items.value.push(item)
  }

  function addQtd(order:Item){
    order.quantity++;
  }
   function minusQtd(order:Item){
    order.quantity--
   }

  


  return {items,increment,addQtd,minusQtd}
})