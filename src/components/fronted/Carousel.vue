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
      <div class="carousel-item active">
        <img src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhcmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHdlYXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://images.unsplash.com/photo-1590031614765-22fa70cd5fa6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQ0fHx3ZWFyaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
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
.bg-carousel {
  background-size: cover;
  width: auto;
  height: 500px;
  background-position: center center;
  @media (max-width: 768px) {
    height: 300px;
  }
}

.text-bg {
  background: rgba(0, 0, 0, 0.5);
}
</style>
