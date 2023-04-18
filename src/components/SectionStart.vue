<template>
  <div class="fixed z-40 bottom-20 w-screen">
    <div class="flex justify-center flex-col items-center gap-11 w-screen">
      <h1 class="font-normal tracking-wide w-11/12 text-center">
        Vá e aproveite nossos recursos gratuitamente e facilite sua vida conosco.
      </h1>
      <button
        @click="startClick"
        class="bg-dark border border-white-2/5 w-4/5 px-7 h-14 select-none rounded-lg transition-all active:scale-95 hover:scale-95"
      >
        <div v-show="contentBtn" class="flex items-center justify-between">
          <span class="text-transparent text-[0px]">.</span>
          <h1 class="text-white font-bold tracking-wide text-base">{{ startText }}</h1>
          <img src="@/assets/img/arrow.svg" alt="Arrow" />
        </div>

        <IconLoadingBtn
          class="flex justify-center items-center border-white-2/20 border-r-white-2"
          v-show="loadingBtn"
        />
      </button>
    </div>
  </div>
</template>

<script>
import IconLoadingBtn from "./iconLoadingBtn.vue";

export default {
  props: ["startText", "startClick", "loadingBtn", "contentBtn"],
  components: { IconLoadingBtn },

  data() {
    return {};
  },
};
</script>

<style></style>
