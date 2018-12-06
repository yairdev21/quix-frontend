<template>
  <div class="side-bar-btns" contenteditable="false" :style="middle">
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
    <button class="publish-icon icon" @click="publish">
      <div>
        <i class="fas fa-globe"></i>
      </div>
    </button>
    <div class="background" :style="middle"></div>
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
  },
  computed:{
    middle(){
      if (!this.isEditMode) return {"left": "0"}
    }
  }
};
</script>
<style lang="scss" scoped>
.background {
  position: fixed;
  margin: 0 auto;
  margin-bottom: 500px;
  padding-bottom: 80px;
  background: gray;
  opacity: 0.4;
  z-index: -1;
  left:18vw;
  right: 0;
  width: 36%;
  height: 200px;
  top: 90%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.side-bar-btns {
  position: fixed;
  margin: 0 auto;
  right: 0;
  left: 18vw;
  top: 90%;
  width: 45%;
}
@media (max-width: 730px) {
  .side-bar-btns {
    position: fixed;
    right: 0;
    left: 18vw;
    top: 85%;
    width: fit-content;
  }
}
.publish-icon:hover {
  cursor: pointer;
  color: black;
}
</style>
