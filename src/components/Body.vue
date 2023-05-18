<script setup>
import { ref } from "vue";
import hamburger from "../assets/images/hamburger.png";
import sandwich from "../assets/images/sandwich.png";
import spaghetti from "../assets/images/spaghetti.jpeg";
import milktea from "../assets/images/milktea.png";
import nuggets from "../assets/images/nuggets.png";
import combo1 from "../assets/images/combo1.png";


const items = ref([
  { id: "set", name:"套餐"},
  { id: "breakfast", name: "主食" },
  { id: "drinks", name: "飲料" },
  { id: "solo", name: "單點" },
  { id: "sweets", name: "甜點" },
]);
const radioVar = ref("set");
const menu = ref([
  {
    product: "漢堡組合",
    price: 180,
    img: combo1,
    description: "漢堡（麵包、萵苣、培根、番茄、澳洲牛肉、特色醬）+可樂+薯條",
    type: "set",
  },
  {
    product: "漢堡組合",
    price: 180,
    img: combo1,
    description: "漢堡（麵包、萵苣、培根、番茄、澳洲牛肉、特色醬）+可樂+薯條",
    type: "set",
  },
  {
    product: "漢堡組合",
    price: 180,
    img: combo1,
    description: "漢堡（麵包、萵苣、培根、番茄、澳洲牛肉、特色醬）+可樂+薯條",
    type: "set",
  },
  {
    product: "漢堡組合",
    price: 180,
    img: combo1,
    description: "漢堡（麵包、萵苣、培根、番茄、澳洲牛肉、特色醬）+可樂+薯條",
    type: "set",
  },
  {
    product: "漢堡",
    price: 102,
    img: hamburger,
    description: "麵包、萵苣、培根、番茄、澳洲牛肉、特色醬",
    type: "breakfast",
  },
  {
    product: "三明治",
    price: 60,
    img: sandwich,
    description: "白吐司、起司、火腿",
    type: "breakfast",
  },
  {
    product: "義大利麵",
    price: 160,
    img: spaghetti,
    description: "麵、起司、火腿",
    type: "breakfast",
  },
  {
    product: "奶茶",
    price: 50,
    img: milktea,
    description: "",
    type: "drinks",
  },
  {
    product: "幾塊（6塊）",
    price: 80,
    img: nuggets,
    description: "",
    type: "solo",
  }
  
]);

const drinks = ref([
  { product: "果汁", price: 40, img: hamburger },
  { product: "奶茶", price: 30, img: sandwich },
]);
const changeCategory = (i) => {
  radioVar.value = i.target.value;
  console.log(radioVar);
};
</script>
<template>
  <div>
    <hr class="border-t border-solid" />
    <div class="flex mt-3 mx-3 pb-3 flex-wrap overflow-x-scroll">
      <ul class="flex space-x-3 ">
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
            <div class="block text-center w-[36px]">{{ item.name }}</div>
          </label>
        </li>
      </ul>
    </div>

    <div class=" mx-3 text-sm">
      <div v-for="(item, index) in menu" :key="index + 'index'">
        <div
          v-if="radioVar == item.type"
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-3"
        >
          <div class="flex p-3">
            <div class="w-1/2">
              <img :src="item.img" class="w-full h-[136px] object-cover" />
            </div>
            <div
              class="ml-3 space-y-3 w-1/2 h-[136px] flex flex-col justify-between"
            >
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

              <div class="align-bottom">
                <button class="btn-primary w-full text-center">
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

<style >
</style>