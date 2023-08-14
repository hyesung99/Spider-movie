<template>
  <div class="movie_header">
    <div class="movie_header_home" @click="goHome">SPIDER MOVIE</div>
    <SearchBar
      :mediaType="mediaType"
      :changeSearchMediaType="changeSearchMediaType"
      :changeSearchTitle="changeSearchTitle"
      :enterSearch="enterSearch"
      :showDropdown="showDropdown"
      :mediaTypes="MediaTypes"
      @setDropdownVisiblliity="setDropdownVisiblliity"
    />
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
import { MediaTypes } from '@/cosntants'

export default {
  name: 'MovieHeader',
  components: {
    SearchBar,
  },
  computed: {
    mediaType() {
      return this.$store.state.searchModule.searchMediaType
    },
  },
  data() {
    return {
      showDropdown: false,
      MediaTypes,
    }
  },
  methods: {
    goHome() {
      this.$store.dispatch('searchModule/clearSearchResults')
      this.$router.push('/')
    },
    changeSearchMediaType(mediaType) {
      this.setDropdownVisiblliity(true)
      this.$store.dispatch('searchModule/setSearchOptions', {
        key: 'searchMediaType',
        value: mediaType,
      })
      this.$store.dispatch('searchModule/searchFirstPageMovies')
    },
    changeSearchTitle(title) {
      this.setDropdownVisiblliity(true)
      this.$store.dispatch('searchModule/setSearchOptions', {
        key: 'searchTitle',
        value: title,
      })
      this.$store.dispatch('searchModule/searchFirstPageMovies')
    },
    enterSearch() {
      this.setDropdownVisiblliity(false)
      this.$store.dispatch('pageModule/setCurrentPageNumber', 1)
      this.$store.dispatch('pageModule/setCurrentPageMovies')
      this.$router.push({ name: 'SearchResult' })
      this.$store.dispatch('searchModule/searchAllMovies')
    },

    setDropdownVisiblliity(value) {
      this.showDropdown = value
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
    box-sizing: border-box;
    @include text.setText(16px, 1000, $color-header-home, center);
    cursor: pointer;
    padding: 5px 3px;
    width: 80px;
    min-width: 80px;
    border: 5px solid $color-header-home;
  }
}
</style>
