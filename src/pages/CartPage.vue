<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store/index";
import router from "../router/index";

const store = useStore();
const items: { product?: string }[] = store.items;

// const filteredItems = computed(() => {
//   const filteredArray: {
//     product?: string;
//     img?: string;
//     description?: string;
//     price?: string;
//   }[] = [];
//   for (let i = 0; i < items.length; i++) {
//     if (filteredArray.map((e) => e.product).indexOf(items[i].product) === -1) {
//       filteredArray.push(items[i]);
//     }
//   }
//   return filteredArray;
// });

function changeLabel(i: object) {
  if (i.type === "main") return "主餐：";
  if (i.type === "solo") return "加點：";
  if (i.type === "drinks") return "飲料：";
}
</script>

<template>
  <div>
    <div class="mx-3 mt-3">
      <button
        class="text-sm rounded-lg text-white bg-gray-700 w-22 flex py-2 px-3"
        @click="router.go(-1)"
      >
        <p class="self-center text-xs">返回</p>
      </button>
    </div>
    <div v-for="(item, index) in items" :key="index + 'index'">
      <div class="bg-white border-b border-gray-200">
        <div class="flex justify-between p-3">
          <div class="space-y-3 w-1/2 flex flex-col justify-between">
            <div class="flex">
              <p class="font-semibold text-gray-600">
                {{ item.product }}
              </p>
            </div>
            <div>
              <div v-for="i in item.customize">
                <div class="text-sm">
                  <div class="font-normal text-gray-600">
                    {{ changeLabel(i) }}
                  </div>
                  <div class="text-gray-600 font-light">
                    {{ i.product }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <img :src="item.img" class="w-[80px] h-[60px] object-cover" />
            </div>
            <div>
              <p class="text-orange-500 text-base text-right">
                <b>{{ item.price }} 元</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="w-full shadow p-3 fixed bottom-0 bg-white flex">
        <button class="btn-primary w-full" @click="$emit('finishOrder')">
          點完了
        </button>
      </div>
      <div class="h-14"></div>
    </div>
  </div>
</template>
