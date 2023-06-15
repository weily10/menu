<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const menu = ref({});
onMounted(() => {
  console.log(route.params);

  axios.get("http://localhost:3000/menu/" + route.params.id).then((res) => {
    menu.value = res.data;
  });
});
</script>

<template>
  <div>{{ menu.product }}</div>
</template>
