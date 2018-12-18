<template>
  <div @keyup="saveText">
    <p class="text" :contenteditable="isEditMode" v-html="content"></p>
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
    document.designMode = this.checkEditMode ? "on" : "off";
  },
  methods: {
    getContent() {
      return this.content;
    },
    saveText(ev) {
      console.log(ev.target.innerText);
      this.data.text = ev.target.innerText;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>