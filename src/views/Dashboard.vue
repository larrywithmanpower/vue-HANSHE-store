<template>
  <div class="container-fluid">

    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div
          class="
            d-flex
            flex-column
            align-items-center align-items-sm-start
            px-3
            pt-2
            text-white
            min-vh-100
            sticky-top
          "
        >
          <a
            href="/"
            class="
              d-flex
              align-items-center
              pb-3
              mb-md-0
              me-md-auto
              text-white text-decoration-none
            "
          >
            <span class="fs-5 d-none d-sm-inline logoFont">HANSHE Menu</span>
          </a>
          <ul
            class="
              nav nav-pills
              flex-column
              mb-sm-auto mb-0
              align-items-center align-items-sm-start
            "
            id="menu"
          >
            <li class="nav-item">
              <router-link to="/"
              class="nav-link d-flex align-items-center">
                <i class="fs-4 bi-house"></i>
                <span class="ms-1 d-none d-sm-inline">前台首頁</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/adminProducts" class="nav-link
              d-flex align-items-center">
                <i class="fs-4 bi-box-seam"></i>
                <span class="ms-1 d-none d-sm-inline">商品管理</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/order" class="nav-link d-flex align-items-center">
                <i class="fs-4 bi-table"></i>
                <span class="ms-1 d-none d-sm-inline">訂單管理</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/coupon" class="nav-link d-flex align-items-center">
                <i class="fs-4 bi-bookmark"></i>
                <span class="ms-1 d-none d-sm-inline">優惠劵管理</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/article" class="nav-link d-flex align-items-center">
                <i class="fs-4 bi-newspaper"></i>
                <span class="ms-1 d-none d-sm-inline">文章管理</span>
              </router-link>
            </li>
          </ul>
          <hr />
          <div class="dropdown pb-4">
            <a
              href="#"
              class="
                d-flex
                align-items-center
                text-white text-decoration-none
                dropdown-toggle
              "
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/trump_president_avatar_male-256.png"
                alt="hugenerd"
                width="30"
                height="30"
                class="rounded-circle"
              />
              <span class="d-none d-sm-inline mx-1">{{ user }}</span>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#"
              @click.prevent="signOut"
              >Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col py-3">
        <ToastMessage></ToastMessage>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/admin/ToastMessage.vue';

export default {
  components: {
    ToastMessage,
  },
  provide() {
    return {
      emitter,
    };
  },
  data() {
    return {
      checkSuccess: false,
      user: '',
    };
  },
  created() {
    this.checkLogin();
    this.user = process.env.VUE_APP_PATH;
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.token = token;

      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const url = `${process.env.VUE_APP_URL}/api/user/check`;
        this.$http.post(url).then((res) => {
          if (res.data.success) {
            this.checkSuccess = true;
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            this.$router.push('/');
          }
        }).catch((err) => {
          console.log(err);
        });
      } else {
        // eslint-disable-next-line no-alert
        alert('未登入');
        this.$router.push('/');
      }
    },
    signOut() {
      const url = `${process.env.VUE_APP_URL}/logout`;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          document.cookie = 'myToken=; expires=;';
          // eslint-disable-next-line no-alert
          alert('登出成功');
          this.$router.push('/');
        }
      });
    },
  },
};
</script>

<style lang="scss">
.nav-link {
  color: white;
}
</style>
