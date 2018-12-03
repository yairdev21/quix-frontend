<template>
  <p class="text" :contenteditable="isEditMode" v-text="content" @blur="saveText"></p>
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
      type: Boolean,
      required: true
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

<<<<<<< HEAD
        methods: {
            getContent() {               
                return this.content
            },
            saveText(ev) {
                console.log(ev)
                this.content = ev.target.innerText;
            }
        }
=======
  methods: {
    getContent() {
      return this.content;
    },
    saveText(ev) {
      this.content = ev.target.innerText;
>>>>>>> f0d1ce98dc3a1f0e633bedd4bb9cbe8babce0d09
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
