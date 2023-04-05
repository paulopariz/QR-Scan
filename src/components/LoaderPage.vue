<template>
  <div>
    <IconLoading
      v-show="loading"
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />

    <div v-show="Loader">
      <div class="h-screen w-screen bg-light fixed z-50">
        <div class="fixed top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="../assets/img/logoLight.svg" class="select-none" alt="Logo" />
        </div>

        <div v-show="sectionStart">
          <SectionStart
            :startClick="start"
            startText="Iniciar"
            class="animate__animated"
            :class="{ animate__slideOutLeft: next }"
          />
        </div>

        <div v-show="scanORgenerate">
          <ScanOrGenerate
            class="animate__animated animate__slideInRight"
            :clickRouteScan="openScan"
            :clickRouteGenerate="openGenerate"
          />
        </div>

        <div class="fixed bottom-4 right-6 flex gap-2 items-center">
          <div class="w-2.5 h-2.5 transition-all rounded-full bg-dark"></div>
          <div class="w-2.5 h-2.5 transition-all rounded-full bg-dark/40" id="nav2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconLoading from "./iconLoading.vue";
import ScanOrGenerate from "./ScanOrGenerate.vue";
import SectionStart from "./SectionStart.vue";
export default {
  components: { SectionStart, IconLoading, ScanOrGenerate },

  data() {
    return {
      Loader: false,
      loading: true,

      sectionStart: true,
      scanORgenerate: false,

      next: false,
    };
  },
  methods: {
    start() {
      this.next = !this.next;
      navigator.vibrate([50]);

      setTimeout(() => {
        this.sectionStart = false;
        this.scanORgenerate = true;
      }, 700);

      document.getElementById("nav2").style.backgroundColor = "#262626";
    },

    openScan() {
      navigator.vibrate([50]);

      setTimeout(() => {
        this.Loader = false;
        this.$router.push("/");
        document.getElementById("BarBottom").style.display = "block";
      }, 100);
    },
    openGenerate() {
      navigator.vibrate([50]);

      setTimeout(() => {
        this.Loader = false;
        this.$router.push("/generate-qr");
        document.getElementById("BarBottom").style.display = "block";
      }, 100);
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

<style>
.click button {
  background: red;
}
</style>
