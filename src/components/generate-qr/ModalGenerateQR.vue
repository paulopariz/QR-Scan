<template>
  <div
    class="px-10 py-6 m-auto h-screen w-screen bg-[#333333] fixed z-30 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
  >
    <nav class="flex items-center gap-6">
      <button
        @click="closeModal"
        class="px-4 py-3 rounded-lg bg-dark drop-shadow-2xl shadow-lg"
      >
        <img src="@/assets/img/iconBack.svg" alt="Arrow" />
      </button>

      <h1 class="text-xl text-white-2 font-semibold tracking-wider">Twitter</h1>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["closeModal"],
};
</script>

<style></style>
