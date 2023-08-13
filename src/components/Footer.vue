<template>
  <section class="footer">
    <div class="footer_pagination">
      <span
        class="material-symbols-outlined footer_pagination_prev"
        @click="prevPage"
      >
        chevron_left
      </span>
      <div class="footer_pagination_number">
        {{ pageNumber }} of {{ totalPageNumber }}
      </div>
      <span
        class="material-symbols-outlined footer_pagination_next"
        @click="nextPage"
      >
        chevron_right
      </span>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    pageNumber() {
      return this.$store.state.pageModule.currentPage
    },
    totalPageNumber() {
      return this.$store.state.searchModule.totalPage
    },
  },
  methods: {
    async nextPage() {
      this.$store.dispatch('pageModule/addCurrentPageNumber', 1)
      this.$store.dispatch('pageModule/setCurrentPageMovies')
    },
    async prevPage() {
      this.$store.dispatch('pageModule/addCurrentPageNumber', -1)
      this.$store.dispatch('pageModule/setCurrentPageMovies')
    },
  },
}
</script>
<style lang="scss">
@use '@/scss/_flex.scss' as flex;
@import '@/scss/_size.scss';
@import '@/scss/_color.scss';
.footer {
  @include flex.flex(row, center, center);
  background-color: $color-footer-background;
  height: $footer-height;
  &_pagination {
    @include flex.flex(row, center, center);
    color: $color-footer-icon;
    &_prev {
      cursor: pointer;
    }
    &_next {
      cursor: pointer;
    }
  }
}
</style>
