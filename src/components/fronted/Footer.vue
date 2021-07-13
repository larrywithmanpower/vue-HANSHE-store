<template>
  <footer class="bg-dark position-relative" id="layoutFooter">
    <a href="#" class="to-top text-secondary"
    :class="isTop ? 'goTopAfter' : ''"
    @click.prevent="goTop()"
    ></a>
    <div class="container">
      <div class="row">
        <div class="col-md-4 pt-5">
          <h2 class="h2 text-primary pb-3 logoFont mb-0">HANSHE</h2>
          <ul class="text-white">
            <li>客戶至上</li>
            <li>品質第一</li>
            <li>服務迅速</li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h3 text-light border-bottom pb-3 border-secondary">
            寒舍資訊
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li class="">
              <router-link to="/products/category"
              class="text-decoration-none link-light" href="#">寒舍商品</router-link>
            </li>
            <li class="">
              <router-link to="/about"
              class="text-decoration-none link-light"
              href="#">關於寒舍</router-link>
            </li>
            <li class="">
              <a class="text-decoration-none link-light" href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h3 text-light border-bottom pb-3 border-secondary">
            管理者資訊
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <button
                type="button"
                class="btn btn-sm btn-outline-primary text-white border-0"
                data-bs-toggle="LoginModal"
                data-bs-target="#LoginModal"
                @click="openModal"
              >
                管理員後台
                <i class="bi bi-person-fill"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="row text-light mb-4">
        <div class="col-12 mb-3">
          <div class="w-100 my-3 border-top border-secondary"></div>
        </div>
        <div class="col-auto me-auto">
          <ul class="list-inline text-left fs-4 footer-icons">
            <li class="list-inline-item text-center rounded-circle">
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="http://facebook.com/"
                ><i class="bi bi-facebook"></i
              ></a>
            </li>
            <li class="list-inline-item text-center rounded-circle">
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="https://www.instagram.com/"
                ><i class="bi bi-instagram"></i
              ></a>
            </li>
            <li class="list-inline-item text-center rounded-circle">
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="https://twitter.com/"
                ><i class="bi bi-linkedin"></i
              ></a>
            </li>
            <li class="list-inline-item text-center rounded-circle">
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="https://www.linkedin.com/"
                ><i class="bi bi-github"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="col-auto">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="輸入Email訂閱最新資訊吧!!"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-primary text-white"
              type="button"
              id="button-addon2"
            >
              訂閱我們
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 bg-black py-3">
      <div class="container">
        <div class="row pt-2">
          <div class="col-12">
            <p class="text-left text-light">
              Copyright © 2021 made by LarryH | 個人作品無任何商業用途
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <LoginModal ref="LoginModal" id="LoginModal"></LoginModal>
</template>

<script>
import LoginModal from '@/components/fronted/LoginModal.vue';

export default {
  components: {
    LoginModal,
  },
  data() {
    return {
      scrollNum: 0,
      isTop: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop
        || document.body.scrollTop
        || window.pageYOffset;
      this.scrollNum = top;
      if (top >= 100) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
  methods: {
    openModal() {
      this.$refs.LoginModal.showModal();
    },
    goTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss">
$primary: #C03F19;
#layoutFooter a:hover {
  transition: all 0.3s ease;
}

.to-top {
  position: absolute;
  top: 0;
  left: 50%;
  color: white;
  display: inline-block; /* or block */
  position: relative;
  text-decoration: none;
  border-color: transparent;
  transition: all 0.3s ease-out;
}
.to-top:before {
  content: "▲";
  font-size: 1.5em;
  position: absolute;
  text-align: center;
  top: -35px;
  left: 50%;
  margin-left: -1em;
  border: solid 0.13em gray;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  line-height: 1.5em;
  border-color: inherit;
  transition: transform 0.5s ease-in;
  background-color: #fff;
  box-shadow: 1px 1px 1px $primary;

}
.to-top:hover:before {
  color: $primary;
  border-color: #fff;
  transform: rotate(360deg);
}
</style>
