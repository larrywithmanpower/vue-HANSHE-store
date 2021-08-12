<template>
  <section class="banner d-flex justify-content-center align-items-center">
    <h2 class="display-4 text-white routeFont mt-5 mt-lg-0" data-aos="fade-up">
      {{ pageTitle }}
    </h2>
  </section>
  <section class="bg-light py-5">
    <div class="container py-3 text-primary">
      <div class="row text-center">
        <h2 class="text-center text-primary mb-4">
          <span class="border-bottom border-primary border-2">寒舍使命</span>
        </h2>
      </div>
      <ul class="row list-unstyled">
        <li class="col-md-6 col-lg-3 pb-5">
          <div class="h-100 py-5 services-icon shadow">
            <div class="h1 text-primary text-center
            ">
              <i class="bi bi-truck"></i>
            </div>
            <h2 class="h5 mt-4 text-center">宅配到府</h2>
          </div>
        </li>

        <li class="col-md-6 col-lg-3 pb-5">
          <div class="h-100 py-5 services-icon shadow">
            <div class="h1 text-priamry text-center">
              <i class="bi bi-arrow-left-right"></i>
            </div>
            <h2 class="h5 mt-4 text-center">最高品質</h2>
          </div>
        </li>
        <li class="col-md-6 col-lg-3 pb-5">
          <div class="h-100 py-5 services-icon shadow">
            <div class="h1 text-primary text-center"><i class="bi bi-percent"></i></div>
            <h2 class="h5 mt-4 text-center">最多優惠</h2>
          </div>
        </li>

        <li class="col-md-6 col-lg-3 pb-5">
          <div class="h-100 py-5 services-icon shadow">
            <div class="h1 text-primary text-center">
              <i class="bi bi-telephone-inbound"></i>
            </div>
            <h2 class="h5 mt-4 text-center">貴賓服務專線</h2>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="container py-5">
    <h2 class="text-center text-primary mb-4">
      <span class="border-bottom border-primary border-2">寒舍定位</span>
    </h2>
    <div class="iframe-rwd mb-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1823.0199917032346!2d120.5814602110709!3d23.95902623218566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1626067517107!5m2!1szh-TW!2stw"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div class="row">
      <ul class="col-md-4 col-lg-3 mb-4 mb-md-0">
        <li class="media">
          <span class="bi bi-house me-2 fs-4"></span>
          <div class="media-body">
            <p class="text-primary mb-0">彰化縣青年市萬年路二段77號</p>
          </div>
        </li>
        <li class="media">
          <span class="bi bi-phone me-2 fs-4"></span>
          <div class="media-body">
            <a href="tel:+080000778" class="link-primary"> +080000778 </a>
          </div>
        </li>
        <li class="media">
          <span class="bi bi-envelope me-2 fs-4"></span>
          <div class="media-body">
            <a href="mailto:info@company.com" class="link-primary">
              info@company.com
            </a>
          </div>
        </li>
      </ul>
      <div class="col-md-8 col-lg-9">
        <Form
          class="form-contact contact_form"
          method="post"
          id="contactForm"
          novalidate="novalidate"
          v-slot="{ errors }"
          ref="form"
          @submit="sendQuestion"
        >
          <div class="row">
            <div class="col-lg-5">
              <div class="form-group">
                <Field
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="輸入您的姓名"
                  v-model="form.user.name"
                  name="姓名"
                  rules="required"
                  :class="{ 'is-invalid': errors['姓名'] }"
                />
                <Error-message name="姓名" class="invalid-feedback"/>
              </div>
              <div class="form-group">
                <Field
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="輸入您的email"
                  v-model="form.user.email"
                  name="email"
                  rules="email|required"
                  :class="{ 'is-invalid': errors['email'] }"
                />
                <Error-message name="email" class="invalid-feedback"/>
              </div>
              <div class="form-group">
                <Field
                  class="form-control"
                  id="subject"
                  type="text"
                  placeholder="輸入您的問題概述"
                  name="問題概述"
                  rules="required"
                  :class="{ 'is-invalid': errors['問題概述'] }"
                />
                <Error-message name="問題概述" class="invalid-feedback"/>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="form-group">
                <textarea
                  class="form-control different-control w-100"
                  id="message"
                  cols="30"
                  placeholder="詳細說明"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="form-group text-center text-md-end mt-3">
            <button
              type="submit"
              class="btn btn-outline-primary"
            >
              聯絡我們
            </button>
          </div>
        </Form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '',
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
  methods: {
    sendQuestion() {
      this.$router.push('/home');
      this.$swal({
        title: '您的問題已成功送出',
        icon: 'success',
        width: '280px',
        position: 'center',
      });
    },
  },
  created() {
    this.pageTitle = this.$route.name;
  },
};
</script>

<style lang="scss" scoped>
  $primary: #C03F19;
  .banner {
    background-image: url('../../../public/images/aboutHanshe.jpg');
    background-size: cover;
    background-position: center center;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
    @media (max-width: 414px) {
      height: 260px;
    }
  }

  .services-icon {
    border-radius: 10px;
  }

  .iframe-rwd {
    position: relative;
    padding-bottom: 50%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }
  .iframe-rwd iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .media {
    display: flex;
    align-items: center;
    line-height: 2;
    &-body {
      display: flex;
    }
  }

  .form-contact {
    .form-control {
      border-radius: 0;
      height: 40px;
      padding-left: 18px;
      border-color: transparent;
      background: rgba(130,139,178,0.1);
    }
    .form-group {
      margin-bottom: 10px;
    }
    .different-control {
    height: 140px !important;
    }
  }

  .form-control {
      display: block;
      width: 100%;
      height: calc(2.25rem + 2px);
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
</style>
