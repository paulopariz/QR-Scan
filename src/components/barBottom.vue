<template>
  <div
    class="w-screen h-20 fixed z-40 left-1/2 -translate-x-1/2 py-4 px-14 bottom-0 bg-dark border-2 border-x-0 border-b-0 border-light"
  >
    <div>
      <ul class="flex items-center justify-between">
        <li
          @click="generateQr('/generate-qr')"
          :class="{ active: activeRoute === '/generate-qr' }"
          class="flex items-center flex-col gap-1"
        >
          <img src="@/assets/img/iconGenerate.svg" class="" alt="icon" />
          <span class="text-white-2 text-[13px] tracking-wide font-semibold">Gerar</span>
        </li>

        <li class="p-4 bg-light rounded-full -mt-20 scan" @click="openScan">
          <img src="@/assets/img/logoLight.svg" class="w-[30px]" alt="icon" />
        </li>

        <li
          @click="configs('/history')"
          :class="{ active: activeRoute === '/history' }"
          class="flex items-center flex-col gap-1"
        >
          <img src="@/assets/img/iconHistory.svg" alt="icon" />
          <span class="text-white-2 text-[13px] tracking-wide font-semibold"
            >Histórico</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},

  data() {
    return {
      activeRoute: "",
    };
  },

  methods: {
    generateQr(route) {
      navigator.vibrate([50]);
      this.$router.push("/generate-qr");

      this.activeRoute = route;
    },

    openScan(route) {
      navigator.vibrate([50]);
      this.$router.push("/");
      this.activeRoute = route;

      // document.getElementById("ShowQrCodeRead").style.display = "none";
      // document.getElementById("ShowScan").style.display = "block";
    },

    configs(route) {
      navigator.vibrate([50]);
      this.$router.push("/history");
      this.activeRoute = route;
    },
  },
};
</script>

<style scoped>
.scan {
  filter: drop-shadow(0px 0px 21px #fdb623);
}

li {
  cursor: pointer;
  user-select: none;
}

.active::before {
  color: #fdb623;
  background: #fdb623;
  width: 4.5px;
  height: 4.5px;
  border-radius: 50%;
  content: "";
  position: absolute;
  bottom: 2.5px;
}
</style>
