<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import router from "../router/index";
import axios from "axios";
import Modal from "../components/Modal.vue";
import { useStore } from "../store/index";

const route = useRoute();
const store = useStore();

const menu = ref<item>({});
const menuList = ref([]);
const modal = ref(false);
const type = ref("");

interface item {
  quantity?: number;
  img?: string;
  product?: string;
  description?: string;
  price?: number;
  customize?: [
    {
      img?: string;
      product?: string;
    }
  ];
}
// const cartItems = ref<item[]>([]);

// const cartItems = ref([]);

onMounted(() => {
  console.log(route.params);

  axios.get("http://localhost:3000/menu/" + route.params.id).then((res) => {
    menu.value = res.data;
  });
});
async function showModal(item: object) {
  await axios.get("http://localhost:3000/menu/").then((res) => {
    menuList.value = res.data;
    type.value = item.type;

    // for (let item of menuList.value) {
    //   if (item.type === type) {
    //     selected.value = item;
    //     return;
    //   }
    // }
    modal.value = true;

    // selected.value = menu.value[0];
  });
}

function minusQtd() {
  if ((menu.value.quantity as number) > 0) (menu.value.quantity as number)--;
}
function addsQtd() {
  (menu.value.quantity as number)++;
}

function addToCart() {
  if (menu.value.quantity !== 0) {
    const qtd = menu.value.quantity;
    for (let i = 0; i < qtd; i++) {
      store.increment(menu.value);
      // cartItems.value.push(menu.value.quantity);
    }
  }
}

function confirm() {
  modal.value = false;
}
</script>

<template>
  <div class="h-screen">
    <div class="absolute mx-6 mt-3">
      <button
        class="text-sm rounded-lg text-white bg-gray-700 w-22 flex py-2 px-3"
        @click="router.go(-1)"
      >
        <p class="self-center text-xs">返回</p>
      </button>
    </div>

    <div>
      <img :src="menu.img" alt="" />
    </div>
    <div class="rounded-lg bg-white w-full p-6">
      <div class="flex flex-col space-y-2">
        <div class="text-center">
          <h1>
            {{ menu.product }}
          </h1>
        </div>
        <div class="text-sm">
          <div class="mt-2 text-gray-400">
            <div class="text-sm">
              <div class="my-3 text-justify">
                {{ menu.description }}
              </div>
            </div>
          </div>
        </div>
        <div class="text-center flex justify-between py-3">
          <div class="self-center text-orange-500">
            <b class="text-xl"
              >{{ menu.price }} <span class="text-sm"> 元 </span></b
            >
          </div>
          <div class="flex items-center">
            <div
              class="pr-3 leading-none text-gray-400 text-sm inline-block align-text-bottom"
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

        <div>
          <div class="text-sm text-gray-400 mb-2">客製化</div>
          <div class="flex space-x-2 mb-3">
            <div v-for="item in menu.customize">
              <div
                class="w-12 h-12 border-dashed border cursor-pointer"
                @click="showModal(item)"
              >
                <img :src="item.img" class="w-12 h-12 object-cover" alt="" />
              </div>
              <p class="text-gray-500 text-xs mt-1 text-center">
                {{ item.product }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="text-sm text-gray-400">備註</div>
          <div class="mt-2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              class="w-full border pl-2 pt-1"
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-0 w-full px-6 py-3 bg-white">
      <button class="btn-primary w-full text-center" @click="addToCart()">
        加入購物車
      </button>
    </div>
    <div class="h-9"></div>
    <Modal
      v-show="modal"
      :menu="menuList"
      :type="type"
      @confirm="confirm"
      @cancel="modal = false"
    ></Modal>
  </div>
</template>
