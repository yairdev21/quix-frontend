<template>
  <div class="home">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/nav-bar.vue'
import sideBarr from '@/components/side-bar.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'home',
  components: {
    navBar
  }
}
</script>
