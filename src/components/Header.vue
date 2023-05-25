<script setup lang="ts">
import { ref } from "vue";

const keyword = ref('')
const show = ref(false);
const showSearchbar = () => {
  if (!show.value) {
    show.value = true;
  } else {
    show.value = false;
  }
};
</script>
<template>
  <div>
    <div class="mx-2 flex justify-between">
      <div class="text-base m-3">
        <img src="../assets/icons/logo.svg" alt="" class="w-8 h-8" />
      </div>
      <div class="flex items-center">
        <div class="mr-3">
          <button type="button" class="text-white" @click="showSearchbar">
            <svg
              width="27"
              height="27"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6536 24.0728H25.337L24.8703 23.6228C26.5036 21.7228 27.487 19.2562 27.487 16.5728C27.487 10.5895 22.637 5.7395 16.6536 5.7395C10.6703 5.7395 5.82031 10.5895 5.82031 16.5728C5.82031 22.5562 10.6703 27.4062 16.6536 27.4062C19.337 27.4062 21.8036 26.4228 23.7036 24.7895L24.1536 25.2562V26.5728L32.487 34.8895L34.9703 32.4062L26.6536 24.0728ZM16.6536 24.0728C12.5036 24.0728 9.15365 20.7228 9.15365 16.5728C9.15365 12.4228 12.5036 9.07284 16.6536 9.07284C20.8036 9.07284 24.1536 12.4228 24.1536 16.5728C24.1536 20.7228 20.8036 24.0728 16.6536 24.0728Z"
                fill="#0B3954"
              />
            </svg>

            <span class="sr-only">Icon description</span>
          </button>
        </div>
        <div class="mx-3">
          <button type="button" class="text-white" @click="showCartItems">
            <p>
              <img src="../assets/icons/cart.svg" alt="" />
            </p>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div v-if="show">
        <hr class="border-t border-gray-300" />
        <div class="flex items-center py-3 mx-3">
          <label for="simple-search" class="sr-only">Search</label>

          <div class="relative w-full">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            ></div>
            <input
              v-model="keyword"
              type="text"
              id="simple-search"
              class="border-primary"
              placeholder="查詢"
            />
          </div>
          <button
            class="btn-primary ml-3"
            @click="$emit('showResult', keyword)"
          >
            查詢
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
</style>