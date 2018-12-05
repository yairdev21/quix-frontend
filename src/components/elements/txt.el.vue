<template>
<section>
 <div>
    <p
      class="text"
      @click="isFocus=true"
      :contenteditable="isEditMode"
      v-text="content"
      @mouseleave="saveText"
    ></p>
  </div>
    <text-edit-buttons
      @openLinkModal="showModal"
      :text="content"
      :section="textEditSection"
      :editedParagraph="editedParagraph"
      v-if="isFocus"
    ></text-edit-buttons>
</section>
 
</template>

<script>
import { ID } from "../../services/utils.js";
import TextEditButtons from "@/components/TextEditButtons.vue";


export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    isEditMode: {
      type: Boolean
    },
    isFocus: {
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
      this.isFocus=false
      this.content = ev.target.innerText;
      this.data.text = this.content;
    }
  },
  components: {
    TextEditButtons
  }
};
</script>

<style lang="scss" scoped>
</style>
