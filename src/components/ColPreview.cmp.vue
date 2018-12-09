<template>
  <section>
    <div contenteditable="false" class="trash-btn" v-show="isShowControl & isEditMode">
      <button title="Delete" @click="$emit('deleteElement')" @mouseover="isShowControl=true">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    <div
      @mouseup="editText"
      class="left-side"
      :style="style"
      @mouseover.stop="isShowControl=true"
      @mouseleave="(isShowControl=false)"
    >
      <component
        :draggable="false"
        :contenteditable="isEditMode"
        :isEditMode="isEditMode"
        :is="element"
        :data="col.data"
        :col="col"
        :sectionIdx="sectionIdx"
      />
    </div>
  </section>
</template>

<script>
import TxtEl from "../components/elements/txt.el";
import ImgEl from "../components/elements/img.el";
import MapEl from "../components/elements/map.el";
import VideoEl from "../components/elements/video.el";
import ButtonEl from "../components/elements/btn.el";
import SocialEl from "../components/elements/social-btn.el";
import ContactEl from "../components/elements/contact.el";
import EmptyEl from "../components/elements/empty.el";
import HeaderEl from "../components/elements/header-fixed.el";
import { EventBus } from "@/event-bus.js";

export default {
  props: ["col", "isEditMode", "sectionIdx"],
  data() {
    return { isShowControl: false };
  },
  components: {
    TextElement: TxtEl,
    ImgElement: ImgEl,
    MapElement: MapEl,
    VideoElement: VideoEl,
    ButtonElement: ButtonEl,
    ContactElement: ContactEl,
    SocialElement: SocialEl,
    EmptyElement: EmptyEl,
    HeaderElement: HeaderEl
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

  computed: {
    element() {
      switch (this.col.type) {
        case "text":
          return "TextElement";
        case "image":
          return `ImgElement`;
        case "map":
          return `MapElement`;
        case "video":
          return `VideoElement`;
        case "button":
          return `ButtonElement`;
        case "socialBtn":
          return `SocialElement`;
        case "contact":
          return `ContactElement`;
        case "empty":
          return `EmptyElement`;
        case "header":
          return `HeaderElement`;
        default:
          return "TextElement";
      }
    },
    style() {
      return this.col.style || null;
    }
  }
};
</script>

<style>
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
