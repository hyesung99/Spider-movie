<template>
  <div class="movie_header">
    <div class="movie_header_home" @click="goHome">SPIDER MOVIE</div>
    <SearchBar />
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
export default {
  name: 'MovieHeader',
  components: {
    SearchBar,
  },
  methods: {
    goHome() {
      this.$store.dispatch('searchModule/clearSearchResults')
      this.$router.push('/')
    },
  },
}
</script>
<style lang="scss">
@use '@/scss/_flex.scss' as flex;
@use '@/scss/_text.scss' as text;
@import '@/scss/_color.scss';
@import '@/scss/_size.scss';
.movie_header {
  @include flex.flex(row, space-between, center);
  position: fixed;
  background-image: $color-header-background;
  width: 100%;
  padding: 0 15px;
  height: $header-height;
  z-index: 10;
  &_home {
    cursor: pointer;
    padding: 8px 5px;
    @include text.setText(20px, 1000, $color-header-home, center);
    border: 5px solid $color-header-home;
  }
}
</style>
