<template>
  <div>
    <div v-show="ShowRedirectHistory">
      <DirectionGenerateHistory
        :redirectGenerateHistory="redirectGenerateHistory"
        title="Aqui é o seu histórico!"
        desc="Aqui está o seu histórico completo de QR codes gerados e escaneados. Você pode clicar encima de um qr-code e ver com mais detalhes e também pode optar por excluí-los. Se preferir, você pode selecionar os que deseja remover individualmente ou excluir todo o histórico de uma vez."
        class="animate__animated animate__fadeIn"
        :class="{ animate__fadeOut: fadeOut }"
      />
    </div>

    <header
      id="header"
      class="fixed bg-[#333333] w-screen z-10 px-10 pt-6 pb-2 m-auto max-mn:px-3"
    >
      <nav class="flex items-center justify-between">
        <h1 class="text-xl text-white-2 font-semibold tracking-wider select-none">
          Histórico
        </h1>

        <BtnConfigs />

        <AlertQR id="alertHistory" v-show="alert" msg="Excluído com sucesso!" />
      </nav>

      <div
        v-show="selectHistory"
        class="animate__animated animate__fadeIn m-auto md:w-3/4 lg:w-1/2"
      >
        <div class="grid grid-cols-2 mt-6 p-2 rounded-lg" id="selectHistory">
          <div class="w-full">
            <input type="radio" name="option" id="1" class="peer hidden" checked />
            <label
              @click="openHistoryScan"
              for="1"
              class="block cursor-pointer rounded-lg select-none p-2 text-center text-white-2 peer-checked:bg-light peer-checked:font-bold peer-checked:text-dark md:py-5"
              >Scan</label
            >
          </div>

          <div class="w-full">
            <input type="radio" name="option" id="2" class="peer hidden" />
            <label
              @click="openHistoryGenerated"
              for="2"
              class="block cursor-pointer rounded-lg select-none p-2 text-center text-white-2 peer-checked:bg-light peer-checked:font-bold peer-checked:text-dark md:py-5"
              >Gerados</label
            >
          </div>
        </div>
        <div class="float-right px-1 mt-3 md:mt-5" v-if="qrCodes.length > 0">
          <div v-show="clearHistoryRead">
            <button
              class="text-light tracking-wide text-sm underline decoration-2 md:text-base"
              @click="deleteHistoryRead()"
            >
              Limpar Histórico
            </button>
          </div>

          <div v-show="clearHistoryGenerate">
            <button
              class="text-light tracking-wide text-sm underline decoration-2 md:text-base"
              @click="deleteHistoryGenerate()"
            >
              Limpar Histórico
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="px-10 py-6 pb-36 m-auto max-mn:px-3">
      <div class="mt-44 md:mt-60">
        <div
          id="historyClear"
          class="hidden fixed z-40 -mt-5 left-1/2 -translate-x-1/2 h-[1px] w-full bg-[#333333] border border-light border-x-0 border-t-0 transition-all"
        ></div>

        <div
          v-if="(qrCodes.length < 1) & (this.ShowRedirectHistory === false)"
          class="flex items-center justify-center gap-2 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate__animated animate__fadeIn"
        >
          <h1 class="text-white-2 text-lg tracking-wide">
            {{ textHistoryEmpty }}
          </h1>
          <img src="@/assets/img/iconHistory.svg" alt="history" class="w-5" />
        </div>

        <div v-if="qrCodes.length" class="flex flex-col justify-center gap-5">
          <section v-for="(HistoryQrCode, index) in qrCodes" :key="HistoryQrCode.id">
            <div
              class="rounded-lg m-auto border-2 border-transparent border-x-0 border-t-0 border-r-0 flex justify-between items-center cursor-pointer transition-all md:w-3/4 lg:w-1/2"
              id="setionHistory"
            >
              <div
                class="flex items-center gap-3 overflow-hidden w-full py-3 pl-5 md:py-5"
                @click="OpenHistoryQrCodeModal(HistoryQrCode)"
              >
                <div>
                  <div
                    id="logo"
                    class="w-9 h-9 bg-[url('@/assets/img/logoDark.svg')] bg-cover bg-center bg-no-repeat transition-all md:w-12 md:h-12"
                  ></div>
                </div>

                <div class="flex flex-col w-full">
                  <p
                    class="w-2/3 text-base text-white-2 tracking-wide whitespace-nowrap overflow-auto select-none py-0.5 transition-all md:text-lg"
                    id="contentQrCode"
                  >
                    {{ HistoryQrCode.qrCodeGeneratedContent }}
                  </p>

                  <span class="text-white-2/50 text-xs transition-all md:text-sm">
                    {{ HistoryQrCode.date }}
                  </span>
                </div>
              </div>

              <!--BOTÃO DE DELETAR QRCODE LIDO-->
              <div v-show="showBtnDeleteRead">
                <button
                  @click="deleteQrcodeRead(index)"
                  class="m-auto flex items-center justify-center py-5 pl-3 pr-5"
                >
                  <div
                    id="btnDelete"
                    class="bg-[url('@/assets/img/iconBin.svg')] bg-cover bg-no-repeat bg-center h-[18px] w-[14px] m-auto transition-all md:h-5 md:w-4"
                  ></div>
                </button>
              </div>

              <!--BOTÃO DE DELETAR QRCODE GERADO-->
              <div v-show="showBtnDeleteGenerated">
                <button
                  @click="deleteQrcodeGeneratad(index)"
                  class="m-auto flex items-center justify-center py-5 pl-3 pr-5"
                >
                  <div
                    id="btnDelete"
                    class="bg-[url('@/assets/img/iconBin.svg')] bg-cover bg-no-repeat bg-center h-[18px] w-[14px] m-auto transition-all md:h-5 md:w-4"
                  ></div>
                </button>
              </div>
            </div>

            <!--MODAL-->

            <div v-show="HistoryQrCode.ViewModalHistory">
              <ModalHistoryQrcode
                @close="closeModal(HistoryQrCode)"
                :imgQrCode="HistoryQrCode.qrCode"
                :contentQrcode="HistoryQrCode.qrCodeGeneratedContent"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnConfigs from "../BtnConfigs.vue";
import DirectionGenerateHistory from "../direction/DirectionGenerate&History.vue";
import AlertQR from "./AlertQR.vue";
import ModalHistoryQrcode from "./ModalHistoryQrcode.vue";

export default {
  data() {
    return {
      qrCodes: [],
      selectHistory: true,
      ViewModalHistory: false,

      showBtnDeleteRead: true,
      showBtnDeleteGenerated: false,
      alert: false,

      clearHistoryRead: true,
      clearHistoryGenerate: false,

      //
      ShowRedirectHistory: true,
      fadeOut: false,

      textHistoryEmpty: "Histórico Scan vazio",
    };
  },

  mounted() {
    const qrCodes = localStorage.getItem("qrCodeHistoryRead");
    if (qrCodes) {
      this.qrCodes = JSON.parse(qrCodes);
    }

    //

    const localStorageContent = localStorage.getItem("ShowRedirectHistory");
    if (localStorageContent === "false") {
      this.ShowRedirectHistory = false;
    }

    //

    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 350) {
        this.selectHistory = false;
        document.getElementById("header").style.paddingBottom = "24px";
      } else {
        document.getElementById("header").style.paddingBottom = "8px";
        this.selectHistory = true;
      }
    },

    redirectGenerateHistory() {
      this.fadeOut = true;

      setTimeout(() => {
        this.ShowRedirectHistory = false;
        localStorage.setItem("ShowRedirectHistory", this.ShowRedirectHistory);
      }, 1000);
    },

    openHistoryGenerated() {
      this.textHistoryEmpty = "Histórico Gerados vazio";

      this.showBtnDeleteGenerated = true;
      this.showBtnDeleteRead = false;

      this.clearHistoryRead = false;
      this.clearHistoryGenerate = true;

      const qrCodesGenerate = localStorage.getItem("qrCodeHistoryGenerate");
      if (qrCodesGenerate) {
        this.qrCodes = JSON.parse(qrCodesGenerate);
      } else {
        this.qrCodes = [];
      }
    },

    openHistoryScan() {
      this.showBtnDeleteGenerated = false;
      this.showBtnDeleteRead = true;

      this.textHistoryEmpty = "Histórico Scan vazio";

      this.clearHistoryRead = true;
      this.clearHistoryGenerate = false;

      const qrCodes = localStorage.getItem("qrCodeHistoryRead");
      if (qrCodes) {
        this.qrCodes = JSON.parse(qrCodes);
      } else {
        this.qrCodes = [];
      }
    },

    /////

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

    /// BOTOES DE DELETAR 1 ITEM DI HISTORICO-->
    deleteQrcodeRead(index) {
      if (this.qrCodes) {
        this.qrCodes.splice(index, 1);
        localStorage.setItem("qrCodeHistoryRead", JSON.stringify(this.qrCodes));
      }
      this.alert = true;
      setTimeout(() => {
        document.getElementById("alertHistory").style.right = "4px";
      }, 200);

      setTimeout(() => {
        document.getElementById("alertHistory").style.right = "-75%";
      }, 2000);

      setTimeout(() => {
        this.alert = false;
      }, 2300);
    },
    deleteQrcodeGeneratad(index) {
      if (this.qrCodes) {
        this.qrCodes.splice(index, 1);
        localStorage.setItem("qrCodeHistoryGenerate", JSON.stringify(this.qrCodes));
      }
      this.alert = true;
      setTimeout(() => {
        document.getElementById("alertHistory").style.right = "4px";
      }, 200);

      setTimeout(() => {
        document.getElementById("alertHistory").style.right = "-75%";
      }, 2000);

      setTimeout(() => {
        this.alert = false;
      }, 2300);
    },

    ///DELETE HISTORY ALL

    deleteHistoryRead() {
      document.getElementById("historyClear").style.display = "block";
      document.getElementById("BarBottom").style.bottom = "-150px";

      setTimeout(() => {
        localStorage.removeItem("qrCodeHistoryRead");
        this.qrCodes = [];
        document.getElementById("historyClear").style.display = "none";
        document.getElementById("BarBottom").style.bottom = "0";
      }, 2000);
    },

    deleteHistoryGenerate() {
      document.getElementById("historyClear").style.display = "block";
      document.getElementById("BarBottom").style.bottom = "-150px";

      setTimeout(() => {
        localStorage.removeItem("qrCodeHistoryGenerate");
        this.qrCodes = [];
        document.getElementById("historyClear").style.display = "none";
        document.getElementById("BarBottom").style.bottom = "0";
      }, 2000);
    },
  },
  components: { ModalHistoryQrcode, DirectionGenerateHistory, AlertQR, BtnConfigs },
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
    span {
      color: #262626d1;
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

#historyClear {
  animation: historyClear 1.7s both;
}

@keyframes historyClear {
  0% {
  }
  100% {
    height: 100vh;
    width: 100vh;
  }
}
</style>
