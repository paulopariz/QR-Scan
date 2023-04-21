<template>
  <div
    class="w-screen h-screen fixed z-[2000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md"
  >
    <div
      class="px-3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center gap-6"
    >
      <h1 class="text-center text-2xl text-white tracking-wide sm:text-3xl">
        {{ title }}
      </h1>

      <p class="text-white-2 text-center text-sm tracking-wide sm:text-lg md:w-3/4">
        {{ desc }}
      </p>

      <button
        @click="redirectGenerateHistory"
        class="bg-dark text-light px-10 py-2 rounded-lg text-center font-bold hover:scale-95 transition-all"
      >
        Ok, Vamos lá!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["redirectGenerateHistory", "title", "desc"],
};
</script>

<style></style>
