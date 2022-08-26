<template>
  <main>
    <h1>Hi {{ currentUser.user.username }}</h1>
  </main>
</template>

<script>
export default {
  middleware: "auth",
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  async fetch() {
    this.posts = await fetch("http://localhost:1337/api/users/me?populate=*", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.currentUser.jwt}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  },
};
</script>