<template>
  <div>
    <IconLoading
      v-show="loading"
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />

    <div v-show="Loader">
      <div class="h-screen w-screen bg-light animate__animated animate__fadeIn fixed">
        <div class="fixed top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="../assets/img/logoLight.svg" class="select-none" alt="Logo" />
        </div>
        <SectionStart :startClick="start" startText="Iniciar" />
      </div>
    </div>
  </div>
</template>

<script>
import IconLoading from "./iconLoading.vue";
import SectionStart from "./SectionStart.vue";
export default {
  components: { SectionStart, IconLoading },

  data() {
    return {
      Loader: false,
      loading: true,
    };
  },
  methods: {
    start() {
      navigator.vibrate([50]);

      document.getElementById("btnStart").style.opacity = "0.9";

      setTimeout(() => {
        this.Loader = false;
        document.getElementById("BarBottom").style.display = "block";
      }, 2000);
    },
  },

  created() {
    setTimeout(() => {
      this.loading = false;
      this.Loader = true;
    }, 4000);
  },
};
</script>

<style></style>
