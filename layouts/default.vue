<template>
  <div class="page_wrapper">
    <div class="container">
      <Navbar />
      <!-- <Modal @close="showModal = false" :show="showModal" /> -->
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
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  mounted() {
    this.isLoggedIn
      ? console.log("user connected")
      : console.log("user not connected");
    this.currentUser ? console.log(this.currentUser.jwt) : "";
  },
};
</script>

<style>
.page_wrapper {
  position: relative;
}
</style>