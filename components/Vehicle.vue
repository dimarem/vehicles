<template>
  <article :class="$style.vehicle">
    <aside>
      <img 
        :src="content.image" 
        :alt="content.name"
      >
    </aside>
    <main>
      <h3>{{ content.name }}</h3>
      <p>{{ content.description }}</p>
      <div>
        {{ content.rent }} $/h
      </div>
    </main>
  </article>
</template>

<script>
export default {
  props: {
    /**
     * Объект содержащий описание
     * транспортного средства.
     */
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style module lang="scss">
  .vehicle {
    width: 30%;
    display: flex;
    margin: 1rem .5rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 32px;

    @media screen and (max-width: 1000px) {
      width: 45%;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 1rem 0;
    }

    main {
      padding-left: 1rem;
    }

    img {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 24px;
    }

    h3, p {
      margin-bottom: .5rem;
    }

    h3 {
      font-size: .875rem;
    }

    p, div {
      font-size: .75rem;
    }

    p {
      color: $color-light;
    }

    div {
      font-weight: bold;
      color: $pink;
    }
  }
</style>
