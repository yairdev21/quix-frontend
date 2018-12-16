<template>
  <section style="background: transparent">
    <div contenteditable="false" class="trash-btn" v-show="isShowControl & isEditMode">
      <button title="Delete" @click="$emit('deleteElement')" @mouseover="isShowControl=true">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    <div
      @mouseup="editText"
      class="left-side"
      :style=" this.col.style || null"
      @mouseover.stop="isShowControl=true"
      @mouseleave="(isShowControl=false)"
    >
      <component
        :draggable="false"
        :contenteditable="isEditMode"
        :isEditMode="isEditMode"
        :is="this.col.type + 'Cmp'"
        :data="col.data"
        :col="col"
        :sectionIdx="sectionIdx"
      />
    </div>
  </section>
</template>

<script>
import TextCmp from "../components/elements/txt.el.vue";
import ImageCmp from "../components/elements/img.el.vue";
import MapCmp from "../components/elements/map.el.vue";
import VideoCmp from "../components/elements/video.el.vue";
import ButtonCmp from "../components/elements/btn.el.vue";
import SocialbtnCmp from "../components/elements/social-btn.el.vue";
import ContactCmp from "../components/elements/contact.el.vue";
import EmptyCmp from "../components/elements/empty.el.vue";
import HeaderCmp from "../components/elements/header-fixed.el.vue";
import { EventBus } from "@/event-bus.js";

export default {
  props: ["col", "isEditMode", "sectionIdx"],
  data() {
    return { isShowControl: false };
  },
  components: {
    TextCmp,
    ImageCmp,
    MapCmp,
    VideoCmp,
    ButtonCmp,
    SocialbtnCmp,
    ContactCmp,
    EmptyCmp,
    HeaderCmp
  },
  methods: {
    editText() {
      if (!this.isEditMode) return;
      this.option = window.getSelection().getRangeAt(0);
      this.$emit("selectedText", this.option);
    }
  },
  created() {
    document.designMode = this.checkEditMode ? "on" : "off";
  },
};
</script>

<style lang="scss" scoped>
.trash-btn button:hover {
  cursor: pointer;
  color: brown;
  background: white;
}
.trash-btn button {
  z-index: 8;
  border: none;
  color: white;
  height: 30px;
  width: 30px;
  z-index: 1;
  background: brown;
  transition: 0.3 ease;
  margin-top: 0.2rem;
  border-radius: 3px;
}

.trash-btn i {
  position: relative;
  font-size: 20px;
}
.trash-btn {
  display: flex;
  flex-direction: row;
  align-content: center;
  position: absolute;
  right: 15px;
  top: 0;
}
.left-side {
  cursor: initial;
}
</style>
