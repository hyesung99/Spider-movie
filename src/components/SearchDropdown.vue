<template>
  <div class="header_searchBar_result">
    <div
      class="header_searchBar_result_item"
      v-for="movie in movieList"
      :key="movie.imdbID"
      :movie="movie"
    >
      <div
        class="header_searchBar_result_item_poster"
        :style="{ backgroundImage: `url(${movie.Poster})` }"
      >
        <div class="header_searchBar_result_item_poster__overlay"></div>
        <h1 class="header_searchBar_result_item_poster_title">
          {{ movie.Title }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import MovieCard from './MovieCard.vue'
export default {
  computed: {
    movieList() {
      if (this.$store.state.searchModule.searchResult.Search) {
        return this.$store.state.searchModule.searchResult.Search.slice(0, 5)
      } else {
        return []
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@use '@/scss/_flex.scss';
@use '@/scss/_text.scss';
@import '@/scss/_color.scss';
@import '@/scss/_size.scss';

.header_searchBar_result {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: $header-searchBar-width;
  top: $header-height;
  overflow: auto;
  z-index: 2;
  background-color: $color-dropdown-background;
  &_item {
    width: 100%;
    &_poster {
      @include flex.flex(row, center, center);
      height: 100px;
      width: 100%;
      position: relative;
      &__overlay {
        position: absolute;
        height: 100px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
      &_title {
        @include text.setText(20px, bold, $color-main, center);
        @include text.textEllipsis(2);
        margin: 0 10px;
        z-index: 2;
      }
    }
  }
}
</style>
