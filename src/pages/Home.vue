<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";
import debounce from "../../utils/debounce";

const loading = ref(true);
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
    loading.value = false;
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
      <Body :menu="menu" :loading="loading"></Body>
    </div>
    <router-view />
  </main>
</template>

<style></style>
