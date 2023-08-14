<template>
  <section class="main">
    <MovieContainer :movieList="movieList" />
  </section>
  <Footer
    :nextPage="nextPage"
    :prevPage="prevPage"
    :currentPageNumber="currentPageNumber"
    :totalPageNumber="totalPageNumber"
  />
</template>
<script>
import Footer from '@/components/Footer.vue'
import MovieContainer from '@/components/MovieContainer.vue'
export default {
  components: {
    MovieContainer,
    Footer,
  },
  computed: {
    movieList() {
      return this.$store.state.pageModule.currentPageMovies
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
      this.$store.dispatch('pageModule/addCurrentPageNumber', 1)
      this.$store.dispatch('pageModule/setCurrentPageMovies')
    },
    prevPage() {
      this.$store.dispatch('pageModule/addCurrentPageNumber', -1)
      this.$store.dispatch('pageModule/setCurrentPageMovies')
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
