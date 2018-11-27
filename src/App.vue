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
#app {
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
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
</style>
