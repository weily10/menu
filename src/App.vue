<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
import debounce from "../utils/debounce";

const keyword = ref("");
const menu = ref([]);
const debounceFn = debounce((newKeyword: string) => {
  axios.get("http://localhost:3000/menu").then((res) => {
    console.log("api call", newKeyword);
    menu.value = res.data.filter((item: any) =>
      item.product.includes(newKeyword)
    );
  });
}, 1000);

onMounted(async () => {
  await axios.get("http://localhost:3000/menu").then((res) => {
    menu.value = res.data;
  });
});

watch(keyword, (newKeyword) => {
  if (keyword) {
    debounceFn(newKeyword);
  }
});

// function showResult(keyword: any) {
//   let a = menu.value.filter((item: any) => {

//     item.product.includes(keyword);
//   })
// menu.value = computed(() => {
//     return menu.value.filter((item: any) => {
//     item.product.includes(keyword)
//   })
// })

//   console.log('menu.value', a);

// }

//   filteredMenu.value = computed(() => {
//   return menu.value.filter((item: any) => {
//     item.product.includes(keyword)
//   })
// })
</script>

<template>
  <main>
    <div class="text-sm">
      <Header v-model="keyword"></Header>
      <Body :menu="menu"></Body>
      <Footer @finishOrder=""></Footer>
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
