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
.movie-header {
  @include flex.flex(row, center, center);
  background-color: $color-background;
  padding: 0 20px;
  height: 70px;
}
</style>
