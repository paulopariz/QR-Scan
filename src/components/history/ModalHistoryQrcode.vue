<template>
  <div
    id="fundoModal"
    class="fixed w-screen h-screen bg-dark/90 z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center m-auto"
  >
    <section
      id="modal"
      class="bg-[#333333] h-3/5 w-11/12 z-40 rounded-lg drop-shadow-2xl shadow-lg"
    >
      <button
        @click="$emit('close')"
        class="p-2 float-right bg-dark border border-white-2/5 transition-all rounded-md -mt-2.5 -mr-2.5 drop-shadow-2xl shadow-lg focus:shadow-none focus:drop-shadow-none hover:shadow-none hover:drop-shadow-none"
      >
        <img src="@/assets/img/iconClose.svg" alt="Close" />
      </button>

      <div>
        <img
          :src="imgQrCode"
          alt="Qr-Code"
          class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 rounded-md border-light bg-white"
        />
      </div>
      <div
        class="w-11/12 m-auto rounded-lg border-2 border-transparent px-5 py-2 absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-5"
      >
        <p
          class="w-full text-lg text-center text-white-2/80 tracking-wide select-none whitespace-nowrap overflow-auto py-0.5 transition-all"
        >
          {{ contentQrcode }}
        </p>

        <div class="flex flex-col gap-2 items-center">
          <a
            :href="contentQrcode"
            target="_blank"
            class="rounded-md px-5 py-4 transition-all hover:scale-95 active:scale-95 border border-white-2/5 cursor-pointer"
          >
            <img
              src="@/assets/img/iconAccess.svg"
              class="flex items-center justify-center"
              alt="Copy"
            />
          </a>

          <span class="text-sm text-white-2 tracking-wide">Acessar</span>
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
};
</script>

<style scoped lang="scss">
#modal {
  animation: modal 0.5s both;

  button {
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
  a {
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
