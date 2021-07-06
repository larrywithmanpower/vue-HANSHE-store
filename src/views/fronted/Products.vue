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
  <router-view :props-products='products'
  :props-categories='categories'
  ></router-view>
  <div class="container">
    <h2>熱銷商品</h2>
    <SwiperCoverFlow
    :props-products='products'
    :props-hot='hotProducts'
    ></SwiperCoverFlow>
  </div>
</template>

<script>
import SwiperCoverFlow from '@/components/fronted/SwiperCoverFlow.vue';

export default {
  components: {
    SwiperCoverFlow,
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
    this.emitter.on('get-products', this.getProducts);
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.getCategories();
          this.getHot();
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
    getHot() {
      this.products.forEach((item) => {
        if (item.is_hot === 1) {
          this.hotProducts.push(item);
        }
      });
    },
  },
};
</script>

<style lang="scss">
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
