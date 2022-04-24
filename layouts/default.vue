<template>
  <div class="page_wrapper">
    <div class="container">
      <Navbar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.authenticated;
    },
  },
  mounted() {
    console.log(this.isLoggedIn);
  },
};
</script>

<style>
.page_wrapper {
  position: relative;
}
</style>