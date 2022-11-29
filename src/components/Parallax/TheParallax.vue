<template>
  <main
    class="relative h-full w-full uppercase select-none overflow-hidden font-[gedonia\_font]"
  >
    <img
      ref="bg"
      class="main__item"
      :src="`${publicPath}img/bg/bg.png`"
      alt="bg"
    />

    <img
      ref="bg__main"
      class="main__item"
      :src="`${publicPath}img/bg/bg__main.png`"
      alt="bg main"
    />

    <div
      ref="shops"
      class="w-full absolute top-0 translate-y-[70vh] left-0 flex justify-center"
    >
      <links-shop />
    </div>

    <img
      :src="`${publicPath}img/bg/bg__footer.png`"
      class="main__item"
      alt="bg footer"
    />
  </main>
</template>

<script setup>
  import LinksShop from "@/components/Parallax/LinksShop.vue";
  import { ref, onMounted } from "vue";

  const publicPath = process.env.BASE_URL;

  const bg = ref(null);
  const bg__main = ref(null);
  const shops = ref(null);

  function setParallax() {
    const scrollY = window.scrollY;

    bg.value.style.transform =
      "translateY(" + Math.floor(scrollY * 0.6) + "px)";

    bg__main.value.style.transform =
      "translateY(" + Math.floor(scrollY * 0.5) + "px)";

    shops.value.style.transform =
      "translateY(" +
      Math.floor(window.innerHeight * 0.7 + scrollY * 0.14) +
      "px)";
  }

  onMounted(() => {
    window.onscroll = setParallax;
  });
</script>

<style scoped>
  .main__item {
    @apply absolute top-0 left-0 w-full h-full pointer-events-none;
  }

  img {
    object-fit: cover;
  }
</style>
