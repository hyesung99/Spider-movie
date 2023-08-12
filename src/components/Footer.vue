<template>
  <section class="footer">
    <div></div>
    <div>{{ pageNumber }}</div>
    <div></div>
  </section>
</template>
<script>
export default {
  computed: {
    pageNumber() {
      return parseInt(this.$store.state.searchModule.searchPage, 10)
    }
  }
}
</script>
<style lang="scss"></style>
