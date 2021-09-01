<template>
  <div
    class="modal"
    tabindex="-1"
    ref="previewModal"
    id="previewModal"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5>文章預覽</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-between mb-3">
            <small class="text-muted">
              made by {{ propsArticle.author }}
            </small>
            <small class="text-muted">
              更新日期：{{ new Date(propsArticle.create_at * 1000).toLocaleDateString() }}
            </small>
          </div>
          <h2 class="text-center">
            {{ propsArticle.title }}
          </h2>
          <img
            class="d-block mx-auto img-fluid mb-3"
            :src="propsArticle.imageUrl"
            alt="文章相片"
          >
          <p v-html="propsArticle.description"></p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['propsArticle'],
  data() {
    return {
      previwModal: {},
      article: {},
    };
  },
  mounted() {
    this.previewModal = new Modal(this.$refs.previewModal);
  },
  methods: {
    showModal() {
      this.previewModal.show();
    },
    hideModal() {
      this.previewModal.hide();
    },
  },
};
</script>
