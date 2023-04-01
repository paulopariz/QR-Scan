<template>
  <div class="">
    <div
      class="fixed z-40 w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40"
    >
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <StreamBarcodeReader
          @decode="onDecode"
          @loaded="onLoaded"
          class=""
        ></StreamBarcodeReader>
      </div>
    </div>
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
