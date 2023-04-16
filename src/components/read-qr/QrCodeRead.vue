<template>
  <section>
    <div
      class="w-5/6 drop-shadow-2xl shadow-lg absolute z-50 top-[17%] left-1/2 -translate-x-1/2 bg-dark rounded-lg border-2 border-transparent px-5 py-5"
    >
      <section class="flex flex-col justify-between h-32">
        <div class="flex items-center gap-5">
          <img src="../../assets/img/logoDark.svg" class="w-14" alt="Logo" />
          <div class="flex flex-col gap-1 items-start">
            <h1 class="text-xl text-white-2 font-semibold">QR-Code</h1>
            <span class="text-white-2/50 text-sm">{{ date }}</span>
          </div>
        </div>
        <div class="w-full h-[0.3px] bg-white/10"></div>
        <p
          class="w-full text-base text-white-2 tracking-wide select-none whitespace-nowrap overflow-auto px-1 py-0.5 transition-all"
          id="textCopy"
        >
          {{ link }}
          <span class="x right-0 absolute mt-0.5 rounded-xl px-3.5 py-2.5"></span>
        </p>
      </section>
    </div>

    <div
      class="absolute z-50 top-[47%] left-1/2 -translate-x-1/2 flex items-center justify-center gap-10"
    >
      <div class="flex flex-col gap-2 items-center">
        <a
          id="link"
          :href="link"
          target="_blank"
          class="bg-light rounded-md px-5 py-4 transition-all hover:scale-95 active:scale-95 border border-white-2/5 cursor-pointer"
        >
          <img
            src="@/assets/img/iconAccess.svg"
            class="flex items-center justify-center"
            alt="Copy"
          />
        </a>

        <span class="text-sm text-white-2 tracking-wide">Acessar</span>
      </div>

      <div class="flex flex-col gap-2 items-center">
        <button
          class="bg-light rounded-md px-5 py-4 transition-all hover:scale-95 active:scale-95 border border-white-2/5"
          @click="clickCopy"
        >
          <img
            src="@/assets/img/iconCopy.svg"
            class="flex items-center justify-center"
            alt="Copy"
          />
        </button>

        <div class="flex items-center">
          <span class="text-sm text-white-2 tracking-wide">{{ copyTextBtn }} </span>
          <input class="hidden" type="text" id="link" :value="link" />

          <img
            src="@/assets/img/iconCheck.svg"
            class="hidden absolute -right-3 -mt-0.5"
            id="iconCheck"
            alt="Check"
          />

          <img
            src="@/assets/img/iconError.svg"
            class="absolute hidden right-0"
            id="iconError"
            alt="Error"
          />
        </div>

        <div @click="saveQrCodeRead" class="bg-red-800 text-white p-3 cursor-pointer">
          ADD HISTORY
        </div>
        <img :src="qrCodeUrlRead" alt="QR Code" class="w-0 hidden" />
      </div>
    </div>
  </section>
</template>

<script>
import qrcode from "qrcode";

export default {
  name: "QrCodeRead",

  props: ["link", "clickCopy", "copyTextBtn", "date"],
  data() {
    return {
      qrCodeUrlRead: null,
      qrCodesRead: [],
    };
  },

  methods: {
    qrRead() {
      qrcode
        .toDataURL(this.link)
        .then((url) => {
          this.qrCodeUrlRead = url;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    saveQrCodeRead() {
      this.qrCodesRead.push(this.qrCodeUrlRead);
      this.qrCodesRead.push(this.link);

      const historyRead = {
        qrCodeUrlRead: this.qrCodeUrlRead,
        link: this.link,
      };

      let qrCodeHistoryRead = JSON.parse(localStorage.getItem("qrCodeHistoryRead")) || [];
      qrCodeHistoryRead.push(historyRead);

      localStorage.setItem("qrCodeHistoryRead", JSON.stringify(qrCodeHistoryRead));
    },
  },

  mounted() {
    this.qrRead();
  },
};
</script>

<style scoped lang="scss">
.x {
  background: rgb(38, 38, 38);
  background: linear-gradient(90deg, rgba(38, 38, 38, 0) 0%, rgba(38, 38, 38, 0.767) 19%);
}
button,
a {
  background: #303030;
  box-shadow: 8px 8px 16px #2a2a2a, -8px -8px 16px #383838;
}
</style>
