<template>
  <div class="loader_container" :style="{ width: width, height: height }">
    <span class="loader"></span>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
  },
}
</script>
<style lang="scss" scoped>
@use '@/scss/_flex' as flex;
@import '@/scss/_color.scss';
.loader_container {
  @include flex.flex(row, center, center);
  background-color: $color-background;
  .loader {
    background-color: $color-loader;
    border: 24px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25)
      rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: inline-block;
    animation: animloader 1s linear infinite;
  }
}

@keyframes animloader {
  0% {
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25)
      rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75);
  }
  33% {
    border-color: rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15)
      rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35);
  }
  66% {
    border-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75)
      rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25);
  }
  100% {
    border-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35)
      rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15);
  }
}
</style>
