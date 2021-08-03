<template>
  <div class="banner d-flex justify-content-center align-items-center position-relative"></div>
  <section
    class="container-fluid bg-light"
  >
    <div class="row">
      <div
        class="col-md-5"
      >
        <img
          src="../../../public/images/paid.svg"
          alt="paid"
          class="paid-img"
        >
      </div>
      <div class="col-md-7 mt-5">
        <h3 class="text-primary fw-bold">恭喜完成付款</h3>
        <p>
          付款完成後，商品預計3~5天內寄出，還請耐心等待!!
        </p>
        <a href="#" class="btn btn-outline-primary">繼續購物</a>
        <div class="mt-5">
          <h3 class="text-danger">熱銷商品</h3>
          <HotProducts/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HotProducts from '@/components/fronted/HotProducts.vue';

export default {
  components: {
    HotProducts,
  },
};
</script>

<style lang="scss" scoped>
  .banner {
    background-image: url('../../../public/images/finishedBanner.jpg');
    background-size: cover;
    background-position: top;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }

  .paid-img {
    display: block;
    margin: 0 auto;
    max-width: 450px;
    margin-top: 3rem;
    @media (max-width: 768px) {
      max-width: 300px;
    }
  }

  .z-index-1 {
    z-index: 1;
  }

  @media (min-width: 768px) {
    .text-md-dark {
      color: black;
    }
  }
</style>
