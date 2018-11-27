<template>
  <div id="app">
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
    name: 'app',
    }
</script>

<style lang="scss">
<<<<<<< HEAD
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
=======
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
>>>>>>> fdf357cef6d0adf6e2f39ec352a88e6afdf92646
</style>
