<template>
  <hr class="hr" />

  <section class="section__cnt">
    <h1 class="title">trailer</h1>

    <div class="main">
      <img
        v-if="isVideoLoading === false"
        class="cursor-pointer w-full h-full object-cover"
        alt="preview"
        :src="`${publicPath}img/preview.jpg`"
        @click.once="isVideoLoading = true"
      />
      <iframe
        v-else
        src="https://www.youtube.com/embed/tWhjz-0ozSQ?autoplay=1"
        frameborder="0"
        width="100%"
        height="100%"
        title="trailer"
        allow="autoplay"
        allowfullscreen
      ></iframe>
    </div>

    <div class="sm:w-[646px] h-[190px] w-[250px]">
      <iframe
        src="https://store.steampowered.com/widget/1114220/"
        frameborder="0"
        width="100%"
        height="100%"
        title="steam"
      ></iframe>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";

  const publicPath = process.env.BASE_URL;
  const isVideoLoading = ref(false);
</script>
