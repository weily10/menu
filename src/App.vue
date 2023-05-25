<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import Body from "./components/Body.vue"
import Footer from "./components/Footer.vue"
import hamburger from "../src/assets/images/hamburger.png"
import sandwich from "./assets/images/sandwich.png";
import spaghetti from "./assets/images/spaghetti.jpeg";
import milktea from "./assets/images/milktea.png";
import nuggets from "./assets/images/nuggets.png";
import combo1 from "./assets/images/combo1.png";


const menu = ref([
  {
    product: "漢堡組合",
    price: 180,
    img: combo1,
    description: "漢堡（麵包、萵苣、培根、番茄、澳洲牛肉、特色醬）+可樂+薯條",
    type: "set",
    quantity: 0
  },
  {
    product: "漢堡組合",
    price: 180,
    img: combo1,
    description: "漢堡（麵包、萵苣、培根、番茄、澳洲牛肉、特色醬）+可樂+薯條",
    type: "set",
    quantity: 0
  },
  {
    product: "漢堡組合",
    price: 180,
    img: combo1,
    description: "漢堡（麵包、萵苣、培根、番茄、澳洲牛肉、特色醬）+可樂+薯條",
    type: "set",
    quantity: 0
  },
  {
    product: "漢堡組合",
    price: 180,
    img: combo1,
    description: "漢堡（麵包、萵苣、培根、番茄、澳洲牛肉、特色醬）+可樂+薯條",
    type: "set",
    quantity: 0
  },
  {
    product: "漢堡",
    price: 102,
    img: hamburger,
    description: "麵包、萵苣、培根、番茄、澳洲牛肉、特色醬",
    type: "breakfast",
    quantity: 0
  },
  {
    product: "三明治",
    price: 60,
    img: sandwich,
    description: "白吐司、起司、火腿",
    type: "breakfast",
    quantity: 0
  },
  {
    product: "義大利麵",
    price: 160,
    img: spaghetti,
    description: "麵、起司、火腿",
    type: "breakfast",
    quantity: 0
  },
  {
    product: "奶茶",
    price: 50,
    img: milktea,
    description: "",
    type: "drinks",
    quantity: 0
  },
  {
    product: "幾塊（6塊）",
    price: 80,
    img: nuggets,
    description: "",
    type: "solo",
    quantity: 0
  },
]);

function showResult(keyword) {
  
  
  // return menu.value.filter((item) => {
  //   item.product.includes(keyword)
  // })
  
  
}


</script>

<template>
  <main>
    <div class="text-sm">
      <Header @showResult="showResult"></Header>

      <Body :menu="menu"></Body>
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
}</style>
