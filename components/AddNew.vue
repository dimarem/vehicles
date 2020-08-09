<template>
  <div :class="$style['add-new']">
    Add new <button @click="show_add_window">+</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['show_add_window'])
  }
}
</script>

<style module lang="scss">
  .add-new {
    color: $violet;
    font-size: 1.25rem;
    font-weight: bold;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 425px) {
      font-size: .75rem;
    }

    button {
      cursor: pointer;
      width: 3rem;
      height: 3rem;
      padding: 0;
      border-radius: 16px;
      border: none;
      outline: none;
      background-color: $violet;
      color: white;
      font-size: 1.5rem;
      transition: .25s;

      &:hover {
        background-color: darken($color: $violet, $amount: 5%);
      }

      @media screen and (max-width: 425px) {
        width: 1.5rem;
        height: 1.5rem;
        font-size: .75rem;
        border-radius: 5px;
      }
    }
  }
</style>
