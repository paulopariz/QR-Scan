<template>
  <div class="h-screen animate__animated animate__fadeIn">
    <LoaderPage class="" />

    <BarBottom class="" id="BarBottom" />
    <router-view />
  </div>
</template>

<script>
import BarBottom from "./components/barBottom.vue";
import LoaderPage from "./components/LoaderPage.vue";
export default {
  components: { LoaderPage, BarBottom },

  data() {
    return {};
  },
};
</script>

<style>
body {
  font-family: "Itim", cursive;
  background-color: #333333;
  user-select: none;
}
</style>
