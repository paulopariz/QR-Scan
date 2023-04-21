<template>
  <div v-show="Loader">
    <div
      class="h-screen w-screen bg-light fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div class="fixed top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src="../assets/img/logoLight.svg" class="select-none" alt="Logo" />
      </div>

      <div class="fixed z-40 bottom-20 w-screen">
        <div class="flex justify-center flex-col items-center gap-11 w-screen">
          <h1 class="font-normal tracking-wide w-11/12 text-center max-mn:text-sm">
            Vá e aproveite nossos recursos gratuitamente e facilite sua vida conosco.
          </h1>
          <button
            @click="startClick"
            class="bg-dark border border-white-2/5 w-4/5 px-7 h-14 select-none rounded-lg transition-all active:scale-95 hover:scale-95"
          >
            <div v-show="contentBtn" class="flex items-center justify-between">
              <span class="text-transparent text-[0px]">.</span>
              <h1 class="text-white font-bold tracking-wide text-base">Iniciar</h1>
              <img src="@/assets/img/arrow.svg" alt="Arrow" />
            </div>

            <IconLoadingBtn
              class="flex justify-center items-center border-white-2/20 border-r-white-2"
              v-show="loadingBtn"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconLoadingBtn from "./iconLoadingBtn.vue";

export default {
  components: { IconLoadingBtn },

  data() {
    return {
      Loader: true,

      loadingBtn: false,
      contentBtn: true,
    };
  },
  methods: {
    startClick() {
      document.body.style.overflow = "auto";

      this.loadingBtn = true;
      this.contentBtn = false;

      const localStorageVibrate = localStorage.getItem("Vibrate");

      if (localStorageVibrate === "true") {
        navigator.vibrate([50]);
      } else {
        navigator.vibrate([0]);
      }

      setTimeout(() => {
        this.$router.push("/");
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
