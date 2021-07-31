<template>
  <div class="container d-flex justify-content-center">
    <div class="card col-12 col-md-8">
      <div class="card-body">
        <h5 class="card-title text-center h3">確認付款</h5>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-borderless text-center">
              <thead class="bg-primary thead-primary">
                <tr>
                  <th scope="col">品名</th>
                  <th scope="col">數量</th>
                  <th scope="col">價格</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.product.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }}/{{ item.product.unit }}</td>
                  <td>NT$ {{ item.final_total }}</td>
                </tr>
              </tbody>
              <tfoot class=" border-top">
                <tr>
                  <td colspan="2" class="text-center">總計</td>
                  <td>NT$ {{ order.total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <hr>
          <h3 class="text-center">訂購者資訊</h3>
          <div class="table-responsive">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th width="100">Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th width="100">姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th width="100">電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th width="100">地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th width="100">付款狀態</th>
                  <td
                  :class="!order.is_paid ? 'text-danger' : 'text-success'"
                  >{{ !order.is_paid ? '未付款' : '付款完成' }}</td>
                </tr>
              </tbody>
              <tfoot class=" border-top">
              </tfoot>
            </table>
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="submit"
              class="btn btn-outline-primary"
              @click="payOrder"
            >
              完成付款
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      order: {
        user: {
          email: '',
          address: '',
          name: '',
          tes: '',
        },
      },
      isLoading: false,
      id: this.$route.params.id,
    };
  },
  created() {
    this.getOrders();
    this.getOrder();
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/orders?${page}`;
      this.$http.get(url).then((res) => {
        this.orders = res.data.orders;
        this.isLoading = false;
      }).catch((err) => console.log(err));
    },
    getOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order/${this.id}`;
      this.$http.get(url).then((res) => {
        this.order = res.data.order;
        this.isLoading = false;
      }).catch((err) => console.log(err));
    },
    payOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/pay/${this.id}`;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.$swal({
            title: res.data.message,
            icon: 'success',
          });
          this.isLoading = false;
          this.$router.push('/finished');
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
};
</script>
