<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-i0ld0lo9l1">
      <div class="ldio-kc4k04s39o">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="row">
    <div class="col-md-6 col-lg-4 mb-4 mb-lg-0"
    v-for="(article, index) in articles" :key="index"
    >
      <div class="card">
        <div class="card-image" :style="{ 'background-image': `url(${article.imageUrl})` }"></div>
        <div class="card-body">
          <div class="d-flex justify-content-between py-3">
            <small class="text-muted">By {{ article.author }}</small>
            <small class="text-muted">
              Date {{  new Date(article.create_at * 1000).toLocaleDateString() }}
            </small>
          </div>
          <h4 class="card-title">{{ article.title }}</h4>
        </div>
        <div class="card-body">
          <p class="card-text ellipsis" v-html="article.description">
          </p>
          <a href="#" class="card-link stretched-link"
          @click.prevent="goToBlog(article)"
          >看更多...</a>
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
      isLoading: false,
    };
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles(page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles?${page}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.articles = res.data.articles;
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      }).catch((err) => { console.log(err); });
    },
    goToBlog(article) {
      this.$router.push(`/blog/${article.id}`);
      this.article = article;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card-image {
    height: 250px;
    background-size: cover;
    background-position: center center;
  }
</style>
