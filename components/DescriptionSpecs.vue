<template>
  <article :class="{ [$style['dark-mode']] : dark_mode }">
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
  </article>
</template>

<script>
import { mapState } from 'vuex'

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
  },
  computed: {
    ...mapState(['dark_mode'])
  }
}
</script>

<style module lang="scss">
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
    flex: 0 0 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-right: 1rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .dark-mode {
    .feature-label {
      background-color: darken($color: $dark-mode, $amount: 5%);
    }
  }
</style>
