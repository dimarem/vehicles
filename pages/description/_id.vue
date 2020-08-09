<template>
  <section :class="$style['vehicle-description']">
    <div :class="$style['vehicle-image']">
      <img src="" alt="">
    </div>
    <div :class="$style['vehicle-details']">

    </div>
  </section>
</template>

<script>


export default {
  fetch () {

  }
}
</script>

<style module lang="scss">
  .vehicle-description {
    max-width: 1200px;
    margin: auto;
    display: flex;
  }

  .vehicle-image {
    width: 50%;
  }

  .vehicle-details {
    width: 50%;
  }
</style>
