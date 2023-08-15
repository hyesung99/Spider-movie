<template>
  <div class="movie_header">
    <div class="movie_header_home" @click="goHome">SPIDER MOVIE</div>
    <SearchBar
      :changeSearchMediaType="changeSearchMediaType"
      :changeSearchTitle="changeSearchTitle"
      :enterSearch="enterSearch"
      :showDropdown="showDropdown"
      :movieList="movieList"
      :goMovieDetail="goMovieDetail"
      @setDropdownVisiblliity="setDropdownVisiblliity"
    />
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
import { searchDebounceTime, basePageNumber } from '@/cosntants'
import debounce from 'lodash/debounce'

export default {
  name: 'MovieHeader',
  components: {
    SearchBar,
  },
  computed: {
    mediaType() {
      return this.$store.state.searchModule.searchMediaType
    },
    movieList() {
      return this.$store.state.searchModule.searchRecommendation
    },
  },
  data() {
    return {
      showDropdown: false,
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
      this.searchFirstPageMoviesByInputChange()
    },

    searchFirstPageMoviesByInputChange: debounce(async function () {
      await this.$store.dispatch('searchModule/searchFirstPageMovies')
    }, searchDebounceTime),

    async enterSearch(title) {
      if (title !== this.$store.state.searchModule.searchTitle) {
        this.$store.dispatch('searchModule/stopSearchAllMovies')
      }
      await this.$store.dispatch('searchModule/searchFirstPageMovies')
      const currentPageMovieList =
        this.$store.state.searchModule.searchResult[0]
      this.setDropdownVisiblliity(false)
      this.$store.dispatch('pageModule/setCurrentPageNumber', basePageNumber)
      this.$store.dispatch('pageModule/setCurrentPageMovies', {
        currentPageMovieList,
      })
      this.$router.push({ name: 'SearchResult' })
      this.$store.dispatch('searchModule/searchAllMovies')
    },

    setDropdownVisiblliity(value) {
      this.showDropdown = value
    },
    goMovieDetail(movieID) {
      this.$router.push({
        name: 'MovieDetail',
        params: { id: movieID },
      })
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
