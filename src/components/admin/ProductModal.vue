<template>
  <div
    class="modal fade"
    id="productModal"
    ref="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="productModalLabel">
            {{ isNew ? "新增商品" : "編輯商品" }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form
            class="needs-validation"
            @submit="$emit('update-product', editProduct)"
            novalidate
          >
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-1">
                  <div class="form-group">
                    <label for="imageUrl" class="fw-bold">
                      主要圖片
                    </label>
                    <input
                      v-model="editProduct.imageUrl"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      required
                    />
                    <div class="invalid-feedback" id="validationServer05Feedback">
                      必填
                    </div>
                  </div>
                  <img class="img-fluid" :src="editProduct.imageUrl" />
                </div>
                <div class="form-group mb-3 position-relative">
                  <label for="photoFile" class="fw-bold">
                    上傳圖片檔案
                  </label>
                  <input
                    type="file"
                    id="photoFile"
                    class="form-control"
                    placeholder="請輸入圖片路徑"
                    @change="uploadImage"
                  />
                </div>
                <hr />
                <!-- 多圖 -->
                <div class="mb-1 fw-bold">其他圖片</div>
                <div v-if="Array.isArray(editProduct.imagesUrl)">
                  <div
                    class="mb-1"
                    v-for="(image, index) in editProduct.imagesUrl"
                    :key="index"
                  >
                    <label for="imageUrl">圖片網址</label>
                    <input
                      v-model="editProduct.imagesUrl[index]"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                    />
                    <img
                      :src="editProduct.imagesUrl[index]"
                      class="img-fluid"
                    />
                  </div>
                  <div
                    v-if="
                      !editProduct.imagesUrl.length ||
                      editProduct.imagesUrl[editProduct.imagesUrl.length - 1]
                    "
                  >
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="editProduct.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                  </div>
                  <div v-else>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm d-block w-100"
                      @click="editProduct.imagesUrl.pop()"
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
                <div class="form-group mb-3">
                  <label for="title">標題</label>
                  <input
                    v-model="editProduct.title"
                    id="title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                    required
                  />
                  <div class="invalid-feedback">
                    標題 必填
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 mb-3">
                    <label for="category">分類</label>
                    <input
                      v-model="editProduct.category"
                      id="category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                      required
                    />
                    <div class="invalid-feedback">
                      分類 必填
                    </div>
                  </div>
                  <div class="form-group col-md-6 mb-3">
                    <label for="unit">單位</label>
                    <input
                      v-model="editProduct.unit"
                      id="unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                      required
                    />
                    <div class="invalid-feedback">
                      單位 必填
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 mb-3">
                    <label for="origin_price">原價</label>
                    <input
                      v-model.number="editProduct.origin_price"
                      id="origin_price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入原價"
                      required
                    />
                    <div class="invalid-feedback">
                      原價 必填
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      v-model.number="editProduct.price"
                      id="price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入售價"
                      required
                    />
                    <div class="invalid-feedback">
                      售價 必填
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="form-group col-6 mb-3">
                    <label for="storageNum">庫存</label>
                    <input
                      v-model.number="editProduct.storageNum"
                      id="storageNum"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入庫存"
                      required
                    />
                    <div class="invalid-feedback">
                      庫存 必填
                    </div>
                  </div>
                  <div class="form-check col-6">
                    <label class="mb-1" for="rate3">星等</label><br>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="rate1"
                        :value='1'
                        v-model.number="editProduct.rate"
                      >
                      <label class="form-check-label" for="rate1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="rate2"
                        :value='2'
                        v-model.number="editProduct.rate"
                      >
                      <label class="form-check-label" for="rate2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="rate3"
                        :value="3"
                        v-model.number="editProduct.rate"
                      >
                      <label class="form-check-label" for="rate3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="rate4"
                        :value="4"
                        v-model.number="editProduct.rate"
                      >
                      <label class="form-check-label" for="rate4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="rate5"
                        :value="5"
                        v-model.number="editProduct.rate"
                      >
                      <label class="form-check-label" for="rate5">5</label>
                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <label for="description">產品描述</label>
                  <textarea
                    v-model="editProduct.description"
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                    rows="4"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="content">功能說明</label>
                  <p v-html="editProduct.content"></p>
                  <ckeditor
                    :editor="editor"
                    v-model="editProduct.content"
                    :config="editorConfig"
                  />
                </div>
                <div class="row align-items-center ms-1">
                  <div class="form-check col-2">
                    <input
                      v-model="editProduct.is_enabled"
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">啟用</label>
                  </div>
                  <div class="form-check col-2">
                    <input
                      v-model="editProduct.is_hot"
                      id="is_hot"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_hot">熱銷</label>
                  </div>
                  <div class="form-check col-2">
                    <input
                      v-model="editProduct.is_new"
                      id="is_new"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_new">新品</label>
                  </div>
                  <div class="form-check col-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="male"
                        value="male"
                        v-model="editProduct.sex"
                      >
                      <label class="form-check-label" for="male">男</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="neutral" value="neutral"
                        v-model="editProduct.sex"
                      >
                      <label class="form-check-label" for="neutral">中性</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="female" value="female"
                        v-model="editProduct.sex"
                      >
                      <label class="form-check-label" for="female">女</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer pb-0">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                取消
              </button>
              <button
                type="submit"
                class="btn btn-primary"
              >
                確認
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  props: ['tempProduct', 'isNew'],
  emits: ['update-product'],
  data() {
    return {
      productModal: {},
      editProduct: {
        storageNum: 0,
        rate: '3',
        is_new: 0,
        is_hot: 0,
      },
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // 刪除工具列的功能
        placeholder: '請輸入功能...',
        // 當編輯器內容為空時顯示此字串
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
        // 設定語言
      },
    };
  },
  mounted() {
    this.productModal = new Modal(this.$refs.productModal);
    // validation
    (function formaValidate() {
      const forms = document.querySelectorAll('.needs-validation');
      Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (e) => {
          if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
          }
          form.classList.add('was-validated');
        }, true);
      });
    }());
  },
  watch: {
    tempProduct() {
      this.editProduct = this.tempProduct;
    },
  },
  methods: {
    showModal() {
      this.productModal.show();
    },
    hideModal() {
      this.productModal.hide();
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
          // ! 判斷tempProduct.imageUrl是否存在，不存在就加入imageUrl(單張)，存在新增到陣列imagesUrl中
          if (!this.tempProduct.imageUrl) {
            this.editProduct.imageUrl = res.data.imageUrl;
          } else {
            this.editProduct.imagesUrl.push(res.data.imageUrl);
          }
          // 加入傳上圖片就清空value文字
          fileInput.value = '';
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    removeImages() {
      if (this.editProduct.imagesUrl.length) {
        this.editProduct.imagesUrl.pop();
      } else {
        this.editProduct.imageUrl = '';
      }
    },
  },
};
</script>
