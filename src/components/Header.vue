<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../store/index";
import router from "../router/index";

defineProps(["modelValue"]);

const store = useStore();
const items = store.items;

const show = ref(false);

const showSearchbar = () => {
  if (!show.value) {
    show.value = true;
  } else {
    show.value = false;
  }
};

function goToItemsPages() {
  router.push({
    name: "CartPage",
  });
}
</script>
<template>
  <div>
    <div class="mx-2 flex justify-between">
      <div class="text-base m-3">
        <img src="../assets/icons/logo.svg" alt="" class="w-8 h-8" />
      </div>
      <div class="flex items-center">
        <div class="mx-3">
          <button type="button" class="text-white" @click="showSearchbar">
            <img src="../assets/icons/magnifier.svg" alt="" />
            <span class="sr-only">Icon description</span>
          </button>
        </div>
        <div class="mx-3">
          <div
            class="leading-none text-center py-1 px-[6px] bg-red-600 rounded-full absolute right-3 top-[6px] text-white text-[6pt]"
          >
            {{ items.length }}
          </div>
          <button
            type="button"
            class="text-white"
            @click="goToItemsPages"
            :disabled="items.length <= 0"
          >
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
              :value="modelValue"
              @input="
                $emit(
                  'update:modelValue',
                  ($event.target as HTMLInputElement).value
                )
              "
              type="text"
              id="simple-search"
              class="border-primary"
              placeholder="查詢"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
