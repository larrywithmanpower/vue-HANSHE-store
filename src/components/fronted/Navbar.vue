<template>
  <nav
    class="navbar navbar-expand-lg start-0 end-0"
    id="nav-top"
    :class="[classList.navbarTop, classList.navbarInner]"
  >
    <div class="container d-flex justify-content-between align-items-center">
      <router-link
        to="/"
        class="navbar-brand logoFont text-primary"
      >
        HanShe
      </router-link
      >
      <button
        class="navbar-toggler"
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
          <router-link to="/about" class="nav-link">關於寒舍</router-link>
          <router-link to="/blogs/blogList" class="nav-link">部落格</router-link>
          <router-link to="/products/productList" class="nav-link">寒舍商品</router-link>
          <router-Link to="/cart/cartList" class="nav-link">
            <i class="bi bi-cart-plus me-2"></i>
            <small>[ {{ carts.length }} ]</small>
          </router-Link >
          <div class="nav-item dropdown">
            <a
              href="javascript:void(0)"
              class="
                bg-transparent
                border-0
                nav-link
                text-start"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-heart me-2"></i>
              <small>[ {{ myFavorite.length }} ]</small>
            </a>
            <div
              class="dropdown-menu dropdown-menu-end text-muted dropdown--rwd"
            >
              <table
                class="table table-sm align-middle text-center"
                v-if="myFavorite.length > 0"
              >
                <thead>
                  <tr>
                    <th width="35%"></th>
                    <th width="40%">品名</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item) in myFavoriteProducts" :key="item.id">
                    <td>
                      <img :src="item.imageUrl" alt="" class="img-thumbnail">
                    </td>
                    <td>{{ item.title }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger"
                        @click="removeFavorite(item)"
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 class="text-primary h4 text-center mt-2" v-else>
                您還未找到喜歡的產品喔!!
              </h2>
              <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-danger"
                :disabled="myFavorite.length === 0"
                @click="removeAll()"
              >
                刪除所有最愛
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { setItem, getItem } from '@/methods/localStorage';

export default {
  inject: ['emitter'],
  data() {
    return {
      classList: '',
      carts: [],
      myFavorite: getItem() || [],
      products: [],
      myFavoriteProducts: [],
      fullWidth: window.innerWidth,
    };
  },
  methods: {
    getFavorite() {
      this.myFavorite = getItem() || [];
    },
    removeFavorite(favorite) {
      this.myFavoriteProducts.forEach((item) => {
        console.log(item.id === favorite.id);
        if (item.id === favorite.id) {
          this.myFavorite.splice(item.id, 1);
          this.myFavoriteProducts.splice(item.id, 1);
          setItem(this.myFavorite);
          this.emitter.emit('send-removeFavorite');
          this.$swal({ icon: 'success', title: '刪除成功！' });
        }
      });
    },
    removeAll() {
      localStorage.clear();
      this.getFavorite();
      this.getFavoriteProducts();
      this.emitter.emit('send-removeFavorite');
      this.$swal({ icon: 'success', title: '已全部清除！' });
    },
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
          navbarTop: ['bg-transparent-dark'],
          navbarInner: ['navbar-dark', 'fw-bold', 'py-3', 'position-absolute', 'z-index-2', 'fs-5'],
        };
      }
    },
    getCarts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.carts = res.data.data.carts;
        this.finalTotal = res.data.data.final_total;
        console.log(this.$router);
      });
    },
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.getFavoriteProducts();
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
          this.isLoading = false;
        }
      });
    },
    getFavoriteProducts() {
      this.myFavoriteProducts = this.products.filter((item) => this.myFavorite.includes(item.id));
    },
  },
  mounted() {
    this.navbarTransition();
    window.addEventListener('scroll', this.navbarTransition);
    this.emitter.on('update-cart', this.getCarts);
    this.getCarts();
    this.getProducts();
    this.getFavorite();
    this.emitter.on('get-favorite', () => {
      this.getFavorite();
      this.getFavoriteProducts();
    });
  },
  unmounted() {
    window.removeEventListener('scroll', this.navbarTransition);
    this.emitter.off('update-cart', this.getCarts);
    this.emitter.off('get-favorite', () => {
      this.getFavorite();
      this.getFavoriteProducts();
    });
  },
};
</script>

<style lang="scss">
  $primary: #d33809;
  .z-index-2 {
    z-index: 2;
  }

  #nav-top {
    transition: all .5s ease-in-out;
    &.bg-transparent-dark {
      background-color: rgba(0, 0, 0, 0.5);
    }
    &.navbar-dark {
      .nav-link {
        color:#fff;
      }
      & .nav-link:hover,
      & .nav-link.active {
        color: $primary;
      }
    }
    &.navbar-light {
      & .nav-link:hover,
      & .nav-link.active {
        color: $primary;
      }
    }
  }

  .btn-outline-primary:hover {
    color: #fff;
  }

  .dropdown--rwd {
    min-width: 350px;
    @media (max-width: 414px) {
      min-width: 200px;
      z-index: 10;
    }
  }
</style>
