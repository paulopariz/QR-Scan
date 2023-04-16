<template>
  <header id="header" class="fixed bg-[#333333] w-screen z-10 px-10 pt-6 pb-2 m-auto">
    <nav class="flex items-center gap-6">
      <h1 class="text-xl text-white-2 font-semibold tracking-wider select-none">
        Histórico
      </h1>
    </nav>

    <div v-show="selectHistory" class="animate__animated animate__fadeIn">
      <div class="grid grid-cols-2 mt-6 p-2 rounded-lg" id="selectHistory">
        <div class="w-full">
          <input type="radio" name="option" id="1" class="peer hidden" checked />
          <label
            for="1"
            class="block cursor-pointer rounded-lg select-none p-2 text-center text-white-2 peer-checked:bg-light peer-checked:font-bold peer-checked:text-dark"
            >Scan</label
          >
        </div>
        <div class="w-full">
          <input type="radio" name="option" id="2" class="peer hidden" />
          <label
            for="2"
            class="block cursor-pointer rounded-lg select-none p-2 text-center text-white-2 peer-checked:bg-light peer-checked:font-bold peer-checked:text-dark"
            >Gerados</label
          >
        </div>
      </div>
      <div class="float-right px-1 mt-3" v-if="qrCodes.length > 0">
        <button
          class="text-light tracking-wide text-sm underline decoration-2"
          @click="deleteHistory()"
        >
          Limpar Histórico
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
