<template>
  <div class="px-10 py-6 m-auto max-mn:px-3">
    <div v-show="ShowRedirectGenerate">
      <DirectionGenerateHistory
        :redirectGenerateHistory="redirectGenerateHistory"
        title="Gere seu própio QR-Code"
        desc="Clique em uma das opções abaixo e gere seu QR code! Mas lembre-se de digitar
        corretamente o seu nome de usuário, URL ou número, para evitar qualquer erro."
        class="animate__animated animate__fadeIn"
        :class="{ animate__fadeOut: fadeOut }"
      />
    </div>

    <nav class="flex justify-between items-center">
      <h1
        id="titleGenerate"
        class="text-xl text-white-2 font-semibold tracking-wider select-none"
      >
        Gerar QR
      </h1>

      <btn-configs />
    </nav>

    <div
      class="px-10 pt-16 pb-28 grid grid-cols-3 place-items-center gap-x-28 gap-y-8 max-mn:gap-x-24 xl:grid-cols-4 xl:gap-x-0 xl:gap-y-14"
    >
      <div v-for="option in Options" :key="option.id">
        <div
          @click="openModal(option.id)"
          class="rounded-lg w-24 h-24 flex items-center justify-center transition-all border border-white-2/5 cursor-pointer select-none max-mn:w-20 max-mn:h-20 md:h-64 md:w-64 sm:w-48 sm:h-48"
          id="modal"
        >
          <div class="flex items-center flex-col gap-3">
            <img
              :src="option.icon"
              :alt="option.name"
              class="transition-all max-mn:w-7 max-mn:h-7 sm:w-16 sm:h-16"
            />
            <h2
              class="text-white-2 text-xs transition-all font-semibold tracking-wide max-mn:text-[10px] md:text-xl md:tracking-wider sm:text-lg"
            >
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
            class="w-5/6 gap-9 drop-shadow-2xl shadow-lg fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/50 rounded-lg border-2 border-x-0 border-light flex flex-col justify-between items-center px-5 py-8 animate__animated animate__fadeIn md:w-2/3 md:py-20"
          >
            <img :src="viewModal.icon" class="w-16 select-none md:w-36" />

            <div class="flex flex-col gap-3 w-full md:w-2/3">
              <label for="Username" class="text-white-2 tracking-wide md:text-lg">
                {{ viewModal.label }}
              </label>

              <input
                :type="viewModal.type"
                :placeholder="viewModal.placeholder"
                v-model="username"
                @keyup.enter="generate"
                id="input"
                class="px-4 py-2 bg-[#222121] border border-white-2/70 rounded-md drop-shadow-2xl shadow-lg text-white-2/40 outline-none transition-all focus:border-light"
              />
              <span v-show="msgValidation" class="text-red-600 text-sm tracking-wide"
                >O campo não pode estar vazio</span
              >

              <input
                type="text"
                id="twitter-url"
                class="hidden"
                :value="url"
                readonly
                @keyup.enter="generate"
              />
            </div>

            <button
              id="generateBtn"
              @click="generate"
              class="mt-4 px-6 py-2 bg-light text-dark tracking-wide rounded-lg drop-shadow-2xl shadow-lg transition-all active:scale-95 hover:scale-95 w-2/3 h-10 flex items-center justify-center max-mn:px-2"
            >
              <span :class="{ hidden: this.loadingBtn === true }">Gerar QR Code</span>
              <IconLoadingBtn
                v-show="loadingBtn"
                class="w-[16px] h-[16px] m-auto border-solid border-dark border-y-dark/50 border-r-dark/50"
              />
            </button>
          </div>
        </div>

        <!--Modal qr code gerado-->

        <div v-show="ShowQrCodeGenerated">
          <QrCodeGenerated
            :qrCodeGeneratedContet="qrCodeGeneratedContet"
            :qrCodeGenerated="qrCode"
            :showHistory="showHistory"
            :date="currentDateTime"
          />

          <AlertQR id="alertGenerate" class="" v-show="alert" msg="QR-Code gerado!" />

          <div v-show="viewHistory">
            <!-- <div
              v-if="qrCodes.length"
              class="absolute z-[1000] top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-2/4 w-screen bg-zinc-600"
            >
              <ul>
                <li v-for="(code, index) in qrCodes" :key="index">
                  <img :src="code" alt="QR Code" />
                </li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundForModals from "../BackgroundForModals.vue";
import QrCodeGenerated from "../qr-generated/qrCodeGenerated.vue";

import qrcode from "qrcode";
import IconLoadingBtn from "../iconLoadingBtn.vue";
import DirectionGenerateHistory from "../direction/DirectionGenerate&History.vue";
import AlertQR from "../history/AlertQR.vue";

import moment from "moment";
import BtnConfigs from "../BtnConfigs.vue";

export default {
  components: {
    BackgroundForModals,
    QrCodeGenerated,
    IconLoadingBtn,
    DirectionGenerateHistory,
    AlertQR,
    BtnConfigs,
  },
  data() {
    return {
      ShowRedirectGenerate: true,
      fadeOut: false,
      loadingBtn: false,

      viewModal: null,
      username: "",

      qrCodes: [],
      qrCode: null,
      viewHistory: false,

      ShowQrCodeGenerated: false,
      showModalGenerated: true,

      qrCodeGenerated: "",
      qrCodeGeneratedContet: "",
      alert: false,

      msgValidation: false,

      currentDateTime: "",

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

  mounted() {
    const localStorageContent = localStorage.getItem("ShowRedirectGenerate");
    console.log(localStorageContent);
    if (localStorageContent === "false") {
      this.ShowRedirectGenerate = false;
    } else {
      document.getElementById("titleGenerate").style.opacity = 0;
    }
  },

  methods: {
    redirectGenerateHistory() {
      this.fadeOut = true;

      document.getElementById("titleGenerate").style.opacity = 1;
      setTimeout(() => {
        this.ShowRedirectGenerate = false;
        localStorage.setItem("ShowRedirectGenerate", this.ShowRedirectGenerate);
      }, 1000);
    },

    contentQrcode() {
      this.qrCodeGeneratedContet = this.url;
    },

    showHistory() {
      this.viewHistory = !this.history;
    },

    async generate() {
      this.contentQrcode();
      if (this.username.length == "") {
        this.msgValidation = true;
        document.getElementById("input").style.borderColor = "#FF0000";
      } else {
        document.getElementById("input").style.borderColor = "#D9D9D9";
        this.currentDateTime = moment().locale("pt-br").format("D MMM YYYY, h:mm a");

        this.loadingBtn = true;

        setTimeout(() => {
          this.loadingBtn = false;
          this.ShowQrCodeGenerated = true;
          this.showModalGenerated = false;

          this.alert = true;
        }, 1500);

        //alert
        setTimeout(() => {
          document.getElementById("alertGenerate").style.right = "4px";
        }, 1700);

        setTimeout(() => {
          document.getElementById("alertGenerate").style.right = "-75%";
        }, 3500);

        setTimeout(() => {
          this.alert = false;
        }, 3800);
        //alert

        const qrCodeData = this.url;
        const qrCode = await qrcode.toDataURL(qrCodeData);

        this.qrCode = qrCode;

        this.qrCodes.push(this.qrCode);
        this.qrCodes.push(this.currentDateTime);
        this.qrCodes.push(this.qrCodeGeneratedContet);

        const history = {
          qrCode: this.qrCode,
          date: this.currentDateTime,
          qrCodeGeneratedContent: this.qrCodeGeneratedContet,
        };

        let qrCodeHistoryGenerate =
          JSON.parse(localStorage.getItem("qrCodeHistoryGenerate")) || [];
        qrCodeHistoryGenerate.push(history);

        localStorage.setItem(
          "qrCodeHistoryGenerate",
          JSON.stringify(qrCodeHistoryGenerate)
        );
        //

        this.msgValidation = false;

        console.log(this.url);

        this.qrCodeGenerated = this.url;

        this.username = "";
      }
    },
    openModal(optionId) {
      setTimeout(() => {
        this.viewModal = this.Options.find((option) => option.id === optionId);
        window.history.pushState(null, null, `/generate-qr/${this.viewModal.name}`);

        document.getElementById("BarBottom").style.display = "none";
      }, 100);
    },

    closeModal() {
      const localStorageVibrate = localStorage.getItem("Vibrate");

      if (localStorageVibrate === "true") {
        navigator.vibrate([50]);
      } else {
        navigator.vibrate([0]);
      }

      this.msgValidation = false;
      document.getElementById("BarBottom").style.display = "block";

      this.ShowQrCodeGenerated = false;
      this.showModalGenerated = true;

      this.viewModal = false;
      window.history.pushState(null, null, "/generate-qr");
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

.btnDisabled {
  cursor: not-allowed;
  opacity: 0.7;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
