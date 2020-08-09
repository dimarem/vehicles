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
      <div :class="$style.switchers">
        <button 
          :class="{ [$style.active] : active === 1 }"
          @click="active = 1"
        >
          Specifications
        </button>
        <button 
          :class="{ [$style.active] : active === 2 }"
          @click="active = 2"
        >
          Team
        </button>
        <button 
          :class="{ [$style.active] : active === 3 }"
          @click="active = 3"
        >
          Rent terms
        </button>
      </div>
      <!-- блок спецификаций -->
      <template v-if="active === 1">
        <p>{{ vehicle.specifications_text }}</p>
        <h2>Features:</h2>
        <div :class="$style['features-block']">
          <div :class="$style['feature-label']">
            <svg viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3333 18.584V21.3333H23V24H7V21.3333H13.6667V18.584C11.0889 18.2589 8.71842 17.0044 7 15.0557C5.28158 13.107 4.33338 10.5981 4.33333 8V0H25.6667V8C25.6666 10.5981 24.7184 13.107 23 15.0557C21.2816 17.0044 18.9111 18.2589 16.3333 18.584ZM0.333332 2.66667H3V8H0.333332V2.66667ZM27 2.66667H29.6667V8H27V2.66667Z" fill="#677B8F"/></svg>
          </div>
          <div>
            <h3>A challenge for a true champion</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate assumenda placeat quisquam numquam minima porro, ducimus recusandae dignissimos fugit veritatis neque quia sint illum repellendus inventore laudantium eos reprehenderit corporis?</p>
          </div>
        </div>
        <div :class="$style['features-block']">
          <div :class="$style['feature-label']">
            <svg viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9413 18.752C18.4867 20.1627 21.096 23.4187 21.584 27.3333H0.416004C0.904004 23.4187 3.51334 20.1627 7.05867 18.752L11 24.6667L14.9413 18.752ZM19 0.666656V8.66666C19 13.0853 15.4187 16.6667 11 16.6667C6.58134 16.6667 3 13.0853 3 8.66666V0.666656H19ZM16.3333 8.66666H5.66667C5.66667 11.6133 8.05334 14 11 14C13.9467 14 16.3333 11.6133 16.3333 8.66666Z" fill="#677B8F"/></svg>
          </div>
          <div>
            <h3>Pilot's sweaty hands</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate assumenda placeat quisquam numquam minima porro, ducimus recusandae dignissimos fugit veritatis neque quia sint illum repellendus inventore laudantium eos reprehenderit corporis?</p>
          </div>
        </div>
      </template>
      <!-- блок команды -->
      <template v-if="active === 2">
        <p>{{ vehicle.team_text }}</p>
        <h2>Qualified specialists</h2>
        <div :class="$style['team-block']">
          <div :class="$style['person']">
            <img src="/images/1.jpg" alt="person-1">
            <div :class="$style['person-data']">
              <h3>Marvin McKinney</h3>
              <h4>Pilot assistent</h4>
            </div>
          </div>
          <div :class="$style['person']">
            <img src="/images/2.jpg" alt="person-2">
            <div :class="$style['person-data']">
              <h3>Savannah Nguyen</h3>
              <h4>Mechanic</h4>
            </div>
          </div>
          <div :class="$style['person']">
            <img src="/images/3.jpg" alt="person-3">
            <div :class="$style['person-data']">
              <h3>Courtney Henry</h3>
              <h4>Stewardess</h4>
            </div>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quasi suscipit cumque facere consectetur accusantium rerum fuga vel similique, enim quam tenetur ullam dolor, doloremque modi nesciunt eum deleniti excepturi?</p>
      </template>
      <!-- блок условий -->
      <template v-if="active === 3">
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
      </template>
      <footer>
        <span>Rent for <span :class="$style.rent">{{ vehicle.rent }} $/h</span></span>
        <button>Rent now</button>
      </footer>
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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

  .switchers {
    margin: 1.5rem 0;

    button {
      cursor: pointer;
      padding: 0;
      border: none;
      outline: none;
      background-color: transparent;
      color: $color;
      font-family: $font;
      font-weight: bold;

      &:not(:last-of-type) {
        margin-right: 1rem;
      }
    }
  }

  /* относится к кнопкам */
  .active {
    color: $violet !important;
  }

  .features-block {
    display: flex;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }

    p {
      margin: .5rem 0 !important;
    }
  }

  .feature-label {
    width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
  }

  .team-block {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 425px) {
      display: block;
    }
  }

  .person {
    width: 30%;

    @media screen and (max-width: 425px) {
      width: 100%;
      display: flex;
      margin-bottom: 1rem;
    }

    img {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
      border-radius: 24px;

      @media screen and (max-width: 425px) {
        width: 50%;
        margin-bottom: 0;
      }
    }
  }

  .person-data {
    h3 {
      margin-bottom: .5rem;
    }

    @media screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 1rem;
    }
  }

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

  .rent {
    color: $pink;
  }
</style>
