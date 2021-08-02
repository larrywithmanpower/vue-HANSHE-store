<template>
  <div class="banner d-flex justify-content-center align-items-center position-relative">
    <h2 class="display-4 text-white routeFont" data-aos="fade-up">
    <!-- 使用mitt來解決取route不動的問題 -->
      {{ pageTitle }}
    </h2>
  </div>
  <router-view :props-products='products'
  :props-categories='categories'
  ></router-view>
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
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
        }
      }).catch((err) => console.log(err));
    },
    getCategories() {
      const categories = new Set();
      this.products.forEach((item) => categories.add(item.category));
      this.categories = [...categories];
    },
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
