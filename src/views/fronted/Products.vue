<template>
  <div class="banner d-flex justify-content-center align-items-center position-relative">
    <h2 class="display-4 text-white routeFont" data-aos="fade-up">
    <!-- 使用mitt來解決取route不動的問題 -->
      {{ pageTitle }}
    </h2>
  </div>
  <router-view/>
</template>

<script>

export default {
  data() {
    return {
      pageTitle: '',
      products: [],
      categories: [],
      hotProducts: [],
    };
  },
  inject: ['emitter'],
  created() {
    this.emitter.on('page-title', (pageTitle) => {
      this.pageTitle = pageTitle;
    });
  },
  unmounted() {
    this.emitter.off('page-title', (pageTitle) => {
      this.pageTitle = pageTitle;
    });
  },
};
</script>

<style lang="scss" scoped>
  .banner {
    background-image: url('../../../public/images/productBanner.jpg');
    background-size: cover;
    background-position: bottom;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
</style>
