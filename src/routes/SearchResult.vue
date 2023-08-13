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
      return this.$store.getters['pageModule/currentPageMovies']
    },
  },
}
</script>
<style lang="scss" scoped>
@use '@/scss/_flex.scss' as flex;
@import '@/scss/_size.scss';
.main {
  padding-top: $header-height;
  &_container {
    width: 100%;
    @include flex.flex(row, space-around, center);
    flex-wrap: wrap;
  }
}
</style>
