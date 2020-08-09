<template>
  <section :class="$style.vehicles">
    <header>
      <!-- фильтр по типу транспортного средства -->
      <VehiclesFilter 
        :vehicle_types="vehicle_types"
        @update-vehicles-list="update_vehicles_list"
      />
      <!-- кнопка для добавления нового транспорта -->
      <AddNew />
    </header>
    <main>
      <!-- список транспортных средств -->
      <template v-if="filtered_vehicle_list.length">
        <Vehicle
          v-for="vehicle in filtered_vehicle_list"
          :key="vehicle.id"
          :content="vehicle"
        />
      </template>
      <template v-else>
        <p>Список пуст, воспользуйтесь фильтром выше для выбора.</p>
      </template>
    </main>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Vehicle from '~/components/Vehicle.vue'
import VehiclesFilter from '~/components/VehiclesFilter.vue'
import AddNew from '~/components/AddNew.vue'

export default {
  components: {
    Vehicle,
    VehiclesFilter,
    AddNew
  },
  data () {
    return {
      /**
       * Массив со всеми типами 
       * транспортных средств.
       */
      vehicle_types: [],
      /**
       * Массив с типами транспортных
       * средств для отображения в текущий момент.
       */
      displayed_vehicle_types: [],
      /**
       * Массив содержащий отфильтрованный
       * список транспортных средств.
       */
      filtered_vehicle_list: []
    }
  },
  computed: {
    ...mapState(['vehicles'])
  },
  methods: {
    /**
     * Обновляет массив с типами
     * транспортных средств.
     */
    update_vehicle_types () {
      const all_types = this.vehicles.map(item => item.type)
      const unique_types = [...new Set(all_types)]

      this.vehicle_types = unique_types
    },
    /**
     * Обновляет массив с типами
     * транспортных средств
     * для отображения в текущий момент.
     * 
     * @param {array} displayed - массив с типами транспортных средств для отображения.
     */
    update_displayed_vehicle_types (displayed) {
      this.displayed_vehicle_types = displayed
    },
    /**
     * Обновляет массив содержащий отфильтрованный
     * список транспортных средств.
     */
    update_filtered_vehicle_list () {
      this.filtered_vehicle_list = this.vehicles.filter(item => {
        return this.displayed_vehicle_types.indexOf(item.type) !== -1
      })
    },
    /**
     * Обновляет список транспортных средств
     * отображаемых в текущий момент.
     * 
     * @param {array} displayed - массив с типами транспортных средств для отображения.
     */
    update_vehicles_list (displayed) {
      this.update_displayed_vehicle_types(displayed)
      this.update_filtered_vehicle_list()
    }
  },
  watch: {
    /**
     * Данный метод будет вызываться
     * в случае добавления нового транспортного средства.
     */
    vehicles () {
      // во время первого добавления достаточно будет обновить
      // массив содержащий типы транспортных средств для внесения
      // видимых изменений, для последующих потребуется "ручное" обновление списка
      if (this.vehicle_types.indexOf("custom") === -1) {
        this.vehicle_types.push("custom")
      } else {
        this.update_filtered_vehicle_list()
      }
    }
  },
  created () {
    this.update_vehicle_types()
    this.update_displayed_vehicle_types(this.vehicle_types.slice())
    this.update_filtered_vehicle_list()
  }
}
</script>

<style module lang="scss">
  .vehicles {
    max-width: 1200px;
    margin: auto;
    padding: 2rem 4rem;
    background-color: $grey;
    border-radius: 48px;

    @media screen and (max-width: 575px) {
      padding: 2rem 1rem;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    & > main {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
    }
  }
</style>
