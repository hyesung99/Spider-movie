<template>
  <MovieHeader />
  <routerView />
  <Footer />
</template>
<script lang="ts">
import MovieHeader from './components/MovieHeader.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    MovieHeader,
    Footer
  }
}
</script>
