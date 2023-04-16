<template>
  <div class="h-screen w-screen animate__animated animate__fadeIn">
    <qrCodeScan />
  </div>
</template>

<script>
import qrCodeScan from "@/components/qrCodeScan.vue";

export default {
  components: { qrCodeScan },
};
</script>

<style></style>
