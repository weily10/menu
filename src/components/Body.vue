<script setup>
import { ref } from "vue";
import hamburger from "../assets/images/hamburger.jpeg";
import sandwich from "../assets/images/sandwich.png";

const items = ref([
  { id: "breakfast", name: "主食" },
  { id: "drinks", name: "飲料" },
  { id: "solo", name: "單點" },
  { id: "sweets", name: "甜點" },
]);
const radioVar = ref("breakfast");
const breakfast = ref([
  { product: "漢堡", price: 102, img: hamburger },
  { product: "三明治", price: 60, img: sandwich },
]);

const drinks = ref([
  { product: "果汁", price: 40, img: hamburger },
  { product: "奶茶", price: 30, img: sandwich },
]);
const changeCategory = (i) => {
  radioVar.value = i.target.value
  console.log(radioVar);
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
            @change="changeCategory"
            class="hidden peer"
          />
          <label :for="item.id" class="tab">
            <div class="block text-center">{{ item.name }}</div>
          </label>
        </li>
      </ul>
    </div>

    <div class="mt-3 mx-3 text-sm" v-show="radioVar == 'breakfast'">
      <div
        v-for="(item, index) in breakfast"
        :key="index + 'index'"
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-3"
      >
        <div class="flex p-3 h-40">
          <img
            class="object-cover"
            :src="item.img"
            alt="product image"
            width="200"
            height="100"
          />
          <div class="ml-2 flex flex-col justify-between">
            <div class="flex justify-between">
              <p class="font-semibold text-gray-600">
                {{ item.product }}
              </p>
              <p class="text-gray-600">{{ item.price }} 元</p>
            </div>
            <div class="pl-3">
              <button class="btn-primary w-28 text-center">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
</style>