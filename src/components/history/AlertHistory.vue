<template>
  <div
    class="fixed top-5 -right-3/4 transition-all drop-shadow-2xl shadow-lg rounded rounded-r-none z-50 bg-dark border-y-0 border-r-0 border-2 border-light py-2 px-5"
  >
    <h1 class="text-white-2">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "AlertHistory",

  props: ["msg"],
};
</script>

<style></style>
