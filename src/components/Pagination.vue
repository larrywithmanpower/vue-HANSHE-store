<template>
  <nav aria-label="Page navigation">
    <ul class="pagination pagination-primary">
      <li
        class="page-item"
        :class="{ 'disabled': !page.has_pre }"
      >
        <a
          class="page-link link-primary"
          href="#"
          @click.prevent="$emit('get-page', page.current_page - 1)"
        >
          Previous
        </a>
      </li>
      <li
        class="page-item"
        v-for="item in page.total_pages"
        :key="item"
        :class="{ 'active': item === page.current_page }"
      >
        <a
          class="page-link link-primary"
          href="#"
          @click.prevent="$emit('get-page', item)"
        >
          {{ item }}
        </a>
      </li>
      <li
        class="page-item"
        :class="{ 'disabled': !page.has_next }"
      >
        <a
          class="page-link link-primary"
          href="#"
          @click.prevent="$emit('get-page', page.current_page + 1)"
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['page'],
  emits: ['get-page'],
};
</script>

<style>
  .page-link:focus {
      box-shadow: 0 0 0 0.25rem #19875400;
  }
</style>
