<script setup lang="ts">
import { ref } from "vue";
import router from "../router/index";
import Loading from "../components/Loading.vue";

defineProps<{
  menu: {
    id: string;
    product: string;
    price: number;
    img: string;
    description: string;
    type: string;
    quantity: number;
  }[];
  loading: boolean;
}>();

const el = ref();

function loaded(id: string) {
  let index = el.value
    .map((i: any) => i.querySelector("img").id)
    .indexOf("id" + id);
  console.log(el.value[index].querySelector(".blurredimg"));
  el.value[index].classList.add("loaded");

  el.value[index].classList.remove("blurredimg");
}

const items = ref([
  { id: "set", name: "套餐" },
  { id: "main", name: "主食" },
  { id: "drinks", name: "飲料" },
  { id: "solo", name: "單點" },
]);
const radioVar = ref("set");

const changeCategory = (i: any) => {
  radioVar.value = i.target.value;
};
async function goToProductPage(item: any) {
  let product = item;

  await router.push({
    path: "/menu",
    query: { id: product.id },
  });
}

function typeMod(radioVar: string, type: string) {
  if (type !== "hamburger" && type !== "sandwich") {
    return radioVar === type;
  } else {
    return radioVar === "main";
  }
}

// function blurredimg(item){
//   return
// }
</script>
<template>
  <div>
    <hr class="border-t border-solid" />
    <div
      class="flex mt-3 mx-3 pb-3 flex-wrap overflow-x-scroll border-b bg-white"
    >
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

    <div class="mx-3 text-sm md:flex md:flex-wrap">
      <div v-show="loading" class="flex justify-center items-center h-[300px]">
        <Loading></Loading>
      </div>
      <template v-for="(item, index) in menu">
        <div
          v-show="!loading"
          :key="index + 'index'"
          @click="goToProductPage(item)"
          v-if="typeMod(radioVar, item.type)"
          class="md:basis-1/2 md:pr-2"
        >
          <div class="bg-white border-gray-200">
            <div class="flex p-3">
              <div class="w-1/2">
                <div ref="el" class="blurredimg">
                  <img
                    :id="'id' + item.id"
                    :src="item.img"
                    class="w-full h-[136px] object-cover"
                    loading="lazy"
                    @load="loaded(item.id)"
                  />
                </div>
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
      </template>
    </div>
  </div>
</template>

<style>
.blurredimg {
  background-color: #fcb665;
  background-size: cover;
  animation: pulse 2.5s infinite;
  animation-fill-mode: forwards;
}
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.loaded {
  content: none;
  animation: none;
}

.blurred-img img {
  opacity: 0;
  transition: opacity 250ms ease-in-out;
}
</style>
