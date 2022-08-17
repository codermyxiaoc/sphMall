<template>
  <div id="app">
    <headerx></headerx>
      <router-view></router-view>
    <footerx v-show="isshow"></footerx>
  </div>
</template>

<script>
import Headerx from 'components/content/Headerx/Headerx.vue'
import Footerx from 'components/content/Footerx/Footerx.vue'
export default {
  name: 'App',
  components: {
    Headerx,
    Footerx,
  },
  computed: {
    isshow() {
      return this.$route.meta.isfooterxshow
    }
  },
  mounted() {
    try {
      this.$store.dispatch('getuserinfo')
    } catch (error) {
      alert(error.message)
    }
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>
@import url('assets/css/reset.css');
</style>
