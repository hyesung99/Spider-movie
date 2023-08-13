<template>
  <div class="detail">
    <img class="detail_poster" :src="movieDetail.Poster" />
  </div>
</template>

<script>
export default {
  created() {
    this.getMovieDetail()
  },
  computed: {
    movieDetail() {
      return this.$store.state.detailModule.movieDetail
    },
  },
  methods: {
    getMovieDetail() {
      const movieId = this.$route.params.id
      this.$store.dispatch('detailModule/getMovieDetail', movieId)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/scss/_size.scss';
.detail {
  padding-top: $header-height;
}
</style>
