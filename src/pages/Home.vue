<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";
import Footer from "../components/Footer.vue";
import debounce from "../../utils/debounce";

const keyword = ref("");
const menu = ref([]);
const debounceFn = debounce((newKeyword: string) => {
  axios.get("http://localhost:3000/menu").then((res) => {
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
</script>

<template>
  <main>
    <div class="text-sm">
      <Header v-model="keyword"></Header>
      <Body :menu="menu"></Body>
      <Footer @finishOrder=""></Footer>
    </div>
    <router-view />
  </main>
</template>

<style></style>
