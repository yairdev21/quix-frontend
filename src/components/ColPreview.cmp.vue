<template>
  <div @mouseup="editText"  class="left-side" :style="style">
    <component contenteditable="true" :is="element" :data="col.data"/>
  </div>
</template>

<script>
document.designMode = "on";

import TxtEl from "../components/elements/txt.el";
import ImgEl from "../components/elements/img.el";
import MapEl from "../components/elements/map.el";
import VideoEl from "../components/elements/video.el";
import ButtonEl from "../components/elements/btn.el";

export default {
  props: ["col"],
  data() {
    return { isEdit: true, option: "" };
  },
  components: {
    TextElement: TxtEl,
    ImgElement: ImgEl,
    MapElement: MapEl,
    VideoElement: VideoEl,
    ButtonElement: ButtonEl
  },
  methods: {
    editText() {
      this.option = window.getSelection().getRangeAt(0);
      this.$emit("selectedText", this.option);
    }
  },

  computed: {
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
.left-side {
  cursor: initial;
}
</style>
