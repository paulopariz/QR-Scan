<template>
  <div class="fixed z-40 bottom-36 w-screen">
    <div class="flex justify-center flex-col items-center gap-11 w-screen">
      <h1 class="font-normal tracking-wide">
        Vá e aproveite nossos recursos gratuitamente e facilite sua vida conosco.
      </h1>
      <button
        @click="startClick"
        class="bg-dark flex items-center justify-between w-1/4 px-7 h-14 select-none rounded-lg transition-all hover:opacity-95"
        id="btnStart"
      >
        <span class="text-transparent text-[0px]">.</span>
        <h1 class="text-white font-bold tracking-wide text-lg">{{ startText }}</h1>
        <img src="@/assets/img/arrow.svg" alt="Arrow" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["startText", "startClick"],
};
</script>

<style></style>
