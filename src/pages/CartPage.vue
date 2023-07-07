<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store/index";
const store = useStore();
const items = store.items;
</script>

<template>
  <div>
    <div v-for="(item, index) in items" :key="index + 'index'">
      <div
        class="bg-white border-b border-gray-200"
        v-if="index === 0 || items[index] != items[index - 1]"
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
</template>
