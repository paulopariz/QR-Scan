<template>
  <section>
    <div class="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
      <div v-show="ShowScan" id="ShowScan">
        <StreamBarcodeReader
          @decode="onDecode"
          @loaded="onLoaded"
          class="w-screen scale-150"
        ></StreamBarcodeReader>
      </div>
    </div>

    <div v-show="ShowQrCodeRead" id="ShowQrCodeRead">
      <BackgroundForModals :closeModal="closeModal" title="Resultado" />
      <QrCodeRead
        :link="textToCopy"
        :clickCopy="copy"
        :copyTextBtn="copyTextBtn"
        :date="currentDateTime"
      />
    </div>
  </section>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import moment from "moment";

import BackgroundForModals from "./BackgroundForModals.vue";
import QrCodeRead from "./read-qr/QrCodeRead.vue";

export default {
  components: {
    StreamBarcodeReader,
    BackgroundForModals,
    QrCodeRead,
  },

  data() {
    return {
      currentDateTime: "",

      ShowScan: true,
      ShowQrCodeRead: false,

      textToCopy: "",
      copyTextBtn: "Copiar",
    };
  },
  methods: {
    onDecode(contentQrCode) {
      navigator.vibrate([50]);

      this.ShowQrCodeRead = true;
      this.ShowScan = false;
      this.textToCopy = contentQrCode;
      this.currentDateTime = moment().locale("pt-br").format("D MMM YYYY, h:mm a");

      if (this.textToCopy == "") {
        this.textToCopy = "Sem conteúdo!";
      }
    },
    onLoaded() {
      console.log(`Ready to start scanning barcodes`);
    },

    closeModal() {
      navigator.vibrate([50]);

      this.ShowQrCodeRead = false;
      this.ShowScan = true;
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
        navigator.vibrate([200]);

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
</style>
