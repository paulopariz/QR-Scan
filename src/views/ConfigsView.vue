<template>
  <div class="animate__animated animate__fadeIn">
    <div class="px-10 pb-6">
      <nav class="flex items-center gap-6 mt-12">
        <button
          id="btnBack"
          @click="back"
          class="px-4 py-3 rounded-lg border border-white-2/5 transition-all hover:scale-95"
        >
          <img
            src="@/assets/img/iconBack.svg"
            alt="Arrow"
            class="transition-all fill-white"
          />
        </button>
      </nav>

      <div class="mt-14">
        <h1 class="text-light text-xl tracking-wide">Configurações</h1>

        <div
          class="mt-5 w-full bg-dark flex justify-between items-center px-5 py-3 drop-shadow-2xl shadow-lg rounded-lg"
        >
          <div class="flex items-center gap-4">
            <img src="@/assets/img/iconVibrate.svg" alt="IconVibrate" />

            <div class="flex flex-col">
              <h2 class="text-white-2">Vibração</h2>
              <p class="text-white-2/50 text-sm">Desativar vibrações.</p>
            </div>
          </div>

          <label
            @click="vibrate"
            for="AcceptConditions"
            class="relative h-5 w-9 cursor-pointer"
          >
            <input type="checkbox" v-model="active" class="peer sr-only" />

            <span
              class="absolute inset-0 rounded-full mt-1 bg-white-2/20 transition peer-checked:bg-light/50"
            ></span>

            <span
              class="absolute inset-y-0 start-0 h-5 w-5 mt-0.5 rounded-full bg-white-2 transition-all peer-checked:bg-light peer-checked:start-4"
            ></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
    };
  },

  mounted() {
    const localStorageVibrate = localStorage.getItem("Vibrate");

    if (localStorageVibrate === "true") {
      this.active = true;
    } else {
      this.active = false;
    }
  },

  methods: {
    back() {
      this.$router.go(-1);
    },

    vibrate() {
      this.active = !this.active;

      localStorage.setItem("Vibrate", this.active);

      const localStorageVibrate = localStorage.getItem("Vibrate");
      console.log(localStorageVibrate);
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
