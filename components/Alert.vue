<template>
  <div class="alert_body">
    <p>{{ message }}</p>
    <div @click="hideError()" class="alert_close">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7627 3.94067L4.2627 11.4407"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.2627 3.94067L11.7627 11.4407"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  props: {
    message: String,
  },
  methods: {
    hideError() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: unset;
  font-size: 0.8rem;
  color: white;
  font-weight: 300;
}

.alert_body {
  max-width: 400px;
  margin: 1rem auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f34842;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
}
.alert_close {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0.5rem;
}
</style>