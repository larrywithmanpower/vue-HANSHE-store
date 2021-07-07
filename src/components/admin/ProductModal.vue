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
          <div class="row">
            <!-- ? 圖片新增 -->
            <div class="col-sm-4">
              <div class="mb-1">
                <div class="form-group">
                  <label for="imageUrl" class="fw-bold">主要圖片</label>
                  <input
                    v-model="editProduct.imageUrl"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <img class="img-fluid" :src="editProduct.imageUrl" />
              </div>
              <div class="form-group mb-3">
                <label for="photoFile" class="fw-bold">上傳圖片檔案</label>
                <input
                  type="file"
                  id="photoFile"
                  class="form-control"
                  placeholder="請輸入圖片路徑"
                  @change="uploadImage"
                />
              </div>
              <hr />
              <!-- ? 多圖 -->
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
                  <img :src="editProduct.imagesUrl[index]" class="img-fluid" />
                </div>
                <div
                  v-if="
                    !editProduct.imagesUrl.length ||
                    editProduct.imagesUrl[editProduct.imagesUrl.length - 1]
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="editProduct.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="editProduct.imagesUrl.pop()"
                  >
                    刪除空白圖片網址
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <button
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
                />
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
                  />
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label for="price">單位</label>
                  <input
                    v-model="editProduct.unit"
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                  />
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
                  />
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
                  />
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
                  />
                </div>
                <div class="form-check col-6">
                  <p class="mb-1">星等</p>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                    type="radio" id="rate1" value="1.0"
                    v-model="editProduct.rate">
                    <label class="form-check-label" for="rate1">1.0</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                    type="radio" id="rate2" value="2.0"
                    v-model="editProduct.rate">
                    <label class="form-check-label"
                    for="rate2">2.0</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                    type="radio" id="rate3" value="3.0"
                    v-model="editProduct.rate">
                    <label class="form-check-label"
                    for="rate3">3.0</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                    type="radio" id="rate4" value="4.0"
                    v-model="editProduct.rate">
                    <label class="form-check-label"
                    for="rate4">4.0</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                    type="radio" id="rate5" value="5.0"
                    v-model="editProduct.rate">
                    <label class="form-check-label"
                    for="rate5">5.0</label>
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
                ></textarea>
              </div>
              <div class="form-group mb-3">
                <label for="content">功能說明</label>
                <textarea
                  v-model="editProduct.content"
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  rows="4"
                ></textarea>
              </div>
              <div class="row">
                <div class="form-check col-2">
                  <input
                    v-model="editProduct.is_enabled"
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >啟用</label
                  >
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
                  <label class="form-check-label" for="is_hot"
                    >熱銷</label
                  >
                </div>
                <div class="form-check col-7">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                    type="radio" name="inlineRadioOptions" id="male" value="male"
                    v-model="editProduct.sex">
                    <label class="form-check-label" for="male">男鞋</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                    type="radio" name="inlineRadioOptions" id="neutral" value="neutral"
                    v-model="editProduct.sex">
                    <label class="form-check-label"
                    for="neutral">中性</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input"
                    type="radio" name="inlineRadioOptions" id="female" value="female"
                    v-model="editProduct.sex">
                    <label class="form-check-label" for="female">女鞋</label>
                  </div>
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
            @click="$emit('update-product', editProduct)"
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

export default {
  props: ['tempProduct', 'isNew'],
  data() {
    return {
      productModal: {},
      editProduct: {},
    };
  },
  mounted() {
    this.productModal = new Modal(this.$refs.productModal);
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
