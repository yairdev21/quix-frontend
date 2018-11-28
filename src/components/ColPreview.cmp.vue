<template>
  <div class="left-side" :style="{}" v-html="element">
    <!-- <div class="article" >
    </div>-->
  </div>
</template>

<script>
export default {
  props: ["col"],
  computed: {
    element() {
      switch (this.col.type) {
        case "text":
          return `<p>${this.col.data.text}</p>`;
        case "img":
          return `<img src="${this.col.data.src}"/>`;
        case "map":
          return `<iframe src="${this.col.data.src}" width="600" height="450"/>`;
        case "button":
          return `<a href="${this.col.data.src}">${this.col.data.text}</a>`;
        default:
          return `<p> Nothing Found: ${this.col.data.src}</p>`;
      }
    }
  },
};
</script>

<style>
</style>
