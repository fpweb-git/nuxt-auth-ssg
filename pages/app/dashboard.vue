<template>
  <main>
    <h1>This is a protected route</h1>
  </main>
</template>

<script>
export default {
  middleware: "auth",
};
</script>