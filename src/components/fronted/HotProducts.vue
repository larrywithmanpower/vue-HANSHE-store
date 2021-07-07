<template>
  <div class="row">
    <div class="col-lg-3" v-for="item in filterHot" :key="item.id">
      <div class="card card-product h-100">
        <div class="card-product__img">
          <img :src="item.imageUrl" class="card-img-top" :alt="item.title" />
          <ul
            class="
              card-product__imgOverlay
              list-unstyled
              d-flex
              justify-content-center
              mb-0
            "
          >
            <li class="me-3">
              <button class="btn btn-primary text-white" @click="goDetail(item)">
                <i class="bi bi-search"></i>
              </button>
            </li>
            <li class="me-3">
              <button class="btn btn-primary text-white">
                <i class="bi bi-cart"></i>
              </button>
            </li>
            <li>
              <button class="btn btn-primary text-white">
                <i class="bi bi-heart"></i>
              </button>
            </li>
          </ul>
        </div>
        <div class="card-body text-center">
          <p class="card-text mb-0">
            <small class="text-muted">{{ item.category }}</small>
          </p>
          <h5 class="card-title mb-0">
            {{ item.title }}
          </h5>
          <p class="card-text font-monospace fs-4">
            <small class="text-muted">$ {{ item.price }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['propsProducts'],
  data() {
    return {
      products: [],
      product: {},
    };
  },
  watch: {
    prpsProducts() {
      this.products = this.propsProducts;
    },
  },
  computed: {
    filterHot() {
      return this.propsProducts.filter((item) => item.is_hot);
    },
  },
  methods: {
    //! 無法轉到單一商品頁面
    goDetail(item) {
      this.$router.push({ path: `/products/product/${item.id}` });
    },
  },
};
</script>
