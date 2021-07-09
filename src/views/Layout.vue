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
  created() {
    this.getCarts();
    emitter.on('update-cart', () => {
      this.getCarts();
    });
  },
  methods: {
    getCarts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.carts = res.data.data.carts;
        this.finalTotal = res.data.data.final_total;
        this.isLoading = false;
      });
    },
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
