<template>
  <div
    class="fixed w-screen h-screen bg-dark/5 z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all"
  >
    <section
      id="modal"
      class="fixed bg-dark z-40 w-11/12 h-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all"
    >
      <button @click="closeModalHistory" class="bg-red-50 p-2">fechar</button>
    </section>
  </div>
</template>

<script>
export default {
  props: ["closeModalHistory"],
};
</script>

<style scoped>
#modal {
  transition: modal 3s all;
}
</style>
