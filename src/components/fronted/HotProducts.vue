<template>
  <Swiper
    :spaceBetween="10"
    :breakpoints='{
      "640": {
        "slidesPerView": 1,
        "spaceBetween": 10
      },
      "768": {
        "slidesPerView": 2,
        "spaceBetween": 10
      },
      "1024": {
        "slidesPerView": 3,
        "spaceBetween": 15
      }
    }'
    :autoplay='
      {
        "delay": 4000,
        "disableOnInteraction": false,
      }'
    class="mySwiper pb-6 pb-md-1 pt-1"
  >
    <template class="mb-3" v-for="item in filterHot" :key="item.id">
      <Swiper-slide>
        <div class="card card-product">
          <div class="card-product__img">
            <img :src="item.imageUrl" class="card-img-top" :alt="item.title" />
          </div>
          <div class="card-body text-center">
            <p class="card-text mb-0">
              <small class="text-muted">{{ item.category }}</small>
            </p>
            <h5 class="card-title mb-0">
              {{ item.title }}
            </h5>
            <a class="text-primary stretched-link"
              @click="goDetail(item)">
              去看看...
            </a>
          </div>
        </div>
      </Swiper-slide>
    </template>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination]);

export default {
  inject: ['emitter'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [],
      product: {},
      qty: 1,
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
    filterHot() {
      return this.products.filter((item) => item.is_hot);
    },
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
        }
      }).catch((err) => console.log(err));
    },
    goDetail(item) {
      this.$router.push({ path: `/products/product/${item.id}` });
    },
  },
};
</script>
