<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-i0ld0lo9l1">
      <div class="ldio-kc4k04s39o">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="container py-5">
    <div class="row">
      <!-- list -->
      <div class="col-lg-3">
        <div class="list-group rounded-0 mb-5">
          <a
            href="#"
            class="
              list-group-item list-group-item-action
              border-0
              d-flex
              justify-content-between
              list-group-item--hover
            "
            aria-current="true"
            @click.prevent="filterCategory = ''"
            :class="{ active: filterCategory === '' }"
          >
            所有商品
            <i class="bi bi-chevron-right list-group-icon"></i>
          </a>
          <a
            href="#"
            class="
              list-group-item
              d-flex
              justify-content-between
              list-group-item--hover
            "
            aria-current="true"
            v-for="(item, index) in categories"
            :key="index"
            @click.prevent="filterCategory = item"
            :class="{ active: filterCategory === item }"
          >
            {{ item }}
            <i class="bi bi-chevron-right list-group-icon"></i>
          </a>
        </div>
      </div>
      <!-- products -->
      <div class="col-lg-9">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-3">
          <div class="col" v-for="item in filterCategories" :key="item.id" data-aos="zoom-in"
          data-aos-once="true">
            <div class="card card-product h-100">
              <div
                class="card-product__img"
              >
                <div class="overflow-hidden">
                  <img
                    :src="item.imageUrl"
                    class="card-img-top"
                    :alt="item.title"
                  />
                </div>
                <a
                  href="#"
                  class="fs-5"
                  :class="{
                    'text-primary': myFavorite.includes(item),
                    'text-white': !myFavorite.includes(item)
                  }"
                  @click.prevent="addMyFavorite(item)"
                >
                  <i class="bi bi-heart"></i>
                </a>
              </div>
              <div
                class="card-body text-center position-relative"
              >
                <p class="card-text mb-0">
                  <small class="text-muted">
                    {{ item.category }}
                  </small>
                </p>
                <h5 class="card-title mb-0">
                  {{ item.title }}
                </h5>
                <p class="card-text font-monospace fs-4 mb-0">
                  <small class="text-muted">
                    $ {{ item.price }}
                  </small>
                </p>
                <a
                  href="#"
                  class="stretched-link"
                  @click.prevent="goDetail(item)"
                ></a>
              </div>
              <button
                class="btn btn-primary text-white rounded-0 py-2"
                @click="addCart(item.id)"
                :disabled="item.storageNum === 0"
                >
                <i class="bi bi-cart"></i>
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  props: ['propsProducts', 'propsCategories'],
  data() {
    return {
      products: [],
      categories: [],
      filterCategory: '',
      isLoading: false,
      pageTitle: '',
      myFavorite: storageMethods.getItem() || [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.pageTitle = this.$route.name;
    this.emitter.emit('page-title', this.pageTitle);
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
    this.emitter.on('send-removeFavorite', () => {
      this.getFavorite();
    });
    this.getFavorite();
  },
  watch: {
    propsProducts() {
      this.products = this.propsProducts;
    },
    propsCategories() {
      this.categories = this.propsCategories;
    },
    myFavorite: {
      handler() {
        storageMethods.setItem(this.myFavorite);
      },
      deep: true,
    },
  },
  methods: {
    getFavorite() {
      this.myFavorite = storageMethods.getItem();
    },
    addMyFavorite(item) {
      if (this.myFavorite.includes(item)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item), 1);
        storageMethods.setItem(this.myFavorite);
        // this.emitter.emit('send-favorite', this.myFavorite)
        this.$swal({ icon: 'warning', title: '已移除最愛' });
      } else {
        this.myFavorite.push(item);
        storageMethods.setItem(this.myFavorite);
        // this.emitter.emit('send-favorite', item)
        this.$swal({ icon: 'success', title: '加入成功！' });
      }
      this.emitter.emit('get-favorite');
    },
    goDetail(item) {
      this.$router.push(`/products/product/${item.id}`);
    },
    addCart(id, qty = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data }).then((res) => {
        if (res.data.success) {
          this.emitter.emit('update-cart');
          this.$swal({
            title: res.data.message,
            icon: 'success',
          });
          this.isLoading = false;
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
          this.isLoading = false;
        }
      }).catch((err) => console.log(err));
    },
  },
  computed: {
    filterCategories() {
      if (this.filterCategory) {
        return this.products.filter((item) => item.category.match(this.filterCategory));
      }
      return this.products;
    },
  },
};
</script>

<style lang="scss">
  $primary: #C03F19;
  .list-group {
    &-item--hover {
      border-bottom: 2px solid transparent;
      transition: all 0.3s ease;
      &.active {
        z-index: 1;
      }
      &:hover {
        color: white;
        background-color: $primary;
        & .list-group-icon {
          transition: 0.3s;
          // using rotate() with turn can make animation
          transform: rotate(1turn);
        }
      }
    }
  }

  .card-product {
    border: none;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 7px 15px -5px rgb(146, 146, 146);
      .card-title {
        color: $primary;
      }
      .overflow-hidden img {
        transform: scale(1.2);
      }
    }
    &__img {
      position: relative;
      a {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
        z-index: 10;
      }
      img {
        transition: all 0.5s ease;

      }
    }
  }
</style>
