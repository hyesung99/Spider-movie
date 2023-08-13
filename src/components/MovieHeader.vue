<template>
  <div class="movie_header">
    <span
      class="material-symbols-outlined movie_header_home"
      @click="$router.push({ name: 'Home' })"
    >
      home
    </span>
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
  }
}
</style>
