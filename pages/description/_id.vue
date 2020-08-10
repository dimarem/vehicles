<template>
  <section :class="$style['vehicle-description']">
    <!-- изображение транспортного средства -->
    <aside>
      <img 
        :src="vehicle.image" 
        :alt="vehicle.name"
      >
    </aside>
    <!-- описание -->
    <main>
      <h1>{{ vehicle.name }}</h1>
      <!-- переключатели блоков статьи -->
      <DescriptionSwitchers 
        :active="active"
        @active="active = $event"
      />
      <!-- блок спецификаций -->
      <DescriptionSpecs 
        v-if="active === 1" 
        :vehicle="vehicle"
      />
      <!-- блок команды -->
      <DescriptionTeam 
        v-if="active === 2" 
        :vehicle="vehicle"
      />
      <!-- блок условий -->
      <DescriptionConditions 
        v-if="active === 3" 
        :vehicle="vehicle"
      />
      <footer>
        <span>Rent for <span :class="$style['rent-price']">{{ vehicle.rent }} $/h</span></span>
        <button>Rent now</button>
      </footer>
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import DescriptionSpecs from '~/components/DescriptionSpecs.vue'
import DescriptionTeam from '~/components/DescriptionTeam.vue'
import DescriptionConditions from '~/components/DescriptionConditions.vue'
import DescriptionSwitchers from '~/components/DescriptionSwitchers.vue'

export default {
  components: {
    DescriptionSpecs,
    DescriptionTeam,
    DescriptionConditions,
    DescriptionSwitchers
  },
  data () {
    return {
      /**
       * Объект содержащий данные
       * по транспортному средству.
       */
      vehicle: null,
      /**
       * Порядковый номер текущего отображаемого
       * блока с детальной информацией.
       */
      active: 1
    }
  },
  computed: {
    ...mapGetters(['get_vehicle'])
  },
  methods: {
    /**
     * Извлекает данные по транспортному
     * средству из хранилища.
     * В случае их отсутствия, производит ошибку.
     */
    get_vehicle_data () {
      const vehicle_data = this.get_vehicle(this.$route.params.id)

      if (vehicle_data) {
        this.vehicle = vehicle_data
      } else {
        if (process.server) this.$nuxt.context.res.statusCode = 404
        
        throw new Error('No transport with such id')
      }
    }
  },
  created () {
    this.get_vehicle_data()
  },
  activated () {
    this.get_vehicle_data()
  }
}
</script>

<style module lang="scss">
  .vehicle-description {
    max-width: 1200px;
    margin: auto;
    padding: 1rem;
    display: flex;

    @media screen and (max-width: 800px) {
      display: block;
    }

    aside {
      width: 50%;

      @media screen and (max-width: 800px) {
        width: 100%;
      }

      img {
        max-width: 100%;
        border-radius: 24px;
      }
    }

    main {
      width: 50%;
      padding-left: 3rem;

      @media screen and (max-width: 800px) {
        width: 100%;
        padding-left: 0;
      }

      h1, h2, p {
        margin: 1.5rem 0;
      }

      h1 {
        margin-top: 3rem;
        font-size: 3rem;

        @media screen and (max-width: 800px) {
          margin-top: 1.5rem;
        }

        @media screen and (max-width: 425px) {
          font-size: 1.5rem;
        }
      }

      h2 {
        font-size: 1.5rem;
      }

      h3 {
        font-size: 1rem;
      }

      h4 {
        font-weight: normal;
        color: $color-light;
        font-size: .875rem;
      }

      p {
        font-size: .875rem;
        color: $color-light;
        text-align: justify;
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 3rem 0;
      font-size: 1.25rem;

      & > span {
        font-weight: bold;
      }

      button {
        cursor: pointer;
        padding: 1rem 2rem;
        border-radius: 12px;
        color: white;
        font-family: $font;
        font-size: 1rem;
        border: none;
        outline: none;
        background-color: $violet;

        @media screen and (max-width: 425px) {
          padding: .5rem 1rem;
          font-size: .875rem;
        }
      }
    }
  }

  .rent-price {
    color: $pink;
  }
</style>
