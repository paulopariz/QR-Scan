<template>
  <div class="w-screen h-screen fixed z-50">
    <span
      class="loader animate__animated animate__fadeIn animate__delay-1s fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    ></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.animate__delay-1s {
  --animate-delay: 0.9s;
}
.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: "";
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  animation: animloader 2s linear infinite;
}
.loader::after {
  animation-delay: 1s;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
