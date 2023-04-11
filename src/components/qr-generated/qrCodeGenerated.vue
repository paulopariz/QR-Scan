<template>
  <div>
    <div
      class="w-5/6 drop-shadow-2xl shadow-lg absolute z-50 top-[17%] left-1/2 -translate-x-1/2 bg-dark rounded-lg border-2 border-transparent px-5 py-3"
    >
      <h1 class="text-lg tracking-wide text-white-2 font-semibold">
        Conteúdo do Qr-Code
      </h1>

      <p
        class="w-full text-base text-white-2/80 tracking-wide select-none whitespace-nowrap overflow-auto py-0.5 transition-all"
        id="textCopy"
      >
        {{ qrCodeGenerated }}
      </p>
    </div>

    <qr-code
      id="imgQrCode"
      :text="qrCodeGenerated"
      :size="140"
      bg-color="#D9D9D9"
      class="absolute z-[100] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 border-4 rounded-md border-light p-4 bg-white-2"
      error-level="H"
    ></qr-code>

    <div
      class="absolute z-50 top-2/3 left-1/2 -translate-x-1/2 flex items-center justify-center gap-10"
    >
      <div class="flex flex-col gap-2 items-center">
        <button
          id="downloadBtn"
          @click="download"
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
</template>

<script>
//  import { saveAs } from "file-saver";

export default {
  components: {},

  props: ["qrCodeGenerated"],
  data() {
    return {
      imgDownload: "",
      downloadText: "Baixar QR-Code",
    };
  },

  methods: {
    download() {
      document.getElementById("downloadBtn").disabled = true;
      this.downloadText = "Baixando...";

      setTimeout(() => {
        this.downloadText = "Concluído!";
        document.getElementById("downloadBtn").style.opacity = 0.4;

        const imgSrc = document
          .getElementById("imgQrCode")
          .querySelector("div > div > div > img").src;
        fetch(imgSrc)
          .then((res) => res.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "QR-Code.png");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
      }, 5000);

      setTimeout(() => {
        document.getElementById("downloadBtn").disabled = false;
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
