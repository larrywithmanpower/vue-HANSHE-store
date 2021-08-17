<template>
  <div
    class="modal fade"
    id="articleModal"
    ref="articleModal"
    tabindex="-1"
    aria-labelledby="articleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="articleModalLabel">
            {{ isNew ? '新增文章' : '編輯文章' }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- ? 圖片新增 -->
            <div class="col-sm-4">
                <div class="mb-1">
                  <div class="form-group">
                      <label for="imageUrl" class="fw-bold">
                        主要圖片
                      </label>
                      <input
                        v-model="tempArticle.imageUrl"
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                      >
                  </div>
                  <img
                    class="img-fluid"
                    :src="tempArticle.imageUrl"
                  >
                </div>
                <div class="form-group mb-3">
                    <label for="photoFile" class="fw-bold">
                      上傳圖片檔案
                    </label>
                    <input
                      type="file"
                      id="photoFile"
                      class="form-control"
                      placeholder="請輸入圖片路徑"
                      @change="uploadImage"
                    >
                </div>
                <hr>
                <!-- ? 多圖 -->
                <div class="mb-1 fw-bold">
                  其他圖片
                </div>
                <div v-if="Array.isArray(tempArticle.imagesUrl)">
                    <div
                      class="mb-1"
                      v-for="(image, index) in tempArticle.imagesUrl"
                      :key="index"
                    >
                        <label for="imageUrl">圖片網址</label>
                        <input
                          v-model="tempArticle.imagesUrl[index]"
                          type="text"
                          class="form-control"
                          placeholder="請輸入圖片連結"
                        >
                        <img
                          :src="tempArticle.imagesUrl[index]"
                          class="img-fluid"
                        >
                    </div>
                    <div
                      v-if="!tempArticle.imagesUrl.length ||
                      tempArticle.imagesUrl[tempArticle.imagesUrl.length - 1]"
                    >
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm d-block w-100"
                        @click="tempArticle.imagesUrl.push('')"
                      >
                        新增圖片
                      </button>
                    </div>
                    <div v-else>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm d-block w-100"
                        @click="tempArticle.imagesUrl.pop()"
                      >
                          刪除空白圖片網址
                      </button>
                    </div>
                </div>
                <div class="mt-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-danger d-block w-100"
                    @click="removeImages()"
                  >
                      刪除圖片
                  </button>
                </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  v-model="tempArticle.title"
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                >
              </div>
              <div class="form-group mb-3">
                <label for="category">作者</label>
                <input
                  v-model="tempArticle.author"
                  id="category"
                  type="text"
                  class="form-control"
                  placeholder="請輸入您的大名"
                />
              </div>
              <!-- tags -->
              <div class="tag-input form-group mb-3">
                <label for="category">標籤</label>
                <ul class="tags">
                  <li v-for="(tag, index) in tempArticle.tag" :key="tag" class="tag">
                    {{ tag }}
                    <button class="delete" @click="removeTag(index)">x</button>
                  </li>
                </ul>
                <input
                  v-model="newTag"
                  class="form-control"
                  type="text"
                  :style="{ 'padding-left': `${paddingLeft}px` }"
                  @keydown.enter="addTag(newTag)"
                  @keydown.prevent.tab="addTag(newTag)"
                  @keydown.delete="newTag.length || removeTag(tags.length - 1)"
                />
              </div>
              <hr>
              <div class="form-group mb-3">
                <label for="content">文章類別</label>
                <textarea
                  v-model="tempArticle.content"
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入文章類別"
                  rows="1"
                >
                </textarea>
              </div>
              <div class="form-group mb-3">
                <label for="description">文章內容</label><br>
                <p v-html="tempArticle.description"></p>
                <ckeditor
                  :editor="editor"
                  v-model="tempArticle.description"
                  :config="editorConfig"
                ></ckeditor>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    v-model="tempArticle.isPublic"
                    id="isPublic"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="true"
                    :false-value="false">
                  <label class="form-check-label" for="isPublic">
                    是否發布
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-article', tempArticle)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  props: ['article', 'isNew'],
  emits: ['update-article'],
  data() {
    return {
      articleModal: {},
      tempArticle: {},
      newTag: '',
      paddingLeft: 10,
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // 刪除工具列的功能
        placeholder: '請輸入文章...',
        // 初始化載入文字
        heading: {
        // 設定 Heading 內的樣式，可新增多個
          options: [
            {
              model: 'paragraph',
              title: 'Paragraph',
              class: 'ck-heading_paragraph',
            },
            {
              model: 'heading1',
              view: 'h2',
              title: 'Heading 1',
              class: 'ck-heading_heading1',
            },
            {
              model: 'heading2',
              view: 'h3',
              title: 'Heading 2',
              class: 'ck-heading_heading2',
            },
          ],
        },
        language: 'tw',
      },
    };
  },
  mounted() {
    this.articleModal = new Modal(this.$refs.articleModal);
  },
  watch: {
    article() {
      this.tempArticle = this.article;
    },
  },
  methods: {
    showModal() {
      this.articleModal.show();
    },
    hideModal() {
      this.articleModal.hide();
    },
    uploadImage() {
      // ! DOM要放在子元件內才找的到
      const fileInput = document.querySelector('#photoFile');
      // 取出fileInput中的相片檔案
      const file = fileInput.files[0];
      // 格式轉換：使用formData格式來上傳
      const formData = new FormData();
      // 新增欄位file-to-upload
      formData.append('file-to-upload', file);
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((res) => {
        if (res.data.success) {
          // ! 判斷tempProduct.imageUrl是否存在，不存在就加入倒imageUrl(單張)，存在新增到陣列imagesUrl中
          if (!this.tempProduct.imageUrl) {
            this.tempArticle.imageUrl = res.data.imageUrl;
          } else {
            this.tempArticle.imagesUrl.push(res.data.imageUrl);
          }
          // 加入傳上圖片就清空value文字
          fileInput.value = '';
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
    removeImages() {
      if (this.tempArticle.imagesUrl.length) {
        this.tempArticle.imagesUrl.pop();
      } else {
        this.tempArticle.imageUrl = '';
      }
    },
    addTag(tag) {
      this.tempArticle.tag.push(tag);
      this.newTag = '';
    },
    removeTag(index) {
      this.tempArticle.tag.splice(index, 1);
    },
  },
};
</script>
