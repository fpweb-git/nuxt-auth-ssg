<template>
  <div>
    <form>
      <div class="grid">
        <label for="username">
          Username
          <input
            v-model="username"
            type="text"
            id="username"
            name="username"
            required
          />
        </label>
      </div>

      <label for="password"> Password </label>
      <input
        v-model="password"
        type="password"
        id="password"
        name="password"
        required
      />
      <small
        >Login with strapi
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6407 0.117188H4.78201V5.06027H9.63296C9.80578 5.06027 9.94598 5.20047 9.94598 5.37329V10.1573H14.9537V0.43078C14.9539 0.347663 14.921 0.267898 14.8623 0.209071C14.8035 0.150245 14.7238 0.117188 14.6407 0.117188Z"
            fill="#8E75FF"
          />
          <path
            opacity="0.405"
            d="M4.78144 0.117188V5.06027H0.156523C0.0929703 5.06016 0.0357714 5.0217 0.0116936 4.96288C-0.0123842 4.90407 0.00142191 4.83653 0.0466511 4.79189L4.78144 0.117188ZM10.2127 14.8371C10.1676 14.8814 10.1005 14.8943 10.0423 14.8699C9.98403 14.8456 9.94609 14.7887 9.94598 14.7256V10.1573H14.9537L10.2127 14.8366V14.8371Z"
            fill="#8E75FF"
          />
          <path
            opacity="0.405"
            d="M4.78143 5.0603H9.78975C9.87559 5.0603 9.94598 5.13012 9.94598 5.21653V10.1573H5.09503C4.92215 10.1573 4.78201 10.0172 4.78201 9.8443V5.0603H4.78143Z"
            fill="#8E75FF"
          />
        </svg>
      </small>

      <button type="submit" @click.prevent="Login()">Login</button>
    </form>
    <Alert v-if="hasError" @close="hasError = false" :message="errorMessage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      hasError: false,
      errorMessage: "An error has occured",
    };
  },
  methods: {
    async Login() {
      if (this.username && this.password) {
        this.$store.dispatch("login", {
          identifier: this.username,
          password: this.password,
        });
      } else {
        this.hasError = true;
        this.errorMessage = "Please enter your username and password";
      }
    },
  },
};
</script>

<style scoped>
form,
article {
  max-width: 400px;
  margin: 4rem auto;
}
small {
  margin: 1rem 0;
}
</style>