<template>
  <section :class="$style['add-window']">
    <div :class="$style.warapper">
      <main>
        <header>
          <h1>Add new vehicle</h1>
          <!-- кнопка закрытия окна -->
          <AddWindowCloseBtn
            @click.native="hide_add_window"
          />
        </header>
        <!-- блок для выбора изображения -->
        <AddWindowImage 
          :class="{ [$style.invalid] : vehicle_image_invalid }"
          @update-vehicle-image="vehicle_image = $event"
        />
        <!-- наименование транспорта -->
        <input
          v-model.trim="vehicle_name"
          type="text" 
          placeholder="Name"
          :class="{ [$style.invalid] : vehicle_name_invalid }"
        >
        <!-- описание транспорта -->
        <input
          v-model.trim="vehicle_description"
          type="text" 
          placeholder="Description"
          :class="{ [$style.invalid] : vehicle_description_invalid }"
        >
        <!-- цена аренды -->
        <input
          v-model.trim.number="vehicle_rent_price"
          type="text" 
          placeholder="Rent price"
          :class="{ [$style.invalid] : vehicle_price_invalid }"
        >
        <!-- кнопка создания новой записи -->
        <input 
          type="submit" 
          value="Complete" 
          @click="submit"
        >
      </main>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import AddWindowCloseBtn from '~/components/AddWindowCloseBtn.vue'
import AddWindowImage from '~/components/AddWindowImage.vue'

export default {
  components: {
    AddWindowCloseBtn,
    AddWindowImage
  },
  data () {
    return {
      /**
       * Изображение транспортного средства.
       */
      vehicle_image: null,
      /**
       * Наименование транспортного средства.
       */
      vehicle_name: null,
      /**
       * Описание транспортного средства.
       */
      vehicle_description: null,
      /**
       * Цена аренды транспортного средства.
       */
      vehicle_rent_price: null,
      /**
       * Недействительное изображение.
       */
      vehicle_image_invalid: false,
      /**
       * Недействительное наименование.
       */
      vehicle_name_invalid: false,
      /**
       * Недействительное описание.
       */
      vehicle_description_invalid: false,
      /**
       * Недействительная цена.
       */
      vehicle_price_invalid: false
    }
  },
  methods: {
    ...mapMutations(['hide_add_window', 'add_new_vehicle']),
    /**
     * Подтвержает создание новой записи
     * о транспортном средстве.
     */
    submit () {
      if (!this.validate()) return

      this.create_vehicle_record()
      this.hide_add_window()
    },
    /**
     * Валидирует данные.
     * 
     * @returns {boolean}
     */
    validate () {
      this.vehicle_image_invalid = false
      this.vehicle_name_invalid = false
      this.vehicle_description_invalid = false
      this.vehicle_price_invalid = false

      if (!this.vehicle_image) {
        this.vehicle_image_invalid = true

        return
      }

      if (!this.vehicle_name) {
        this.vehicle_name_invalid = true

        return
      }

      if (!this.vehicle_description) {
        this.vehicle_description_invalid = true

        return
      }

      if (!this.vehicle_rent_price || !Number(this.vehicle_rent_price)) {
        this.vehicle_price_invalid = true

        return
      }

      return true
    },
    /**
     * Создает запись нового транспортного средства.
     */
    create_vehicle_record () {
      const id = new Date().getTime()
      const name = this.vehicle_name
      const description = this.vehicle_description
      const rent = this.vehicle_rent_price
      const preview = this.vehicle_image
      const image = this.vehicle_image
      const type = "custom"

      const vehicle_obj = { id, name, description, rent, preview, image, type }

      this.add_new_vehicle(vehicle_obj)
    }
  }
}
</script>

<style module lang="scss">
  .add-window {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    min-height: 100vh;
    overflow: auto;
    background-color: rgba($color: #000, $alpha: .25);

    main {
      position: absolute;
      right: 0;
      top: 0;
      width: 600px;
      min-height: 100vh;
      padding: 3rem;
      background-color: white;
      border-radius: 48px 0 0 48px;

      @media screen and (max-width: 800px) {
        border-radius: 0;
        width: 100%;
      }
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2.5rem;

      @media screen and (max-width: 475px) {
        font-size: 1.5rem;
      }
    }

    input {
      width: 100%;
      display: block;
      margin-bottom: 1rem;
      padding: .875rem 1.5rem;
      border-radius: 12px;
      background-color: $grey;
      border: 2px solid transparent;
      outline: none;

      &:focus {
        border: 2px solid $violet;
      }
    }

    input[type="submit"] {
      cursor: pointer;
      background-color: $violet;
      color: white;
      font-size: 1rem;
      outline: none;
      line-height: .875rem;
      transition: .25s;

      &:hover {
        background-color: darken($color: $violet, $amount: 5%);
      }
    }
  }

  .warapper {
    height: 100vh;
  }

  .invalid {
    border-color: red !important;
  }
</style>
