<script setup>
import { ref } from "vue";
import hamburger from "../assets/images/hamburger.jpeg"

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

    <div class="mt-3 mx-3">
      <div
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
      >
        <a href="#">
          <img
            class="rounded-t-lg object-cover w-full"
            :src="hamburger"
            alt="product image"

          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-600">
              漢堡
            </h5>
          </a>

          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white"
              >$599</span
            >
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
</style>