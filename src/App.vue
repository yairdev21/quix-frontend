<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
import {LOAD_USER} from './modules/user-module.js';

document.body.setAttribute('spellcheck', false)
  export default {
    name: 'app',

    async mounted() {
      const user = await this.$store.dispatch({ type: LOAD_USER });
    }
  }
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  overflow-y: hidden;
}

  html, body {
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
</style>
