<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
document.body.setAttribute('spellcheck', false)
    export default {
    name: 'app',
    }
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  overflow-y: hidden;
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
  *, *::before, *::after {
    box-sizing: border-box;
  }
</style>
