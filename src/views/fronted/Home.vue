<template>
  <h1 class="bg-light">
    首頁
    {{ pageTitle }}
  </h1>
</template>

<script>
export default {
  name: 'Home',
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
