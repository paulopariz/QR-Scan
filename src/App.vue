<template>
  <div>
    <LoaderPage />
  </div>
  <router-view />
</template>

<script>
import LoaderPage from "./components/LoaderPage.vue";
export default {
  components: { LoaderPage },
};
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}
</style>
