<script setup lang="ts">
import { useStore } from "../store/index";
import router from "../router/index";

const store = useStore();
const items: { product?: string }[] = store.items;

function changeLabel(i: { type: string }) {
  if (i.type === "hamburger" || i.type === "sandwich") return "主餐：";
  if (i.type === "solo") return "加點：";
  if (i.type === "drinks") return "飲料：";
  if (i.type === "comment") return "備註";
}

function addsQtd(order: object) {
  store.addQtd(order);
}

function minusQtd(order: { quantity: number; id: string }) {
  if (order.quantity > 1) {
    store.minusQtd(order);
  } else {
    items.splice(
      items.findIndex((v) => v.order.id == order.id),
      1
    );
  }
}

function goToCheckout() {
  const time = new Date().getHours() + ":" + new Date().getMinutes();

  localStorage.setItem("time", time);
  router.push({ name: "CheckOut" });
}
</script>

<template>
  <div>
    <div class="mx-3 mt-3">
      <button class="btn-primary" @click="router.go(-1)">
        <p class="self-center text-xs">返回</p>
      </button>
    </div>
    <div v-for="(order, index) in items" :key="index + 'index'">
      <div class="bg-white border-b border-gray-200">
        <div class="flex justify-between p-3">
          <div class="space-y-3 w-1/2 flex flex-col justify-between">
            <div class="flex">
              <p class="font-semibold text-gray-600">
                {{ order.product }}
              </p>
            </div>
            <div>
              <div v-for="(i, index) in order.customize" :key="'index' + index">
                <div class="text-sm">
                  <div class="font-normal text-gray-600">
                    {{ changeLabel(i) }}
                  </div>
                  <div class="text-gray-600 font-light">
                    {{ i.product }}
                  </div>
                </div>
              </div>
              <div class="text-sm font-normal text-gray-600">
                {{ order.comment ? "備註：" : "" }}
              </div>
              <div class="text-sm text-gray-600 font-light">
                {{ order.comment }}
              </div>
              <div class="flex items-center mt-2">
                <div class="relative w-24">
                  <button
                    @click="addsQtd(order)"
                    type="submit"
                    class="absolute top-0 right-0 px-2.5 text-sm text-gray-800 bg-slate-200 rounded-r-full h-[33px]"
                  >
                    <span>+</span>
                  </button>
                  <input
                    type="number"
                    class="pl-8 ml-3 focus:outline-none w-14 h-[33px] bg-slate-200"
                    v-model="order.quantity"
                  />
                  <button
                    @click="minusQtd(order)"
                    type="submit"
                    class="absolute top-0 left-0 px-2.5 text-sm text-gray-800 bg-slate-200 rounded-l-full h-[33px]"
                  >
                    <span v-show="order.quantity > 1">-</span>
                    <span v-show="order.quantity <= 1"
                      ><img src="../assets/icons/trash.svg" alt=""
                    /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <img :src="order.img" class="w-[80px] h-[60px] object-cover" />
            </div>
            <p class="text-orange-500 text-base text-right mt-3">
              <b>{{ order.quantity * order.price }} 元</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex m-3 justify-between">
      <p class="tracking-widest font-medium">總結</p>
      <p class="font-medium">
        NT{{
          new Intl.NumberFormat("zh-Hant", {
            style: "currency",
            currency: "TWD",
          }).format(
            items.reduce((acc, item) => {
              return acc + item.quantity * item.price;
            }, 0)
          )
        }}
      </p>
    </div>
    <div>
      <div
        class="w-full shadow p-3 fixed bottom-0 bg-white flex flex-col space-y-3"
      >
        <div>
          <button class="btn-primary w-full" @click="goToCheckout">
            點完了，送廚房
          </button>
        </div>
        <div>
          <button
            class="btn-secondary w-full"
            @click="router.push({ name: 'Home' })"
          >
            繼續點
          </button>
        </div>
      </div>
      <div class="h-28"></div>
    </div>
  </div>
</template>
