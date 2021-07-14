<template>
  <div class="banner d-flex justify-content-center align-items-center position-relative">
    <h2 class="display-4 text-white routeFont" data-aos="fade-up">
    <!-- 使用mitt來解決取route不動的問題 -->
      {{pageTitle}}
    </h2>
  </div>
  <router-view :props-products='products'
  :props-categories='categories'
  ></router-view>
  <div class="bg-light">
    <div class="container py-5">
      <h2 class="text-danger mb-4 border-bottom pb-3"><i class="bi bi-bookmark-star"></i>熱銷商品</h2>
      <HotProducts class="text-start"
      :props-products='products'
      ></HotProducts>
    </div>
  </div>
</template>

<script>
import HotProducts from '@/components/fronted/HotProducts.vue';

export default {
  components: {
    HotProducts,
  },
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
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.getCategories();
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      }).catch((err) => { console.log(err); });
    },
    getCategories() {
      const categories = new Set();
      this.products.forEach((item) => categories.add(item.category));
      // console.log(categories);
      this.categories = [...categories];
    },
  },
};
</script>

<style lang="scss" scoped>
  .banner {
    background-image: url(https://images.unsplash.com/photo-1483721310020-03333e577078?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80);
    background-size: cover;
    background-position: bottom;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
</style>
