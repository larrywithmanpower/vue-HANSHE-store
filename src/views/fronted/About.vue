<template>
  <div class="banner d-flex justify-content-center align-items-center position-relative">
    <h2 class="display-4" data-aos="fade-up">
      {{ pageTitle }}
    </h2>
  </div>
  <div class="container">ABOUT</div>
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

<style lang="scss" scoped>
  .banner {
    background-image: url(https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80);
    background-size: cover;
    background-position: center center;
    height: 400px;
  }
</style>
