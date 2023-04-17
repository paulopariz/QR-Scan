<template>
  <div
    class="w-screen h-screen fixed z-[2000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md"
  >
    <div
      class="px-4 fixed top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center gap-6"
    >
      <h1 class="text-center text-2xl text-white tracking-wide">Escaneie o QR-Code</h1>

      <p class="text-white-2 text-center text-sm tracking-wide">
        Para escanear o QR code, clique no botão "Abrir Scan" e certifique-se de
        centralizá-lo corretamente para que possa ser lido com precisão.
      </p>
      <img
        src="@/assets/img/iconArrow.svg"
        alt="Arrow"
        class="invert rotate-180 h-11 transition-all"
        id="arrow"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped></style>
