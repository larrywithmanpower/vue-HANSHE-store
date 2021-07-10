<template>
  <Carousel></Carousel>
</template>

<script>
import Carousel from '@/components/fronted/SwiperCarousel.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
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
