<template>
  <section class="d-flex justify-content-center">
    <Form
      class="col-lg-6 col-md-9 col-10"
      v-slot="{ errors }"
      @submit="createOrder"
      ref="form"
    >
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field
          type="email"
          class="form-control"
          id="email"
          placeholder="請輸入Email"
          v-model="form.user.email"
          name="email"
          rules="email|required"
          :class="{ 'is-invalid': errors['email'] }"
        />
        <ErrorMessage name="email" class="invalid-feedback"/>
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">收件人姓名</label>
        <Field
          type="text"
          class="form-control"
          id="username"
          placeholder="請輸入姓名"
          v-model="form.user.name"
          name="姓名"
          rules="required"
          :class="{ 'is-invalid': errors['姓名'] }"
        />
        <ErrorMessage name="姓名" class="invalid-feedback"/>
      </div>
      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <Field
          type="tel"
          class="form-control"
          id="tel"
          placeholder="請輸入電話"
          v-model="form.user.tel"
          name="電話"
          :rules="isPhone"
          :class="{ 'is-invalid': errors['電話'] }"
        />
        <ErrorMessage name="電話" class="invalid-feedback"/>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <Field
          type="text"
          class="form-control"
          id="address"
          placeholder="請輸入地址"
          v-model="form.user.address"
          name="地址"
          rules="required"
          :class="{ 'is-invalid': errors['地址'] }"
        />
        <ErrorMessage name="地址" class="invalid-feedback"/>
      </div>
      <div class="mb-3">
        <label for="leaveMsg" class="form-label">留言</label>
        <textarea
          type="text"
          class="form-control"
          id="leaveMsg"
          placeholder="你想說什麼??"
          rows="5"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="d-flex justify-content-between">
        <button
          type="button"
          class="btn btn-outline-primary"
          @click="$router.go(-1)"
        >
          回上一步
        </button>
        <button
          type="submit"
          class="btn btn-danger"
          :disabled="carts.length === 0"
        >
          送出訂單
        </button>
      </div>
    </Form>
  </section>
</template>

<script>
export default {
  inject: ['emitter'],
  data() {
    return {
      carts: [],
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
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
        if (res.data.success) {
          // 要使用emitter否則重新整理會有問題
          this.emitter.emit('update-cart');
          this.carts = res.data.data.carts;
          this.finalTotal = res.data.data.final_total;
          this.isLoading = false;
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
          this.isLoading = false;
        }
      }).catch((err) => {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: err,
        });
      });
    },
    createOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order`;
      const { user } = this.form;
      const { message } = this.form.message;
      this.$http.post(url, { data: { user, message } })
        .then((res) => {
          if (res.data.success) {
            const id = res.data.orderId;
            this.$swal({
              title: res.data.message,
              icon: 'success',
            });
            //! VeeValidate內建函式
            this.$refs.form.resetForm();
            this.form.message = '';
            this.carts = [];
            this.finalTotal = '';
            this.isLoading = false;
            this.emitter.emit('update-cart');
            this.$router.push(`/cart/cartPayment/${id}`);
          } else {
            this.$swal({
              title: res.data.message,
              icon: 'error',
            });
            this.isLoading = false;
          }
        }).catch((err) => {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: err,
          });
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的手機號碼';
    },
  },
};
</script>
