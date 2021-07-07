<template>
  <div
    class="text-white w-100"
    @mouseover="stop"
    @mouseout="lang"
  >
    {{ mag }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      mag: '本次優惠活動優惠號碼：xxxxx !!!    ',
      intervalId: null,
    };
  },
  methods: {
    lang() {
      if (this.intervalId != null) return;

      this.intervalId = setInterval(() => {
        const start = this.mag.substring(0, 1);
        const end = this.mag.substring(1);
        this.mag = end + start;
      }, 200);
    },
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
  },
};
</script>
