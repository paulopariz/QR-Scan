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
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 rounded-md border-light bg-white"
        />

        <h1 class="text-white mt-5">{{ xxx }}</h1>
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
    xxx: {
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
