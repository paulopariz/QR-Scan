<template>
  <div class="z-30">
    <button
      @click="openConfigs"
      class="flex items-center justify-center transition-all focus:rotate-45 active:rotate-45"
    >
      <img src="@/assets/img/iconSettings.svg" class="w-6" alt="configs" />
    </button>
  </div>
</template>

<script>
export default {
  name: "BtnConfigs",

  methods: {
    openConfigs() {
      const localStorageVibrate = localStorage.getItem("Vibrate");

      if (localStorageVibrate === "true") {
        navigator.vibrate([50]);
      } else {
        navigator.vibrate([0]);
      }

      setTimeout(() => {
        this.$router.push("/configs");
      }, 350);
    },
  },
};
</script>

<style></style>
