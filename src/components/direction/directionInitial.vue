<template>
  <div
    class="w-screen h-screen absolute z-[2000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-md"
  >
    <div
      class="px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center gap-6"
    >
      <img src="@/assets/img/Hi.gif" alt="Hi" class="w-14" />
      <h1 class="text-center text-2xl text-white tracking-wide">
        Olá! Seja bem-vindo(a)!
      </h1>

      <p class="text-white-2 text-center text-sm tracking-wide">
        É um prazer recebê-lo(a) aqui pela primeira vez. Permita-me orientá-lo(a) para que
        possa aproveitar ao máximo sua visita.
      </p>
      <button
        @click="redirect"
        class="bg-dark text-light px-10 py-1.5 rounded-lg text-center font-bold uppercase hover:scale-95 transition-all"
      >
        Ok
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["redirect"],
};
</script>

<style></style>
