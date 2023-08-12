<template>
  <div class="main_container_item">
    <img
      class="main_container_item_poster"
      :src="movie.Poster" />
    <h1 class="main_container_item_info">
      {{ movie.Title }} ({{ movie.Year }})
    </h1>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/scss/_flex.scss' as flex;
@import '@/scss/_color.scss';
@import '@/scss/_size.scss';
.main_container_item {
  width: 270px;
  padding: 10px;
  &_poster {
    @include poster-size(270px);
    z-index: 0;
  }
  &_info {
    cursor: pointer;
    @include flex.flex(row, center, center);
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background-color: $color-background;
  }
}
</style>
