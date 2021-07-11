<template>
  <div class="banner d-flex flex-column
  justify-content-center align-items-center position-relative">
    <h2 class="display-4 text-white routeFont mb-3" data-aos="fade-up">
    <!-- 使用mitt來解決取route不動的問題 -->
      {{$route.name}}
    </h2>
    <button class="btn btn-lg btn-success"
    @click="$router.push('/')"
    >回首頁</button>
  </div>
</template>

<style lang="scss" scoped>
  .banner {
    background-image: url(https://images.unsplash.com/photo-1579460372796-3aa720f44e46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80);
    background-size: cover;
    background-position: center bottom;
    height: 500px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
</style>
