<template>
  <div v-show="Loader">
    <div class="h-screen w-screen bg-light">
      <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src="../assets/img/logoLight.svg" class="select-none" alt="Logo" />
      </div>
      <SectionStart :startClick="start" startText="Iniciar" />
    </div>
  </div>
</template>

<script>
import SectionStart from "./SectionStart.vue";
export default {
  components: { SectionStart },

  data() {
    return {
      Loader: true,
    };
  },
  methods: {
    start() {
      navigator.vibrate([50]);

      this.Loader = false;
    },
  },
};
</script>

<style></style>
