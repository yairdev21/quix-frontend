<template>
<div>
</div>
</template>

<script>
import { ID } from "../../services/utils.js";

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    isEditMode: {
      type: Boolean
    }
  },

  data() {
    return {
      id: ID(),
    };
  },

  created() {
    document.designMode = this.checkEditMode;
  },

  methods: {
    getContent() {
      return this.content;
    },
    saveText(ev) {
      this.content = ev.target.innerText;
      this.data.text =  this.content
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
