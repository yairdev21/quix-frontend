<template>
  <div id="nav" contenteditable="false">
    <button class="logo">
      <router-link to="/">QuiX</router-link>
    </button>
    <div class="nav-btns">
      <button class="login-btn btn btn-outline-secondary">
        <router-link class="btn" to="/login">Login</router-link>
      </button>
      <button class="login-btn btn btn-outline-secondary">
<<<<<<< HEAD
        <router-link  to="/login">Login</router-link>
=======
        <router-link class="btn" to="/about">About</router-link>
>>>>>>> 1ffc2781df50a89d0a30d7b3a7febad7c6a001f4
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
  @media (max-width: 600px) {
    margin: 0;
    transform: scale(0.95);
    height: 40%;
  }
}

.login-btn {
  border: 1px solid black;
}
</style>
