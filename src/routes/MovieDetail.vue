<template>
  <div class="detail">
    <div class="detail_poster">
      <img class="detail_poster_img" :src="movieDetail.Poster" />
      <div class="detail_poster_shadow"></div>
    </div>

    <div class="detail_info">
      <h1 class="detail_info_title">{{ movieDetail.Title }}</h1>
      <p class="detail_info_year">Year : {{ movieDetail.Year }}</p>
      <div class="detail_info_genres">
        <div class="detail_info_genres_tag" v-for="genre in genres">
          {{ genre }}
        </div>
      </div>

      <p class="detail_info_plot">{{ movieDetail.Plot }}</p>
      <div class="detail_info_rating">
        <div class="detail_info_rating_logo">
          <img src="@/images/imdb_logo.jpg" alt="imdb" />
        </div>
        <span class="material-symbols-outlined"> star </span>
        <div class="detail_info_rating_score">{{ movieDetail.imdbRating }}</div>
      </div>
    </div>
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
    genres() {
      return this.movieDetail.Genre.split(', ')
    },
  },
  watch: {
    '$route.params.id': function () {
      this.getMovieDetail()
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
@use '@/scss/_flex.scss' as flex;
@use '@/scss/_text.scss' as text;
@import '@/scss/_size.scss';
@import '@/scss/_color.scss';
.detail {
  box-sizing: border-box;
  padding-top: $header-height;
  display: flex;
  height: 100%;
  background-color: $color-background;
  &_poster {
    position: relative;
    &_img {
      height: 100%;
      object-fit: cover;
    }
    &_shadow {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(to left, rgba(0, 0, 0, 1), transparent);
    }
  }
  &_info {
    padding: 0 20px;
    @include flex.flex(column, space-between, flex-start);
    &_title {
      @include text.setText(2rem, 1000);
    }
    &_year {
      @include text.setText(1.5rem, 1000);
    }
    &_genres {
      @include flex.flex(row, flex-start, center);
      &_tag {
        @include flex.flex(row, flex-start, center);
        background-color: $color-background-tag;
        border-radius: 5px;
        margin-right: 5px;
        height: 25px;
        padding: 0 5px;
      }
    }
    &_rating {
      @include flex.flex(row, flex-start, center);
      &_logo {
        width: 50px;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
