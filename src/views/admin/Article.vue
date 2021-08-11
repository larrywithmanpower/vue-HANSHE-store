<template>
    <div>
    <Loading :active="isLoading"/>
    <button
      type="button"
      class="btn btn-primary my-3"
      @click="openModal('new')"
    >
    新增文章
    </button>
    <div class="table-responsive">
      <table class="table align-middle text-center">
        <thead>
          <tr>
            <th width="20%">標題</th>
            <th width="25%">簡介</th>
            <th width="10%">作者</th>
            <th width="15%">日期</th>
            <th width="10%">是否公開</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td>{{ article.title }}</td>
            <td >
              <a
                href="#"
                ata-bs-toggle="PreviewModal"
                data-bs-target="#PreviewModal"
                @click.prevent="openModal('preview', article)">
                預覽內容
              </a>
            </td>
            <td>{{ article.author }}</td>
            <td>{{ new Date(article.create_at * 1000).toLocaleDateString() }}</td>
            <td>
              <span
                :class="{ 'text-success': article.isPublic }"
                v-if="article.isPublic"
              >
                發布
              </span>
              <span
                :class="{ 'text-danger': !article.isPublic }"
                v-if="!article.isPublic"
              >
                未發布
              </span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-primary"
                  @click="openModal('edit', article)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-danger"
                  @click="openModal('delete', article)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <ArticleModal
    id="ArticleModal"
    ref="ArticleModal"
    :is-new="isNew"
    :article="tempArticle"
    @update-article="updateArticle"
  />

  <DelModal
    id="DelModal"
    ref="DelModal"
    :item="tempArticle"
    @delete="deleteArticle"
  />

  <PreviewModal
    ref="PreviewModal"
    id="PreviewModal"
    :props-article="tempArticle"
  />
</template>

<script>
import ArticleModal from '@/components/admin/ArticleModal.vue';
import PreviewModal from '@/components/admin/PreviewModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      articles: [],
      isNew: false,
      tempArticle: {
        tag: [],
        imagesUrl: [],
      },
    };
  },
  inject: ['emitter'],
  components: {
    ArticleModal,
    DelModal,
    PreviewModal,
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.articles = res.data.articles;
          this.isLoading = false;
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '文章取得失敗',
            content: res.data.message.join('、'),
          });
          this.isLoading = false;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    openModal(isNew, article) {
      switch (isNew) {
        case 'new':
          this.isNew = true;
          this.tempArticle = {
            create_at: Math.floor(Date.now() / 1000),
            isPublic: false,
            tag: [],
            imagesUrl: [],
          };
          this.$refs.ArticleModal.showModal();
          break;
        case 'edit':
          this.isNew = false;
          this.tempArticle = {
            imagesUrl: [],
            ...article,
            content: '新品文章',
          };
          this.$refs.ArticleModal.showModal();
          break;
        case 'delete':
          this.tempArticle = { ...article };
          this.$refs.DelModal.showModal();
          break;
        case 'preview':
          this.tempArticle = { ...article };
          this.$refs.PreviewModal.showModal();
          break;
        default:
          break;
      }
    },
    updateArticle(tempArticle) {
      this.tempArticle = tempArticle;
      let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article`;
      let httpMethod = 'post';

      if (!this.isNew) {
        url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`;
        httpMethod = 'put';
      }

      this.$http[httpMethod](url, { data: tempArticle }).then((res) => {
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
          });
          this.getArticles(this.currentPage);
          this.$refs.ArticleModal.hideModal();
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: res.data.message.join(','),
          });
        }
      });
    },
    deleteArticle(tempArticle) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${tempArticle.id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: res.data.message,
          });
          this.getArticles();
          this.$refs.DelModal.hideModal();
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: res.data.message,
          });
        }
      }).catch((err) => console.log(err));
    },
  },
};
</script>
