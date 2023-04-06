<template>
  <div
    class="w-5/6 gap-9 drop-shadow-2xl shadow-lg absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/50 rounded-lg border-2 border-x-0 border-light flex flex-col justify-between items-center px-5 py-8"
  >
    <img :src="img" class="w-16 select-none" />

    <div class="flex flex-col gap-3 w-full">
      <label for="Username" class="text-white-2 tracking-wide">{{ label }}</label>
      <input
        :type="typeInput"
        :placeholder="placeholder"
        v-model="username"
        class="px-4 py-2 bg-[#222121] border border-white-2/70 rounded-md drop-shadow-2xl shadow-lg text-white-2/40 outline-none transition-all focus:border-light"
      />

      <input type="text" id="twitter-url" class="" :value="url" readonly />
    </div>

    <button
      @click="generate"
      class="mt-4 px-6 py-2 bg-light text-dark tracking-wide rounded-lg drop-shadow-2xl shadow-lg transition-all active:scale-95 hover:scale-95"
    >
      Gerar QR Code
    </button>
  </div>
</template>

<script>
export default {
  props: ["closeModal", "title", "img", "placeholder", "typeInput", "label", "url"],

  data() {
    return {
      username: "",
    };
  },
  computed: {
    twitterUrl() {
      return this.link + this.username;
    },
  },

  methods: {
    generate() {
      console.log(this.twitterUrl);
    },
  },
};
</script>

<style></style>
