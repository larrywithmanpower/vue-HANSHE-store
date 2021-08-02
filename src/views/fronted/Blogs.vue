<template>
  <div>
    <section class="banner d-flex justify-content-center align-items-center">
    <h2 class="display-4 text-white routeFont" data-aos="fade-up">
      部落格
    </h2>
  </section>
  <router-view></router-view>
  </div>
</template>

<style lang="scss">
  $primary: #C03F19;
  .banner {
    background-image: url('../../../public/images/blogBanner.jpg');
    background-size: cover;
    background-position: center center;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
</style>
