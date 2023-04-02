<template>
  <div class="">
    <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoaded"
      class=""
    ></StreamBarcodeReader>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: {
    StreamBarcodeReader,
  },
  methods: {
    onDecode(text) {
      console.log(`Decode text from QR code is ${text}`);
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

.scanner-container {
  height: 100vh;
  width: 100vh;
}
</style>
