<template>
  <section>
    <div class="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
      <div v-show="ShowScan">
        <StreamBarcodeReader
          @decode="onDecode"
          @loaded="onLoaded"
          class="w-screen scale-150"
        ></StreamBarcodeReader>
      </div>
    </div>

    <div v-show="ShowQrCodeRead">
      <BackgroundForModals :closeModal="closeModal" title="Resultado" />
      <QrCodeRead :link="linkQrCode" :clickCopy="copy" :copyTextBtn="copyTextBtn" />
    </div>
  </section>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

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
      ShowScan: false,
      ShowQrCodeRead: true,
      linkQrCode: "",

      textToCopy: "https://github.io",
      copyTextBtn: "Copiar",
    };
  },
  methods: {
    onDecode(text) {
      console.log(`Decode text from QR code is ${text}`);
      this.ShowQrCodeRead = true;
      this.ShowScan = false;
      this.linkQrCode = text;
    },
    onLoaded() {
      console.log(`Ready to start scanning barcodes`);
    },

    closeModal() {
      this.ShowQrCodeRead = false;
      this.ShowScan = true;
    },

    async copy() {
      try {
        await navigator.clipboard.writeText(this.textToCopy);
        this.copyTextBtn = "Copiado!";

        document.getElementById("iconCheck").style.display = "block";
        document.getElementById("iconError").style.display = "none";
      } catch (err) {
        this.copyTextBtn = "Erro!";

        document.getElementById("iconCheck").style.display = "none";
        document.getElementById("iconError").style.display = "block";
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
