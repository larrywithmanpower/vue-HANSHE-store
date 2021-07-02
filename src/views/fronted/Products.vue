<template>
  <div class="banner d-flex justify-content-center align-items-center position-relative">
    <h2 class="display-4 text-white" data-aos="fade-up">
      {{ pageTitle }}
    </h2>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '',
    };
  },
  created() {
    this.pageTitle = this.$route.name;
  },
};
</script>

<style lang="scss">
  .banner {
    background-image: url(https://images.unsplash.com/photo-1483721310020-03333e577078?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80);
    background-size: cover;
    background-position: bottom;
    height: 400px;
  }
</style>
