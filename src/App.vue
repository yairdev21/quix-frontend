<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
    name: 'app',
    }
</script>

<style lang="scss">
  html, body {
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  #app {
    padding: 3rem;
  }
</style>
