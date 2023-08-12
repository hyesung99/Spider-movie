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
      return parseInt(this.$store.state.searchModule.searchPage, 10)
    },
    totalPageNumber() {
      return Math.ceil(
        parseInt(this.$store.state.searchModule.searchResult.totalResults, 10) /
          10,
      )
    },
  },
  methods: {
    async nextPage() {
      if (this.pageNumber < this.totalPageNumber) {
        await this.$store.dispatch('searchModule/searchNextPage', {
          addPage: 1,
        })
        // this.updateMovieList()
      }
    },
    async prevPage() {
      if (this.pageNumber > 1) {
        await this.$store.dispatch('searchModule/searchNextPage', {
          addPage: -1,
        })
        // this.updateMovieList()
      }
    },
    async updateMovieList() {
      console.log(this.$store.state.searchModule.searchResult.Search)
      await this.$store.dispatch('searchModule/updateSearchResultForMain')
    },
  },
}
</script>
<style lang="scss">
@use '@/scss/_flex.scss' as flex;
.footer {
  &_pagination {
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
