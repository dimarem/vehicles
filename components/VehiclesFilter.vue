<template>
  <div :class="[ $style['vehicles-filter'] , { [$style['dark-mode']] : dark_mode }]">
    <!-- кнопка вызова списка типов -->
    <button
      :class="{ [$style['vehicles-filter-active']]: vehicle_types_list_required }"
      @click="vehicle_types_list_required = !vehicle_types_list_required"
    >
      Rent <span>whatever</span>
    </button>
    <!-- список типов транспортных средств -->
    <transition name="vehicle-types-list">
      <div
        v-if="vehicle_types_list_required"
        :class="$style['vehicle-types-list']"
      >
        <label 
          v-for="type in vehicle_types"
          :key="type"
        >
          <input
            v-model="checked_types"
            :value="type" 
            type="checkbox"
          >
          {{ type }}
        </label>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    /**
     * Массив со всеми типами транспортных средств.
     */
    vehicle_types: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      /**
       * Типы транспортных средств отмеченные для
       * отображения в текущий момент.
       */
      checked_types: this.vehicle_types.slice(),
      /**
       * Требуется ли отображать список
       * с типами в текущий момент?
       */
      vehicle_types_list_required: false
    }
  },
  computed: {
    ...mapState(['dark_mode'])
  },
  watch: {
    /**
     * Отслеживает изменение состояния списка
     * и уведомляет родительский компонент
     * о необходимости изменения отображаемых
     * транспортных средств.
     */
    checked_types () {
      this.$emit('update-vehicles-list', this.checked_types.slice())
    },
    /**
     * Отслеживает изменение передаваемых
     * типов транспортных средств от
     * родительского компонента, это сбросит фильтр.
     */
    vehicle_types () {
      this.checked_types = this.vehicle_types.slice()
    }
  }
}
</script>

<style module lang="scss">
  .vehicles-filter {
    position: relative;

    button {
      cursor: pointer;
      position: relative;
      padding: 0;
      padding-right: 1.25rem !important;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 2.5rem;
      font-weight: bold;
      color: $color;

      @media screen and (max-width: 768px) {
        font-size: 1.25rem;
      }

      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: .625rem;
        height: .625rem;
        border-left: 2px solid $violet;
        border-bottom: 2px solid $violet;
        transform: translateY(-50%) rotate(-45deg);
        transition: .25s;
      }

      span {
        color: $violet;
      }
    }
  }

  .vehicles-filter-active::after {
    transform: rotate(135deg) !important;
  }

  .vehicle-types-list {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    width: 400px;
    max-height: 50vh;
    padding: 2rem 1rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba($color: #000, $alpha: .2);
    overflow-y: auto;

    @media screen and (max-width: 575px) {
      width: 80vw;
    }

    label {
      cursor: pointer;
      display: block;

      &:not(:last-of-type) {
        margin-bottom: .5rem;
      }
    }
  }

  .dark-mode {
    button {
      color: white;
    }
  }
</style>

<style lang="scss">
  .vehicle-types-list-enter, .vehicle-types-list-leave-to {
    transform: translateY(15px);
    opacity: 0;
  }

  .vehicle-types-list-enter-active, .vehicle-types-list-leave-active {
    transition: .25s;
  }
</style>
