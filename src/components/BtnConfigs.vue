<template>
  <div class="z-30">
    <button
      @click="openConfigs"
      class="flex items-center justify-center transition-all focus:rotate-45 active:rotate-45"
    >
      <img src="@/assets/img/iconSettings.svg" class="w-7" alt="configs" />
    </button>
  </div>
</template>

<script>
export default {
  name: "BtnConfigs",

  methods: {
    openConfigs() {
      setTimeout(() => {
        this.$router.push("/configs");
      }, 350);
    },
  },
};
</script>

<style></style>
