<template>
  <div class="row p-5">
    <div class="col-lg-6 mb-3">
      <img class="img-fluid" :src="product.detail.imageUrl" alt="product.detail.title">
    </div>
    <div class="col-lg-6 px-5">
      <h3>{{ product.detail.title }}</h3>
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
        <li class="me-3">
          <span class="badge bg-danger">熱賣品</span>
        </li>
        <li>
          <span class="badge bg-success">有庫存</span>
        </li>
      </ul>
      <h2 class="text-primary">$ {{ product.detail.price }}</h2>
      <small class="text-muted">類別：{{ product.detail.category }}</small><br>
      <small class="text-muted">庫存量：{{ product.detail.num }}</small>
      <hr class="bg-secondary">
      <p>文案 -- 還沒做</p>
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
import { useRoute } from 'vue-router';
import { reactive, onBeforeMount } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const route = useRoute();
    const product = reactive({
      id: route.params.id,
      detail: {},
    });

    // get products
    const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${product.id}`;
    onBeforeMount(async () => {
      axios.get(url).then((res) => {
        if (res.data.success) {
          product.detail = res.data.product;
          console.log(product.detail);
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    });

    return {
      product,
    };
  },
};
</script>
