<script setup lang="ts">
import { useStore } from "../store/index";
import router from "../router/index";
import Item from "../global/types";

const store = useStore();

let items = store.items;

const time = localStorage.getItem("time");

function formatPrice(price: number) {
  return new Intl.NumberFormat("zh-Hant", {
    style: "currency",
    currency: "TWD",
  }).format(price);
}

function total(items: Item[]) {
  return new Intl.NumberFormat("zh-Hant", {
    style: "currency",
    currency: "TWD",
  }).format(
    items.reduce((acc: number, item: { quantity: number; price: number }) => {
      return acc + item.quantity * item.price;
    }, 0)
  );
}
</script>

<template>
  <div>
    <div class="m-3">
      <div class="flex justify-between items-center">
        <button class="btn-primary" @click="router.go(-1)">
          <p class="self-center text-xs">返回</p>
        </button>
        <p class="font-medium text-lg">明細</p>
        <div></div>
      </div>
      <div class="mt-6">
        <div class="mt-2">桌號 1</div>
        <div class="flex space-x-2">
          <p class="gray-sm-text">送出時間</p>
          <p class="text-sm">{{ time }}</p>
        </div>
        <div
          v-for="(item, index) in items"
          :key="'index' + index"
          class="flex mt-3 pb-3 justify-between items-end bg-white border-b border-gray-200"
        >
          <div>
            <p>{{ item.quantity }}x {{ item.product }}</p>
            <ol class="list-decimal ml-9 text-sm">
              <li v-for="i in item.customize">
                {{ i.product }}
              </li>
            </ol>
          </div>
          <div>{{ formatPrice(item.quantity * item.price) }}</div>
        </div>

        <div class="flex justify-end space-x-2 mt-2">
          <div>總結</div>
          <div class="text-base font-medium">{{ total(items) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
