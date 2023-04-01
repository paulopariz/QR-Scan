<template>
  <div class="bg-neutral-800 h-screen w-screen">
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
