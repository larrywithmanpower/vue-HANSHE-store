<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-i0ld0lo9l1">
      <div class="ldio-kc4k04s39o">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="row p-5">
    <div class="col-md-6 mb-3">
      <img class="img-fluid" :src="product.imageUrl" alt="product.title">
    </div>
    <div class="col-md-6 px-5">
      <h3>{{ product.title }}</h3>
      <ul class="d-flex list-unstyled align-items-center">
        <li class="text-warning me-3">
          <span class="me-1">5.0</span>
          <span>
            <i class="bi bi-star-fill me-1"></i>
            <i class="bi bi-star-fill me-1"></i>
            <i class="bi bi-star-fill me-1"></i>
            <i class="bi bi-star-fill me-1"></i>
            <i class="bi bi-star-fill me-1"></i>
          </span>
        </li>
        <li class="me-3" v-if="product.is_hot">
          <span class="badge bg-danger">熱賣品</span>
        </li>
        <li>
          <span class="badge bg-success"  v-if="product.storageNum > 0">有庫存</span>
          <span class="badge bg-secondary" v-else>無庫存</span>
        </li>
      </ul>
      <h2 class="text-primary">$ {{ product.price }}</h2>
      <small class="text-muted">類別：{{ product.category }}</small><br>
      <small class="text-muted">庫存量：{{ product.storageNum }}</small>
      <hr class="bg-secondary">
      <p>{{ product.description }}</p>
      <hr class="bg-secondary">
      <div class="input-group mb-4">
        <button class="btn btn-primary" type="button"
        @click="qty --">
          <i class="bi bi-dash"></i>
        </button>
        <input type="text" class="form-control text-center"
        min="1"
        v-model.Number="qty">
        <button class="btn btn-primary" type="button"
        @click="qty ++"
        >
          <i class="bi bi-plus"></i>
        </button>
        <button class="btn btn-outline-primary" type="button"
        @click="addCart(product.id)"
        >加入購物車</button>
      </div>
    </div>
    <!-- nav pill -->
    <ul class="nav nav-pills nav-fill justify-content-center
    mb-3 px-2 col-12"
    id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active"
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button" role="tab" aria-controls="pills-home" aria-selected="true">商品介紹</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile"
        type="button"
        role="tab" aria-controls="pills-profile" aria-selected="false">尺碼規格表</button>
      </li>
      <li class="nav-item"
      role="presentation">
        <button class="nav-link" id="pills-contact-tab"
        data-bs-toggle="pill" data-bs-target="#pills-contact"
        type="button"
        role="tab" aria-controls="pills-contact" aria-selected="false">評價</button>
      </li>
    </ul>
    <div class="tab-content"
      id="pills-tabContent">
      <div class="tab-pane fade show active"
      id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
      <div class="tab-pane fade"
      id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
      <div class="tab-pane fade"
      id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['propsProducts', 'propsCategories'],
  data() {
    return {
      id: this.$route.params.id,
      product: {},
      qty: 1,
      isLoading: false,
    };
  },
  inject: ['emitter'],
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.product = res.data.product;
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
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
          // eslint-disable-next-line no-alert
          alert(`${id}成功加入購物車`);
          this.emitter.emit('update-cart');
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert('購物車加入失敗');
        }
      });
    },
  },
};
</script>
