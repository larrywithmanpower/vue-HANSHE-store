<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-i0ld0lo9l1">
      <div class="ldio-kc4k04s39o">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-8">
        <h2 class="fw-bold">{{ article.title }}</h2>
        <ul class="d-flex list-unstyled">
          <li class="text-muted me-3">
            作者：{{ article.author }}
          </li>
          <li class="text-muted me-3">
            日期：{{ new Date(article.create_at * 1000).toLocaleDateString() }}
          </li>
          <li class="text-muted">
            tag：
            <span class="badge me-2"
              v-for="(tag, index) in article.tag"
              :key="index"
              :class="[{ 'bg-primary': tag === '新款' },
                { 'bg-warning': tag === '友誼' },
                { 'bg-secondary': tag === '鮮豔' },
                { 'bg-success': tag === '生活' }]"
            >
              {{ tag }}
            </span>
          </li>
        </ul>
        <img
          :src="article.imageUrl"
          :alt="article.title"
          class="img-fluid mb-3"
        >
        <p class="text-muted" v-html="article.description"></p>
      </div>
      <div class="col-md-4 py-3 bg-light">
        <div class="input-group mb-4 w-100">
          <input
            type="search"
            class="form-control"
            placeholder="找文章 ..."
            v-model="searchArticles"
          >
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
          <div
            class="card mb-3"
            v-for="(item, index) in searchArticle"
            :key="index"
          >
            <img
              :src="item.imageUrl"
              class="card-img-top"
              :alt="item.id"
            >
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text ellipsis" v-html="item.description"></p>
              <p class="card-text">
                <a
                  href="#"
                  class="stretched-link text-primary h6"
                  @click.prevent="goToPage(item.id)"
                >
                  more...
                </a>
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
      searchArticles: '',
    };
  },
  watch: {
    // * 監聽 $router id 值變化後，使用 $router.go(0) 重新刷新頁面
    //  * safari使用$router.go(0)無效，嘗試使用window.history.go(0)
    $route() {
      this.id = this.$route.params.id;
      const browserRule = /^.((iPhone)|(iPad)|(Safari))+.$/;
      if (browserRule.test(navigator.userAgent)) {
        window.onpageshow = (event) => {
          if (event.persisted) {
            window.location.reload();
          }
        };
      }
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
        }
      }).catch((err) => { console.log(err); });
    },
    getArticles(page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles?${page}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.articles = res.data.articles;
          this.articles.forEach((item) => {
            if (item.id !== this.id) {
              this.filterArticles.push(item);
            }
          });
          this.isLoading = false;
        } else {
          this.$swal({
            title: res.data.message,
            icon: 'error',
          });
          this.isLoading = false;
        }
      }).catch((err) => { console.log(err); });
    },
    goToPage(id) {
      this.$router.push(`/blogs/blog/${id}`);
    },
  },
  computed: {
    searchArticle() {
      if (this.searchArticles) {
        return this.articles.filter((item) => item.title.match(this.searchArticles));
      }
      return this.filterArticles;
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

  .card {
    transition: all .3s ease;
    &:hover {
      box-shadow: 1px 5px 10px gray;
    }
  }
</style>
