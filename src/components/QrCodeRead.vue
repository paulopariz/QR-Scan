<template>
  <div
    class="px-10 pb-6 m-auto h-screen w-screen bg-[#333333] fixed z-30 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
  >
    <EclipseBackground class="-right-[45%] -top-[15%]" />
    <EclipseBackground class="bottom-0 -left-2/3 -scale-95" />

    <nav class="flex items-center gap-6 mt-9">
      <button
        id="btnBack"
        @click="closeModal"
        class="px-4 py-3 rounded-lg bg-dark drop-shadow-2xl border-2 border-transparent shadow-lg transition-all hover:scale-95"
      >
        <img
          src="@/assets/img/iconBack.svg"
          alt="Arrow"
          class="transition-all fill-white"
        />
      </button>

      <h1 class="text-xl text-white-2 font-semibold tracking-wider">{{ title }}</h1>
    </nav>
  </div>
</template>

<script>
import EclipseBackground from "./EclipseBackground.vue";

export default { components: { EclipseBackground } };
</script>

<style></style>
