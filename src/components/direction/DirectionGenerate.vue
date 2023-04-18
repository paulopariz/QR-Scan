<template>
  <div
    class="w-screen h-screen fixed z-[2000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-md"
  >
    <div
      class="px-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center gap-6"
    >
      <h1 class="text-center text-2xl text-white tracking-wide">
        Gere seu própio QR-Code
      </h1>

      <p class="text-white-2 text-center text-sm tracking-wide">
        Clique em uma das opções abaixo e gere seu QR code! Mas lembre-se de digitar
        corretamente o seu nome de usuário, URL ou número, para evitar qualquer erro.
      </p>

      <button
        @click="redirectGenerate"
        class="bg-dark text-light px-10 py-1.5 rounded-lg text-center font-bold hover:scale-95 transition-all"
      >
        Ok, Vamos lá!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["redirectGenerate"],
};
</script>

<style></style>
