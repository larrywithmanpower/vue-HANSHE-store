<template>
  <div class="modal fade"
  ref="loginModal"
  id="loginMoal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        <form @submit.prevent="login">
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input type="email"
              class="form-control" id="floatingInput" placeholder="name@example.com"
              v-model="user.username">
              <label for="floatingInput">
                <i class="bi bi-person-circle"></i>
                管理人員帳號
              </label>
            </div>
            <div class="form-floating position-relative">
              <input :type="isChecked ? 'text' : 'password'"
              class="form-control" id="floatingPassword" placeholder="Password"
              v-model="user.password">
              <i class="bi bi-eye position-absolute top-50 end-0 translate-middle"
              @click="showPassword" v-if="isChecked"></i>
              <i class="bi bi-eye-slash position-absolute top-50 end-0 translate-middle"
              ref="showPassword"
              @click="showPassword" v-if="!isChecked"></i>
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
        </form>
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
          // eslint-disable-next-line no-alert
          alert('登入成功');
          // ! 解構取得token與expired
          const { token, expired } = res.data;
          // ! 存取token至cookie
          document.cookie = `myToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/admin/adminProducts');
          this.loginModal.hide();
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          this.$router.push('/home');
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
