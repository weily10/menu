<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from 'axios';
import Header from "./components/Header.vue";
import Body from "./components/Body.vue"
import Footer from "./components/Footer.vue"
// import hamburger from "../src/assets/images/hamburger.png"
// import sandwich from "./assets/images/sandwich.png";
// import spaghetti from "./assets/images/spaghetti.jpeg";
// import milktea from "./assets/images/milktea.png";
// import nuggets from "./assets/images/nuggets.png";
// import combo1 from "./assets/images/combo1.png";


const filteredMenu = ref([])
const menu = ref([])

onMounted(() => {
   axios.get('http://localhost:3000/menu').then(res => {
    console.log('asadda', menu.value = res.data);
  })
  filteredMenu.value = menu.value
  console.log('mounted', filteredMenu.value);
  
})

function showResult(keyword: any) {
  console.log('aaa', keyword,);
  filteredMenu.value = menu.value.find(item =>
    item.product === keyword
  )
    console.log('aaasdasa',filteredMenu.value);

  



}


</script>

<template>
  <main>
    <div class="text-sm">
      <Header @showResult="showResult"></Header>

      <Body :menu="menu" :filteredMenu="filteredMenu"></Body>
      <Footer @finishOrder="finishOrder"></Footer>

    </div>
  </main>
</template>

<style scoped lang="scss">
$primary-color: #2e302d;
$font-color: #2e302d;

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
