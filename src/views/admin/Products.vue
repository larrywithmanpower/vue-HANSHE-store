<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <h2 class="mb-3 fw-bold">商品列表</h2>
    <button class="btn btn-outline-primary mb-3"
    @click="openModal('new')"
    >新增產品</button>
    <div class="table-responsive">
      <table class="table table-sm align-middle table-hover">
        <thead>
          <tr>
            <th scope="col" width="5%">#</th>
            <th scope="col" width="30%">商品</th>
            <th scope="col" width="10%">價格</th>
            <th scope="col" width="10%">庫存</th>
            <th scope="col" width="10%">啟用狀態</th>
            <th width="15%"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="item.id">
            <th scope="row">1</th>
            <td class="d-flex align-items-center">
              <img :src="item.imageUrl" :alt="`第${index + 1}圖`"
              class="img-fluid me-3"
              width="150"
              >
              <span>
                {{ item.title }}<br>
                <small class="text-muted"
                v-if="item.sex === 'male'">男鞋</small>
                <small class="text-muted"
                v-else-if="item.sex === 'female'">女鞋</small>
                <small class="text-muted"
                v-else-if="item.sex === 'neutral'">中性</small>
                <br>
                <small v-if="item.is_hot" class="badge bg-danger">熱銷</small>
              </span>
            </td>
            <td>$ {{ item.price }}</td>
            <td>{{ item.storageNum }}</td>
            <td>
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span class="text-danger" v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary"
                type="button"
                @click="openModal('edit', item)"
                >編輯</button>
                <button class="btn btn-outline-danger"
                type="button"
                >刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <ProductModal ref="ProductModal"
  id="ProductModal"
  :is-new="isNew"
  @update-product="updateProduct"
  :tempProduct="tempProduct"></ProductModal>
</template>

<script>
import ProductModal from '@/components/admin/ProductModal.vue';

export default {
  components: {
    ProductModal,
  },
  inject: ['emitter'],
  data() {
    return {
      isLoading: false,
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNew: false,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          // console.log(this.products);
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      }).catch((err) => { console.log(err); });
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.isNew = true;
          this.tempProduct = {
            imagesUrl: [],
          };
          this.$refs.ProductModal.showModal();
          break;
        case 'edit':
          this.isNew = false;
          this.tempProduct = {
            imagesUrl: [],
            ...item,
          };
          this.$refs.ProductModal.showModal();
          break;
        default:
          break;
      }
    },
    updateProduct(tempProduct) {
      if (this.isNew === true) {
        // ! 新增
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product`;
        this.$http.post(url, { data: tempProduct }).then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
            this.getProducts();
            this.$refs.ProductModal.hideModal();
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、'),
            });
          }
        }).catch((err) => {
          console.log(err);
        });
      } else {
        // ! 編輯
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${tempProduct.id}`;
        this.$http.put(url, { data: tempProduct }).then((res) => {
          this.$refs.ProductModal.hideModal();
          if (res.data.success) {
            console.log(res.data.message);
            this.getProducts();
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、'),
            });
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    },
  },
};
</script>
