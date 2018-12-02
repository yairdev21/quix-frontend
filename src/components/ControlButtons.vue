<template>
  <div class="side-bar-btns" contenteditable="false">
    <button v-if="isEditMode" class="menu-icon icon" @click="openSideBar">
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
    <button v-if="!isEditMode" class="edit-icon icon" @click="edit">
      <i class="far fa-edit" @click="edit"></i>
    </button>
    <button v-else class="preview-icon icon" @click="preview">
      <i class="far fa-eye"></i>
    </button>
    <button class="publsh-icon icon" @click="publish">
      <i class="fas fa-globe"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["isEditMode"],
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
    preview() {
      this.$emit("preview");
    },
    edit() {
      this.$emit("edit");
    },
    save() {
      this.$emit("save");
    },
    publish() {
      this.$emit("publish");
    }
  }
};
</script>
<style lang="scss" scoped>
.side-bar-btns {
  position: fixed;
  right: 0;
  left: 0;
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
@media (max-width: 800px) {
  .icon {
    transform: scale(1.8);
    margin: 15px;
  }
}
</style>
