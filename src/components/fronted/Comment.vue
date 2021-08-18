<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="mb-2">
        <div v-for="(user, index) in users" :key="user.name">
          <div class="mb-3">
            <div class="d-flex align-items-center">
              <img :src="user.picture.thumbnail" :alt="user.name.first" class="rounded-circle" />
              <h4 class="mb-0 ms-3">{{ user.name.first }}</h4>
            </div>
            <StarRating
              :star-size="20"
              :read-only="true"
              :rating="Math.trunc(Math.random() * (5 - 3) + 3)"
              :text-class="'text-warning'"
            />
          </div>
          <p>
            <span v-if="index === 0">
              {{ text }}
            </span>
            <span v-if="index === 1">
              {{ text2 }}
            </span>
            <span v-if="index === 2">
              {{ text3 }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="review_box">
        <h4>給予您的評價</h4>
        <StarRating
          class="mb-3"
          :star-size="20"
          :animate="true"
          :glow="1"
          :text-class="'text-warning'"
        />
        <p class="mb-2">評價內容</p>
        <form
          class="row"
          id="contactForm"
          novalidate="novalidate"
        >
          <div class="col-md-12">
            <div class="form-group mb-3">
              <input type="text" class="form-control" id="name" placeholder="請輸入姓名" />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-3">
              <input type="email" class="form-control" id="email" placeholder="請輸入Email" />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-3">
              <input type="tel" class="form-control" id="number" placeholder="請輸入手機" />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group mb-3">
              <textarea
                class="form-control"
                id="message"
                rows="3"
                placeholder="請輸入評價內容"
              ></textarea>
            </div>
          </div>
          <div class="col-md-12 text-right">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="$router.push('/products/productList')"
            >
              送出評價
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  components: {
    StarRating,
  },
  data() {
    return {
      rating: 1,
      users: [],
      reviews: [
        '一分價錢一分貨，東西真心不錯，皮質很軟，剛穿上時會有點不舒服，但真的好看，不會磨腳。',
        '出乎意料的好，店家還送小禮物，服務態度也超棒，非常滿意。',
        '很漂亮!特地穿了一天才來給評價，又舒服又顯腳小，比名牌大廠的還要好，朋友看了也想買，祝店家生意興隆。',
        '整體評價一般都不寫評論,這次鞋子質量確實不錯，尺碼也很合適，這個價格買到這麼優質的鞋子確實很划算,客服橘子服務很贊，總之整體很滿意！一般都不寫評論,這次鞋子質量確實不錯，尺碼也很合適，這個價格買到這麼優質的鞋子確實很划算,客服山竹服務很贊，總之整體很滿意！很開心的一次購物！！很開心的一次購物！！',
        '無任何評價',
      ],
    };
  },
  computed: {
    text() {
      return this.reviews[Math.trunc(Math.random() * this.reviews.length)];
    },
    text2() {
      return this.reviews[Math.trunc(Math.random() * this.reviews.length)];
    },
    text3() {
      return this.reviews[Math.trunc(Math.random() * this.reviews.length)];
    },
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      const url = 'https://randomuser.me/api/?results=3';
      this.$http.get(url).then((res) => {
        if (res.data.results) {
          this.users = res.data.results;
        } else {
          this.$swal({
            title: '資料取得錯誤',
            icon: 'error',
          });
          this.isLoading = false;
        }
      }).catch((err) => {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: err,
        });
      });
    },
  },
};
</script>
