<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
    ref="myCarousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../../public/images/carouselImg-1.jpg"
          class="d-block w-100" alt="carouselImg-1"
        />
        <div
          class="carousel-caption d-none d-md-block"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2>穿出屬於自己的
            <span class="decoration-text">Style</span>
          </h2>
          <p class="fs-4">找尋屬於自己的風格，創造嶄新的外表</p>
          <button
            type="button"
            class="btn-animation pulse"
            @click="$router.push('/products/productList')"
          >
            看看商品
          </button>
          <div class="position-relative">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../../../public/images/carouselImg-2.jpg"
          class="d-block w-100"
          alt="carouselPic"
        />
        <div class="carousel-caption d-none d-md-block">
          <h2>保護雙腳跑遍世界
            <span class="decoration-text text-primary">HANSHE</span>
          </h2>
          <blockquote class="blockquote">
            <p class="fs-4">婚姻如同穿鞋，舒服不舒服，只有腳知道。</p>
          </blockquote>
          <figcaption class="blockquote-footer text-light">
            <cite title="Source Title">雷舒雁</cite>
          </figcaption>
          <button
            type="button"
            class="btn-animation offset"
            @click="$router.push('/products/productList')"
          >
            為自己挑一雙好鞋
          </button>
          <div class="position-relative">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../../../public/images/carouselImg-3.jpg"
          class="d-block w-100"
          alt="carouselPic"
        />
        <div class="carousel-caption">
          <h2>
            夏季大拍賣
            <span class="decoration-text">Discount</span>
          </h2>
          <p class="fs-4 d-none d-md-block">不同的時間點，一定要有不同的優惠，在最困難的時間，寒舍給您最大的折扣</p>
          <button
            type="button"
            class="btn-animation raise"
            v-clipboard:copy="couponCode"
            v-clipboard:success="onSuccess"
            v-clipboard:error="onError"
          >
            取得優惠碼
          </button>
          <div class="position-relative">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { Carousel } from 'bootstrap';

export default {
  inject: ['emitter'],
  data() {
    return {
      myCarousel: {},
      couponCode: 'fallSale',
    };
  },
  mounted() {
    this.myCarousel = new Carousel(this.$refs.myCarousel, {
      interval: 4000,
    });
  },
  methods: {
    onSuccess() {
      this.emitter.emit('getCouponCode', this.couponCode);
      this.$swal({
        width: '27rem',
        title: '優惠折扣取得成功，記得要貼到優惠欄位',
        icon: 'success',
      });
    },
    onError() {
      this.$swal({
        title: '優惠折扣取得失敗',
        icon: 'error',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.decoration-text {
  font-family: 'Pacifico', cursive;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 21rem;
  @media (max-width: 768px) {
    bottom: 1.25rem;
  }
}

</style>
