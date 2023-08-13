<script setup lang="ts">
import router from "../router/index";
function goToCheckout() {
  const time = new Date().getHours() + ":" + new Date().getMinutes();

  localStorage.setItem("time", time);
  router.push({ name: "CheckOut" });
}
</script>

<template>
  <div>
    <div
      class="modal w-80 max-w-lg p-3 my-auto rounded-xl shadow-lg bg-white"
      data-modal-backdrop="static"
    >
      <div>
        <div class="text-center p-3 flex-auto justify-center leading-6">
          <h2 class="text-2xl py-4">確定嗎？</h2>
          <div class="gray-sm-text">訂單送出無法在修改。</div>
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
          @click="goToCheckout"
          class="mb-2 md:mb-0 bg-orange-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-orange-600"
        >
          確定
        </button>
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
</style>
