<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-i0ld0lo9l1">
      <div class="ldio-kc4k04s39o">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="banner d-flex justify-content-center align-items-center position-relative">
    <h2 class="display-4 text-white routeFont" data-aos="fade-up">
    <!-- 使用mitt來解決取route不動的問題 -->
      {{pageTitle}}
    </h2>
  </div>
  <div class="table-responsive col-10 mx-auto my-5">
      <table class="table table-sm text-center align-middle">
        <thead class="bg-primary thead-primary">
          <tr>
            <th></th>
            <th></th>
            <th>品名</th>
            <th width="20%">數量</th>
            <th width="20%">單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts" :key="item.id">
            <td>
              <button
                class="btn btn-sm btn-outline-danger"
                type="button"
                @click="delCartItem(item.id)"
              >
                <i class="bi bi-x"></i>
              </button>
            </td>
            <td>
              <img class="img-fluid"
              :src="item.product.imageUrl"
              :alt="item.id"
              style="width: 180px; heigth: 180px"
              >
            </td>
            <td>{{ item.product.title }}</td>
            <td>
              <div class="input-group input-group-sm">
                  <input type="number"
                      class="form-control text-center"
                      min="1"
                      v-model.number="item.qty"
                      @change="updateCart(item)">
                  <span class="input-group-text">{{ item.product.unit }}</span>
              </div>
            </td>
            <td>$ {{ item.product.price }}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-outline-danger w-50"
      v-show="carts.length !== 0"
      @click="delAllCarts()"
      >清空購物車</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '',
      isLoading: false,
      carts: [],
      finalTotal: '',
    };
  },
  inject: ['emitter'],
  created() {
    this.pageTitle = this.$route.name;
    this.emitter.emit('page-title', this.pageTitle);
    this.getCarts();
  },
  methods: {
    getCarts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.carts = res.data.data.carts;
        this.finalTotal = res.data.data.final_total;
        this.isLoading = false;
      });
    },
    updateCart(item) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.isLoading = true;
      this.$http.put(url, { data }).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          console.log(res.data.data.qty);
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    delCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.$swal({
            title: res.data.message,
            icon: 'success',
          });
          this.isLoading = false;
          this.emitter.emit('update-cart');
          this.getCarts();
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
        }
      });
    },
    delAllCarts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.$swal({
            title: res.data.message,
            icon: 'success',
          });
          this.isLoading = false;
          this.getCarts();
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
          this.isLoading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
  .banner {
    background-image: url(https://images.unsplash.com/photo-1530601925101-42efae542166?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80);
    background-size: cover;
    background-position: center bottom;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
</style>
