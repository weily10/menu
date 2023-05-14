<script setup>
import { ref } from "vue";
const items = ref([
  { id: "breakfast", name: "主食" },
  { id: "drinks", name: "飲料" },
  { id: "solo", name: "單點" },
  { id: "sweets", name: "甜點" },
]);
const radioVar = ref("breakfast");
const breakfast = ref([]);
const a = (i) => {
  console.log("aaa", i);
};
</script>
<template>
  <div>
    <hr class="border-t border-solid" />
    <div class="flex mt-3 flex-wrap mx-3">
      <template> </template>
      <ul class="flex space-x-3">
        <li v-for="(item, index) in items" :key="index + 'index'">
          <input
            v-model="radioVar"
            type="radio"
            :id="item.id"
            :name="item.id"
            :value="item.id"
            @click="a"
            class="hidden peer"
          />
          <label :for="item.id" class="tab">
            <div class="block text-center">{{ item.name }}</div>
          </label>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style >
</style>