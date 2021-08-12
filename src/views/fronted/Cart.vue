<template>
  <div class="banner d-flex justify-content-center align-items-center">
    <h2 class="display-4 text-white routeFont mt-5 mt-lg-0" data-aos="fade-up">
      {{ $route.name }}
    </h2>
  </div>
  <section class="container my-5">
    <div class="row justify-content-center text-center g-0">
      <div class="col-4">
        <p class="py-4"
        :class="$route.name === '已選購商品' ?
        ['bg-primary', 'text-white', 'rounded-2', 'fw-bold'] : ''">
        1. 確認商品
        </p>
      </div>
      <div class="col-4"
      >
        <p class="py-4"
        :class="$route.name === '訂單資訊' ?
        ['bg-primary', 'text-white', 'rounded-2', 'fw-bold'] : ''">
        2. 訂單資訊
        </p>
      </div>
      <div class="col-4">
        <p class="py-4"
        :class="$route.name === '付款確認' ?
        ['bg-primary', 'text-white', 'rounded-2', 'fw-bold'] : ''">
        3. 確認付款
        </p>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<style lang="scss" scoped>
  .banner {
    background-image: url('../../../public/images/cartBanner.jpg');
    background-size: cover;
    background-position: center bottom;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
</style>
