<template>
  <Loading :active="isLoading">
    <div class="loading-spinner-ripple">
      <div class="loading">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="row" data-aos="zoom-in-right">
    <!-- v-for搭配.slice(0,3)只顯示三篇 -->
    <div
      class="col-md-6 col-lg-4 mb-2 mb-lg-0"
      v-for="(article, index) in articles.slice(0,3)"
      :key="index"
    >
      <div class="card border-0">
        <div
          class="card-image"
          :style="{ 'background-image': `url(${article.imageUrl})` }"
        />
        <div class="card-body py-1">
          <div class="d-flex justify-content-between py-1">
            <small class="text-muted">
              By {{ article.author }}
            </small>
            <small class="text-muted">
              Date {{  new Date(article.create_at * 1000).toLocaleDateString() }}
            </small>
          </div>
          <h4 class="card-title">
            {{ article.title }}
          </h4>
        </div>
        <div class="card-body pt-0">
          <p
            class="card-text ellipsis"
            v-html="article.description"
          />
          <a
            href="#"
            class="card-link stretched-link h6 text-primary"
            @click.prevent="goToBlog(article)"
          >
            more...
          </a>
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
          this.$swal({
            title: res.data.message,
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
    goToBlog(article) {
      this.$router.push(`/blogs/blog/${article.id}`);
      this.article = article;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    transition: all .3s ease;
    &:hover {
      box-shadow: 1px 5px 10px gray;
    }
  }
  .card-image {
    height: 250px;
    background-size: cover;
    background-position: center center;
  }
</style>
