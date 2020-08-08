<template>
  <div>
    <div :class="$style['top-panel']">
      <div>
        Pepelane
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style module lang="scss">
  .top-panel {
    padding: 2rem 1rem;

    & > div {
      max-width: 1200px;
      margin: auto;
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
</style>
