<template>
  <section>
    <div class="px-10 py-6 m-auto max-mn:px-3" v-if="this.ShowScan === false">
      <BtnConfigs class="float-right" />
    </div>
    <div class="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
      <!--BOTÃO DE ATIVAR SCAN!-->

      <DirectionBtnScan
        v-show="ShowRedirectBtnScan"
        class="animate__animated animate__fadeIn"
        :class="{ animate__fadeOut: fadeOut }"
      />

      <div
        class="absolute z-[30000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto w-screen"
      >
        <button
          @click="openScan"
          class="absolute z-[30000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-9 py-2 rounded-lg text-white-2 border border-white-2/5 transition-all hover:scale-95 active:scale-95"
          id="button"
          :class="{ hidden: ShowScan === true }"
        >
          Abrir Scan
        </button>
      </div>

      <StreamBarcodeReader
        v-if="ShowScan"
        @decode="onDecode"
        @loaded="onLoaded"
        class="max-md:w-screen max-md:scale-150 scale-125"
      />
    </div>

    <div v-show="ShowQrCodeRead" id="ShowQrCodeRead">
      <BackgroundForModals :closeModal="closeModal" title="Resultado" />
      <QrCodeRead
        :link="textToCopy"
        :clickCopy="copy"
        :copyTextBtn="copyTextBtn"
        :date="currentDateTime"
        :qrCode="qrCode"
      />
    </div>
  </section>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import moment from "moment";

import BackgroundForModals from "./BackgroundForModals.vue";
import QrCodeRead from "./read-qr/QrCodeRead.vue";

import qrcode from "qrcode";
import DirectionBtnScan from "./direction/DirectionBtnScan.vue";
import BtnConfigs from "./BtnConfigs.vue";

export default {
  components: {
    StreamBarcodeReader,
    BackgroundForModals,
    QrCodeRead,
    DirectionBtnScan,
    BtnConfigs,
  },

  data() {
    return {
      fadeOut: false,

      currentDateTime: "",

      ShowQrCodeRead: false,
      ShowScan: false,

      textToCopy: "",
      copyTextBtn: "Copiar",

      //history
      qrCode: "",
      qrCodes: [],

      //direction
      ShowRedirectBtnScan: true,
    };
  },

  mounted() {
    if (this.ShowRedirectBtnScan === true) {
      document.getElementById("button").style.boxShadow = "none";
    }

    const localStorageContent = localStorage.getItem("ShowRedirectBtnScan");
    if (localStorageContent === "false") {
      document.getElementById("button").style.boxShadow =
        "8px 8px 16px #2a2a2a, -8px -8px 16px #383838";

      document.getElementById("button").style.background = "#303030";
      this.ShowRedirectBtnScan = false;
    }
  },

  methods: {
    openScan() {
      this.fadeOut = true;
      document.getElementById("BarBottom").style.zIndex = 400;

      setTimeout(() => {
        this.ShowRedirectBtnScan = false;
        localStorage.setItem("ShowRedirectBtnScan", this.ShowRedirectBtnScan);

        this.ShowScan = true;
      }, 600);
    },

    async onDecode(contentQrCode) {
      document.getElementById("BarBottom").style.display = "none";

      const localStorageVibrate = localStorage.getItem("Vibrate");

      if (localStorageVibrate === "true" && "vibrate" in navigator) {
        navigator.vibrate([200]);
      }

      this.ShowScan = false;
      this.ShowQrCodeRead = true;
      this.textToCopy = contentQrCode;
      this.currentDateTime = moment().locale("pt-br").format("D MMM YYYY, h:mm a");

      if (this.textToCopy == "") {
        this.textToCopy = "Sem conteúdo!";
      }

      // add in history
      try {
        const url = await qrcode.toDataURL(contentQrCode);
        this.qrCode = url;
        this.qrCodes.push({
          qrCode: url,
          qrCodeGeneratedContent: contentQrCode,
          date: this.currentDateTime,
        });
        localStorage.setItem("qrCodeHistoryRead", JSON.stringify(this.qrCodes));
      } catch (error) {
        console.error(error);
      }
    },

    async saveQrCodeRead() {},

    onLoaded() {
      console.log(`Ready to start scanning barcodes`);
    },

    closeModal() {
      document.getElementById("BarBottom").style.display = "block";

      this.ShowScan = true;
      this.ShowQrCodeRead = false;

      const localStorageVibrate = localStorage.getItem("Vibrate");

      if (localStorageVibrate === "true" && "vibrate" in navigator) {
        navigator.vibrate([50]);
      }
    },

    async copy() {
      try {
        await navigator.clipboard.writeText(this.textToCopy);
        this.copyTextBtn = "Copiado!";

        document.getElementById("iconCheck").style.display = "block";
        document.getElementById("iconError").style.display = "none";
        document.getElementById("textCopy").style.color = "white";

        setTimeout(() => {
          this.copyTextBtn = "Copiar";

          document.getElementById("iconError").style.display = "none";
          document.getElementById("iconCheck").style.display = "none";
          document.getElementById("textCopy").style.color = "#D9D9D9";
        }, 3000);
      } catch (err) {
        this.copyTextBtn = "Erro!";

        document.getElementById("iconCheck").style.display = "none";
        document.getElementById("iconError").style.display = "block";

        setTimeout(() => {
          this.copyTextBtn = "Copiar";

          document.getElementById("iconCheck").style.display = "none";
          document.getElementById("iconError").style.display = "none";
        });
        console.error(err);
      }
    },
  },
};
</script>

<style>
.laser {
  background-color: #fdb623 !important;
  box-shadow: 0 0 4px #fdb623 !important;
}

video {
  height: 10px;
}

#button {
  background: #303030;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;
}
</style>
