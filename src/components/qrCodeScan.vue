<template>
  <div class="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
    <div v-show="ShowScan">
      <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
        class="w-screen scale-150"
      ></StreamBarcodeReader>
    </div>

    <div v-show="ShowQrCodeRead">
      <QrCodeRead />
    </div>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import QrCodeRead from "./QrCodeRead.vue";

export default {
  components: {
    StreamBarcodeReader,
    QrCodeRead,
  },

  data() {
    return {
      ShowScan: false,
      ShowQrCodeRead: true,
      linkQrCode: "",
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
