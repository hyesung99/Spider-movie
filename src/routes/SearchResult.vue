<template>
  <section class="main">
    <MovieContainer :movieList="movieList" />
  </section>
  <Footer />
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
