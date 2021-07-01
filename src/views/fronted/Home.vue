<template>
  <h1 class="bg-light">
    首頁
    {{ route.name }}
  </h1>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'Home',
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
};
</script>
