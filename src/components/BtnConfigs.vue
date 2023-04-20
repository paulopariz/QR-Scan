<template>
  <div class="z-30">
    <button
      @click="openConfigs"
      class="p-2.5 rounded-lg border border-white-2/5 flex items-center justify-center"
    >
      <img
        src="@/assets/img/iconSettings.svg"
        class="hover:rotate-180 focus:rotate-180 active:rotate-180"
        alt="configs"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "BtnConfigs",

  methods: {
    openConfigs() {
      document.getElementById("BarBottom").style.bottom = "-150px";

      const localStorageVibrate = localStorage.getItem("Vibrate");

      if (localStorageVibrate === "true") {
        navigator.vibrate([50]);
      } else {
        navigator.vibrate([0]);
      }

      setTimeout(() => {
        this.$router.push("/configs");
      }, 150);
    },
  },
};
</script>

<style scoped>
button {
  background: #303030;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;
}
</style>
