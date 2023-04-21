<template>
  <div
    class="w-screen h-20 fixed z-40 left-1/2 -translate-x-1/2 py-4 px-14 bottom-0 bg-dark border-2 border-transparent border-x-0 border-b-0 transition-all max-mn:px-3 lg:w-1/2 sm:px-20 md:w-2/3 md:rounded-full md:bottom-5"
    :class="{ routeScan: $route.path === '/' }"
  >
    <ul class="flex justify-between items-center">
      <li
        @click="generateQr('/generate-qr')"
        :class="{ active: $route.path === '/generate-qr' }"
        class="flex items-center flex-col gap-1 transition-all"
      >
        <div
          class="transition-all bg-[url('@/assets/img/iconGenerate.svg')] bg-no-repeat bg-cover bg-center w-[30px] h-[30px]"
        />
        <span class="transition-all text-white-2 text-[13px] tracking-wide font-semibold"
          >Gerar</span
        >
      </li>

      <li class="p-4 bg-light rounded-full -mt-20 scan" @click="openScan">
        <img src="@/assets/img/logoLight.svg" class="w-[30px]" alt="icon" />
      </li>

      <li
        @click="history('/history')"
        :class="{ active: $route.path === '/history' }"
        class="flex items-center flex-col gap-1 transition-all"
      >
        <div
          class="transition-all bg-[url('@/assets/img/iconHistory.svg')] bg-no-repeat bg-cover bg-center w-[30px] h-[30px]"
        />
        <span class="transition-all text-white-2 text-[13px] tracking-wide font-semibold"
          >Histórico</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {},

  data() {
    return {};
  },

  methods: {
    vibrate() {
      const localStorageVibrate = localStorage.getItem("Vibrate");

      if (localStorageVibrate === "true") {
        navigator.vibrate([50]);
      } else {
        navigator.vibrate([0]);
      }
    },

    generateQr() {
      this.vibrate();
      this.$router.push("/generate-qr");
    },

    openScan() {
      this.vibrate();
      this.$router.push("/");
    },

    history() {
      this.vibrate();
      this.$router.push("/history");
    },
  },
};
</script>

<style scoped lang="scss">
.scan {
  filter: drop-shadow(0px 0px 21px #fdb623);
}

li {
  cursor: pointer;
  user-select: none;
}

.active:nth-child(3) {
  div {
    background-image: url("@/assets/img/iconHistoryActive.svg");
  }

  span {
    color: #fdb623;
  }
}

.active:nth-child(1) {
  div {
    background-image: url("@/assets/img/iconGenerateActive.svg");
  }

  span {
    color: #fdb623;
  }
}

.routeScan {
  border-color: #fdb623;
}
</style>
