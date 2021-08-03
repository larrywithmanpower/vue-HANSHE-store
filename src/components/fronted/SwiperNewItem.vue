<template>
  <Swiper
    :breakpoints='{
      "640": {
        "slidesPerView": 1,
        "spaceBetween": 10
      },
      "768": {
        "slidesPerView": 2,
        "spaceBetween": 30
      },
      "1024": {
        "slidesPerView": 4,
        "spaceBetween": 50
      }
    }'
    :autoplay='
      {
        "delay": 4000,
        "disableOnInteraction": false,
      }'
      :pagination="true"
    class="mySwiper pb-0 pb-lg-5"
  >
    <template v-for="item in filterNew" :key="item.id">
      <Swiper-slide>
        <div class="card card-product h-lg-100 border-0">
          <div
            class="card-product__img"
          >
            <div class="overflow-hidden">
              <img
                class="card-img-top d-none d-lg-block"
                :src="item.imageUrl"
                :alt="item.title"
              />
            </div>
            <a
              href="#"
              class="fs-5"
              @click.prevent="addMyFavorite(item)"
            >
              <i class="bi bi-heart text-primary"
              v-if="!myFavorite.includes(item.id)"></i>
              <i class="bi bi-heart-fill text-primary"
              v-else></i>
            </a>
          </div>
          <div
            class="card-body text-center align-middle position-relative d-none d-lg-block"
          >
            <p class="card-text mb-0">
              <small class="text-muted">
                {{ item.category }}
              </small>
            </p>
            <h5 class="card-title mb-0">
              {{ item.title }}
            </h5>
            <a
              href="#"
              class="stretched-link"
              @click.prevent="goDetail(item)"
            >
              詳細介紹
            </a>
          </div>
          <!-- 平板以下 -->
          <img
            class="card-img d-lg-none"
            :src="item.imageUrl"
            :alt="item.title"
          />
          <div
            class="d-lg-none card-img-overlay d-flex align-items-end p-0"
          >
            <h5
              class="
                card-title w-100 text-white
                bg-special p-3 mb-0
                d-flex align-items-end justify-content-between">
              <strong>{{ item.title }}</strong>
              <small>NT$ {{ item.price }}</small>
            </h5>
            <a
              href="#"
              class="stretched-link"
              @click.prevent="goDetail(item)"
            >
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
import { setItem, getItem } from '../../methods/localStorage';

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
      filterNews: [],
      qty: 1,
      myFavorite: getItem() || [],
    };
  },
  mounted() {
    this.getProducts();
    this.emitter.on('send-removeFavorite', () => {
      this.getFavorite();
    });
  },
  unmounted() {
    this.emitter.off('send-removeFavorite', () => {
      this.getFavorite();
    });
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.getFavorite();
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
        }
      }).catch((err) => { console.log(err); });
    },
    getFavorite() {
      this.myFavorite = getItem() || [];
    },
    addMyFavorite(item) {
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        setItem(this.myFavorite);
        // this.emitter.emit('send-favorite', this.myFavorite)
        this.$swal({ icon: 'warning', title: '已移除最愛' });
      } else {
        this.myFavorite.push(item.id);
        setItem(this.myFavorite);
        // this.emitter.emit('send-favorite', item)
        this.$swal({ icon: 'success', title: '加入成功！' });
      }
      this.emitter.emit('get-favorite');
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
          this.isLoading = false;
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
