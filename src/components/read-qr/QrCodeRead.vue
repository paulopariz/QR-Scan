<template>
  <div
    class="w-5/6 drop-shadow-2xl shadow-lg absolute z-50 top-[20%] left-1/2 -translate-x-1/2 bg-dark rounded-lg border-2 border-transparent px-5 py-5"
  >
    <section class="flex flex-col justify-between gap-5">
      <div class="flex items-center gap-5">
        <img src="../../assets/img/logoDark.svg" class="w-14" alt="Logo" />

        <div class="flex flex-col gap-1 items-start">
          <h1 class="text-xl text-white-2 font-semibold">QR-Code</h1>
          <span class="text-white-2/50 text-sm">01 abr 2023, 18:00</span>
        </div>
      </div>

      <div class="w-full h-[0.3px] bg-white/10"></div>

      <p class="text-base text-white-2 tracking-wide">
        https://www.youtube.com/watch?v=Zd9g7sKvgIM
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "QrCodeRead",
};
</script>

<style></style>
