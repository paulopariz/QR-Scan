<template>
  <div class="animate__animated animate__fadeIn">
    <div class="px-10 max-mn:px-3">
      <nav class="flex items-center gap-6">
        <button
          id="btnBack"
          @click="back"
          class="px-4 py-3 mt-12 rounded-lg border border-white-2/5 transition-all hover:scale-95"
        >
          <img
            src="@/assets/img/iconBack.svg"
            alt="Arrow"
            class="transition-all fill-white"
          />
        </button>
      </nav>

      <div class="mt-14">
        <h1 class="text-light text-xl tracking-wide md:text-2xl">Configurações</h1>

        <div
          class="mt-5 m-auto w-full bg-dark flex justify-between items-center px-5 py-3 drop-shadow-2xl shadow-lg rounded-lg lg:w-1/2 md:px-14 md:py-8"
        >
          <div class="flex items-center gap-4 md:gap-9">
            <img src="@/assets/img/iconVibrate.svg" alt="IconVibrate" class="md:w-10" />

            <div class="flex flex-col">
              <h2 class="text-white-2 md:text-xl">Vibração</h2>
              <p class="text-white-2/50 text-sm md:text-lg">Desativar vibrações.</p>
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

        <div class="mt-10">
          <h1 class="text-light text-xl tracking-wide md:text-2xl">Autor</h1>

          <section class="mt-5 flex flex-col gap-0.5">
            <a
              v-for="redes in socias"
              :key="redes.id"
              target="_blank"
              :href="redes.link"
              class="w-full m-auto bg-dark flex items-center px-5 py-3 transition-all lg:w-1/2 md:px-14 md:py-8"
              id="redes"
              :class="{ radius }"
            >
              <div class="flex items-center gap-4 md:gap-9">
                <img
                  :src="redes.img"
                  alt="IconVibrate"
                  class="w-5 transition-all md:w-10"
                />
                <div class="flex flex-col">
                  <h2 class="text-white-2 transition-all md:text-xl">
                    {{ redes.title }}
                  </h2>
                  <p class="text-white-2/50 text-sm transition-all md:text-lg">
                    {{ redes.rede }}.
                  </p>
                </div>
              </div>
            </a>
          </section>
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
      radius: false,

      socias: [
        {
          img: require("@/assets/img/iconPortfolio.svg"),
          title: "Portfólio",
          rede: "Acesse meu Porfólio",
          link: "https://paulopariz.vercel.app/",
        },
        {
          img: require("@/assets/img/iconGithub.svg"),
          title: "Github",
          rede: "Siga-me no Github",
          link: "https://github.com/paulopariz",
          radius: true,
        },
        {
          img: require("@/assets/img/iconLinkedIn.svg"),
          title: "LinkedIn",
          rede: "Siga-me no LinkedIn",
          link: "https://www.linkedin.com/in/paulopariz/",
        },
      ],
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
      document.getElementById("BarBottom").style.bottom = "0";

      const localStorageVibrate = localStorage.getItem("Vibrate");

      if (localStorageVibrate === "true" && "vibrate" in navigator) {
        navigator.vibrate([50]);
      }
    },

    vibrate() {
      this.active = !this.active;

      localStorage.setItem("Vibrate", this.active);

      const localStorageVibrate = localStorage.getItem("Vibrate");

      if (localStorageVibrate === "true" && "vibrate" in navigator) {
        navigator.vibrate([50]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: #303030;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;
}

.radius {
  border-radius: 0;
  background: red;
}

#redes {
  &:nth-child(2) {
    border-radius: 0;
  }
  &:nth-child(1) {
    border-radius: 8px 8px 0px 0px;
  }
  &:nth-child(3) {
    border-radius: 0px 0px 8px 8px;
  }

  &:hover {
    background-color: #fdb623;
    img {
      filter: invert(100%);
    }
    h2 {
      filter: invert(100%);
    }
    p {
      color: #262626d1;
    }
  }
}
</style>
