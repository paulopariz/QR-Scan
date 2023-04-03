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

    <div
      class="w-5/6 gap-9 drop-shadow-2xl shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/60 rounded-lg border-2 border-x-0 border-light flex flex-col justify-between items-center px-5 py-8"
    >
      <img src="@/assets/img/iconTwitter.svg" class="w-16" />

      <div class="flex flex-col gap-3 w-full">
        <label for="Username" class="text-white-2 tracking-wide">Username</label>
        <input
          type="text"
          placeholder="@username"
          v-model="link"
          class="px-4 py-2 bg-[#222121] border border-white-2/70 rounded-md drop-shadow-2xl shadow-lg text-white-2/40 outline-none"
        />
      </div>

      <button
        class="mt-4 px-6 py-2 bg-light text-dark tracking-wide rounded-lg drop-shadow-2xl shadow-lg active:bg-light"
      >
        Gerar QR Code
      </button>
    </div>
  </div>
</template>

<script>
import EclipseInGenerate from "../EclipseInGenerate.vue";
export default {
  components: { EclipseInGenerate },
  props: ["closeModal"],

  data() {
    return {
      link: "https://twitter.com/",
    };
  },
};
</script>

<style></style>
