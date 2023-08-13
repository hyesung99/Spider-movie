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
@import '@/scss/_color.scss';
.footer {
  background-color: $color-footer-background;
  &_pagination {
    color: $color-footer-icon;
    @include flex.flex(row, center, center);
    padding: 20px;
    &_prev {
      cursor: pointer;
    }
    &_next {
      cursor: pointer;
    }
  }
}
</style>
