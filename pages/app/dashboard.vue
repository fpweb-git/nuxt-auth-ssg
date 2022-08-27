<template>
  <main>
    <h1>
      Hi {{ user.username }} your role is :
      {{ role }}
    </h1>
  </main>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      user: {},
      role: "",
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  async fetch() {
    await fetch("http://localhost:1337/api/users/me?populate=*", {
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
        this.user = data;
        this.role = data.role.name;
        console.log(this.user);
        return;
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  },
};
</script>