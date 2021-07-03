<template>
  <nav
    class="navbar navbar-expand-lg sticky-top"
    :class="[classList.navbarTop, classList.navbarInner]"
    id="nav-top"
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
          align-self-center
        "
        id="layoutNav"
      >
        <div class="navbar-nav">
          <router-link to="/home" class="nav-link">首頁</router-link>
          <router-link to="/about" class="nav-link">關於寒舍</router-link>
          <router-link to="/products/category" class="nav-link"
            >寒舍商品</router-link
          >
          <a href="#" class="nav-link">聯絡寒舍</a>
        </div>
        <div class="navbar">
          <a href="#" class="nav-link">
            <i class="bi bi-cart-plus me-2"></i>
            <small>[ 0 ]</small>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      classList: {},
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY;
      const main = document.querySelector('#main');
      if (windowY > main.offsetTop) {
        this.classList = {
          navbarTop: 'bg-light',
          navbarInner: ['navbar-light', 'shadow'],
        };
      } else {
        this.classList = {
          navbarTop: 'bg-dark',
          navbarInner: 'navbar-dark',
        };
      }
    });
  },
};
</script>
