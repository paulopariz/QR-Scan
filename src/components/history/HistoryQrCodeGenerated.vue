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
            @click="OpenHistoryQrCodeModal(HistoryQrCode)"
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

            <div v-show="HistoryQrCode.ViewModalHistory">
              <ModalHistoryQrcode
                @close="closeModal(HistoryQrCode)"
                :imgQrCode="HistoryQrCode.qrCode"
                :xxx="HistoryQrCode.qrCodeGeneratedContent"
              />

              <!-- <div
                id="fundoModal"
                class="fixed w-screen h-screen bg-dark/90 z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center m-auto"
              >
                <section
                  id="modal"
                  class="bg-[#333333] h-3/5 w-11/12 z-40 rounded-lg drop-shadow-2xl shadow-lg"
                >
                  <button
                    @click="closeModalHistory(HistoryQrCode)"
                    class="p-2 float-right bg-dark border border-white-2/5 transition-all rounded-md -mt-2.5 -mr-2.5 drop-shadow-2xl shadow-lg focus:mt-0 focus:mr-0 focus:bg-transparent focus:border-transparent focus:shadow-none focus:drop-shadow-none"
                  >
                    <img src="@/assets/img/iconClose.svg" alt="Close" />
                  </button>

                  <div>
                    <img
                      :src="HistoryQrCode.qrCode"
                      alt="Qr-Code"
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 rounded-md border-light bg-white"
                    />

                    <h1 class="text-white mt-5">
                      {{ HistoryQrCode.qrCodeGeneratedContent }}
                    </h1>
                  </div>
                </section>
              </div> -->
            </div>
          </section>

          <!--MODAL-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalHistoryQrcode from "./ModalHistoryQrcode.vue";

export default {
  data() {
    return {
      qrCodes: [],
      selectHistory: true,
      ViewModalHistory: false,
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
    OpenHistoryQrCodeModal(HistoryQrCode) {
      document.body.style.overflow = "hidden";
      document.getElementById("BarBottom").style.bottom = "-150px";
      setTimeout(() => {
        HistoryQrCode.ViewModalHistory = true;
      }, 250);
    },
    closeModal(HistoryQrCode) {
      setTimeout(() => {
        document.body.style.overflow = "auto";
        HistoryQrCode.ViewModalHistory = false;
      }, 500);
      setTimeout(() => {
        document.getElementById("BarBottom").style.bottom = "0px";
      }, 800);
    },
  },
  components: { ModalHistoryQrcode },
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
