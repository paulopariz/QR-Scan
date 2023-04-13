<template>
  <div>
    <div class="fixed bg-[#333333] w-screen z-10 px-10 py-6 m-auto">
      <nav class="flex items-center gap-6">
        <h1 class="text-xl text-white-2 font-semibold tracking-wider select-none">
          Histórico
        </h1>
      </nav>

      <div
        class="flex items-center justify-center mt-6 p-2 rounded-lg animate__animated animate__fadeIn"
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
          <section
            v-for="HistoryQrCode in qrCodes"
            :key="HistoryQrCode.id"
            @click="OpenHistoryQrCode(HistoryQrCode.id)"
          >
            <div
              class="rounded-lg border-2 border-transparent px-5 py-3 flex justify-between cursor-pointer transition-all"
              id="setionHistory"
            >
              <div class="flex items-center gap-3 overflow-hidden w-full">
                <div
                  id="logo"
                  class="w-9 h-9 bg-[url('@/assets/img/logoDark.svg')] bg-cover bg-center bg-no-repeat transition-all"
                ></div>

                <p
                  class="w-2/3 text-base text-white-2 tracking-wide whitespace-nowrap overflow-auto select-none py-0.5 transition-all"
                  id="contentQrCode"
                >
                  {{ HistoryQrCode.qrCodeGeneratedContent }}
                </p>
              </div>
              <button
                id="btnDelete"
                class="bg-[url('@/assets/img/iconBin.svg')] bg-cover bg-no-repeat bg-center h-[18px] w-[14px] m-auto transition-all"
              ></button>
            </div>
          </section>

          <!--MODAL-->
          <div v-if="ViewModalHistory">
            <ModalHistoryQrcode :closeModalHistory="closeModalHistory" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalHistoryQrcode from "./ModalHistoryQrcode.vue";
export default {
  components: { ModalHistoryQrcode },
  data() {
    return {
      qrCodes: [],

      selectHistory: true,
      ViewModalHistory: null,
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
      if (window.scrollY > 550) {
        this.selectHistory = false;
      } else {
        this.selectHistory = true;
      }
    },

    OpenHistoryQrCode(HistoryQrCodeId) {
      this.ViewModalHistory = true;

      this.ViewModalHistory = this.qrCodes.find(
        (HistoryQrCode) => HistoryQrCode.id === HistoryQrCodeId
      );

      document.getElementById("BarBottom").style.display = "none";
    },
    closeModalHistory() {
      this.ViewModalHistory = false;
      console.log("nsid");
    },
  },
};
</script>

<style lang="scss" scoped>
#setionHistory {
  background: #303030;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;

  &:hover {
    background-color: #fdb623;
    box-shadow: 0px 0px 0px 0px;
    p {
      color: #262626;
    }

    #logo {
      background-image: url("@/assets/img/logoLight.svg");
    }
    #btnDelete {
      background-image: url("@/assets/img/iconBinDark.svg");
    }
  }
}

#selectHistory {
  background: #2f2f2f;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;
}
</style>
