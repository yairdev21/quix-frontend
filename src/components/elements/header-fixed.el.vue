<template>
  <section class="header">
    <p v-text="content" class="header-title text" @mouseleave="saveText"></p>
  </section>
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
      this.content = ev.target.innerText;
      this.data.text = this.content;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: transparent;
  padding: 0;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-title {
    color: #000;
    margin-bottom: 5.5rem;
  }
  &-text {
    margin: 0 auto;
    text-align: center;
    color: #000;
    font-weight: bold;
    margin-bottom: 2.5rem;
  }
}
</style>
