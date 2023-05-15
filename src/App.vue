<script setup lang="ts">
import Header from "./components/Header.vue";
import Body from "./components/Body.vue"
</script>

<template>
  <main>
    <div class="text-sm">
      <Header></Header>
      <Body></Body>
   
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
