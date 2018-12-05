<template>
  <div id="nav" contenteditable="false">
    <button class="logo">
      <router-link to="/">QuiX</router-link>
    </button>
    <div class="nav-btns">
      <button class="btn btn-log">
        <router-link class="btn" :to="userPage">{{userLog}}</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  state() {
    return {
      user: this.$store.getters.getUser
    }
  },

  computed: {
    userPage() {
      return (this.user) ? '/userboard' : '/login'
    },

    userLog() {
      return (this.$store.getters.getUser) ? 'Profile' : 'Log In'
    },

    userImg() {
      return (this.$store.getters.getUser) ? this.$store.getters.getUser.image : ''
    },

    user() {      
      return (this.$store.getters.getUser) ? true : false
    }
  }
};
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
