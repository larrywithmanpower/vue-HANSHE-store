<template>
  <!-- <section class="bg-dark
  text-start">
    <Marguee></Marguee>
  </section> -->
  <!-- navbar -->
  <Navbar :carts="carts"></Navbar>
  <div id="main"></div>
  <router-view></router-view>
  <!-- footer -->
  <Footer></Footer>
  <!-- loginModal -->
</template>

<script>
import Navbar from '@/components/fronted/Navbar.vue';
import Footer from '@/components/fronted/Footer.vue';
import emitter from '@/methods/emitter';

export default {
  components: {
    Navbar,
    Footer,
  },
  provide() {
    return {
      emitter,
    };
  },
  data() {
    return {
      carts: [],
      isLoading: false,
      finalTotal: '',
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  $primary: #59AB6E;

.logoFont {
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;
}

#layoutFooter {
  a:hover {
    color: #68bb7d;
  }
  ul.footer-icons li {
    width: 2em;
    height: 2em;
    line-height: 2em;
    &:hover {
    background-color: #cfd6e1;
    transition: .5s;
    i {
      color:#212934;
    }
    }
  }
}
</style>
