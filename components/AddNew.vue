<template>
  <div :class="$style['add-new']">
    Add new <button>+</button>
  </div>
</template>

<script>
export default {
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

      @media screen and (max-width: 425px) {
        width: 1.25rem;
        height: 1.25rem;
        font-size: .75rem;
        border-radius: 5px;
      }
    }
  }
</style>
