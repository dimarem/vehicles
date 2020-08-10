<template>
  <article>
    <p>{{ vehicle.term_text }}</p>
    <h2>Additional conditions:</h2>
    <p :class="$style.condition">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit odit et nemo nostrum, dolorem distinctio itaque eum eveniet earum eaque reiciendis, adipisci dolore voluptas laudantium ipsam tempora alias, quisquam ab.
    </p>
    <p :class="$style.condition">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat saepe quisquam incidunt eum. Tempora sapiente sint necessitatibus magni rerum nam, nemo provident dolorum culpa ea placeat autem asperiores distinctio!
    </p>
    <p :class="$style.condition">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut nisi, expedita iusto voluptates repudiandae distinctio repellat quam officiis deserunt, provident possimus et dolorum tempore sequi magnam modi architecto hic?
    </p>
  </article>
</template>

<script>
export default {
  props: {
    /**
     * Объект содержащий данные
     * по транспортному средству.
     */
    vehicle: {
      type: Object,
      required: true
    }
  }
}
</script>

<style module lang="scss">
  .condition {
    position: relative;
    padding-left: 3rem;

    &::before {
      content: "";
      position: absolute;
      left: 1.5rem;
      top: 50%;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: $pink;
      transform: translateY(-50%);
    }
  }
</style>
