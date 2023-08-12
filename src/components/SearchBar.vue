<template>
  <div class="header_searchBar">
    <input
      class="header_searchBar_input"
      @change="changeSearchTitle($event.target.value)"
      type="text"
      placeholder="검색" />
    <div class="header_searchBar_rightside">
      <div class="header_searchBar_rightside_selected">
        {{ mediaType }}
        <span
          class="material-symbols-outlined header_searchBar_rightside_icon"
          @click="toggleDropdown">
          expand_circle_down
        </span>
      </div>
      <ul
        class="header_searchBar_rightside_dropdown"
        v-show="showDropdown">
        <li
          class="header_searchBar_rightside_dropdown_item"
          @click="changeSearchMediatype(mediaType)"
          v-for="(mediaType, key) in MediaTypes"
          :key="key">
          {{ mediaType }}
        </li>
      </ul>
    </div>
    <button
      class="header_searchBar_searchBtn"
      @click="searchMovie">
      search
    </button>
  </div>
</template>
<script>
import { MediaTypes } from '@/cosntants'
export default {
  data() {
    return {
      MediaTypes,
      showDropdown: false
    }
  },
  computed: {
    mediaType() {
      return this.$store.state.searchModule.searchMediaType
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    changeSearchMediatype(mediaType) {
      this.$store.dispatch('searchModule/changeSearchOptions', {
        key: 'searchMediaType',
        value: mediaType
      })
      this.showDropdown = false
    },
    changeSearchTitle(title) {
      this.$store.dispatch('searchModule/changeSearchOptions', {
        key: 'searchTitle',
        value: title
      })
    },
    searchMovie() {
      this.$store.dispatch('searchModule/searchMovie')
    }
  }
}
</script>
<style lang="scss" scoped>
@use '@/scss/_flex.scss' as flex;
@use '@/scss/_hover.scss' as hover;
@import '@/scss/_color.scss';

.header_searchBar {
  border-bottom: 1px solid $color-header-border;
  display: flex;
  width: 600px;
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
