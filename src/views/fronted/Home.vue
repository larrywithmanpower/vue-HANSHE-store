<template>
  <Carousel></Carousel>
  <section class="bg-info py-5">
    <div class="container">
      <h2 class="text-center text-primary mb-5">
        <span class="border-bottom border-primary border-2 pb-2">為何選擇寒舍</span>
      </h2>
      <ul
      class="list-unstyled row justify-content-around
      text-primary "
      >
        <li class="text-center col-md-3 col-sm-6">
          <i class="bi bi-currency-dollar fs-1"></i>
          <h2 class="h5 fw-bold">價格公道</h2>
          <p class="text-dark text-start">無論任何鞋款，皆比其他店家、平台都合理。但請記住，沒有比較沒有傷害，如果有高於市場的價格，請斟酌。</p>
        </li>
        <li class="text-center col-md-3 col-sm-6">
          <i class="bi bi-globe2 fs-1"></i>
          <h2 class="h5 fw-bold">全球通路</h2>
          <p class="text-dark text-start">無論在什麼地點，商品都可以在您期望的時間內送達。但如果位於兩極地區，還請找專門的快遞協助運送。</p>
        </li>
        <li class="text-center col-md-3 col-sm-6">
          <i class="bi bi-heart fs-1"></i>
          <h2 class="h5 fw-bold">售後服務</h2>
          <p class="text-dark text-start">如果商品有任何瑕疵，隨時可以做更換。如果屬於人為損壞，經判斷即便在七天鑑賞期內，概不退換。</p>
        </li>
        <li class="text-center col-md-3 col-sm-6">
          <i class="bi bi-hand-thumbs-up fs-1"></i>
          <h2 class="h5 fw-bold">品質一級棒</h2>
          <p class="text-dark text-start">
            提供最好的品質及服務，給予顧客最滿意的商品。如果有不滿意，請至<strong>關於寒舍</strong>以郵件的方式聯繫。
          </p>
        </li>
      </ul>
    </div>
  </section>
  <section class="bg-white py-5">
    <div class="container">
      <h2 class="text-center text-primary mb-5">
        <span class="border-bottom border-primary border-2 pb-2">經典鞋款</span>
      </h2>
      <routerLink data-aos="fade-right" to="/products/productList"
      class="row align-items-center mb-4 introduction">
        <div
          class="col-md-7 bg-cover introduction-area"
          style="
            background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/larry/1630483248604.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pr6kZ4WoXW81DsKTJ9j%2FqE4foFgvptb5Y9YIXUkafITXxxxWHQiC2bwexDjDouB9ZV7u5ogwCpBfIuUdAmPTf1F%2FJmYE9kHZXZGejn2JUSaEylX86bOGU%2B36Il%2Fzg7X4aM2jTZ6O%2B%2F8yYdTKIT4N3LF6csfZBIZ7K70hIKf74WxH6TRSqO%2BRHQSakfhmwFseWrpHysJ8fdkijKpSH6OX4FCythVKKoUKJxsZ%2BLsShMZZwpw%2FNor0LR8lC9njj%2FQOvNsIC3KXEPqZ9BqMGzcj2xvqlSOu8hqU4tIwQ7jhlynhMMYUiS2xbXCDp9a6bZkqCgh95FqJBxFEQDlDBe1TdA%3D%3D);
            height: 320px;"
        >
          <h3 class="innerText--hover">
            <span class="d-none d-md-block">
              了解更多
            </span>
          </h3>
          <h3 class="innerText--mobile fs-1 bg-special p-3 rounded d-md-none">
            <span>
              <i class="bi bi-stars"></i>
              經典復刻
            </span>
            <p class="pt-3 text-center fs-4 mb-0">
              完美還原九零年代的風格<br>
              給人穿上一種懷舊的氣息<br>
              給旁人最完美的經典感動
            </p>
          </h3>
        </div>
        <div class="col-md-5 d-none d-md-block">
          <h3
            class="text-primary text-center outerText--hover fw-bold"
          >
            <i class="bi bi-stars"></i>
            經典復刻
          </h3>
          <p class="pt-3 text-center fs-4 text-muted">
            完美還原九零年代的風格<br>
            給人穿上一種懷舊的氣息<br>
            給旁人最完美的經典感動
          </p>
        </div>
      </routerLink>
      <routerLink data-aos="fade-left" to="/products/productList"
      class="row flex-row-reverse align-items-center mb-4 introduction">
        <div
          class="col-md-7 bg-cover introduction-area"
          style="
            background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/larry/1630483255612.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZOrdwYqTQL5E7RE7YbcuMslFgPxPXPZAYX7uZnAsMNVee%2FYzfVl%2FgSSB7cy8jUXt9EkDCAF0qaKx15vB%2Bdcc0gDGc9aqxBqTl9NBb3DDH6rU5b2Ax7C4NP4wxnUBWHzo9lXJrx4VfX34YWdTQbOWBLj2q9ZoBMy%2BuKLhh4B7mtu8NFfCy%2FXgubTCau0mUSnPOQ7bFRHF6PtTeFWiWTYp%2FCgfaDWWp5KAtdN1M4R1UY%2F3Bnax4LUkwErv36b9m%2FtFZ62VrTJ4wxVP70j0k%2BHewFdTZ8kU49M1u8Xgx7yOugBQioT9TRIyi5bxHPAp3XEYohZCcOr6sUplbWQpZvoJMA%3D%3D);
            height: 320px;"
        >
          <h3 class="innerText--hover">
            <span class="d-none d-md-block">
              了解更多
            </span>
          </h3>
          <h3 class="innerText--mobile fs-1 bg-special p-3 rounded d-md-none">
            <span>
              <i class="bi bi-moon-stars"></i>
              時尚潮流
            </span>
            <p class="pt-3 text-center fs-4 mb-0 lh-3">
              舊時間雖然緩緩流逝<br>
              但新的潮流逐漸湧出<br>
              就是給予人時尚是我<br>
              跟我就是最新的潮流
            </p>
          </h3>
        </div>
        <div class="col-md-5 d-none d-md-block">
          <h3
            class="text-primary text-center outerTextReverse--hover me-lg-6 fw-bold">
            <i class="bi bi-moon-stars"></i>
            時尚潮流
          </h3>
          <p class="pt-3 text-center me-lg-6 fs-4 text-muted">
            舊時間雖然緩緩流逝<br>
            但新的潮流逐漸湧出<br>
            就是給予人時尚是我<br>
            跟我就是最新的潮流
          </p>
        </div>
      </routerLink>
      <routerLink
        data-aos="fade-right"
        to="/products/productList"
        class="
        row
        align-items-center
        mb-4
        introduction"
      >
        <div
          class="col-md-7 bg-cover introduction-area"
          style="
            background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/larry/1630483264987.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fVRZnrY7heu2zM8QvR7udQItbu%2Bsqp3kioRF6LuBcnc61LQQL14KgTpS0jZKJRz80jrqho8WSfEmhvBwdsQ2t6NOdckyqaNDdFQJM5J%2FAXTsTn1NCj34oVFH7s74Qpar%2Bb1YJluFjZAfVe2tIkvOJNwoZatl%2BCqQsviaKhlIIa3P5zneA84RnUjSLGwwnwihjDUW%2Fi83vRkQ%2BEeVhSXwfQSrTXKc07oJPuSQNQ6A1JRB6LTxtEvIM6E7l0desV1pUxZHV2djG7IHuqJ7R9V0RFVrs%2Be%2Fqhgp8QEjy4G3VEKPklpZ8hXF3Z4QP9YRjc50h4wAFDQ0Opv4yYFcaMpZHA%3D%3D);
            height: 320px;"
        >
        <h3 class="innerText--hover">
          <span class="d-none d-md-block">
            了解更多
          </span>
          <span class="d-none">
            <i class="bi bi-gender-ambiguous"></i>
            休閒混搭
          </span>
        </h3>
        <h3 class="innerText--mobile fs-1 bg-special p-3 rounded d-md-none">
            <span>
              <i class="bi bi-gender-ambiguous"></i>
            休閒混搭
            </span>
            <p class="pt-3 text-center fs-4 mb-0">
              休息穿著能舒適<br>
              閒暇出門能雅痞<br>
              搭出自己的風格<br>
              穿著唯有我高尚
            </p>
          </h3>
        </div>
        <div class="col-md-5 d-none d-md-block text-center">
          <h3 class="text-primary outerText--hover fw-bold">
            <i class="bi bi-gender-ambiguous"></i>
            休閒混搭
          </h3>
          <p class="pt-3 text-center fs-4 text-muted">
            休息穿著能舒適<br>
            閒暇出門能雅痞<br>
            搭出自己的風格<br>
            穿著唯有我高尚
          </p>
        </div>
      </routerLink>
    </div>
  </section>
  <section class="pt-5 pb-4 bg-info">
    <div class="container">
      <h2 class="text-center text-primary mb-0">
        <span class="border-bottom border-primary border-2 pb-2">新品推薦</span>
      </h2>
      <SwiperNewItem/>
    </div>
  </section>
  <section class="bg-white">
    <div class="container py-5">
      <h2 class="text-center text-primary mb-5">
        <span class="border-bottom border-primary border-2 pb-2">最新情報</span>
      </h2>
      <Blog/>
    </div>
  </section>
</template>

<script>
import Carousel from '@/components/fronted/Carousel.vue';
import SwiperNewItem from '@/components/fronted/SwiperNewItem.vue';
import Blog from '@/components/fronted/Blog.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    SwiperNewItem,
    Blog,
  },
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
  .introduction {
    padding-left: 10px;
    padding-right: 10px;
    transition: 0.4s ease-out;
    &:hover {
        .innerText--hover {
          opacity: 1;
          transform: translateY(-440%);
        }
        .introduction-area::before {
          opacity: 1;
        }
        .outerText--hover {
          animation: outerText .7s forwards;
        }
        .outerTextReverse--hover {
          animation: outerTextReverse .7s forwards;
        }
      }
    &-area {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background: rgba(#000, 0.6);
        z-index: 2;
        transition: 0.5s;
        opacity: 0;
      }
      .innerText--hover {
        transition: all 0.4s ease-out;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -40px;
        margin-bottom: -2px;
        opacity: 0;
        color: #fff;
        z-index: 10;
        transform: translateY(0%);
      }
      .innerText--mobile {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: #fff;
        z-index: 10;
        margin-bottom: 0;
        p {
          letter-spacing: 5px;
          @media (max-width: 375px) {
            letter-spacing: 0;
          }
        }
      }
    }
  }

  @keyframes outerText {
    from{
      transform: translateX(0);
    }
    to{
      transform: translateX(20%);
    }
  }
  @keyframes outerTextReverse {
    from{
      transform: translateX(0);
    }
    to{
      transform: translateX(-20%);
    }
  }
</style>
