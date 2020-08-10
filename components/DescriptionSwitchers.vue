<template>
  <div :class="[ $style.switchers , { [$style['dark-mode']] : dark_mode } ]">
    <button 
      :class="{ [$style['switchers-button-active']] : active === 1 }"
      @click="$emit('active', 1)"
    >
      Specifications
    </button>
    <button 
      :class="{ [$style['switchers-button-active']] : active === 2 }"
      @click="$emit('active', 2)"
    >
      Team
    </button>
    <button 
      :class="{ [$style['switchers-button-active']] : active === 3 }"
      @click="$emit('active', 3)"
    >
      Rent terms
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    /**
     * Порядковый номер текущего
     * отображаемого блока статьи.
     */
    active: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(['dark_mode'])
  }
}
</script>

<style module lang="scss">
  .switchers {
    margin: 1.5rem 0;

    button {
      cursor: pointer;
      padding: 0;
      border: none;
      outline: none;
      background-color: transparent;
      color: $color;
      font-family: $font;
      font-weight: bold;

      &:not(:last-of-type) {
        margin-right: 1rem;
      }
    }
  }

  .switchers-button-active {
    color: $violet !important;
  }

  .dark-mode {
    button {
      color: $color-light;
    }
  }
</style>
