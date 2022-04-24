<template>
  <div class="container">
    <Navbar />
    <Nuxt />
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