<template>
              <p class="card-text" id="oneColsSection">
                  <draggable
                  :list="sections"
                  :move="checkMove"
                  class="oneColsSectionWithMap"
                  :options="{group:{
                  name:'sections',
                  pull:'clone'
                 }}"
                  @end="emitAddSection"
                >
                  <img src="@/assets/img/oneSection.png">
                  </draggable>
              </p>

</template>

<script>
import draggable from "vuedraggable";
import { EventBus } from "@/event-bus.js";

export default {
  name: "Navbar",
  props: ["sections"],
  data() {
    return { currIndexMove: 0, currSectionName: null };
  },
  methods: {
    checkMove(evt) {
      console.log(evt);
      
      // let fromSection = evt.draggedContext.index;
      // let toSection = evt.relatedContext.index;
    },
    goHome() {
      this.$router.push("/");
    },
    emitAddSection(evt) {
      let idx = evt.newIndex;
      let sectionName = evt.from.className;
      if (sectionName === "oneColsSectionWithVid") {
        EventBus.$emit("getVideoUrl");
      }
      this.$emit("addSection", idx, sectionName);
    },
    move(evt) {
      console.log(evt);
    }
  },
  components: {
    draggable
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 25%;
  top: 0;
  z-index: 999;
}

section {
  display: flex;
}
main {
  width: 80vw;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
.acordion-header {
  height: 2.6rem;
  @media (max-width: 680px) {
    height: 5.5vw;
  }
}
.navbar-names {
  @media (max-width: 680px) {
    font-size: 2.5vw;
  }
}
</style>