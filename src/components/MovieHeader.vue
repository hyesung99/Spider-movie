<template>
  <div class="movie-header">
    <SearchBar />
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
export default {
  name: 'MovieHeader',
  components: {
    SearchBar
  }
}
</script>
<style lang="scss">
@use '@/scss/_flex.scss' as flex;
@import '@/scss/_color.scss';
@import '@/scss/_size.scss';
.movie-header {
  @include flex.flex(row, center, center);
  position: fixed;
  background-color: $color-background;
  width: 100%;
  padding: 0 20px;
  height: $header-height;
}
</style>
