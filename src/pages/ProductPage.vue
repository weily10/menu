<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

interface item {
  quantity?: number;
  img?: string;
  product?: string;
  description?: string;
  price?: number;
  customize?: [
    {
      product?: string;
    }
  ];
}
const cartItems = ref<item[]>([]);
const menu = ref<item>({});

onMounted(() => {
  console.log(route.params);

  axios.get("http://localhost:3000/menu/" + route.params.id).then((res) => {
    menu.value = res.data;
  });
});
function minusQtd() {
  if ((menu.value.quantity as number) > 0) (menu.value.quantity as number)--;
}
function addsQtd() {
  (menu.value.quantity as number)++;
}

function addToCart() {
  if (menu.value.quantity !== 0) {
    // cartItems.value.push(menu.value.quantity);
  }
  console.log("aa", cartItems.value);
}
</script>

<template>
  <div>
    <div>
      <img :src="menu.img" alt="" />
    </div>
    <div class="fixed top-52 rounded-lg h-full bg-white w-full p-6">
      <div class="flex flex-col space-y-2">
        <div class="text-center">
          <h1>
            {{ menu.product }}
          </h1>
        </div>
        <div class="text-center flex justify-between">
          <div class="self-center text-lg">${{ menu.price }}</div>
          <div class="flex items-center">
            <div
              class="px-3 leading-none text-gray-400 text-sm inline-block align-text-bottom"
            >
              數量
            </div>
            <div class="relative w-24">
              <button
                @click="addsQtd()"
                type="submit"
                class="absolute top-0 right-0 px-2.5 text-sm text-white bg-slate-600 rounded-r-lg border border-gray-600 h-[33px]"
              >
                <span>+</span>
              </button>
              <input
                type="number"
                class="pl-10 border-primary h-[33px]"
                v-model="menu.quantity"
              />
              <button
                @click="minusQtd()"
                type="submit"
                class="absolute top-0 left-0 px-2.5 text-sm text-white bg-slate-600 rounded-l-lg border border-gray-600 h-[33px]"
              >
                <span>-</span>
              </button>
            </div>
          </div>
        </div>

        <div class="">
          <div class="text-sm text-gray-400">備註</div>
          <div class="mt-2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              class="w-full border pl-2 pt-1"
            ></textarea>
          </div>
        </div>
        <div>
          <div class="text-sm text-gray-400 mb-2">客製化</div>
          <div class="flex space-x-2 mb-3">
            <div v-for="item in menu.customize">
              <div class="w-12 h-12 border-dashed border"></div>
              <p class="text-gray-500 text-xs mt-1 text-center">
                {{ item.product }}
              </p>
            </div>
          </div>
        </div>
        <div class="text-sm">
          <div class="text-gray-400">描述</div>
          <div class="mt-2">
            {{ menu.description }}
          </div>
        </div>

        <div class="">
          <button
            class="btn-primary w-full text-center leading-none text-xs"
            @click="addToCart()"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
