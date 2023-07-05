<script setup lang="ts">
import { ref } from "vue";

const selected = ref({});
defineProps({
  type: String,
  menu: Array,
});

function titleChange(type: string) {
  if (type == "drinks") return "選擇飲料";
  if (type == "side") return "選擇點心";

  return "選擇";
}
</script>

<template>
  <div>
    <div>
      <div
        class="modal w-80 max-w-lg p-3 my-auto rounded-xl shadow-lg bg-white"
      >
        <div>
          <div class="text-center p-3 flex-auto justify-center leading-6">
            <h2 class="text-2xl font-bold py-4">
              {{ titleChange(type as string) }}
            </h2>
          </div>
          <div class="flex justify-center">
            <div v-for="item in menu">
              <div v-if="item.type == type" class="w-12 m-3 text-center">
                <div class="w-12 align-center">
                  <label>
                    <input
                      v-model="selected"
                      type="radio"
                      name="test"
                      :value="item"
                      checked
                      class="opacity-0 w-0 h-0 absolute"
                    />
                    <img
                      :src="item.img"
                      class="w-12 h-12 object-cover cursor-pointer"
                      alt=""
                    />
                  </label>
                  <div>
                    <p class="text-gray-500 text-xs mt-1 text-center">
                      {{ item.product }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 mt-2 text-center space-x-4 md:block">
            <button
              @click="$emit('cancel', false)"
              class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
            >
              取消
            </button>
            <button
              @click="$emit('confirm', selected)"
              class="mb-2 md:mb-0 bg-orange-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-orange-600"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

[type="radio"]:checked + img {
  outline: 1px solid rgb(228, 147, 61);
}
</style>
