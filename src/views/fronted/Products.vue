<template>
  <div class="banner d-flex justify-content-center align-items-center position-relative">
    <h2 class="display-4 text-white routeFont" data-aos="fade-up"
    v-if="pageTitle === '寒舍商品'">
    <!-- 使用mitt來解決取route不動的問題 -->
      寒舍商品
    </h2>
    <h2 class="display-4 text-white routeFont" data-aos="fade-up"
    v-else>
    <!-- 使用mitt來解決取route不動的問題 -->
      購物車
    </h2>
  </div>
  <router-view></router-view>
  <div class="container">
    <h2>熱銷商品</h2>
    <p>swiper</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '',
    };
  },
  inject: ['emitter'],
  created() {
    this.emitter.on('page-title', (pageTitle) => {
      this.pageTitle = pageTitle;
    });
  },
};
</script>

<style lang="scss">
  .banner {
    background-image: url(https://images.unsplash.com/photo-1483721310020-03333e577078?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80);
    background-size: cover;
    background-position: bottom;
    height: 400px;
  }
</style>
