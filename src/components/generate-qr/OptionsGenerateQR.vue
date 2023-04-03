<template>
  <div class="px-10 py-6 m-auto">
    <nav>
      <h1 class="text-xl text-white-2 font-semibold tracking-wider">Gerar QR</h1>
    </nav>

    <div class="px-10 pt-16 pb-28 grid grid-cols-3 place-items-center gap-x-28 gap-y-8">
      <div v-for="option in Options" :key="option.id">
        <div
          @click="openModal"
          class="bg-dark rounded-lg w-24 h-24 flex items-center justify-center transition-all drop-shadow-2xl shadow-lg border-2 border-transparent hover:border-light cursor-pointer"
        >
          <div class="flex items-center flex-col gap-3">
            <img :src="option.icon" :alt="option.name" />
            <h2 class="text-white-2 text-xs">{{ option.name }}</h2>
          </div>
        </div>
      </div>

      <ModalGenerateQR v-show="viewModal" :closeModal="closeModal" />
    </div>
  </div>
</template>

<script>
import ModalGenerateQR from "./ModalGenerateQR.vue";
export default {
  components: { ModalGenerateQR },
  data() {
    return {
      viewModal: false,

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

  methods: {
    openModal() {
      this.viewModal = true;
      document.getElementById("BarBottom").style.display = "none";
    },
    closeModal() {
      this.viewModal = false;
      document.getElementById("BarBottom").style.display = "block";
    },
  },
};
</script>

<style></style>
