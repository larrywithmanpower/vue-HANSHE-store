<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :parallax="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :effect="'fade'"
    :fadeEffect='{ crossFade: true }'
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    class="mySwiper"
  >
    <swiper-slide v-for="(info, index) in infos" :key="index">
      <!-- <img alt="index" :src="photo"> -->
      <div
        class="bg-carousel"
        :style="{ 'background-image': `url(${info.photo})` }"
      >
        <div class="d-flex pt-5 justify-content-center">
          <h2 class="text-white text-bg d-inline-block p-5 rounded-2 title"
          data-swiper-parallax="-200">{{ info.text }}</h2>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, {
  Autoplay, Pagination, Navigation, EffectFade, Parallax,
} from 'swiper/core';

SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade, Parallax]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      infos: [{
        photo: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhcmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        text: '創造出只屬於你的穿搭',
      },
      {
        photo: 'https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHdlYXJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        text: '健身也能穿出自己的風格',
      },
      {
        photo: 'https://images.unsplash.com/photo-1590031614765-22fa70cd5fa6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQ0fHx3ZWFyaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        text: '疫情期間優惠方案',
      },
      ],
    };
  },
};
</script>

<style lang="scss">
  .bg-carousel {
    background-size: cover;
    width: auto;
    height: 500px;
    background-position: center center;
  }

  .text-bg {
    background: rgba(0,0,0,.5);
  }
</style>
