<template>
  <Loading :active="isLoading"/>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th width="10%">購買時間</th>
          <th width="20%">訂單資訊</th>
          <th width="25%">購買內容</th>
          <th width="10%">應付金額</th>
          <th width="10%">是否付款</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>
            {{ new Date(item.create_at * 1000).toLocaleDateString() }}
          </td>
          <td>
            {{ item.create_at }}
            {{ item.user.email }}
          </td>
          <td>
            <!-- 以v-for方式取得物件屬型與value -->
            <ul class="list-unstyled">
              <li
                v-for="(product, i) in item.products"
                :key="i"
              >
                {{ product.product.title }}
                數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.total }}</td>
          <td>
            <!-- 使用v-model綁定is_paid -->
            <!-- 使用@change -->
            <div class="form-check form-switch">
              <input class="form-check-input"
              type="checkbox"
              :id="item.id"
              @change="updatePaid(item)"
              v-model="item.is_paid"
              :checked="item.is_paid">
              <label class="form-check-label" :for="item.id">
                <span
                  :class="[
                    { 'text-success': item.is_paid },
                    { 'text-danger': !item.is_paid }
                  ]"
                >
                  {{ item.is_paid ? '已付款' : '未付款' }}
                </span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary"
                @click="openModal('edit', item)"
              >
                檢視
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <div class="d-flex justify-content-center">
      <Pagination
        :page="pagination"
        @get-page="getOrders"
      />
    </div>
  </div>

  <OrderModal
    ref="orderModal"
    id="orderModal"
    :order="tempOrder"
  />

  <DelModal
    id="delModal"
    ref="delModal"
    :item="tempOrder"
    @delete="deleteOrder"
  />
</template>

<script>
import OrderModal from '@/components/admin/OrderModal.vue';
import DelModal from '@/components/DelModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      orders: [],
      buyDate: '',
      tempOrder: {},
      isEdit: false,
      pagination: {},
      isLoading: false,
      currentPage: '',
    };
  },
  inject: ['emitter'],
  components: {
    OrderModal,
    DelModal,
    Pagination,
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(page) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          this.currentPage = res.data.pagination.current_page;
          this.isLoading = false;
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '訂單取得失敗',
            content: res.data.message,
          });
          this.isLoading = false;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    openModal(isEdit, order) {
      switch (isEdit) {
        case 'edit':
          this.tempOrder = {
            ...order,
          };
          this.isEdit = true;
          this.$refs.orderModal.showModal();
          break;
        case 'delete':
          this.tempOrder = {
            ...order,
          };
          this.$refs.delModal.showModal();
          break;
        default:
          break;
      }
    },
    updatePaid(item) {
      // 定義paid物件傳送用
      const paid = {
        is_paid: item.is_paid,
      };
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.$http.put(url, { data: paid }).then((res) => {
        if (res.data.success) {
          this.getOrders(this.currentPage);
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
    },
    deleteOrder(tempOrder) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${tempOrder.id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
          });
          this.getOrders(this.currentPage);
          this.$refs.delModal.hideModal();
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: res.data.message,
          });
        }
      }).catch((err) => console.log(err));
    },
  },
};
</script>
