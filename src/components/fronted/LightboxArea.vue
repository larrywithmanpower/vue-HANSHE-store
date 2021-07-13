<template>
  <section class="row">
    <div class="col-3" v-for="(src, index) in imgs"
      :key="index"
      >
      <div class="card"
      @click="showMultiple()"
      >
        <img :src="src.src">
        <div class="info">
          <h2>{{ src.title }}</h2>
        </div>
      </div>
    </div>
  </section>
  <vue-easy-lightbox
    escDisabled
    moveDisabled
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
  >
  </vue-easy-lightbox>
</template>

<script>
// 如果VueApp已经注册组件，则这里不需要单独引入
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      imgs: [
        {
          src: 'https://images.unsplash.com/photo-1584385154237-bd214e10f671?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          title: '運動好鞋',
        },
        {
          src: 'https://images.unsplash.com/photo-1611507692634-6fd5e10e8900?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          title: '穿搭容易',
        },
        {
          src: 'https://images.unsplash.com/photo-1604733077610-1dbf9397baa5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          title: '時尚潮流',
        },
        {
          src: 'https://images.unsplash.com/photo-1601138187846-c817edbb7d63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgwfHxzaG9lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          title: '生活品味',
        },
      ], // Img Url , string or Array
      visible: false,
      index: 0, // default: 0
    };
  },
  methods: {
    showMultiple() {
      this.imgs = [
        {
          src: 'https://images.unsplash.com/photo-1584385154237-bd214e10f671?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          title: '運動好鞋',
        },
        {
          src: 'https://images.unsplash.com/photo-1611507692634-6fd5e10e8900?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          title: '穿搭容易',
        },
        {
          src: 'https://images.unsplash.com/photo-1604733077610-1dbf9397baa5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          title: '時尚潮流',
        },
        {
          src: 'https://images.unsplash.com/photo-1601138187846-c817edbb7d63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgwfHxzaG9lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          title: '生活品味',
        },
      ];
      // 允许混合imgs参数

      this.index = 1; // index of imgList
      this.show();
    },
    handleHide() {
      this.visible = false;
    },
    show() {
      this.visible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
  width: 280px;
  height: 360px;
  border-radius: 15px;
  padding: 1.5rem;
  background: #fff;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0 7px 10px rgba(#000, 0.5);
  &:hover {
    transform: translateY(20px);
    //     change opacity to 1 during hover
    &::before {
      opacity: 1;
    }
    .info {
      opacity: 1;
      transform: translateY(0);
    }
  }
  //   using ::before on .card with transparent bg-color with opacity 0
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(#000, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }
  .info {
    position: relative;
    z-index: 3;
    color: #fff;
    display: flex;
    flex-direction: column;
    transform: translateY(30px);
    opacity: 0;
    transition: 0.5s;
    h2 {
      font-size: 2rem;
      margin: 0;
    }
  }
}

</style>
