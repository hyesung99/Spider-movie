<template>
  <div class="header_searchBar">
    <input
      class="header_searchBar_input"
      @input="changeSearchTitle($event.target.value)"
      @focus="openDropdown"
      type="text"
      placeholder="검색"
    />
    <div class="header_searchBar_rightside">
      <div class="header_searchBar_rightside_selected">
        {{ mediaType }}
        <span
          class="material-symbols-outlined header_searchBar_rightside_icon"
          @click="openDropdown"
        >
          expand_circle_down
        </span>
      </div>
      <ul class="header_searchBar_rightside_dropdown" v-show="showDropdown">
        <li
          class="header_searchBar_rightside_dropdown_item"
          @click="changeSearchMediaType(mediaType)"
          v-for="(mediaType, key) in MediaTypes"
          :key="key"
        >
          {{ mediaType }}
        </li>
      </ul>
    </div>
    <button class="header_searchBar_searchBtn" @click="searchMovie()">
      search
    </button>
    <div
      class="header_searchBar_darken"
      @click="closeDropdown"
      v-show="showDropdown"
    ></div>
  </div>
  <SearchDropdown v-show="showDropdown" />
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
  },
  methods: {
    closeDropdown() {
      this.showDropdown = false
    },
    openDropdown() {
      this.showDropdown = true
    },
    changeSearchMediaType(mediaType) {
      this.closeDropdown()
      this.$store.dispatch('searchModule/changeSearchOptions', {
        key: 'searchMediaType',
        value: mediaType,
      })
      this.showDropdown = false
    },
    changeSearchTitle(title) {
      this.$store.dispatch('searchModule/changeSearchOptions', {
        key: 'searchTitle',
        value: title,
      })
    },
    searchMovie() {
      this.closeDropdown()
      this.$store.dispatch('searchModule/updateSearchResultForMain')
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
  border-bottom: 1px solid $color-header-border;
  position: relative;
  display: flex;
  width: $header-searchBar-width;
  height: 40px;

  &_input {
    margin-left: 15px;
    border: none;
    padding: 0px;
    flex-grow: 1;
    height: 100%;
    font-size: 16px;
    background-color: $color-background;
    &:focus {
      outline: none;
    }
  }
  &_rightside {
    user-select: none;
    padding: 0 10px;
    border-bottom: none;
    &_selected {
      height: 40px;
      @include flex.flex(row, center, center);
    }
    &_icon {
      margin-left: 5px;
      cursor: pointer;
    }
    &_dropdown {
      transition: all 0.3s ease-in-out;
      margin: 0;
      &_item {
        width: 50px;
        list-style: none;
        height: 40px;
        @include flex.flex(row, center, center);
        @include hover.hover_darken;
      }
    }
  }
  &_searchBtn {
    font-size: 15px;
  }
}
</style>
