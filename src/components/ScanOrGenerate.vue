<template>
  <div class="fixed z-40 bottom-20 w-screen">
    <div class="flex justify-center flex-col items-center gap-5 w-screen">
      <button
        @click="clickRouteScan"
        class="bg-dark flex items-center justify-between w-4/5 px-7 h-14 select-none rounded-lg transition-all active:scale-95 hover:scale-95"
      >
        <span class="text-transparent text-[0px]">.</span>
        <h1 class="text-white font-bold tracking-wide text-base">Escanear QR-Code</h1>
        <img src="@/assets/img/arrow.svg" alt="Arrow" />
      </button>

      <button
        @click="clickRouteGenerate"
        class="bg-dark flex items-center justify-between w-4/5 px-7 h-14 select-none rounded-lg transition-all active:scale-95 hover:scale-95"
      >
        <span class="text-transparent text-[0px]">.</span>
        <h1 class="text-white font-bold tracking-wide text-base">Gerar QR-Code</h1>
        <img src="@/assets/img/arrow.svg" alt="Arrow" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScanOrGenerate",

  props: ["clickRouteScan", "clickRouteGenerate"],
};
</script>

<style></style>
