<template>
  <div class="header_searchBar">
    <input
      class="header_searchBar_input"
      @input="changeSearchTitle($event.target.value)"
      @focus="openDropdown"
      ref="searchInput"
      type="text"
      placeholder="검색"
    />
    <!-- @keydown.enter="enterSearch" 추가예정 -->
    <div class="header_searchBar_rightside">
      <div
        class="header_searchBar_rightside_selected"
        :class="{ __active: mediaType === this.mediaType }"
        v-for="mediaType in MediaTypes"
        @click="changeSearchMediaType(mediaType)"
      >
        {{ mediaType }}
      </div>
    </div>
    <div class="header_searchBar_searchBtn" @click="enterSearch">
      <span class="material-symbols-outlined"> search </span>
    </div>
    <div
      class="header_searchBar_darken"
      @click="closeDropdown"
      v-show="showDropdown"
    ></div>
    <SearchDropdown v-show="showDropdown" />
  </div>
</template>
<script>
import { MediaTypes } from '@/cosntants'
import SearchDropdown from './SearchDropdown.vue'
export default {
  components: {
    SearchDropdown,
  },
  data() {
    return {
      MediaTypes,
      showDropdown: false,
    }
  },
  computed: {
    mediaType() {
      return this.$store.state.searchModule.searchMediaType
    },
    searchTitle() {
      return this.$store.state.searchModule.searchTitle
    },
  },
  methods: {
    openDropdown() {
      this.showDropdown = true
    },
    closeDropdown() {
      this.showDropdown = false
    },
    changeSearchMediaType(mediaType) {
      this.openDropdown()
      this.$store.dispatch('searchModule/setSearchOptions', {
        key: 'searchMediaType',
        value: mediaType,
      })
      this.$store.dispatch('searchModule/searchFirstPageMovies')
    },
    changeSearchTitle(title) {
      this.$store.dispatch('searchModule/setSearchOptions', {
        key: 'searchTitle',
        value: title,
      })
      this.$store.dispatch('searchModule/searchFirstPageMovies')
    },
    enterSearch() {
      this.closeDropdown()
      this.$store.dispatch('pageModule/setCurrentPageNumber', 1)
      this.$store.dispatch('pageModule/setCurrentPageMovies')
      this.$router.push({ name: 'SearchResult' })
      this.$store.dispatch('searchModule/searchAllMovies')
    },
  },
}
</script>
<style lang="scss" scoped>
@use '@/scss/_flex.scss' as flex;
@use '@/scss/_hover.scss' as hover;
@import '@/scss/_color.scss';
@import '@/scss/_size.scss';
.header_searchBar_darken {
  position: fixed;
  width: 100%;
  height: 100%;
  top: $header-height;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
}
.header_searchBar {
  font-size: 15px;
  position: relative;
  display: flex;
  height: 40px;
  margin-right: 30px;
  &_input {
    border-radius: 20px;
    margin: 0 15px;
    border: none;
    padding: 0px 0px 0px 20px;
    height: 100%;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
  &_rightside {
    @include flex.flex(row, flex-start, center);
    user-select: none;
    &_selected {
      @include flex.flex(row, center, center);
      cursor: pointer;
      padding: 0 5px;
      height: 100%;
    }
  }
  &_searchBtn {
    @include flex.flex(row, center, center);
    width: 24px;
    height: 24px;
    padding: 6px;
    cursor: pointer;
    margin-left: 5px;
    border: 2px solid $color-searchBtn-border;
    border-radius: 50%;
  }
  .__active {
    color: $color-genre-text;
  }
}
</style>
