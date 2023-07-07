import { defineStore } from 'pinia'
import { ref } from "vue";


export const useStore = defineStore('counter', () => {
  const items = ref([])

  function increment(item:object){
   
      items.value.push(item)
    
  }
  return {items,increment}
})