<template>
  <div
    id="fundoModal"
    class="fixed w-screen h-screen bg-dark/80 z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center m-auto"
  >
    <section
      id="modal"
      class="bg-[#333333] h-3/5 w-11/12 z-40 rounded-lg drop-shadow-2xl shadow-lg"
    >
      <button @click="closeModalHistory" class="p-2">fechar</button>
    </section>
  </div>
</template>

<script>
export default {
  props: ["closeModalHistory"],
};
</script>

<style scoped>
#modal {
  animation: modal 0.5s both;
}

@keyframes modal {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
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
