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
  name: "Sidebar",
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
section {
  display: flex;
  background: black;
}
.sidebar p:hover {
  color: black;
  transition: 0.3s ease;
}
.sidebar img:hover {
  transition: 0.3s ease;
  cursor: grab;
  transform: scale(1.02);
  border: 1px solid black
}
.sidebar img:active {
  cursor: grabbing;
}
.sidebar {
  height: 100%;
  width: 19vw;
  position: fixed;
  z-index: 999;
  img {
    width: 100%;
  }
}
.card-body {
  max-height: 58vh;
  overflow: none;
}
@media (min-width: 1250px) {
  .card-body {
    transform: scale(0.9);
    padding-top: 0;
    max-height: 60vh;
    overflow: none;
  }
  .sidebar {
    height: 100%;
    width: 18vw;
    position: fixed;
    z-index: 10;
    img {
      width: 100%;
      margin-bottom: -5px;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.acordion-header {
  height: 2.6rem;
  @media (max-width: 680px) {
    height: 5.5vw;
  }
}
.sidebar-names {
  @media (max-width: 680px) {
    font-size: 2.5vw;
  }
}
</style>