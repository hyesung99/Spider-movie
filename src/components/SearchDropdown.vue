<template>
  <div class="header_searchBar_result">
    <div class="header_searchBar_result_fail" v-if="!searchSucceed">
      {{ searchFailMessage }}
    </div>
    <div
      v-else-if="searchSucceed"
      class="header_searchBar_result_item"
      v-for="movie in movieList"
      :key="movie.imdbID"
      :movie="movie"
      @click="goMovieDetail(movie.imdbID)"
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
export default {
  props: {
    movieList: {
      type: Array,
      required: true,
    },
    goMovieDetail: {
      type: Function,
      required: true,
    },
  },
  computed: {
    searchSucceed() {
      return this.$store.state.searchModule.searchSucceed
    },
    searchFailMessage() {
      return this.$store.state.searchModule.searchFailMessage
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
  color: white;
  text-align: center;
  line-height: 50px;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 500px;
  top: $header-height;
  overflow: auto;
  z-index: 5;
  background-color: $color-dropdown-background;
  &_fail {
    @include text.setText(20px, bold, $color-movieCard-text, center);
    color: white;
  }
  &_item {
    cursor: pointer;
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
        backdrop-filter: blur(5px);
      }
      &_title {
        @include text.setText(20px, bold, $color-movieCard-text, center);
        @include text.textEllipsis(2);
        margin: 0 10px;
        z-index: 2;
      }
    }
  }
}
</style>
