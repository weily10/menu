<template>
  <div>
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
        :disabled="menu.quantity <= 1"
        @click="minusQtd()"
        type="submit"
        class="disabled:bg-gray-200 absolute top-0 left-0 px-2.5 text-sm text-white bg-slate-600 rounded-l-lg border border-gray-600 h-[33px]"
      >
        <span>-</span>
      </button>
    </div>
  </div>
</template>
