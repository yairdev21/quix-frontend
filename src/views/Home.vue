<template>
    <NavBar></NavBar>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'home',
  components: {
    NavBar,
    SideBar
  }
}
</script>
