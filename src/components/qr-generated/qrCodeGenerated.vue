<template>
  <div>
    <div
      class="w-5/6 drop-shadow-2xl shadow-lg fixed z-50 top-[17%] left-1/2 -translate-x-1/2 bg-dark rounded-lg border-2 border-transparent px-5 py-3 flex flex-col md:w-1/2 sm:py-6 sm:w-3/4"
    >
      <p
        class="w-full text-base text-white-2 tracking-wide select-none whitespace-nowrap overflow-auto py-0.5 transition-all sm:text-xl"
        id="textCopy"
      >
        {{ qrCodeGeneratedContet }}
      </p>
      <span class="text-white-2/50 text-sm sm:text-base">{{ date }}</span>
    </div>

    <img
      :src="qrCodeGenerated"
      alt="QR Code"
      class="w-44 h-44 fixed z-[100] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 border-4 rounded-md border-light p-1 bg-white sm:w-56 sm:h-56"
      id="imgQrCode"
    />

    <div
      class="fixed z-50 top-2/3 left-1/2 -translate-x-1/2 flex items-center justify-center gap-10"
    >
      <div class="flex items-center gap-6">
        <div class="flex flex-col gap-2 items-center">
          <button
            @click="download"
            :disabled="disabled"
            id="downloadBtn"
            class="rounded-md px-5 py-4 transition-all hover:scale-95 active:scale-95 border border-white-2/5 cursor-pointer"
          >
            <img
              src="@/assets/img/iconDownload.svg"
              class="flex items-center justify-center animate__animated"
              :class="{ download: downloadText === 'Baixando...' }"
              alt="Copy"
            />
          </button>
          <span class="text-sm text-white-2 tracking-wide animate__animated">
            {{ downloadText }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: ["qrCodeGenerated", "qrCodeGeneratedContet", "showHistory", "date"],
  data() {
    return {
      imgDownload: "",
      downloadText: "Baixar QR-Code",

      disabled: false,
    };
  },

  methods: {
    download() {
      this.disabled = true;
      this.downloadText = "Baixando...";

      setTimeout(() => {
        this.downloadText = "Concluído!";
        document.getElementById("downloadBtn").style.opacity = 0.4;

        const imgSrc = document.getElementById("imgQrCode").src;

        const link = document.createElement("a");
        link.href = imgSrc;
        link.download = "image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 5000);

      setTimeout(() => {
        this.disabled = false;
        this.downloadText = "Baixar QR-Code";
        document.getElementById("downloadBtn").style.opacity = 1;
      }, 8000);
    },
  },
};
</script>

<style scoped>
button,
a {
  background: #303030;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;
}

.download {
  -webkit-animation: pulsate-bck 1.2s ease-in-out infinite both;
  animation: pulsate-bck 1.2s ease-in-out infinite both;
}

@-webkit-keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
