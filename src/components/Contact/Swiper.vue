<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :centeredSlides="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :loop="true"
    :navigation="true"
    :modules="modules"
    :preventInteractionOnTransition="true"
    :style="{
      '--swiper-pagination-bullet-inactive-opacity': 1,
      '--swiper-pagination-bullet-inactive-color': '#001418',
      '--swiper-navigation-color': '#ecd035',
      '--swiper-pagination-color': '#ecd035',
    }"
  >
    <swiper-slide v-for="(url, i) in urls" :key="i"
      ><img :src="url" alt="img"
    /></swiper-slide>
  </swiper>
</template>
<script setup>
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";
  import { Pagination, Navigation, Autoplay } from "swiper";

  import "swiper/css";

  import "swiper/css/pagination";
  import "swiper/css/navigation";

  const urls = [
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_d36ac4c959e2f5c9984baf179ab9b6d6813f06c2.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_cf831992783ab0a6578bd87623cf808b92e91326.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_f46d58ba9474ae22c71ec307127c3df602a84ac4.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_672b5335e34383ca3e92d4e27d2f3dc8b909598a.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_7ccab57a40241aa56d088ddc471be04328d5ae0c.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_a1223960443a5c63c5c4e3b7a51c39d80ba50707.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_f11e9d0c62a5b9efbdf03586460ad7bcc399a1ca.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_4bbdcd112df6585f1f2c3e96d3327e228d3ac9e0.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_9fa3d53ffadf3c0320500c770033243188deb494.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_ecd1739eb39f30c17690be04907d3be1de546e51.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_dd71c612074c47129aa448188efaa2035020e84a.1920x1080.jpg?t=1665741216",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1114220/ss_309f520bf849fc01b2254e1405a0016ded4fa21e.1920x1080.jpg?t=1665741216",
  ];

  const modules = [Pagination, Navigation, Autoplay];
</script>

<style scoped>
  .swiper {
    @apply select-none;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    @apply bg-defaultBackground;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
