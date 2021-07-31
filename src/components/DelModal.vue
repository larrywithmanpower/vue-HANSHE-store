<template>
  <div
    id="delModal"
    ref="delModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delModalLabel"
    aria-hidden="true"
  >
        <div class="modal-dialog">
            <div class="modal-content border-0">
                <div class="modal-header bg-danger text-white">
                    <h5 id="delModalLabel" class="modal-title">
                        <span>刪除產品</span>
                    </h5>
                    <button type="button" class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    是否刪除
                    <strong class="text-danger"
                    >
                      {{ item.title ? item.title : item.create_at }}
                    </strong>
                    (刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button"
                      class="btn btn-outline-secondary"
                      data-bs-dismiss="modal"
                    >
                      取消
                    </button>
                    <button type="button"
                      class="btn btn-danger"
                      @click="$emit('delete', item)"
                    >
                      確認刪除
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  props: ['item'],
  mounted() {
    this.delModal = new Modal(this.$refs.delModal);
  },
  methods: {
    showModal() {
      this.delModal.show();
    },
    hideModal() {
      this.delModal.hide();
    },
  },
};
</script>
