<template>
  <MovieHeader />
  <div class="home">
    <img
      src="@/images/home_background.jpg"
      class="home_background"
      alt="home_background"
    />
    <div class="home_background_darken"></div>
    <h1 class="home_title">영화를 검색하세요!</h1>
  </div>
</template>
<script>
import MovieHeader from '@/components/MovieHeader.vue'
export default {
  components: {
    MovieHeader,
  },
}
</script>
<style lang="scss" scoped>
@import '@/scss/_size.scss';
.home {
  padding-top: $header-height;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  background-color: antiquewhite;
  &_background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    &_darken {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      position: absolute;
      top: 0;
    }
  }
  &_title {
    position: absolute;
    top: 45%;
    left: 30%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 60px;
    font-weight: 700;
    text-align: center;
  }
}
</style>
