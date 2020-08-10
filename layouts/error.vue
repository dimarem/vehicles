<template>
  <section :class="[ $style['error-page'] , { [$style['dark-mode']] : dark_mode } ]">
    <div :class="$style['error-page-container']">
      <h1>{{ error.message }}</h1>
      <h2>Please refresh the page</h2>
      <div :class="$style['error-page-button']">
        <button @click="reload">Reload page</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    /**
     * Объект содержащий данные ошибки.
     */
    error: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['dark_mode'])
  },
  methods: {
    /**
     * Перезагружает страницу.
     */
    reload () {
      location.reload()
    }
  }
}
</script>

<style module lang="scss">
  .error-page {
    position: relative;
    min-height: 80vh;
    max-width: 1200px;
    margin: auto;
    padding: 2rem 4rem;
    background-color: $grey;
    border-radius: 48px;
  }

  .error-page-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h1, h2 {
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;

      @media screen and (max-width: 425px) {
        font-size: 1.5rem;
      }
    }

    h2 {
      margin: 2rem 0;
      font-size: .875rem;
      font-weight: normal;
      color: $color-light;
    }
  }

  .error-page-button {
    display: flex;
    justify-content: center;

    button {
      cursor: pointer;
      padding: 1rem 2rem;
      background-color: $violet;
      color: white;
      font-family: $font;
      font-size: 1rem;
      border-radius: 12px;
      border: none;
      outline: none;
      transition: .25s ease;

      &:hover {
        background-color: darken($color: $violet, $amount: 5%);
      }
    }
  }

  .dark-mode {
    background-color: darken($color: $dark-mode, $amount: 5%);
    
    h1 {
      color: white;
    }
  }
</style>
