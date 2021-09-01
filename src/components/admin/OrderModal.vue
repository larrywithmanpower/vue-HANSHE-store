<template>
  <div
    class="modal"
    tabindex="-1"
    id="orderModal"
    ref="orderModal"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title bg-datk text-white">
            訂單細節
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th>姓名</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th>訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>
                      {{ new Date(tempOrder.create_at * 1000).toLocaleDateString() }}
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <span
                        :class="[
                        { 'text-success': tempOrder.is_paid },
                        { 'text-danger': !tempOrder.is_paid }
                        ]"
                      >
                          {{ tempOrder.is_paid ? '已付款' : '未付款' }}
                      </span>
                      <span
                        class="ms-3"
                        v-if="tempOrder.is_paid"
                      >
                        付款日期： {{
                          tempOrder.paid_date
                          ? new Date(tempOrder.paid_date * 1000).toLocaleDateString()
                          : '補繳款，須查詢記帳紙本'
                        }}
                      </span>
                  </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>{{ tempOrder.total }}</td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <tbody>
                  <tr
                    v-for="item in tempOrder.products"
                    :key="item.id"
                  >
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>
                      {{ item.qty }} / {{ item.product.unit }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['order'],
  data() {
    return {
      orderModal: {},
      tempOrder: {},
    };
  },
  mounted() {
    this.orderModal = new Modal(this.$refs.orderModal);
  },
  watch: {
    order() {
      this.tempOrder = this.order;
    },
  },
  methods: {
    showModal() {
      this.orderModal.show();
    },
    closeModal() {
      this.orderModal.hide();
    },
  },
};
</script>
