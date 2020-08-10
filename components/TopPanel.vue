<template>
  <div :class="[ $style['top-panel'] , { [$style['dark-mode']] : dark_mode }]">
    <div :class="$style['top-panel-container']">
      <div :class="$style['top-panel-part']">
        <!-- лого приложения -->
        <img 
          :class="$style['logo']" 
          :src="dark_mode ? '/images/logo_dark.png' : '/images/logo.png'" 
          alt="Pepelane"
        >
        <!-- ссылка на главную страницу -->
        <nuxt-link to="/">Pepelane</nuxt-link>
        <div :class="$style['top-panel-info']">World's first affordable airsharing</div>
      </div>
      <div :class="$style['top-panel-part']">
        <!-- кнопка для переключения между темами приложения -->
        <button 
          :class="$style['mode-button']"
          @click="toggle_dark_mode"
        >
          <svg v-if="dark_mode" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11C5 9.4087 5.63214 7.88258 6.75736 6.75736C7.88258 5.63214 9.4087 5 11 5C12.5913 5 14.1174 5.63214 15.2426 6.75736C16.3679 7.88258 17 9.4087 17 11C17 12.5913 16.3679 14.1174 15.2426 15.2426C14.1174 16.3679 12.5913 17 11 17ZM11 15C12.0609 15 13.0783 14.5786 13.8284 13.8284C14.5786 13.0783 15 12.0609 15 11C15 9.93913 14.5786 8.92172 13.8284 8.17157C13.0783 7.42143 12.0609 7 11 7C9.93913 7 8.92172 7.42143 8.17157 8.17157C7.42143 8.92172 7 9.93913 7 11C7 12.0609 7.42143 13.0783 8.17157 13.8284C8.92172 14.5786 9.93913 15 11 15ZM10 0H12V3H10V0ZM10 19H12V22H10V19ZM2.515 3.929L3.929 2.515L6.05 4.636L4.636 6.05L2.515 3.93V3.929ZM15.95 17.364L17.364 15.95L19.485 18.071L18.071 19.485L15.95 17.364ZM18.071 2.514L19.485 3.929L17.364 6.05L15.95 4.636L18.071 2.515V2.514ZM4.636 15.95L6.05 17.364L3.929 19.485L2.515 18.071L4.636 15.95ZM22 10V12H19V10H22ZM3 10V12H0V10H3Z" fill="#99A7B5"/></svg>
          <svg v-else viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5C7.9998 6.39064 8.41381 7.74983 9.18923 8.90421C9.96465 10.0586 11.0663 10.9559 12.3538 11.4816C13.6412 12.0073 15.0561 12.1376 16.4179 11.8559C17.7797 11.5742 19.0268 10.8933 20 9.9V10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0H10.1C9.43404 0.651125 8.90514 1.42896 8.54448 2.28768C8.18382 3.1464 7.99869 4.06862 8 5ZM2 10C1.99927 11.785 2.59553 13.5189 3.69389 14.926C4.79226 16.333 6.32963 17.3323 8.06141 17.7648C9.79319 18.1974 11.6199 18.0383 13.2508 17.313C14.8818 16.5876 16.2233 15.3377 17.062 13.762C15.5694 14.1136 14.0118 14.0781 12.5368 13.6587C11.0619 13.2394 9.7185 12.4501 8.63421 11.3658C7.54992 10.2815 6.76065 8.93814 6.34128 7.46318C5.92192 5.98821 5.88636 4.43056 6.238 2.938C4.95758 3.62014 3.88678 4.63766 3.14026 5.88164C2.39373 7.12562 1.99958 8.54921 2 10Z" fill="#99A7B5"/></svg>
          <span>{{ dark_mode ? 'Day mod' : 'Night mod'}}</span>
        </button>
        <!-- ... еще кнопка -->
        <button>
          <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.34126e-06 5.99401C-0.000525832 5.20621 0.154353 4.42605 0.455768 3.69819C0.757183 2.97034 1.19921 2.30909 1.75655 1.75231C2.31388 1.19553 2.97558 0.754165 3.70373 0.453478C4.43189 0.152791 5.21221 -0.00130701 6 8.35025e-06H14C17.313 8.35025e-06 20 2.69501 20 5.99401V18H6C2.687 18 1.34126e-06 15.305 1.34126e-06 12.006V5.99401ZM18 16V5.99401C17.9974 4.93451 17.5749 3.91925 16.8251 3.17063C16.0754 2.42201 15.0595 2.00106 14 2.00001H6C5.47485 1.99869 4.9546 2.10106 4.4691 2.30123C3.98359 2.50141 3.54238 2.79546 3.17076 3.16652C2.79914 3.53758 2.50443 3.97835 2.30353 4.46356C2.10262 4.94876 1.99947 5.46886 2 5.99401V12.006C2.00265 13.0655 2.42511 14.0808 3.17486 14.8294C3.9246 15.578 4.9405 15.999 6 16H18ZM12 8.00001H14V10H12V8.00001ZM6 8.00001H8V10H6V8.00001Z" fill="#99A7B5"/></svg>
        </button>
        <!-- ... блок -->
        <div :class="$style['account-info']">
          <div :class="$style['account-owner']">
            Bessie Cooper
          </div>
          <img :class="$style['account-avatar']" src="/images/4.jpg" alt="Bessie Cooper">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['dark_mode'])
  },
  methods: {
    ...mapMutations(['toggle_dark_mode'])
  }
}
</script>

<style module lang="scss">
  .top-panel {
    padding: 2rem 1rem;
  }

  .top-panel-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 1.25rem;
      font-weight: bold;
      color: $color;
      text-decoration: none;

      @media screen and (max-width: 425px) {
        font-size: 1rem;
      }
    }
  }

  .top-panel-part {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0;
      background-color: transparent;
      border: none;
      outline: none;

      svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }

  .logo {
    margin-right: 1rem;

    @media screen and (max-width: 425px) {
      width: 2rem;
      height: 2rem;
      margin-right: .5rem;
    }
  }

  .top-panel-info {
    color: $color-light;
    margin-left: 3rem;

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  .mode-button {
    margin-right: 4rem;
    font-family: $font;
    color: $color-light;

    @media screen and (max-width: 1000px) {
      margin-right: 1rem;
    }

    span {
      @media screen and (max-width: 1000px) {
        display: none;
      }
    }
    
    svg {
      margin-right: 1rem;

      @media screen and (max-width: 1000px) {
        margin-right: 0;
      }
    }
  }

  .account-info {
    display: flex;
    align-items: center;
    margin-left: 4rem;

    @media screen and (max-width: 1000px) {
      margin-left: 1rem;
    }
  }

  .account-owner {
    font-weight: bold;
    margin-right: 1rem;

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  .account-avatar {
    border-radius: 50%;

    @media screen and (max-width: 425px) {
      width: 2rem;
      height: 2rem;
    }
  }

  .dark-mode {
    a {
      color: white;
    }

    .account-owner {
      color: white;
    }
  }
</style>
