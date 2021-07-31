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
          <router-link to="/products/productList" class="nav-link">寒舍商品</router-link
          >
          <router-Link to="/cart/cartList" class="nav-link">
            <i class="bi bi-cart-plus me-2"></i>
            <small>[ {{ carts.length }} ]</small>
          </router-Link >
          <!-- <button class="bg-transparent border-0 nav-link text-start">
            <i class="bi bi-heart me-2"></i>
            <small>[ {{ myFavorite.length }} ]</small>
          </button> -->
          <div class="nav-item dropdown">
            <a
              href="javascript:void(0)"
              class="
              bg-transparent
              border-0
              nav-link
              text-start"
              type="a"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-heart me-2"></i>
              <small>[ {{ myFavorite.length }} ]</small>
            </a>
            <!-- <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Menu item</a></li>
              <li><a class="dropdown-item" href="#">Menu item</a></li>
              <li><a class="dropdown-item" href="#">Menu item</a></li>
            </ul> -->
            <div class="dropdown-menu dropdown-menu-end text-muted"
            style="min-width: 400px">
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
                  <tr v-for="(item) in myFavorite" :key="item.id">
                    <td>
                      <img :src="item.imageUrl" alt="" class="img-thumbnail">
                    </td>
                    <td>{{ item.title }}</td>
                    <td>
                      <button
                        class="btn btn-outline-danger"
                        @click="removeFavorite(item.id)"
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
              <button class="btn btn-danger"
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
// 轉型
const storageMethods = {
  setItem(MyFavorite) {
    const favoriteString = JSON.stringify(MyFavorite);
    localStorage.setItem('MyFavorite', favoriteString);
  },
  getItem() {
    return JSON.parse(localStorage.getItem('MyFavorite'));
  },
};

export default {
  inject: ['emitter'],
  data() {
    return {
      classList: '',
      carts: [],
      myFavorite: storageMethods.getItem() || [],
      products: [],
      fullWidth: window.innerWidth,
    };
  },
  methods: {
    getFavorite() {
      this.myFavorite = storageMethods.getItem() || [];
    },
    removeFavorite(id) {
      // eslint-disable-next-line no-shadow
      this.myFavorite.forEach((item) => {
        if (item.id === id) {
          this.myFavorite.splice(item.id, 1);
          storageMethods.setItem(this.myFavorite);
          this.emitter.emit('send-removeFavorite');
          this.$swal({ icon: 'success', title: '刪除成功！' });
        }
      });
    },
    removeAll() {
      localStorage.clear();
      this.getFavorite();
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
          navbarInner: ['navbar-dark', 'fw-bold', 'py-3', 'position-absolute', 'z-index-2', 'h5'],
        };
      }
    },
    getCarts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.carts = res.data.data.carts;
        this.finalTotal = res.data.data.final_total;
      });
    },
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.navbarTransition);
    this.emitter.on('update-cart', this.getCarts);
    // ! 要加上下面那行，不然重新整理會沒有值
    this.getCarts();
    this.getProducts();
    this.getFavorite();
    this.emitter.on('get-favorite', () => {
      this.getFavorite();
    });
  },
  unmounted() { // 離開頁面後移除監聽事件
    window.removeEventListener('scroll', this.navbarTransition);
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
        color: $primary;
      }
      & .nav-link:hover,
      & .nav-link.active {
        color: #fff;
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

</style>
