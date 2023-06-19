<script setup lang="ts">
import { ref } from "vue";
import router from "../router/index";

defineProps<{
  menu: {
    id: number;
    product: string;
    price: number;
    img: string;
    description: string;
    type: string;
    quantity: number;
  }[];
}>();

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
  console.log("radiovar", radioVar);
};
function goToProductPage(item: any) {
  let product = item;

  router.push({
    name: "Product",
    params: { id: product.id },
  });
}
</script>
<template>
  <div>
    <hr class="border-t border-solid" />
    <div class="flex mt-3 mx-3 pb-3 flex-wrap overflow-x-scroll">
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
            <div class="block text-center w-[36px]">{{ item.name }}</div>
          </label>
        </li>
      </ul>
    </div>

    <div class="mx-3 text-sm">
      <div
        v-for="(item, index) in menu"
        :key="index + 'index'"
        @click="goToProductPage(item)"
      >
        <div
          v-if="radioVar == item.type"
          class="bg-white border border-gray-200 rounded-lg shadow mb-3"
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
                </div>
                <div class="text-xs text-gray-400 mt-3 overflow-auto h-12">
                  {{ item.description }}
                </div>
              </div>
              <div>
                <p class="text-orange-500 text-base">
                  <b>{{ item.price }} 元</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
