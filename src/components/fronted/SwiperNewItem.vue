<template>
  <swiper
    :spaceBetween="40"
    :breakpoints='{
      "640": {
        "slidesPerView": 2,
        "spaceBetween": 20
      },
      "768": {
        "slidesPerView": 3,
        "spaceBetween": 40
      },
      "1024": {
        "slidesPerView": 4,
        "spaceBetween": 50
      }
    }'
    :autoplay='
      {
        "delay": 2500,
        "disableOnInteraction": false,
      }'
    class="mySwiper"
  >
    <template v-for="item in filterNew" :key="item.id">
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
                  <button class="btn btn-primary text-white"
                  @click="addCart(item.id)">
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
                <small class="text-muted">$ {{ $toCurrency(item.price) }}</small>
              </p>
            </div>
          </div>
      </swiper-slide>
    </template>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  inject: ['emitter'],
  data() {
    return {
      products: [],
      qty: 1,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      }).catch((err) => { console.log(err); });
    },
    addCart(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        product_id: id,
        qty: this.qty,
      };
      this.$http.post(url, { data }).then((res) => {
        if (res.data.success) {
          this.$swal({
            title: res.data.message,
            icon: 'success',
          });
          this.emitter.emit('update-cart');
          this.isLoading = false;
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
        }
      });
    },
    goDetail(item) {
      this.$router.push(`/products/product/${item.id}`);
    },
  },
  computed: {
    filterNew() {
      return this.products.filter((item) => item.is_new);
    },
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
