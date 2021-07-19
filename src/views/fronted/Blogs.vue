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
    background-image: url(https://images.unsplash.com/photo-1604245379337-14b0556c6cbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMzfHxzaG9lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);
    background-size: cover;
    background-position: center center;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
</style>
