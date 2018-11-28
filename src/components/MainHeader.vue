<template>
  <div id="nav">
    <button class="logo">
      <router-link to="/">QuiX</router-link>
    </button>
    <div class="nav-btns">
      <button class="build-btn btn btn-outline-secondary">
        <router-link to="/edit">Build</router-link>
      </button>
      <button class="login-btn btn btn-outline-secondary">
        <router-link to="/login">Login</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav {
  z-index: 100;
  font-family: abel;
  position: fixed;
  font-size: 3rem;
  top: 0;
  width: 100%;
  padding: 10px;
  background: linear-gradient(to right, #ece9e6, #ffffff);
  color: #f1f1f1;
}
#nav .logo {
  cursor: pointer;
  float: left;
  background: transparent;
  border: none;
}
#nav a:hover {
  color: black;
  text-decoration: none;
}

#nav .btn {
  margin: 0 20px;
  float: right;
  border-radius: 50px;
}

.login-btn {
  border: 1px solid black;
}
</style>
