<template>
  <div class="input-group mb-3">
    <input
      type="email"
      class="form-control"
      placeholder="輸入Email訂閱取得折扣!!"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      v-model.trim="email"
    />
    <button
      type="button"
      class="btn btn-primary text-white"
      id="button-addon2"
      v-clipboard:copy="subscribeCode"
      v-clipboard:success="onSuccess"
      v-clipboard:error="onError"
      :disabled="email === ''"
    >
      訂閱我們
    </button>
  </div>
</template>

<script>

export default {
  inject: ['emitter'],
  data() {
    return {
      subscribeCode: 'subcribe',
      email: '',
    };
  },
  methods: {
    onSuccess() {
      // eslint-disable-next-line no-useless-escape
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (pattern.test(this.email)) {
        this.$swal({
          width: '27rem',
          title: '訂閱折扣取得成功，記得要貼到優惠欄位',
          icon: 'success',
        });
        this.emitter.emit('getCouponCode', this.subscribeCode);
        this.email = '';
      } else {
        this.$swal({
          width: '17rem',
          title: '請提供正確email',
          icon: 'error',
        });
      }
    },
    onError() {
      this.$swal({
        title: '訂閱折扣取得失敗',
        icon: 'error',
      });
    },
  },
};
</script>
