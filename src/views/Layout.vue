<template>
  <section class="py-1 bg-dark text-white fs-7">
    <div class="container">
      <div class="row text-center">
        <div class="row">
          <div class="col-md-4 pe-4 d-flex align-items-center">
            <div class="me-2 d-flex justify-content-center align-items-center">
              <i class="bi bi-telephone-fill"></i>
            </div>
            <a href="telto: + 1234 2345 67" class="link-light"
              >+ 1234 2345 67</a
            >
          </div>
          <div class="col-md-4 pe-4 d-flex align-items-center me-auto">
            <div class="me-2 d-flex justify-content-center align-items-center">
              <i class="bi bi-mailbox"></i>
            </div>
            <a href="mailto: mapower0708@gmail.com" class="link-light"
              >hanshe@gmail.com</a
            >
          </div>
          <div class="col-md-4 d-flex justify-content-end">
            <a href="#" class="d-inline-block link-light">
              <i class="bi bi-facebook me-3"></i>
            </a>
            <a href="#" class="d-inline-block"
              ><i class="bi bi-instagram text-white me-3"></i
            ></a>
            <a href="#" class="d-inline-block"
              ><i class="bi bi-linkedin text-white me-3"></i
            ></a>
            <a href="#" class="d-inline-block"
              ><i class="bi bi-github text-white"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
    <div class="container d-flex justify-content-between align-items-center">
      <router-link to="/" class="navbar-brand logoFont text-primary"
        >HanShe</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="
          align-self-center
          collapse
          navbar-collapse
          flex-fill
          d-lg-flex
          justify-content-lg-between
        "
        id="navbarNav"
      >
        <div class="ms-auto">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
        <div class="navbar">
          <a href="#" class="nav-link link-secondary">
            <i class="bi bi-cart-plus-fill">
              <strong class="ps-1">{0}</strong>
            </i>
          </a>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <!-- footer -->
  <footer class="bg-dark" id="tempaltemo_footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 pt-5">
          <h2 class="h2 text-success pb-3 logoFont mb-0">HANSHE</h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <i class="bi bi-house"></i>
              123 Consectetur at ligula 10660
            </li>
            <li>
              <i class="bi bi-telephone-fill me-1"></i>
              <a class="text-decoration-none link-light" href="tel:1234 2345 67"
                >1234 2345 67</a
              >
            </li>
            <li>
              <i class="bi bi-mailbox me-2"></i>
              <a
                class="text-decoration-none link-light"
                href="mailto:info@company.com"
                >info@company.com</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h3 text-light border-bottom pb-3 border-secondary">
            產品資訊
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <a class="text-decoration-none link-light" href="#">Sport Wear</a>
            </li>
            <li>
              <a class="text-decoration-none link-light" href="#"
                >Men's Shoes</a
              >
            </li>
            <li>
              <a class="text-decoration-none link-light" href="#"
                >Women's Shoes</a
              >
            </li>
            <li>
              <a class="text-decoration-none link-light" href="#"
                >Popular Dress</a
              >
            </li>
            <li>
              <a class="text-decoration-none link-light" href="#"
                >Gym Accessories</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h3 text-light border-bottom pb-3 border-secondary">
            其他資訊
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <a class="text-decoration-none link-light" href="#">Home</a>
            </li>
            <li class="">
              <a class="text-decoration-none link-light" href="#">About Us</a>
            </li>
            <li class="">
              <a class="text-decoration-none link-light" href="#">FAQs</a>
            </li>
            <li class="">
              <a class="text-decoration-none link-light" href="#">Contact</a>
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
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

.logoFont {
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;
}

#tempaltemo_footer {
  a:hover {
    color: #68bb7d;
  }
  ul.footer-icons li {
    width: 2em;
    height: 2em;
    line-height: 2em;
    &:hover {
    background-color: #cfd6e1;
    transition: .5s;
    i {
      color:#212934;
    }
    }
  }
}
</style>
