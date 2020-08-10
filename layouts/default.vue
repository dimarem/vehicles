<template>
  <div>
    <div :class="{ [$style.blured] : add_window_required }">
      <TopPanel />
      <nuxt keep-alive />
    </div>
    <transition name="add-window">
      <!-- окно для добавления нового транспорта -->
      <AddWindow v-if="add_window_required" />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopPanel from '~/components/TopPanel.vue'

export default {
  components: {
    TopPanel,
    AddWindow: () => import(/* webpackChunkName: "add-window" */ '~/components/AddWindow.vue')
  },
  computed: {
    ...mapState(['add_window_required']),
  }
}
</script>

<style module lang="scss">
  .blured {
    filter: blur(32px);
  }
</style>

<style lang="scss">
  .add-window-enter, .add-window-leave-to {
    opacity: 0;
  }

  .add-window-enter-active, .add-window-leave-active {
    transition: .25s ease;
  }
</style>
