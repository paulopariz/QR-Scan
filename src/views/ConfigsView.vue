<template>
  <div><button @click="voltar">Voltar</button></div>
</template>

<script>
export default {
  methods: {
    voltar() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
