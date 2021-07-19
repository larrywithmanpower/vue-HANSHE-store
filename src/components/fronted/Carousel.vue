<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active"
      >
        <img src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhcmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block" data-aos="zoom-in"
        data-aos-duration="1000">
          <h2>穿出屬於自己的
            <span class="decoration-text">Style</span>
          </h2>
          <p class="fs-4">找尋屬於自己的風格，創造嶄新的外表</p>
          <button type="button" class="btn-animation pulse"
          @click="$router.push('/products/productList')"
          >看看商品</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://images.unsplash.com/photo-1486218119243-13883505764c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fHNwb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h2>保護雙腳跑遍世界
            <span class="decoration-text text-primary">HANSHE</span>
          </h2>
          <blockquote class="blockquote">
            <p class="fs-4">婚姻如同穿鞋，舒服不舒服，只有腳知道。</p>
          </blockquote>
          <figcaption class="blockquote-footer text-light">
            <cite title="Source Title">雷舒雁</cite>
          </figcaption>
          <button type="button" class="btn-animation offset"
          @click="$router.push('/products/productList')"
          >為自己挑一雙好鞋</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://images.unsplash.com/photo-1608033451651-49af4c31ed1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="..." />
        <div class="carousel-caption">
          <h2>夏季大拍賣
            <span class="decoration-text">Discount</span>
          </h2>
          <p class="fs-4 d-none d-md-block">不同的時間點，一定要有不同的優惠，在最困難的時間，寒舍給您最大的折扣</p>
          <p class="fs-4">優惠碼：<ins>de3445feefa</ins></p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: [
        {
          photo:
            'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhcmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          text: '創造出只屬於你的穿搭',
        },
        {
          photo:
            'https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHdlYXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          text: '健身也能穿出自己的風格',
        },
        {
          photo:
            'https://images.unsplash.com/photo-1590031614765-22fa70cd5fa6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQ0fHx3ZWFyaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          text: '疫情期間優惠方案',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.bg-carousel {
  background-size: cover;
  width: auto;
  height: 450px;
  background-position: center center;
  @media (max-width: 768px) {
    height: 300px;
  }
}

.decoration-text {
  font-family: 'Pacifico', cursive;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 25rem;
  @media (max-width: 768px) {
    bottom: 1.25rem;
  }
}

</style>
