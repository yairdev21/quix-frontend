<template>
  <div class="home">
    <md-app>a</md-app>
    <br>
    <img alt="Vue logo" src="../assets/logo.png">
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
