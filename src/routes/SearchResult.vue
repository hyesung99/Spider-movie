<template>
  <template v-if="!currentPageMovieList">
    <Loading />
  </template>
  <template v-else-if="currentPageMovieList">
    <MovieHeader />
    <section class="main">
      <MovieContainer :movieList="currentPageMovieList" />
    </section>
    <Footer
      :nextPage="nextPage"
      :prevPage="prevPage"
      :currentPageNumber="currentPageNumber"
      :totalPageNumber="totalPageNumber"
    />
  </template>
</template>
<script>
import Footer from '@/components/Footer.vue'
import MovieContainer from '@/components/MovieContainer.vue'
import MovieHeader from '@components/MovieHeader.vue'
import Loading from '@components/Loading.vue'
export default {
  components: {
    MovieContainer,
    Footer,
    MovieHeader,
    Loading,
  },
  data() {
    return {
      currentPageNumber: 1,
    }
  },
  computed: {
    currentPageMovieList() {
      return this.$store.state.pageModule.currentPageMovieList
    },
    allMovieList() {
      return this.$store.state.searchModule.searchResult
    },
    currentPageNumber() {
      return this.$store.state.pageModule.currentPage
    },
    totalPageNumber() {
      return this.$store.state.searchModule.totalPage
    },
  },
  methods: {
    nextPage() {
      this.currentPageNumber += 1
      const currentPageMovieList = this.allMovieList[this.currentPageNumber]
      this.$store.dispatch('pageModule/setCurrentPageMovies', {
        currentPageMovieList,
      })
    },
    prevPage() {
      this.currentPageNumber -= 1
      const currentPageMovieList = this.allMovieList[this.currentPageNumber]
      this.$store.dispatch('pageModule/setCurrentPageMovies', {
        currentPageMovieList,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/scss/_size.scss';
@import '@/scss/_color.scss';
.main {
  padding-top: $header-height;
  background-color: $color-background;
}
</style>
