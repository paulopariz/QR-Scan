<template>
  <div
    id="fundoModal"
    class="fixed w-screen h-screen bg-dark/90 z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center m-auto"
  >
    <section
      id="modal"
      class="bg-[#333333] h-96 w-11/12 z-40 rounded-lg drop-shadow-2xl shadow-lg max-mn:w-5/6 md:w-3/4 md:h-[520px]"
    >
      <button
        id="buttonClose"
        @click="$emit('close')"
        class="p-2 float-right bg-dark border border-white-2/5 transition-all rounded-md -mt-2.5 -mr-2.5 drop-shadow-2xl shadow-lg focus:shadow-none focus:drop-shadow-none hover:shadow-none hover:drop-shadow-none"
      >
        <img src="@/assets/img/iconClose.svg" alt="Close" />
      </button>

      <div>
        <img
          :src="imgQrCode"
          id="imgQrCode"
          alt="Qr-Code"
          class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 rounded-md border-light bg-white md:w-48 md:h-48"
        />
      </div>
      <div
        class="w-11/12 m-auto rounded-lg border-2 border-transparent px-5 py-2 absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-5"
      >
        <p
          class="w-full text-lg text-center text-white-2/80 tracking-wide select-none whitespace-nowrap overflow-auto py-0.5 transition-all md:text-xl"
        >
          {{ contentQrcode }}
        </p>

        <div class="flex justify-center items-center gap-6">
          <div class="flex flex-col gap-2 items-center">
            <a
              :href="contentQrcode"
              target="_blank"
              class="rounded-md h-14 w-16 flex items-center justify-center transition-all hover:scale-95 active:scale-95 border border-white-2/5 cursor-pointer"
            >
              <img
                src="@/assets/img/iconAccess.svg"
                class="flex items-center justify-center w-5"
                alt="Copy"
              />
            </a>

            <span class="text-sm text-white-2 tracking-wide">Acessar</span>
          </div>

          <div class="flex flex-col gap-2 items-center">
            <button
              @click="download"
              :disabled="disabled"
              id="downloadBtnHistory"
              class="rounded-md h-14 w-16 flex items-center justify-center transition-all hover:scale-95 active:scale-95 border border-white-2/5 cursor-pointer"
            >
              <img
                src="@/assets/img/iconDownload.svg"
                class="flex items-center justify-center w-6"
                :class="{ download: downloadText === 'Baixando...' }"
                alt="Copy"
              />
            </button>
            <span class="text-sm text-white-2 tracking-wide"> {{ downloadText }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    imgQrCode: {
      type: String,
      required: true,
    },
    contentQrcode: {
      type: String,
    },
    closeModalHistory: {
      type: Function,
    },

    methods: {
      closeModalHistory() {
        this.closeModalHistory();
      },
    },
  },

  data() {
    return {
      imgDownload: "",
      downloadText: "Baixar",

      disabled: false,
    };
  },

  methods: {
    download() {
      this.disabled = true;
      this.downloadText = "Baixando...";

      setTimeout(() => {
        this.downloadText = "Concluído!";
        document.getElementById("downloadBtnHistory").style.opacity = 0.4;

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
        this.downloadText = "Baixar";
        document.getElementById("downloadBtnHistory").style.opacity = 1;
      }, 8000);
    },
  },
};
</script>

<style scoped lang="scss">
#modal {
  animation: modal 0.5s both;

  #buttonClose {
    &:focus {
      margin-top: 0;
      margin-right: 0;
      background: transparent;
      border-color: transparent;
    }
    &:hover {
      margin-top: 0;
      margin-right: 0;
      background: transparent;
      border-color: transparent;
    }
  }
  a,
  #downloadBtnHistory {
    background: #303030;
    box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;
  }
}

@keyframes modal {
  0% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

#fundoModal {
  animation: fundoModal 0.2s both;
  backdrop-filter: blur(1.2px);
}

@keyframes fundoModal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
