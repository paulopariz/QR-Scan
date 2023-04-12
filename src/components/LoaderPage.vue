<template>
  <div>
    <div v-show="Loader">
      <div
        class="h-screen w-screen bg-light fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div class="fixed top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="../assets/img/logoLight.svg" class="select-none" alt="Logo" />
        </div>

        <SectionStart
          :startClick="start"
          startText="Iniciar"
          :contentBtn="contentBtn"
          :loadingBtn="loadingBtn"
        />
      </div>
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

      loadingBtn: false,
      contentBtn: true,
    };
  },
  methods: {
    start() {
      this.loadingBtn = true;
      this.contentBtn = false;

      navigator.vibrate([50]);

      setTimeout(() => {
        // this.$router.push("/");
        document.getElementById("BarBottom").style.display = "block";
        this.Loader = false;
      }, 2000);
    },
  },
};
</script>

<style>
.click button {
  background: red;
}
</style>
