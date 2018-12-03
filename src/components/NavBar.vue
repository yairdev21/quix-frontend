<template>
  <section contenteditable="false">
    <transition name="slide-fade">
      <div class="sidebar" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion1 variant="info">Add Sections</b-btn>
          </b-card-header>
          <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p class="card-text" id="oneColsSection">
                <draggable
                  :list="sections"
                  :move="checkMove"
                  class="oneColsSection"
                  :options="{group:{
                  name:'sections',
                  pull:'clone'
                   }}"
                  @end="emitAddSection"
                >
                  <img src="@/assets/img/oneSection.png">
                </draggable>
              </p>
              <p class="card-text" id="twoColsSection">
                <draggable
                  :list="sections"
                  :move="checkMove"
                  class="twoColsSection"
                  :options="{group:{
                  name:'sections',
                  pull:'clone'
                 }}"
                  @end="emitAddSection"
                >
                  <img src="@/assets/img/section1.png">
                </draggable>
              </p>
              <p class="card-text" id="threeColsSection">
                <draggable
                  :list="sections"
                  :move="checkMove"
                  class="threeColsSection"
                  :options="{group:{
                name:'sections',
               pull:'clone'
                }}"
                  @end="emitAddSection"
                >
                  <img src="@/assets/img/section2.png">
                </draggable>
              </p>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion2 variant="info">Add Components</b-btn>
          </b-card-header>
          <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p class="card-text" id="oneColsSectionWithMap">
                <draggable
                  :list="sections"
                  :move="checkMove"
                  class="oneColsSectionWithMap"
                  :options="{group:{
                  name:'sections',
                 pull:'clone'
                 }}"
                  @end="emitAddSection  "
                >
                  <img src="@/assets/img/section w maps.png">
                </draggable>
              </p>
              <p class="card-text" id="oneColsSectionWithVid">
                <draggable
                  :list="sections"
                  :move="checkMove"
                  class="oneColsSectionWithVid"
                  :options="{group:{
                  name:'sections',
              pull:'clone'
                 }}"
                  @end="emitAddSection"
                >
                  <img src="@/assets/img/section w vid.png">
                </draggable>
              </p>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion3 variant="info">Extra</b-btn>
          </b-card-header>
          <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p class="card-text" id="socialBtns">
                <draggable
                  :list="sections"
                  :move="checkMove"
                  class="socialBtns"
                  :options="{group:{
                  name:'sections',
               pull:'clone'
                 }}"
                  @end="emitAddSection"
                >
                  <img src="@/assets/img/socailBtns.png">
                </draggable>
              </p>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </transition>
    <div class="side-bar-btns">
      <b-button class="menu-icon icon" @click="toShow=!toShow">+</b-button>
      <b-button class="home-icon icon" @click="goHome">
        <i class="fas fa-home"></i>
      </b-button>
    </div>
  </section>
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
    checkMove() {
    },
    goHome() {
      this.$router.push("/");
    },
    emitAddSection(evt) {
      let idx = evt.newIndex;
      let sectionName = evt.from.className;
      if (sectionName==='oneColsSectionWithVid') {EventBus.$emit('getVideoUrl')}
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
</style>