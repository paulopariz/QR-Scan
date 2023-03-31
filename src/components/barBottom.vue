<template>
  <div
    class="w-1/3 h-20 rounded-2xl fixed left-1/2 -translate-x-1/2 py-4 px-24 bottom-5 bg-dark border-2 border-x-0 border-b-0 border-light"
  >
    <div>
      <ul class="flex items-center justify-between">
        <li class="flex items-center flex-col gap-1">
          <img src="@/assets/img/iconGenerate.svg" alt="icon" />
          <span class="text-white-2 text-[13px] tracking-wide font-semibold">Gerar</span>
        </li>

        <li class="p-4 bg-light rounded-full -mt-20 scan">
          <img src="@/assets/img/logoLight.svg" class="w-[30px]" alt="icon" />
        </li>

        <li class="flex items-center flex-col gap-1">
          <img
            src="@/assets/img/iconSettings.svg"
            alt="icon"
            class="transition-all hover:rotate-45 fill-red-800"
          />
          <span class="text-white-2 text-[13px] tracking-wide font-semibold"
            >Configs</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.scan {
  filter: drop-shadow(0px 0px 21px #fdb623);
}

li {
  cursor: pointer;
}
</style>
