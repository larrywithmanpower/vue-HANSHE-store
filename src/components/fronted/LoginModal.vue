<template>
  <div
    class="modal fade"
    ref="loginModal"
    id="loginMoal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <i class="bi bi-person-fill"></i>
            管理者登入
          </h5>
          <button type="button"
          class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <Form
          novalidate="novalidate"
          v-slot="{ errors }"
          ref="form"
          @submit="login"
        >
          <div class="modal-body">
            <div class="form-floating mb-3">
              <Field
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="user.username"
                name="email"
                rules="email|required"
                :class="{ 'is-invalid': errors['email'] }"
              />
              <Error-message
                name="email"
                class="invalid-feedback"
              />
              <label for="floatingInput">
                <i class="bi bi-person-circle"></i>
                管理人員帳號
              </label>
            </div>
            <div class="form-floating position-relative">
              <Field
                :type="isChecked ? 'text' : 'password'"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="user.password"
                name="密碼"
                rules="required"
                :class="{ 'is-invalid': errors['密碼'] }"
              />
              <Error-message name="密碼" class="invalid-feedback"/>
                <i
                  class="bi bi-eye position-absolute top-50 end-0 translate-middle"
                  @click="showPassword"
                  v-if="isChecked">
                </i>
                <i
                  class="bi bi-eye-slash position-absolute top-50 end-0 translate-middle"
                  ref="showPassword"
                  @click="showPassword"
                  v-if="!isChecked">
                </i>
              <label for="floatingPassword">
                <i class="bi bi-shield-lock"></i>
                管理人員密碼
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="submit" class="btn btn-outline-primary">確認登入</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      loginModal: {},
      isChecked: false,
      user: {
        username: '',
        password: '',
      },
    };
  },
  mounted() {
    this.loginModal = new Modal(this.$refs.loginModal);
  },
  methods: {
    showModal() {
      this.loginModal.show();
    },
    hideModal() {
      this.loginModal.hide();
    },
    showPassword() {
      if (!this.isChecked) {
        this.isChecked = true;
      } else {
        this.isChecked = false;
      }
    },
    login() {
      const url = `${process.env.VUE_APP_URL}/admin/signin`;
      this.$http.post(url, this.user).then((res) => {
        if (res.data.success) {
          this.$swal({
            title: res.data.message,
            icon: 'success',
          });
          // ! 解構取得token與expired
          const { token, expired } = res.data;
          // ! 存取token至cookie
          document.cookie = `myToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/admin/products');
          this.loginModal.hide();
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
          this.$router.push('/home');
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
  },
};
</script>
