<template>
  <article :show="show" v-on="$listeners">
    <header>
      <a href="#close" aria-label="Close" class="close"></a>
      Modal title
      <button @click="modalIsOpen = false">X</button>
    </header>
    <p>
      Nunc nec ligula a tortor sollicitudin dictum in vel enim. Quisque
      facilisis turpis vel eros dictum aliquam et nec turpis. Sed eleifend a dui
      nec ullamcorper. Praesent vehicula lacus ac justo accumsan ullamcorper.
    </p>
  </article>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modalIsOpen: false,
    };
  },
};
</script>