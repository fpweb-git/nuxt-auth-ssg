<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">
          <svg
            width="68"
            height="45"
            viewBox="0 0 68 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.6589 2.42832C27.7758 -0.809439 23.0682 -0.809439 21.1852 2.42832L0.662746 37.715C-1.22031 40.9528 1.13351 45 4.89963 45H20.9206C19.3113 43.5936 18.7153 41.1605 19.9332 39.073L35.4759 12.4302L29.6589 2.42832Z"
              fill="#80EEC0"
            />
            <path
              d="M42.6623 10.1685C44.2207 7.51937 48.1166 7.51937 49.6751 10.1685L66.6591 39.0393C68.2176 41.6884 66.2696 44.9998 63.1527 44.9998H29.1847C26.0679 44.9998 24.1198 41.6884 25.6783 39.0393L42.6623 10.1685Z"
              fill="#00DC82"
            />
          </svg>
        </NuxtLink>
      </li>
    </ul>
    <ul v-if="isLoggedIn">
      <li>
        <NuxtLink to="/app/dashboard">Dashboard</NuxtLink>
      </li>
      <li>
        <button @click="Logout()" class="outline">Logout</button>
      </li>
    </ul>
    <ul v-else>
      <li><NuxtLink to="/auth/register">Sign up</NuxtLink></li>
      <li>
        <NuxtLink to="/auth/login"><button>Login</button></NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.authenticated;
    },
  },
  methods: {
    Logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>