<template>
  <div class="px-10 py-6 pb-32 m-auto">
    <nav class="flex items-center gap-6">
      <h1 class="text-xl text-white-2 font-semibold tracking-wider select-none">
        Histórico
      </h1>
    </nav>

    <div class="mt-14">
      <div v-if="qrCodes.length" class="flex flex-col justify-center gap-8">
        <section v-for="(HistoryQrCode, index) in qrCodes" :key="index">
          <div
            class="rounded-lg border-2 border-transparent px-5 py-3 flex justify-between"
            id="setionHistory"
          >
            <div class="flex items-center gap-3 overflow-hidden w-full">
              <img src="@/assets/img/logoDark.svg" alt="logo" class="w-10 h-10" />
              <p
                class="w-2/3 text-base text-white-2 tracking-wide whitespace-nowrap overflow-auto select-none py-0.5 transition-all"
                id="contentQrCode"
              >
                {{ HistoryQrCode.qrCodeGeneratedContent }}
              </p>
            </div>
            <button class="">
              <img src="@/assets/img/iconBin.svg" alt="iconBin" class="m-auto" />
            </button>
          </div>
        </section>
      </div>
    </div>

    <!-- <div v-if="qrCodes.length" class="">
      <ul>
        <li v-for="(code, index) in qrCodes" :key="index">
          <img :src="code.qrCode" alt="QR Code" />
          <p>{{ code.qrCodeGeneratedContent }}</p>
        </li>
      </ul>
    </div> -->
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

<style scoped>
#setionHistory {
  background: #303030;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;
}
</style>
