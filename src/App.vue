<template>
  <div class="h-screen animate__animated animate__fadeIn">
    <div v-show="ShowRedirectInitial">
      <direction-initial
        :redirect="redirect"
        class="animate__animated animate__fadeIn"
        :class="{ animate__fadeOut: fadeOut }"
      />
    </div>

    <LoaderPage class="" />

    <BarBottom class="" id="BarBottom" />
    <router-view />
  </div>
</template>

<script>
import BarBottom from "./components/barBottom.vue";
import DirectionInitial from "./components/direction/directionInitial.vue";
import LoaderPage from "./components/LoaderPage.vue";
export default {
  components: { LoaderPage, BarBottom, DirectionInitial },

  data() {
    return {
      ShowRedirectInitial: true,
      fadeOut: false,
    };
  },

  methods: {
    redirect() {
      this.fadeOut = true;
      setTimeout(() => {
        this.ShowRedirectInitial = false;

        localStorage.setItem("ShowRedirectInitial", this.ShowRedirectInitial);
      }, 1000);
    },
  },

  mounted() {
    const localStorageContent = localStorage.getItem("ShowRedirectInitial");
    console.log(localStorageContent);
    if (localStorageContent === "false") {
      this.ShowRedirectInitial = false;
    }
  },
};
</script>

<style>
body {
  font-family: "Itim", cursive;
  background-color: #333333;
  user-select: none;
}

.fadeOut {
  opacity: 0.4;
}
</style>
