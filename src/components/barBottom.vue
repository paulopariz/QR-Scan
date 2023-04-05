<template>
  <div
    class="w-screen h-20 rounded-2xl rounded-b-none fixed z-40 left-1/2 -translate-x-1/2 py-4 px-14 bottom-0 bg-dark border-2 border-x-0 border-b-0 border-light"
  >
    <div>
      <ul class="flex items-center justify-between">
        <li
          @click="generateQr('generate-qr')"
          :class="{ active: activeRoute === 'generate-qr' }"
          class="flex items-center flex-col gap-1"
        >
          <img src="@/assets/img/iconGenerate.svg" class="" alt="icon" />
          <span class="text-white-2 text-[13px] tracking-wide font-semibold">Gerar</span>
        </li>

        <li class="p-4 bg-light rounded-full -mt-20 scan" @click="openScan">
          <img src="@/assets/img/logoLight.svg" class="w-[30px]" alt="icon" />
        </li>

        <li
          @click="configs('/settings')"
          :class="{ active: activeRoute === '/settings' }"
          class="flex items-center flex-col gap-1"
        >
          <img
            src="@/assets/img/iconSettings.svg"
            alt="icon"
            class="transition-all hover:rotate-45"
          />
          <span class="text-white-2 text-[13px] tracking-wide font-semibold"
            >Configs</span
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
      this.$router.push("/generate-qr");

      this.activeRoute = route;
    },

    openScan(route) {
      this.$router.push("/");
      this.activeRoute = route;
    },

    configs(route) {
      this.$router.push("/settings");
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
