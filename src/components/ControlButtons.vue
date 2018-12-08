<template>
    <div class="side-bar-btns" contenteditable="false" :style="middle">
      <button class="home-icon icon" @click="goHome" title="Home">
        <i class="fas fa-home"></i>
      </button>
      <button class="save-icon icon" @click="save">
        <i class="far fa-save"></i>
      </button>
      <button v-if="!isEditMode" class="edit-icon icon" @click="edit" title="Edit">
        <i class="far fa-edit" @click="edit"></i>
      </button>
      <button v-else class="preview-icon icon" @click="preview" title="Preview">
        <i class="far fa-eye"></i>
      </button>
      <button class="publish-icon icon" @click="publish" title="PUBLISH!">
        <i class="fas fa-globe"></i>
      </button>
      <!-- <div class="background" :style="middle"></div> -->
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
  computed: {
    middle() {
      if (!this.isEditMode) return { left: "0" };
    }
  }
};
</script>
<style lang="scss" scoped>
// @media (max-width: 920px) {
//   .side-bar-btns {
//   width: 23%;
// }}
// @media (max-width: 730px) {
// .side-bar-btns {
// position: fixed;
// width: fit-content;
// right: 0;
// left: 18vw;
// top: 85%;
// }
// }

// .background {
// position: fixed;
// margin: 0 auto;
// margin-bottom: 500px;
// padding-bottom: 80px;
// background: gray;
// opacity: 0.4;
// z-index: -1;
// left:18vw;
// height: 200px;
// border-top-left-radius: 10px;
// border-top-right-radius: 10px;
// left: 0;
// bottom: 0;
// right: 0;
// width: 36%;
// top: 90%;
// }
</style>
