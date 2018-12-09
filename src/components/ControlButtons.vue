<template>
  <div class="side-bar-btns" contenteditable="false" :style="middle">
    <button class="home-icon icon" @click="goHome" title="Home">
      <i class="fas fa-home"></i>
    </button>
    <button class="save-icon icon" @click="publish" title="Save">
      <i class="far fa-save"></i>
    </button>
    <button v-if="!isEditMode" class="edit-icon icon" @click="edit" title="Edit">
      <i class="far fa-edit" @click="edit"></i>
    </button>
    <button v-else class="preview-icon icon" @click="preview" title="Preview">
      <i class="far fa-eye"></i>
    </button>
    <button class="publish-icon icon" @click="publish" title="Share">
      <i class="fas fa-share-alt"></i>
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

</style>
