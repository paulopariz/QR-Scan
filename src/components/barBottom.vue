<template>
  <div
    class="w-screen h-20 fixed z-40 left-1/2 -translate-x-1/2 py-4 px-14 bottom-0 bg-dark border-2 border-transparent border-x-0 border-b-0 transition-all"
    :class="{ routeScan: $route.path === '/' }"
  >
    <div>
      <ul class="flex items-center justify-between">
        <li
          @click="generateQr('/generate-qr')"
          :class="{ active: $route.path === '/generate-qr' }"
          class="flex items-center flex-col gap-1 transition-all"
        >
          <div
            class="transition-all bg-[url('@/assets/img/iconGenerate.svg')] bg-no-repeat bg-cover bg-center w-[30px] h-[30px]"
          />
          <span
            class="transition-all text-white-2 text-[13px] tracking-wide font-semibold"
            >Gerar</span
          >
        </li>

        <li class="p-4 bg-light rounded-full -mt-20 scan" @click="openScan">
          <img src="@/assets/img/logoLight.svg" class="w-[30px]" alt="icon" />
        </li>

        <li
          @click="configs('/history')"
          :class="{ active: $route.path === '/history' }"
          class="flex items-center flex-col gap-1 transition-all"
        >
          <div
            class="transition-all bg-[url('@/assets/img/iconHistory.svg')] bg-no-repeat bg-cover bg-center w-[30px] h-[30px]"
          />
          <span
            class="transition-all text-white-2 text-[13px] tracking-wide font-semibold"
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
    return {};
  },

  methods: {
    generateQr() {
      navigator.vibrate([50]);
      this.$router.push("/generate-qr");
    },

    openScan() {
      navigator.vibrate([50]);
      this.$router.push("/");
    },

    configs() {
      navigator.vibrate([50]);
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
