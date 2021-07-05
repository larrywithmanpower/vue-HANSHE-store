<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :autoplay='
      {
        "delay": 5000,
        "disableOnInteraction": false,
      }'
    :pagination="true"
    class="mySwiper"
  >
    <template v-for="item in products" :key="item.id">
      <swiper-slide>
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
      </swiper-slide>
    </template>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

export default {
  props: ['propsProducts'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [],
    };
  },
  watch: {
    propsProducts() {
      this.products = this.propsProducts;
    },
  },
  methods: {
  },
};
</script>

<style lang="scss">
  #app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>
