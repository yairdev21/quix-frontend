<template>
  <div class="side-bar-btns" contenteditable="false" :style="middle">
    <button class="home-icon icon" @click="$router.push('/')" title="Home">
      <i class="fas fa-home"></i>
    </button>
    <button class="save-icon icon" @click="$emit('save')" title="Save">
      <i class="far fa-save"></i>
    </button>
    <button v-if="!isEditMode" class="edit-icon icon" @click="$emit('edit')" title="Edit">
      <i class="far fa-edit"></i>
    </button>
    <button v-else class="preview-icon icon" @click="$emit('preview')" title="Preview">
      <i class="far fa-eye"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["isEditMode"],
  computed: {
    middle() {
      if (!this.isEditMode) return { left: "0" };
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
