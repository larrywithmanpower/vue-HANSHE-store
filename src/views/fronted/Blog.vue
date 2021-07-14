<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-i0ld0lo9l1">
      <div class="ldio-kc4k04s39o">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="banner d-flex justify-content-center align-items-center position-relative"
  :style="{ 'background-image': `url(${article.imageUrl})` }">
    <h1 class="display-4 text-white routeFont" data-aos="fade-up">
    <!-- 使用mitt來解決取route不動的問題 -->
      {{ article.title }}
    </h1>
  </div>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-8">
        <h2 class="fw-bold">{{ article.title }}</h2>
        <img :src="article.imageUrl"
        alt=""
        class="img-fluid mb-3">
        <p class="text-muted" v-html="article.description"></p>
      </div>
      <div class="col-md-4 py-3 bg-light">
        <div class="input-group mb-4">
          <input type="text"
          class="form-control"
          name="q" placeholder="找文章 ...">
          <button type="submit" class="input-group-text bg-primary text-light">
              <i class="bi bi-search text-white"></i>
          </button>
        </div>
        <div class="list-group rounded-0">
          <h2
            class="
              text-center
              border-bottom border-3 border-primary
              pb-2
              mb-0
              h4
            "
          >
            最新資訊
          </h2>
          <div class="card mb-3"
          v-for="(item, index) in filterArticles"
          :key="index">
            <img :src="item.imageUrl" class="card-img-top" :alt="item.id">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text text-truncate"
              v-html="item.description"></p>
              <p class="card-text">
                <a href="#"
                class="stretched-link text-danger"
                @click.prevent="goToPage(item.id)"></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      article: {},
      id: '',
      isLoading: false,
      filterArticles: [],
    };
  },
  watch: {
    // * 監聽 $router id 值變化後，使用 $router.go(0) 重新刷新頁面
    $route() {
      this.id = this.$route.params.id;
      this.$router.go(0);
      this.getArticle();
    },
  },
  created() {
    const { id } = this.$route.params;
    this.id = id;
    this.getArticle();
    this.getArticles();
  },
  methods: {
    getArticle() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/article/${this.id}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.article = res.data.article;
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      }).catch((err) => { console.log(err); });
    },
    getArticles(page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles?${page}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.articles = res.data.articles;
          this.articles.forEach((item, index) => {
            if (item.id !== this.id) {
              console.log(item, index);
              this.filterArticles.push(item);
            }
          });
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      }).catch((err) => { console.log(err); });
    },
    goToPage(id) {
      this.$router.push(`/blog/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
  .banner {
    background-size: cover;
    background-position: center center;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
</style>
