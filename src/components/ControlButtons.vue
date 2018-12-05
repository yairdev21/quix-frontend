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
    <button class="publsh-icon icon" @click="publish">
      <i class="fas fa-globe"></i>
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
  top: 90%;
}

</style>
