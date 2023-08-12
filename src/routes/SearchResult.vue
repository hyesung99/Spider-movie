<template>
  <section class="main">
    <div class="main_container">
      <MovieCard
        v-for="movie in movieList"
        :key="movie.imdbID"
        :movie="movie" />
    </div>
  </section>
</template>
<script>
import MovieCard from '@/components/MovieCard.vue'
export default {
  components: {
    MovieCard
  },
  computed: {
    movieList() {
      return this.$store.state.searchModule.searchResult.Search
    }
  }
}
</script>
<style lang="scss" scoped>
@use '@/scss/_flex.scss' as flex;
.main {
  padding: 20px;
  &_container {
    width: 100%;
    @include flex.flex(row, space-around, center);
    flex-wrap: wrap;
  }
}
</style>
