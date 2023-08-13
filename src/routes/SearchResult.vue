<template>
  <section class="main">
    <div class="main_container">
      <MovieCard
        v-for="movie in movieList"
        :key="movie.imdbID"
        :movie="movie"
      />
    </div>
  </section>
  <Footer />
</template>
<script>
import MovieCard from '@/components/MovieCard.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    MovieCard,
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
@use '@/scss/_flex.scss' as flex;
@import '@/scss/_size.scss';
@import '@/scss/_color.scss';
.main {
  padding-top: $header-height;
  background-color: $color-background;
  &_container {
    @include flex.flex(row, space-around, center);
    min-height: calc(100vh - #{$header-height} - #{$footer-height});
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
