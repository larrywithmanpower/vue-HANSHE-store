<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-9">
        <h4>優惠碼 carsouel ??</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="item in filterCategories" :key="item.id">
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
                    <button class="btn btn-primary text-white"
                    @click="goDetail(item)"
                    >
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
      </div>
      <div class="col-lg-3">
        <div class="list-group">
          <h2
            class="
              text-center
              border-bottom border-3 border-primary
              pb-2
              mb-0
              h4
            "
          >
            產品類別
          </h2>
          <a
            href="#"
            class="
              list-group-item list-group-item-action list-group-item-primary
              d-flex
              justify-content-between
            "
            aria-current="true"
            v-for="(item, index) in state.categories"
            :key="index"
            @click.prevent="state.filterCategory = item"
            :class="{ active: state.filterCategory === item }"
          >
            {{ !item ? "所有商品" : item }}
            <i class="bi bi-box-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  reactive, onBeforeMount, computed,
} from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const state = reactive({
      products: '',
      categories: ['', '休閒', '套裝', '靴子', 'V'],
      filterCategory: '',
    });

    // get products
    const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
    onBeforeMount(async () => {
      axios.get(url).then((res) => {
        if (res.data.success) {
          state.products = res.data.products;
          console.log(state.products);
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    });

    // filter products
    const filterCategories = computed(() => {
      if (state.filterCategory) {
        return state.products.filter((item) => item.category.match(state.filterCategory));
      }
      return state.products;
    });

    // goDetail
    const router = useRouter();
    const goDetail = (product) => {
      router.push(`/products/product/${product.id}`);
    };

    return {
      state,
      filterCategories,
      goDetail,
    };
  },
};
</script>

<style lang="scss" scope>
  $primary: #59AB6E;

  .card-product {
    border: none;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 7px 15px -5px rgb(146, 146, 146);
      .card-title {
        color: $primary;
      }
    }
    &__img {
      position: relative;
    }
    &__imgOverlay {
      background: rgba(255, 254, 254, 0.5);
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 30px 5px;
      transform: translateY(30px);
      opacity: 0;
      z-index: -1;
      transition: all .48s ease;
    }
    &:hover .card-product__imgOverlay{
      opacity: 1;
      z-index: 1;
      transform: translateY(0);
    }
  }
</style>
