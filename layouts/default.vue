<template>
  <div>
    <TopPanel />
    <nuxt keep-alive />
  </div>
</template>

<script>
import TopPanel from '~/components/TopPanel.vue'

export default {
  components: {
    TopPanel
  }
}
</script>
