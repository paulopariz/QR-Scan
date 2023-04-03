<template>
  <div
    class="px-10 mt-6 pb-6 m-auto h-screen w-screen bg-[#333333] fixed z-30 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
  >
    <EclipseInGenerate class="-right-[35%] -top-[15%]" />
    <EclipseInGenerate class="bottom-0 -left-2/3 -scale-95" />
    <nav class="flex items-center gap-6">
      <button
        @click="closeModal"
        class="px-4 py-3 rounded-lg bg-dark drop-shadow-2xl border-2 border-transparent shadow-lg hover:border-light transition-all"
      >
        <img src="@/assets/img/iconBack.svg" alt="Arrow" />
      </button>

      <h1 class="text-xl text-white-2 font-semibold tracking-wider">Twitter</h1>
    </nav>
  </div>
</template>

<script>
import EclipseInGenerate from "../EclipseInGenerate.vue";
export default {
  components: { EclipseInGenerate },
  props: ["closeModal"],
};
</script>

<style></style>
