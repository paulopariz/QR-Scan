<template>
  <div>
    <header id="header" class="fixed bg-[#333333] w-screen z-10 px-10 pt-6 pb-2 m-auto">
      <nav class="flex items-center gap-6">
        <h1 class="text-xl text-white-2 font-semibold tracking-wider select-none">
          Histórico
        </h1>
      </nav>

      <div v-show="selectHistory" class="animate__animated animate__fadeIn">
        <div class="grid grid-cols-2 mt-6 p-2 rounded-lg" id="selectHistory">
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
        <div class="float-right px-1 mt-3" v-if="qrCodes.length > 0">
          <button
            class="text-light tracking-wide text-sm underline decoration-2"
            @click="deleteHistory()"
          >
            Limpar Histórico
          </button>
        </div>
      </div>
    </header>

    <div class="px-10 py-6 pb-36 m-auto">
      <div class="mt-40">
        <div
          id="historyClear"
          class="hidden fixed z-40 -mt-5 left-1/2 -translate-x-1/2 h-[1px] w-full bg-[#333333] border border-light border-x-0 border-t-0 transition-all"
        ></div>

        <div
          v-if="qrCodes.length < 1"
          class="flex items-center justify-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate__animated animate__fadeIn"
        >
          <h1 class="text-white-2 text-lg tracking-wide">Histórico vazio</h1>
          <img src="@/assets/img/iconHistory.svg" alt="history" class="w-5" />
        </div>

        <div v-if="qrCodes.length" class="flex flex-col justify-center gap-5">
          <section v-for="HistoryQrCode in qrCodes" :key="HistoryQrCode.id">
            <div
              class="rounded-lg border-2 border-transparent flex justify-between cursor-pointer transition-all"
              id="setionHistory"
            >
              <div
                class="flex items-center gap-3 overflow-hidden w-full py-3 pl-5"
                @click="OpenHistoryQrCodeModal(HistoryQrCode)"
              >
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
                @click="deleteQrcode(index)"
                class="m-auto flex items-center justify-center py-5 pl-3 pr-5"
              >
                <div
                  id="btnDelete"
                  class="bg-[url('@/assets/img/iconBin.svg')] bg-cover bg-no-repeat bg-center h-[18px] w-[14px] m-auto transition-all"
                ></div>
              </button>
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
    const qrCodes = localStorage.getItem("qrCodeHistoryGenerate");
    if (qrCodes) {
      this.qrCodes = JSON.parse(qrCodes);
    }
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 500) {
        this.selectHistory = false;
        document.getElementById("header").style.paddingBottom = "24px";
      } else {
        document.getElementById("header").style.paddingBottom = "8px";
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

    deleteQrcode(index) {
      this.qrCodes.splice(index, 1);
      localStorage.setItem("qrCodeHistoryGenerate", JSON.stringify(this.qrCodes));
    },
    deleteHistory() {
      document.getElementById("historyClear").style.display = "block";
      document.getElementById("BarBottom").style.bottom = "-150px";

      setTimeout(() => {
        localStorage.clear();
        this.qrCodes = [];
        document.getElementById("historyClear").style.display = "none";
        document.getElementById("BarBottom").style.bottom = "0";
      }, 2000);
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
