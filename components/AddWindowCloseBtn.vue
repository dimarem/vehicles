<template>
  <button :class="[ $style['add-window-close-btn'] , { [$style['dark-mode']] : dark_mode } ]">
    <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" /></svg>
  </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['dark_mode'])
  }
}
</script>

<style module lang="scss">
  .add-window-close-btn {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    padding: 0;
    background-color: $grey;
    border: none;
    outline: none;
    border-radius: 16px;

    svg {
      width: .875rem;
      height: .875rem;
    }
  }

  .dark-mode {
    background-color: darken($color: $dark-mode, $amount: 5%);

    svg {
      fill: white !important;
    }
  }
</style>
