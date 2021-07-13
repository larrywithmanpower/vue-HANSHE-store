<template>
  <div class="banner d-flex justify-content-center align-items-center mb-3">
    <h2 class="display-4 text-white routeFont" data-aos="fade-up">
      {{ pageTitle }}
    </h2>
  </div>
  <section class="container py-3 text-primary">
        <div class="row text-center pt-5 pb-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">寒舍使命</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-primary text-center"><i class="bi bi-truck"></i></div>
                    <h2 class="h5 mt-4 text-center">宅配到府</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-priamry text-center">
                      <i class="bi bi-arrow-left-right"></i>
                    </div>
                    <h2 class="h5 mt-4 text-center">最高品質</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-primary text-center"><i class="bi bi-percent"></i></div>
                    <h2 class="h5 mt-4 text-center">最多優惠</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 services-icon-wap shadow">
                    <div class="h1 text-primary text-center">
                      <i class="bi bi-telephone-inbound"></i>
                    </div>
                    <h2 class="h5 mt-4 text-center">貴賓服務專線</h2>
                </div>
            </div>
        </div>
    </section>
  <div class="container my-5">
    <section class="iframe-rwd mb-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1823.0199917032346!2d120.5814602110709!3d23.95902623218566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1626067517107!5m2!1szh-TW!2stw"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>
    <section class="row">
      <ul class="col-md-4 col-lg-3 mb-4 mb-md-0">
        <li class="media">
          <span class="bi bi-house me-2 fs-4"></span>
          <div class="media-body">
            <p class="text-primary mb-0">彰化縣叉叉市圈圈路二段77號</p>
          </div>
        </li>
        <li class="media">
          <span class="bi bi-phone me-2 fs-4"></span>
          <div class="media-body">
            <a href="telto:080000778" class="link-primary"> 080000778 </a>
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
        <form
          class="form-contact contact_form"
          method="post"
          id="contactForm"
          novalidate="novalidate"
        >
          <div class="row">
            <div class="col-lg-5">
              <div class="form-group">
                <input
                  class="form-control"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="輸入您的姓名"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="輸入您的email"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="輸入您的問題"
                />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="form-group">
                <textarea
                  class="form-control different-control w-100"
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
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
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '',
    };
  },
  created() {
    this.pageTitle = this.$route.name;
  },
};
</script>

<style lang="scss" scoped>
  .banner {
    background-image: url(https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80);
    background-size: cover;
    background-position: center center;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
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
    height: 100% !important;
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
