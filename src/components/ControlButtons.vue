<template>
  <div class="side-bar-btns">
    <button class="menu-icon icon" @click="openSideBar">
      <div v-show="isOpen">
        <i class="fas fa-minus"></i>
      </div>
      <div v-show="!isOpen">
        <i class="fas fa-plus"></i>
      </div>
    </button>
    <button class="home-icon icon" @click="goHome">
      <i class="fas fa-home"></i>
    </button>
    <button class="save-icon icon" @click="save">
      <i class="far fa-save"></i>
    </button>
    <button class="save-icon icon" @click="publish">
      <i class="fas fa-globe"></i>
    </button>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    openSideBar() {
      this.$emit("showPanel");
      return (this.isOpen = !this.isOpen);
    },
    save(){
       this.$emit("save");
    },
    publish(){
       this.$emit("publish");
    }
  }
};
</script>
<style lang="scss" scoped>
.side-bar-btns {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: fixed;
  left: 45%;
  top: 90%;
}
.icon {
  color: whitesmoke;
  border: 1px solid transparent;
  border-radius: 5px;
  background: forestgreen;
  position: relative;
  width: 30px;
  transform: scale(2);
  margin: 30px;
}

.icon:hover {
  border: 1px solid whitesmoke;
  cursor: pointer;
  color: black;
}

</style>
