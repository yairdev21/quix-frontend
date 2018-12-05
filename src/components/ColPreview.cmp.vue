<template>
  <div
    @mouseup="editText"
    class="left-side"
    :style="style"
    @mouseover="isShowControl=true"
    @mouseleave="(isShowControl=false)"
  >
    <div contenteditable="false" class="edit-video" v-show="isShowControl">
      <button title="Delete" @click="$emit('deleteElement', col)">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    <component
      :draggable="false"
      :contenteditable="isEditMode"
      :isEditMode="isEditMode"
      :is="element"
      :data="col.data"
    />
  </div>
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
import { EventBus } from "@/event-bus.js";

export default {
  props: ["col", "isEditMode"],
<<<<<<< HEAD
  data(){
    return{
       isFocus: false
    }
=======
  data() {
    return { isShowControl: false };
>>>>>>> 21382e9824b70d963c7603d22c9c2f75d4a49fb1
  },
  components: {
    TextElement: TxtEl,
    ImgElement: ImgEl,
    MapElement: MapEl,
    VideoElement: VideoEl,
    ButtonElement: ButtonEl,
    ContactElement: ContactEl,
    SocialElement: SocialEl,
    EmptyElement: EmptyEl
  },
  methods: {
    editText() {
      if (!this.isEditMode) return;
      this.option = window.getSelection().getRangeAt(0);
      this.$emit("selectedText", this.option);
    }
  },
  created() {
    document.designMode = this.checkEditMode;
  },

  computed: {
    checkEditMode() {
      if (this.isEditMode) return "on";
      else return "off";
    },
    element() {
      switch (this.col.type) {
        case "text":
          return "TextElement";
        case "img":
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
.edit-video button:hover {
  cursor: pointer;
  color: brown;
  background: white;
}
.edit-video button {
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

.edit-video {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
}
.left-side {
  cursor: initial;
}
</style>
