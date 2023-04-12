<template>
  <div class="flex items-center justify-between">
    <div v-if="qrCodes.length" class="">
      <ul>
        <li v-for="(code, index) in qrCodes" :key="index">
          <img :src="code.qrCode" alt="QR Code" />
          <p>{{ code.qrCodeGeneratedContent }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qrCodes: [],
    };
  },

  mounted() {
    const qrCodes = localStorage.getItem("qrCodeHistory");
    if (qrCodes) {
      this.qrCodes = JSON.parse(qrCodes);
    }
  },
};
</script>

<style></style>
