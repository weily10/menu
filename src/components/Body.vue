<script setup lang="ts">
import { ref } from "vue";

interface item {
  quantity: number
}

const cartItems = ref<item[]>([]);
defineProps<{
  menu: {
    "id": number,
    "product": string,
    "price": number,
    "img": string,
    "description": string,
    "type": string,
    "quantity": number
  }[]
}>()

const items = ref([
  { id: "set", name: "套餐" },
  { id: "breakfast", name: "主食" },
  { id: "drinks", name: "飲料" },
  { id: "solo", name: "單點" },
  { id: "sweets", name: "甜點" },
]);
const radioVar = ref("set");



// const drinks = ref([
//   { product: "果汁", price: 40, img: hamburger },
//   { product: "奶茶", price: 30, img: sandwich },
// ]);
const changeCategory = (i: any) => {
  radioVar.value = i.target.value;
  console.log('radiovar', radioVar);
};
function addQuantity(item: any) {
  console.log('item', item.quantity);
  item.quantity++
}
function addToCart(item: any) {
  if (item.quantity !== 0) {
    cartItems.value.push(item)
  }
  console.log('aa', cartItems.value);


}
</script>
<template>
  <div>
    <hr class="border-t border-solid" />
    <div class="flex mt-3 mx-3 pb-3 flex-wrap overflow-x-scroll">
      <ul class="flex space-x-3">
        <li v-for="(item, index) in items" :key="index + 'index'">
          <input v-model="radioVar" type="radio" :id="item.id" :name="item.id" :value="item.id" @change="changeCategory"
            class="hidden peer" />
          <label :for="item.id" class="tab">
            <div class="block text-center w-[36px]">{{ item.name }}</div>
          </label>
        </li>
      </ul>
    </div>

    <div class="mx-3 text-sm">
      <div v-for="(item, index) in menu" :key="index + 'index'">
        <div v-if="radioVar == item.type" class="bg-white border border-gray-200 rounded-lg shadow mb-3">
          <div class="flex p-3">
            <div class="w-1/2">
              <img :src="item.img" class="w-full h-[136px] object-cover" />
            </div>
            <div class="ml-3 space-y-3 w-1/2 h-[136px] flex flex-col justify-between">
              <div>
                <div class="flex justify-between">
                  <p class="font-semibold text-gray-600">
                    {{ item.product }}
                  </p>
                  <p class="text-gray-600">{{ item.price }} 元</p>
                </div>
                <div class="text-xs text-gray-400 mt-3">
                  {{ item.description }}
                </div>
              </div>

              <div class="flex space-x-3">
                <div class="relative w-full">
                  <input type="number" class="pl-10 border-primary h-[33px]" v-model="item.quantity" />
                  <button @click="addQuantity(item)" type="submit"
                    class="absolute top-0 left-0 px-2.5 text-sm text-white bg-slate-600 rounded-l-lg border border-gray-600 h-[33px]">
                    <span>+</span>
                  </button>
                </div>
                <button class="btn-primary w-full text-center leading-none text-xs" @click="addToCart(item)">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style ></style>