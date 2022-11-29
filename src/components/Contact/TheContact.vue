<template>
  <hr class="hr" />

  <section class="section__cnt sm:h-full">
    <h1 class="title">Join Us</h1>

    <div class="main relative">
      <Swiper />
    </div>

    <LinksContact />

    <Footer />
  </section>
</template>

<script setup>
  import Footer from "@/components/Contact/Footer.vue";
  import Swiper from "@/components/Contact/Swiper.vue";
  import LinksContact from "@/components/Contact/LinksContact.vue";
</script>
