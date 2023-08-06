<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";
//@ts-ignore
import debounce from "../../utils/debounce";

const loading = ref(true);
const keyword = ref("");
const menu = ref([]);
const debounceFn = debounce(async (newKeyword: string) => {
  await axios.get(".netlify/functions/query").then((res) => {
    menu.value = res.data.menu.filter((item: any) =>
      item.product.includes(newKeyword)
    );
    loading.value = false;
  });
}, 1000);

onMounted(async () => {
  await axios.get(".netlify/functions/query").then((res) => {
    menu.value = res.data.menu;
    loading.value = false;
  });
});

watch(keyword, (newKeyword) => {
  loading.value = true;
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
