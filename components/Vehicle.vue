<template>
  <nuxt-link 
    :class="[ $style.vehicle , { [$style['dark-mode']] : dark_mode } ]" 
    :to="`/description/${content.id}`"
  >
    <article>
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
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex'

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
  },
  computed: {
    ...mapState(['dark_mode'])
  },
}
</script>

<style module lang="scss">
  .vehicle {
    width: 30%;
    display: block;
    margin: 1rem .5rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 32px;
    color: $color;
    text-decoration: none;

    @media screen and (max-width: 1000px) {
      width: 45%;
    }

    @media screen and (max-width: 800px) {
      width: 100%;
      margin: 1rem 0;
    }

    article {
      display: flex;
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

  .dark-mode {
    background-color: $dark-mode;

    h3 {
      color: white;
    }
  }
</style>
