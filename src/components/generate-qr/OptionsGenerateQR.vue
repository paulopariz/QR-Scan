<template>
  <div class="px-10 py-6 m-auto">
    <nav>
      <h1 class="text-xl text-white-2 font-semibold tracking-wider">Gerar QR</h1>
    </nav>

    <div
      class="w-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 grid grid-cols-3 place-items-end gap-x-5 gap-y-8"
    >
      <div v-for="option in Options" :key="option.id">
        <div
          class="bg-dark rounded-lg w-24 h-24 flex items-center justify-center drop-shadow-2xl shadow-lg"
        >
          <div class="flex items-center flex-col gap-3">
            <img :src="option.icon" :alt="option.name" />
            <h2 class="text-white-2 text-xs">{{ option.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Options: [
        {
          id: 1,
          name: "Twitter",
          icon: require("@/assets/img/iconTwitter.svg"),
        },
        {
          id: 2,
          name: "Instagram",
          icon: require("@/assets/img/iconInstagram.svg"),
        },
        {
          id: 3,
          name: "WhatsApp",
          icon: require("@/assets/img/iconWhatsapp.svg"),
        },
        {
          id: 4,
          name: "Web Site",
          icon: require("@/assets/img/iconWebSite.svg"),
        },
      ],
    };
  },
};
</script>

<style></style>
