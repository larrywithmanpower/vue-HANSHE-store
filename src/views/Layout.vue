<template>
  <section class="py-1 bg-dark text-white fs-7">
    <div class="container">
      <div class="row justify-content-between">
          <ul class="col-md-4 pe-4 d-lg-flex align-items-center flex-wrap mb-0">
            <li class="me-3 d-flex align-items-center">
              <i class="bi bi-telephone-fill me-2"></i>
              <a href="telto: + 1234 2345 67" class="link-light"
                >+ 1234 2345 67</a
              >
            </li>
            <li class="d-flex align-items-center">
              <i class="bi bi-mailbox me-2"></i>
              <a href="mailto: mapower0708@gmail.com" class="link-light"
                >hanshe@gmail.com</a
              >
            </li>
          </ul>
          <ul class="col-md-6 d-flex justify-content-md-end list-unstyled mb-0">
            <li>
              <a href="#" class="d-inline-block link-light">
                <i class="bi bi-facebook me-3"></i>
              </a>
            </li>
            <li>
              <a href="#" class="d-inline-block"
                ><i class="bi bi-instagram text-white me-3"></i
              ></a>
            </li>
            <li>
              <a href="#" class="d-inline-block"
                ><i class="bi bi-linkedin text-white me-3"></i
              ></a>
            </li>
            <li>
              <a href="#" class="d-inline-block"
                ><i class="bi bi-github text-white"></i
              ></a>
            </li>
          </ul>
        </div>
    </div>
  </section>
  <!-- navbar -->
  <Navbar :carts="carts"></Navbar>
  <div id="main"></div>
  <router-view></router-view>
  <!-- footer -->
  <Footer></Footer>
  <!-- loginModal -->
</template>

<script>
// import loginModal from '@/components/fronted/LoginModal.vue';
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

#nav-top {
  transition: all .3s ease;
  &.navbar-light,
  &.navbar-dark {
    & .nav-link:hover,
    & .nav-link.active {
      color: $primary;
    }
  }
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
