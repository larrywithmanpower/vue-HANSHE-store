<template>
  <Carousel></Carousel>
  <section class="container">
    <h2 class="text-center text-primary py-4">
      <span class="border-bottom border-primary border-2 pb-2">為何選擇寒舍</span>
    </h2>
    <div class="">
      <Lightbox></Lightbox>
    </div>
  </section>
  <section class="pt-5 pb-4 bg-white">
    <div class="container">
      <h2 class="text-center text-primary mb-0">
        <span class="border-bottom border-primary border-2 pb-2">新品推薦</span>
      </h2>
      <SwiperNewItem></SwiperNewItem>
    </div>
  </section>
  <section class="bg-light">
    <div class="container py-5">
      <h2 class="text-center text-primary mb-5">
        <span class="border-bottom border-primary border-2 pb-2">最新情報</span>
      </h2>
      <Bolg></Bolg>
    </div>
  </section>
</template>

<script>
import Carousel from '@/components/fronted/Carousel.vue';
import Lightbox from '@/components/fronted/LightboxArea.vue';
import SwiperNewItem from '@/components/fronted/SwiperNewItem.vue';
import Bolg from '@/components/fronted/Blog.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    Lightbox,
    SwiperNewItem,
    Bolg,
  },
  data() {
    return {
      pageTitle: '',
    };
  },
  created() {
    this.pageTitle = this.$route.name;
  },
};
</script>
