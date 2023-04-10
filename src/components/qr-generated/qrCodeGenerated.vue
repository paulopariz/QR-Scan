<template>
  <div>
    <div
      class="w-5/6 drop-shadow-2xl shadow-lg absolute z-50 top-[17%] left-1/2 -translate-x-1/2 bg-dark rounded-lg border-2 border-transparent px-5 py-3"
    >
      <h1 class="text-lg tracking-wide text-white-2 font-semibold">
        Conteúdo do Qr-Code
      </h1>

      <p
        class="w-full text-base text-white-2/80 tracking-wide select-none whitespace-nowrap overflow-auto py-0.5 transition-all"
        id="textCopy"
      >
        {{ qrCodeGenerated }}
      </p>
    </div>

    <qr-code
      :text="qrCodeGenerated"
      :size="140"
      bg-color="#D9D9D9"
      class="absolute z-[100] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 border-4 rounded-md border-light p-4 bg-white-2"
      error-level="H"
    ></qr-code>
  </div>
</template>

<script>
export default {
  components: {},

  props: ["qrCodeGenerated"],
};
</script>

<style></style>
