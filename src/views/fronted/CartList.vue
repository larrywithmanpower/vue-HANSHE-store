<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-i0ld0lo9l1">
      <div class="ldio-kc4k04s39o">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="table-responsive mx-auto my-3">
    <table class="table table-sm table-borderless text-center border-light align-middle">
      <thead class="bg-primary thead-primary">
        <tr>
          <th></th>
          <th class="d-none d-md-block"></th>
          <th>品名</th>
          <th width="20%">數量</th>
          <th width="20%">單價</th>
        </tr>
      </thead>
      <tbody class="border-bottom">
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
          <td class="d-none d-md-block">
            <img
              class="img-fluid"
              :src="item.product.imageUrl"
              :alt="item.id"
              style="width: 180px; heigth: 180px"
            />
          </td>
          <td class="fs-7 fs-sm-6`">{{ item.product.title }}</td>
          <td>
            <div class="input-group input-group-sm">
              <input
                type="number"
                class="form-control text-center"
                min="1"
                v-model.number="item.qty"
                @change="updateCart(item)"
              />
            </div>
          </td>
          <td>$ {{ item.product.price }}</td>
        </tr>
        <tr>
          <td colspan="5" class="py-4 px-3">
            <div class="row justify-content-between">
              <div class="btn-group btn-group-sm col-4">
                <button
                class="btn btn-outline-primary"
                @click="$router.push('/products/category')"
                >
                  繼續選購
                </button>
                <button
                  class="btn btn-outline-danger"
                  role="group"
                  v-show="carts.length !== 0"
                  @click="delAllCarts()"
                >
                  清空購物車
                </button>
              </div>
              <div class="input-group input-group-sm col-4 w-50">
                <input type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-primary" type="button" id="button-addon2">
                  加入優惠碼
                  </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <section class="d-flex justify-content-end">
    <div class="card" style="width: 18rem;">
      <div class="card-body lh-lg">
        <h5 class="card-title mb-4">小計</h5>
        <h6 class="card-subtitle mb-4 text-muted d-flex justify-content-between">
          商品總價
          <span>NT$ {{ finalTotal }}</span>
        </h6>
        <p class="card-text mb-4 text-muted">優惠折扣</p>
        <hr>
        <p class="text-muted">總計 </p>
        <a href="#" class="btn btn-primary text-white w-100"
        @click.prevent="$router.push('/cart/cartOrder')"
        >填寫訂單資訊</a>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  inject: ['emitter'],
  data() {
    return {
      isLoading: false,
      carts: [],
      finalTotal: '',
    };
  },
  created() {
    this.getCarts();
  },
  methods: {
    getCarts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.emitter.emit('update-cart');
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
          this.emitter.emit('update-cart');
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
        // 修矮購物車數量 on navbar
        this.emitter.emit('update-cart');
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
