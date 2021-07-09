<template>
  <nav
    class="navbar navbar-expand-lg"
    id="nav-top"
    :class="[classList.navbarTop, classList.navbarInner]"
  >
    <div class="container d-flex justify-content-between align-items-center">
      <router-link to="/" class="navbar-brand logoFont text-primary"
        >HanShe</router-link
      >
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#layoutNav"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="
          collapse
          navbar-collapse
          mx-lg-auto
          d-lg-flex
          justify-content-lg-end
          align-items-center
        "
        id="layoutNav"
      >
        <div class="navbar-nav">
          <router-link to="/home" class="nav-link">首頁</router-link>
          <router-link to="/about" class="nav-link">關於寒舍</router-link>
          <router-link to="/products/category" class="nav-link">寒舍商品</router-link
          >
          <router-Link to="/cart" class="nav-link">
            <i class="bi bi-cart-plus me-2"></i>
            <small>[ {{ carts.length }} ]</small>
          </router-Link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['carts'],
  data() {
    return {
      classList: '',
    };
  },
  methods: {
    navbarTransition() {
      const windowY = window.scrollY;
      const main = document.querySelector('#main');
      if (windowY > main.offsetTop) {
        this.classList = {
          navbarTop: 'bg-light',
          navbarInner: ['navbar-light', 'shadow', 'fixed-top'],
        };
      } else {
        this.classList = {
          navbarTop: 'bg-dark',
          navbarInner: ['navbar-dark', 'fw-bold', 'sticky-top'],
        };
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.navbarTransition);
  },
  unmounted() { // 離開頁面後移除監聽事件
    window.removeEventListener('scroll', this.navbarTransition);
  },
};
</script>

<style lang="scss">
  $primary: #59AB6E;

  #nav-top {
    transition: all .5s ease-in-out;
    &.navbar-light,
    &.navbar-dark {
      & .nav-link:hover,
      & .nav-link.active {
        color: $primary;
      }
    }
  }

  .btn-outline-primary:hover {
    color: #fff;
  }

</style>
