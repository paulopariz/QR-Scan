<template>
  <div>
    <div class="fixed bg-[#333333] w-screen z-10 px-10 py-6 m-auto">
      <nav class="flex items-center gap-6">
        <h1 class="text-xl text-white-2 font-semibold tracking-wider select-none">
          Histórico
        </h1>
      </nav>

      <div
        class="flex items-center justify-center mt-6 p-1.5 rounded-lg animate__animated animate__fadeIn"
        id="selectHistory"
        v-show="selectHistory"
      >
        <div class="w-full">
          <input type="radio" name="option" id="1" class="peer hidden" checked />
          <label
            for="1"
            class="block cursor-pointer rounded-lg select-none p-2 text-center text-white-2 peer-checked:bg-light peer-checked:font-bold peer-checked:text-dark"
            >Scan</label
          >
        </div>

        <div class="w-full">
          <input type="radio" name="option" id="2" class="peer hidden" />
          <label
            for="2"
            class="block cursor-pointer rounded-lg select-none p-2 text-center text-white-2 peer-checked:bg-light peer-checked:font-bold peer-checked:text-dark"
            >Gerados</label
          >
        </div>
      </div>
    </div>

    <div class="px-10 py-6 pb-36 m-auto">
      <div class="mt-36">
        <div v-if="qrCodes.length" class="flex flex-col justify-center gap-5">
          <section v-for="(HistoryQrCode, index) in qrCodes" :key="index">
            <div
              class="rounded-lg border-2 border-transparent px-5 py-3 flex justify-between"
              id="setionHistory"
            >
              <div class="flex items-center gap-3 overflow-hidden w-full">
                <img src="@/assets/img/logoDark.svg" alt="logo" class="w-9 h-9" />
                <p
                  class="w-2/3 text-base text-white-2 tracking-wide whitespace-nowrap overflow-auto select-none py-0.5 transition-all"
                  id="contentQrCode"
                >
                  {{ HistoryQrCode.qrCodeGeneratedContent }}
                </p>
              </div>
              <button class="">
                <img src="@/assets/img/iconBin.svg" alt="iconBin" class="m-auto" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qrCodes: [],

      selectHistory: true,
    };
  },

  mounted() {
    const qrCodes = localStorage.getItem("qrCodeHistory");
    if (qrCodes) {
      this.qrCodes = JSON.parse(qrCodes);
    }

    window.addEventListener("scroll", this.handleScroll); // adicione o evento de rolagem quando o componente é montado
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll); // remova o evento de rolagem quando o componente é desmontado
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 620) {
        this.selectHistory = false;
      } else {
        this.selectHistory = true;
      }
    },
  },
};
</script>

<style scoped>
#setionHistory {
  background: #303030;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;
}

#selectHistory {
  background: #2f2f2f;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;
}
</style>
