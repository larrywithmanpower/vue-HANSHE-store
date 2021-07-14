<template>
  <div class="modal" tabindex="-1"
  ref="couponModal"
  id="couponModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ isNew ? '新增優惠劵' : '編輯優惠劵' }}</h5>
          <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="form-group col-md-6">
                <label for="title">標題</label>
                <input v-model="tempCoupon.title" id="title"
                type="text"
                class="form-control"
                placeholder="請輸入標題">
            </div>
            <div class="form-group col-md-6">
                <label for="due_date">期限</label>
                <input v-model="due_date" id="due-date"
                type="date"
                class="form-control"
                placeholder="請輸入期限">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="code">折扣碼</label>
              <input v-model="tempCoupon.code" id="code"
              type="text"
              class="form-control"
              placeholder="請輸入折扣碼">
            </div>
            <div class="form-group col-md-6">
              <label for="percent">折扣</label>
              <input v-model.number="tempCoupon.percent" id="percent"
              type="number"
              class="form-control"
              placeholder="請輸入折扣">
            </div>
          </div>
          <div class="form-check">
              <input v-model="tempCoupon.is_enabled"
              id="is_enabled" class="form-check-input"
              type="checkbox" :true-value="1" :false-value="0">
              <label class="form-check-label" for="is_enabled">是否啟用</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
          <button type="button"
          class="btn btn-primary"
          @click="$emit('update-coupon', tempCoupon)"
          >確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  props: ['isNew', 'coupon'],
  data() {
    return {
      couponModal: {},
      tempCoupon: {},
      due_date: '',
    };
  },
  mounted() {
    this.couponModal = new Modal(this.$refs.couponModal);
  },
  methods: {
    showModal() {
      this.couponModal.show();
    },
    hideModal() {
      this.couponModal.hide();
    },
  },
  watch: {
    //! 時間格式的轉換寫法
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
    coupon() {
      this.tempCoupon = this.coupon;
      //! 將時間格式改為 YYYY-MM-DD，就可以在畫面上提供預設日期
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T');
        //! 沒有中括號畫面不會顯示
      [this.due_date] = dateAndTime;
    },
  },
};
</script>
