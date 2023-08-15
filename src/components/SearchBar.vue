<template>
  <div class="header_searchBar">
    <input
      class="header_searchBar_input"
      @input="changeSearchTitle($event.target.value)"
      @keydown.enter="enterSearch($event.target.value)"
      ref="searchInput"
      type="text"
      placeholder="검색"
    />
    <div class="header_searchBar_rightside">
      <div
        class="header_searchBar_rightside_selected"
        v-for="mediaType in MediaTypes"
        :class="{ __active: mediaType === selectedMediaType }"
        @click="clickMediaType(mediaType)"
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
    <SearchDropdown
      v-show="showDropdown"
      :movieList="movieList"
      :goMovieDetail="goMovieDetail"
    />
  </div>
</template>
<script>
import SearchDropdown from './SearchDropdown.vue'
import { MediaTypes } from '@/cosntants'
export default {
  components: {
    SearchDropdown,
  },
  data() {
    return {
      MediaTypes,
      selectedMediaType: MediaTypes.ALL,
    }
  },
  props: {
    changeSearchMediaType: {
      type: Function,
      required: true,
    },
    changeSearchTitle: {
      type: Function,
      required: true,
    },
    enterSearch: {
      type: Function,
      required: true,
    },
    showDropdown: {
      type: Boolean,
      required: true,
    },
    movieList: {
      type: Array,
      required: true,
    },
    goMovieDetail: {
      type: Function,
      required: true,
    },
  },
  methods: {
    openDropdown() {
      this.$emit('setDropdownVisiblliity', true)
    },
    closeDropdown() {
      this.$emit('setDropdownVisiblliity', false)
    },
    clickMediaType(mediaType) {
      this.changeSearchMediaType(mediaType)
      this.selectedMediaType = mediaType
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
