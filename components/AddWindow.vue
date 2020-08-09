<template>
  <section :class="$style['add-window']">
    <div :class="$style.warapper">
      <main>
        <header>
          <h1>Add new vehicle</h1>
          <!-- кнопка закрытия окна -->
          <button @click="hide_add_window">
            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" fill="#012345"/></svg>
          </button>
        </header>
        <!-- блок для выбора изображения -->
        <div
          ref="vehicle_image"
          :class="[ $style['vehicle-image'], { [$style.invalid] : vehicle_image_invalid } ]"
          @click="$refs.file_input.click()"
        >
          <svg v-if="image_svg_required" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12V15H22V17H19V20H17V17H14V15H17V12H19ZM19.008 0C19.556 0 20 0.445 20 0.993V10.342C19.3576 10.1151 18.6813 9.99944 18 10V2H2L2.001 16L11.293 6.707C11.465 6.53448 11.694 6.43073 11.9371 6.41526C12.1802 6.39979 12.4206 6.47367 12.613 6.623L12.706 6.708L16.252 10.258C15.4766 10.4943 14.7572 10.8851 14.1369 11.407C13.5167 11.9288 13.0086 12.5709 12.6432 13.2944C12.2779 14.0179 12.0628 14.808 12.0111 15.6169C11.9593 16.4258 12.0719 17.2368 12.342 18.001L0.992 18C0.728813 17.9997 0.476497 17.895 0.290489 17.7088C0.104482 17.5226 -1.33455e-07 17.2702 0 17.007V0.993C0.00183004 0.730378 0.1069 0.479017 0.292513 0.293218C0.478126 0.107418 0.72938 0.00209465 0.992 0H19.008ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" fill="#4959FF"/></svg>
        </div>
        <input 
          ref="file_input" 
          type="file"
          accept=".jpg, .jpeg, .png"
          @change="set_vehicle_image"
        >
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

export default {
  data () {
    return {
      /**
       * Требуется ли отображать svg
       * внутри блока изображения
       * транспортного средства.
       */
      image_svg_required: true,
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
       * Не действительное изображение.
       */
      vehicle_image_invalid: false,
      /**
       * Не действительное наименование.
       */
      vehicle_name_invalid: false,
      /**
       * Не действительное описание.
       */
      vehicle_description_invalid: false,
      /**
       * Не действительная цена.
       */
      vehicle_price_invalid: false
    }
  },
  methods: {
    ...mapMutations(['hide_add_window', 'add_new_vehicle']),
    /**
     * Устанавливает изображение транспорта.
     */
    set_vehicle_image () {
      const file = this.$refs.file_input.files[0]

      if (!/image/.test(file.type)) return

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.image_svg_required = false
        this.vehicle_image = reader.result
        this.$refs.vehicle_image.style.backgroundImage = `url(${reader.result})`
      }
    },
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

    h1 {
      font-size: 2.5rem;

      @media screen and (max-width: 475px) {
        font-size: 1.5rem;
      }
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    button {
      cursor: pointer;
      width: 3rem;
      height: 3rem;
      padding: 0;
      background-color: $grey;
      border: none;
      outline: none;
      border-radius: 16px;
    }

    svg {
      width: .875rem;
      height: .875rem;
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

    input[type="file"] {
      display: none;
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

  .vehicle-image {
    cursor: pointer;
    position: relative;
    height: 320px;
    margin-bottom: 1rem;
    border-radius: 24px;
    background-color: $grey;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid transparent;

    &:hover {
      border-color: $violet;
    }

    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      filter: $violet;
    }
  }

  .warapper {
    height: 100vh;
  }

  .invalid {
    border-color: red !important;
  }
</style>
