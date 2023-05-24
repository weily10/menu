<script setup lang="ts">
import Header from "./components/Header.vue";
import Body from "./components/Body.vue"
import Footer from "./components/Footer.vue"

function showResult(keyword){
  console.log('aaaa',keyword)
}

</script>

<template>
  <main>
    <div class="text-sm">
      <Header @showResult="showResult"></Header>
      <Body></Body>
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
