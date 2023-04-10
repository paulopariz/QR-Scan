<template>
  <div class="px-10 py-6 m-auto">
    <nav>
      <h1 class="text-xl text-white-2 font-semibold tracking-wider select-none">
        Gerar QR
      </h1>
    </nav>

    <div class="px-10 pt-16 pb-28 grid grid-cols-3 place-items-center gap-x-28 gap-y-8">
      <div v-for="option in Options" :key="option.id">
        <div
          @click="openModal(option.id)"
          class="rounded-lg w-24 h-24 flex items-center justify-center transition-all border border-white-2/5 cursor-pointer select-none"
          id="modal"
        >
          <div class="flex items-center flex-col gap-3">
            <img :src="option.icon" :alt="option.name" class="transition-all" />
            <h2 class="text-white-2 text-xs transition-all font-semibold tracking-wide">
              {{ option.name }}
            </h2>
          </div>
        </div>
      </div>

      <!--MODAL-->

      <div v-if="viewModal">
        <BackgroundForModals :closeModal="closeModal" :title="title" />

        <!--Modal para gerar o qr code-->

        <div v-show="showModalGenerated">
          <div
            class="w-5/6 gap-9 drop-shadow-2xl shadow-lg absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/50 rounded-lg border-2 border-x-0 border-light flex flex-col justify-between items-center px-5 py-8"
          >
            <img :src="viewModal.icon" class="w-16 select-none" />

            <div class="flex flex-col gap-3 w-full">
              <label for="Username" class="text-white-2 tracking-wide">{{
                viewModal.label
              }}</label>
              <input
                :type="viewModal.type"
                :placeholder="viewModal.placeholder"
                v-model="username"
                class="px-4 py-2 bg-[#222121] border border-white-2/70 rounded-md drop-shadow-2xl shadow-lg text-white-2/40 outline-none transition-all focus:border-light"
              />

              <input type="text" id="twitter-url" class="hidden" :value="url" readonly />
            </div>

            <button
              @click="generate"
              class="mt-4 px-6 py-2 bg-light text-dark tracking-wide rounded-lg drop-shadow-2xl shadow-lg transition-all active:scale-95 hover:scale-95"
            >
              Gerar QR Code
            </button>
          </div>
        </div>

        <!--Modal qr code gerado-->

        <div v-show="ShowQrCodeGenerated">
          <QrCodeGenerated :qrCodeGenerated="qrCodeGenerated" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundForModals from "../BackgroundForModals.vue";
import QrCodeGenerated from "../qr-generated/qrCodeGenerated.vue";

export default {
  components: { BackgroundForModals, QrCodeGenerated },
  data() {
    return {
      viewModal: null,
      username: "",
      ShowQrCodeGenerated: false,
      showModalGenerated: true,

      qrCodeGenerated: "",

      Options: [
        {
          id: 1,
          name: "Twitter",
          icon: require("@/assets/img/iconTwitter.svg"),
          url: "https://twitter.com/",
          label: "Username",
          placeholder: "Digite o nome do usuário",
          type: "text",
        },
        {
          id: 2,
          name: "Instagram",
          icon: require("@/assets/img/iconInstagram.svg"),
          url: "https://www.instagram.com/",
          label: "Username",
          placeholder: "Digite o nome do usuário",
          type: "text",
        },
        {
          id: 3,
          name: "WhatsApp",
          icon: require("@/assets/img/iconWhatsapp.svg"),
          url: "https://api.whatsapp.com/send?phone=",
          label: "Número",
          placeholder: "Digite o numero",
          type: "number",
        },
        {
          id: 4,
          name: "Facebook",
          icon: require("@/assets/img/iconFacebook.svg"),
          url: "https://www.facebook.com/",
          label: "Username",
          placeholder: "Digite o nome do usuário",
          type: "text",
        },
        {
          id: 5,
          name: "LinkedIn",
          icon: require("@/assets/img/iconLinkedIn.svg"),
          url: "https://www.linkedin.com/in/",
          label: "Username",
          placeholder: "Digite o nome do usuário",
          type: "text",
        },
        {
          id: 6,
          name: "Github",
          icon: require("@/assets/img/iconGithub.svg"),
          url: "https://github.com/",
          label: "Username",
          placeholder: "Digite o nome do usuário",
          type: "text",
        },
        {
          id: 7,
          name: "Behance",
          icon: require("@/assets/img/iconBehance.svg"),
          url: "https://www.behance.net/",
          label: "Username",
          placeholder: "Digite o numero",
          type: "text",
        },
        {
          id: 8,
          name: "Dribble",
          icon: require("@/assets/img/iconDribble.svg"),
          url: "https://dribbble.com/",
          label: "Username",
          placeholder: "Digite o nome do usuário",
          type: "text",
        },
        {
          id: 9,
          name: "Web-Site",
          icon: require("@/assets/img/iconWebSite.svg"),
          url: "",
          label: "Url",
          placeholder: "Digite a Url completa",
          type: "url",
        },
      ],
    };
  },

  computed: {
    url() {
      return this.viewModal.url + this.username;
    },

    title() {
      if (this.ShowQrCodeGenerated == true) {
        return "QR Code" + " " + this.viewModal.name;
      } else {
        return this.viewModal.name;
      }
    },
  },

  methods: {
    generate() {
      this.ShowQrCodeGenerated = true;
      this.showModalGenerated = false;

      console.log(this.url);

      this.qrCodeGenerated = this.url;

      this.username = "";
    },

    openModal(optionId) {
      setTimeout(() => {
        this.viewModal = this.Options.find((option) => option.id === optionId);
        window.history.pushState(null, null, `/generate-qr/${this.viewModal.name}`);

        document.getElementById("BarBottom").style.display = "none";
      }, 100);
    },

    closeModal() {
      navigator.vibrate([50]);

      this.ShowQrCodeGenerated = false;
      this.showModalGenerated = true;

      this.viewModal = false;
      window.history.pushState(null, null, "/generate-qr");

      document.getElementById("BarBottom").style.display = "block";
    },
  },
};
</script>

<style scoped lang="scss">
#modal {
  background: #303030;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;

  &:active {
    background-color: #fdb623;
  }

  &:hover {
    background-color: #fdb623;
    box-shadow: none;
    border-color: transparent;
    img {
      filter: invert(100%);
    }
    h2 {
      filter: invert(100%);
    }
  }
}
</style>
