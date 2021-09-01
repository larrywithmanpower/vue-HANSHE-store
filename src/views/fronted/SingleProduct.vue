<template>
  <Loading :active="isLoading">
    <div class="loading-spinner-ripple">
      <div class="loading">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="container">
    <div class="row py-5">
      <div class="col-md-6 mb-3">
        <img class="img-fluid" :src="product.imageUrl" alt="product.title" />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="h2 fw-bold">{{ product.title }}</h1>
        <ul class="d-flex list-unstyled align-items-center">
          <li class="text-warning me-3">
            <StarRating
              :rating="product.rate"
              :star-size="20"
              :read-only="true"
            />
          </li>
          <li class="me-3" v-if="product.is_hot">
            <span class="badge bg-danger">熱賣品</span>
          </li>
          <li>
            <span
              class="badge bg-success"
              v-if="product.storageNum > 0"
            >有庫存</span
            >
            <span class="badge bg-secondary" v-else>無庫存</span>
          </li>
        </ul>
        <h2 class="text-primary">$ {{ product.price }}</h2>
        <small class="text-muted">類別：{{ product.category }}</small
        ><br />
        <small class="text-muted">庫存量：{{ product.storageNum }}</small>
        <hr class="bg-secondary" />
        <p class="fs-5">{{ product.description }}</p>
        <hr class="bg-secondary" />
        <div class="input-group mb-4">
          <button
            class="btn btn-primary"
            type="button"
            @click="qty--"
            :disabled="product.storageNum === 0 || qty === 0"
          >
            <i class="bi bi-dash"></i>
          </button>
          <input
            type="text"
            class="form-control text-center"
            min="1"
            v-model.Number="qty"
            :disabled="product.storageNum === 0"
          />
          <button
            class="btn btn-primary rounded-end"
            type="button"
            @click="qty++"
            :disabled="product.storageNum === 0"
          >
            <i class="bi bi-plus"></i>
          </button>
          <button
            class="btn btn-outline-primary d-none d-md-block ms-1 rounded fw-bold border-2"
            type="button"
            @click="addCart(product.id)"
            :disabled="product.storageNum === 0 || qty === 0"
          >
            加入購物車
          </button>
        </div>
        <button
          class="btn btn-outline-primary d-block d-md-none w-100"
          type="button"
          @click="addCart(product.id)"
          :disabled="product.storageNum === 0 || qty === 0"
        >
          加入購物車
        </button>
      </div>
      <!-- nav pill -->
      <ul
        class="nav nav-pills nav-fill justify-content-center mb-3 px-2 col-12 mt-3"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            商品介紹
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            尺碼規格表
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            評價
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active fs-5"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          v-html="product.content"
        ></div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <ShoeSize />
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <Comment />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoeSize from '@/components/fronted/ShoeSize.vue';
import Comment from '@/components/fronted/Comment.vue';
import StarRating from 'vue-star-rating';

export default {
  components: {
    ShoeSize,
    Comment,
    StarRating,
  },
  data() {
    return {
      id: '',
      product: {},
      qty: 1,
      isLoading: false,
    };
  },
  inject: ['emitter'],
  created() {
    const { id } = this.$route.params;
    this.id = id;
    this.getProduct();
  },
  watch: {
    // * 監聽 $router id 值變化後，使用 $router.go(0) 重新刷新頁面
    $route() {
      this.id = this.$route.params.id;
      this.$router.go(0);
      this.getPorduct();
    },
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.emitter.emit('update-cart');
          this.product = res.data.product;
          this.isLoading = false;
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
          this.isLoading = false;
        }
      }).catch((err) => {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: err,
        });
      });
    },
    addCart(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;

      const data = {
        product_id: id,
        qty: this.qty,
      };
      this.$http.post(url, { data }).then((res) => {
        if (res.data.success) {
          this.$swal({
            title: res.data.message,
            icon: 'success',
          });
          this.emitter.emit('update-cart');
          this.isLoading = false;
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
          this.isLoading = false;
        }
      }).catch((err) => {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: err,
        });
      });
    },
  },
};
</script>
