<template>
  <div>
    <button @click="openFilter" class="mt-0.5">
      <img src="@/assets/img/iconFilter.svg" alt="Filter" class="w-5" />
    </button>

    <div
      v-show="showFilter"
      class="py-5 px-4 bg-dark drop-shadow-2xl shadow-lg absolute mt-1 rounded-lg border border-white-2/5 transition-all"
      id="sectionFilter"
    >
      <ul class="flex flex-col gap-2">
        <li
          @click="old"
          class="text-white-2 tracking-wide cursor-pointer transition-all hover:text-light"
        >
          Mais Antigos
        </li>
        <li
          @click="recent"
          class="text-white-2 tracking-wide cursor-pointer transition-all hover:text-light"
        >
          Mais Recentes
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFilter: false,
    };
  },

  methods: {
    openFilter() {
      this.showFilter = !this.showFilter;
    },

    recent() {
      document.getElementById("order").style.flexDirection = "column-reverse";
      this.showFilter = false;
    },

    old() {
      document.getElementById("order").style.flexDirection = "column";
      this.showFilter = false;
    },
  },
};
</script>

<style>
#sectionFilter {
  animation: sectionFilter 0.1s;
}

@keyframes sectionFilter {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
