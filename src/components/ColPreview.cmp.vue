<template>
  <div class="left-side" :style="style">
    <component :is="element" :data="col.data"/>
    <!-- <div class="article" >
    </div>-->
  </div>
</template>

<script>
import TxtEl from '../components/elements/txt.el'
import ImgEl from '../components/elements/img.el'
import MapEl from '../components/elements/map.el'
import VideoEl from '../components/elements/video.el'
import ButtonEl from '../components/elements/btn.el'

export default {
  props: ["col"],

  components: {
    TextElement: TxtEl,
    ImgElement: ImgEl,
    MapElement: MapEl,
    VideoElement: VideoEl,
    ButtonElement: ButtonEl
  },

  computed: {
    element() {
      switch (this.col.type) {
        case "text":
          return 'TextElement';
        case "img":
          return  `ImgElement`;
        case "map":
          return `MapElement`;
        case "video":
          return `VideoElement`;
        case "button":
          return `ButtonElement`;
        default:
          return 'TextElement';
      }
    },
    style() {
      return this.col.style || null;
    }
  },
 
};
</script>

<style>

</style>
