<template>
<div>
  <p class="text" :contenteditable="isEditMode" v-text="content" @blur="saveText"></p>
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
      content: this.data.text
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
      
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
