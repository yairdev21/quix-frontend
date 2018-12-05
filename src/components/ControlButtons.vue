<template>
  <div class="side-bar-btns" contenteditable="false">
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
    <button class="publish-icon" @click="publish">
      <div>
        <i class="fas fa-globe fa-2x"></i>
      </div>
      <div>PUBLISH!</div>
    </button>
  </div>
</template>

<script>
export default {
  props: ["isEditMode"],
  methods: {
    goHome() {
      this.$router.push("/");
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
  top: 85%;
}

.publish-icon {
  color: whitesmoke;
  border-radius: 5px;
  background: #17a2b8;
  position: absolute;
  right: 0;
  width: 80px;
  height: 60px;
  margin: 30px;
  transition: 0.3s;
}

.publish-icon:hover {
  transform: scale(1.2);
  cursor: pointer;
  color: black;
}
</style>
