<template>
  <div class="">
    <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoaded"
      :video-constraints="{ aspectRatio: 16 / 9 }"
      :capture-image="true"
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
