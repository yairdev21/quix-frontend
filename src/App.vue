<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
<<<<<<< HEAD
import axios from 'axios';
import {LOAD_USER} from './modules/user-module.js';

=======
>>>>>>> b342ab003d4604030efa65a0599e41ec8ae5f441
document.body.setAttribute('spellcheck', false)
    export default {
    name: 'app',
<<<<<<< HEAD

    async mounted() {
      const user = await this.$store.dispatch({ type: LOAD_USER });
    }
  }
=======
    }
>>>>>>> b342ab003d4604030efa65a0599e41ec8ae5f441
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
