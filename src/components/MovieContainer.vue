<template>
  <div class="movie_container">
    <MovieCard v-for="movie in movieList" :key="movie.imdbID" :movie="movie" />
  </div>
</template>
<script>
import MovieCard from '@/components/MovieCard.vue'

export default {
  components: {
    MovieCard,
  },
  props: {
    movieList: {
      type: Array,
      required: true,
    },
  },
}
</script>
<scss lang="scss" scoped>
@use '@/scss/_flex.scss' as flex;
@import '@/scss/_size.scss';

.movie_container {
  @include flex.flex(row, space-around, center);
  min-height: calc(100vh - #{$header-height} - #{$footer-height});
  width: 100%;
  flex-wrap: wrap;
}
</scss>
