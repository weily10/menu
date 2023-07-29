<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import router from "../router/index";
import axios from "axios";
import Modal from "../components/Modal.vue";
import { useStore } from "../store/index";
import Loading from "../components/Loading.vue";

const route = useRoute();
const store = useStore();
const loading = ref(true);

const menu = ref<item>({
  quantity: 1,
});
const menuList = ref([]);
const modal = ref(false);
const type = ref("");

interface item {
  quantity: number;
  img?: string;
  product?: string;
  description?: string;
  price?: number;
  comment?: string;
  customize?: [
    {
      img?: string;
      product?: string;
    }
  ];
}

onMounted(() => {
  axios.get("http://localhost:3000/menu/" + route.params.id).then((res) => {
    menu.value = res.data;
    menu.value.quantity = 1;
    loading.value = false;
  });
});
async function showModal(item: object) {
  await axios.get("http://localhost:3000/menu/").then((res) => {
    menuList.value = res.data;
    type.value = item.type;
    modal.value = true;
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
    store.increment(menu.value);
    router.push("/cartPage");
  }
}

function confirm(selected: object) {
  if (selected) {
    const index = menu.value.customize.findIndex(
      (item) => item.type === selected.type
    );
    menu.value.customize.splice(index, 1, selected);
  }

  modal.value = false;
}
</script>

<template>
  <div>
    <div class="flex h-screen justify-center items-center" v-if="loading">
      <Loading></Loading>
    </div>
    <div class="h-screen" v-else>
      <div class="absolute mx-3 mt-3">
        <button class="btn-primary" @click="router.go(-1)">
          <p class="self-center text-xs">返回</p>
        </button>
      </div>

      <div>
        <img :src="menu.img" alt="" class="object-cover w-full h-[40vh]" />
      </div>
      <div class="rounded-lg bg-white w-full p-6">
        <div class="flex flex-col space-y-2">
          <div class="text-center">
            <h1>
              {{ menu.product }}
            </h1>
          </div>
          <div class="gray-sm-text">
            <div class="mt-2">
              <div class="">
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
                  class="absolute top-0 right-0 px-2.5 text-sm text-gray-800 bg-slate-200 rounded-r-full h-[33px]"
                >
                  <span>+</span>
                </button>
                <input
                  type="number"
                  class="pl-6 focus:outline-none w-14 h-[33px] bg-slate-200"
                  v-model="menu.quantity"
                />
                <button
                  :disabled="menu.quantity <= 1"
                  @click="minusQtd()"
                  type="submit"
                  class="absolute top-0 left-0 px-2.5 text-sm text-gray-800 bg-slate-200 rounded-l-full h-[33px]"
                >
                  <span v-show="menu.quantity > 1">-</span>
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
                <p class="text-gray-500 text-xs mt-1 text-center w-12">
                  {{ item.product }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="text-sm text-gray-400">備註</div>
            <div class="mt-2">
              <textarea
                v-model="menu.comment"
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
  </div>
</template>
