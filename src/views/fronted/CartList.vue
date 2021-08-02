<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-i0ld0lo9l1">
      <div class="ldio-kc4k04s39o">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>

  <div class="table-responsive mx-auto my-3" v-if="carts.length > 0">
    <table class="table table-sm table-borderless border-light align-middle">
      <thead class="border-bottom text-primary">
        <tr class="py-3">
          <th width="5%"></th>
          <th class="d-none d-md-block" width="30%"></th>
          <th>品名</th>
          <th width="13%">數量</th>
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
              style="width: 200px; heigth: 200px"
            />
          </td>
          <td>
            <span class="fw-bold">
              {{ item.product.title }}
            </span>
          </td>
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
          <td>
            <span v-if="coupon.isUsed">
              <del>
                NT$ {{ $toCurrency(item.total) }}
              </del><br>
              <small
                class="text-success">折扣價：NT$ {{ $toCurrency(Math.round(item.final_total)) }}
              </small>
            </span>
            <span v-else>NT$ {{ $toCurrency(item.total) }}</span>
          </td>
        </tr>
        <tr>
          <td colspan="5" class="py-4 px-3">
            <div class="row justify-content-between">
              <div class="col-md-6 mb-3 mb-md-0">
                <div class="btn-group w-100">
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
              </div>
              <div class="col-md-6 d-flex justify-content-end">
                <div class="input-group">
                  <input type="text"
                  class="form-control"
                  placeholder="輸入優惠碼"
                  v-model.trim="coupon_code"
                  >
                  <button class="btn btn-outline-primary" type="button"
                  @click="addCouponCode"
                  :disabled="coupon_code === ''"
                  >
                    加入優惠碼
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-end pt-3" colspan="2">
            <h5>
              總計
            </h5>
            <h5 class="text-success mb-0"
            v-if="coupon.isUsed">
              優惠折扣
            </h5>
          </td>
          <td class="text-end pt-3 fs-5" colspan="2">
            <p v-if="!coupon.isUsed">NT$ {{ $toCurrency(total) }}</p>
            <span class="text-success"
              v-if="coupon.isUsed">
              <p  class="text-dark mb-0">
                <del>NT$ {{ $toCurrency(total) }}</del>
              </p>
              NT$ {{ $toCurrency(Math.round(coupon.finalTotal)) }}
            </span>
          </td>
          <td class="text-end">
            <a href="#" class="btn btn-outline-primary"
            @click.prevent="$router.push('/cart/cartOrder')"
            >填寫訂單資訊</a>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  <!-- <section class="d-flex justify-content-center my-5" v-else>
    <div class="card" style="width: 20rem;">
      <div class="card-body">
        <h5 class="card-title text-danger">購物車內無任何商品</h5>
        <router-link to="/products/productList" class="card-link stretched-link">還不快去買</router-link>
      </div>
    </div>
  </section>
  <section class="d-flex justify-content-end">
    <div class="card" style="width: 18rem;">
      <div class="card-body lh-lg">
        <h5 class="card-title mb-4">小計</h5>
        <h6 class="card-subtitle mb-4 text-muted d-flex justify-content-between">
          商品總價
          <span>NT$ {{ $toCurrency(total) }}</span>
        </h6>
        <h6 class="card-subtitle mb-4 text-success d-flex justify-content-between"
        v-if="coupon.isUsed">
          優惠折扣
          <span>NT$ {{ $toCurrency(Math.round(coupon.finalTotal)) }}</span>
        </h6>
        <hr>
        <p class="text-muted d-flex justify-content-between"
        v-if="coupon.isUsed">
          總計
          <span>NT$ {{ $toCurrency(Math.round(coupon.finalTotal)) }}</span>
        </p>
        <p class="text-muted d-flex justify-content-between"
        v-else>
          總計
          <span>NT$ {{ $toCurrency(total) }}</span>
        </p>
        <a href="#" class="btn btn-primary text-white w-100"
        @click.prevent="$router.push('/cart/cartOrder')"
        >填寫訂單資訊</a>
      </div>
    </div>
  </section> -->
</template>

<script>
export default {
  inject: ['emitter'],
  data() {
    return {
      isLoading: false,
      carts: [],
      total: '',
      coupon_code: '',
      coupon: {
        isUsed: false,
        finalTotal: '',
        total: '',
      },
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
        this.total = res.data.data.total;
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
          this.isLoading = false;
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
      }).catch((err) => console.log(err));
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/coupon`;
      const data = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data }).then((res) => {
        if (res.data.success) {
          this.$swal({
            title: res.data.message,
            icon: 'success',
          });
          this.coupon.isUsed = true;
          this.coupon.finalTotal = res.data.data.final_total;
          this.getCarts();
          this.isLoading = false;
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
          this.isLoading = false;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style lang="scss">
  .card {
    transition: all .3s ease-in-out;
    &:hover {
      box-shadow: 3px 5px 8px gray;
    }
  }

  .input-group {
    margin-right: -15px;
    width: 75%;
    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0;
    }
  }
</style>
