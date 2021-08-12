<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-ripple-i0ld0lo9l1">
      <div class="ldio-kc4k04s39o">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <div class="bg-white py-5">
    <div class="container">
      <div class="row justify-content-center mb-4">
        <div class="col-md-9">
          <input type="text"
            class="form-control"
            placeholder="找文章 ..."
            v-model="searchArticles"
          >
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-9" v-if="searchArticle.length === 0">
          <div class="card border-0 mb-3" style="max-width: 1100px"
          v-for="article in articles" :key="article.title"
          >
            <div class="row g-0">
              <div class="col-md-4">
                <div class=" bg-cover"
                  :style="{ 'background-image': `url(${article.imageUrl})` }"
                  style="height: 220px;"
                ></div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ article.title }}</h5>
                  <p class="card-text ellipsis" v-html="article.description">
                  </p>
                  <p class="card-text d-flex justify-content-between">
                    <small class="text-muted">{{ article.author }}</small>
                    <small class="text-muted">
                      {{ new Date(article.create_at * 1000 ).toLocaleDateString()}}
                    </small>
                  </p>
                  <p class="card-text">
                    <a href="#"
                    class="stretched-link h6 text-primary"
                    @click.prevent="goToBlog(article)"
                    >
                      more...
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9" v-else>
          <div class="card border-0 mb-3" style="max-width: 1100px"
          v-for="article in searchArticle" :key="article.title"
          >
            <div class="row g-0">
              <div class="col-md-4">
                <div class="bg-cover"
                  :style="{ 'background-image': `url(${article.imageUrl})` }"
                  style="height: 220px;"
                ></div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ article.title }}</h5>
                  <p class="card-text ellipsis" v-html="article.description">
                  </p>
                  <p
                    class="card-text d-flex justify-content-between">
                    <small class="text-muted">
                      {{ article.author }}
                    </small>
                    <small class="text-muted">
                      {{ new Date(article.create_at * 1000 ).toLocaleDateString()}}
                    </small>
                  </p>
                  <p class="card-text">
                    <a href="#"
                    class="stretched-link h6 text-primary"
                    @click.prevent="goToBlog(article)"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      isLoading: false,
      articles: [],
      artile: {},
      filterArticles: [],
      searchArticles: '',
    };
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles(page = 1) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles?${page}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
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
.card {
  transition: all 0.3s ease;
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
