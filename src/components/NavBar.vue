<template>
  <section contenteditable="false">
    <transition name="slide-fade">
      <div class="sidebar" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion1 variant="info">Sections</b-btn>
          </b-card-header>
          <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p class="card-text" id="oneColsSection">
                <draggable
                  class="onCol"
                  :options="{group:{
                  name:'sections',
                  pull:false
                 }}"
                  @end="emitAddSection"
                >
                  <img src="@/assets/img/oneSection.png">
                </draggable>
              </p>
              <p class="card-text" id="twoColsSection">
                <draggable
                  class="onCol"
                  :options="{group:{
                  name:'sections',
                  pull:false
                 }}"
                  @end="emitAddSection"
                >
                  <img src="@/assets/img/section1.png">
                </draggable>
              </p>
              <p class="card-text" id="threeColsSection">
                <draggable
                  :options="{group:{
                name:'sections',
                pull:false
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
            <b-btn block href="#" v-b-toggle.accordion2 variant="info">Components</b-btn>
          </b-card-header>
          <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p class="card-text" id="oneColsSectionWithMap">
                <draggable
                  class="onCol"
                  :options="{group:{
                  name:'sections',
                  pull:false
                 }}"
                  @end="emitAddSection"
                >
                  <img src="@/assets/img/section w maps.png">
                </draggable>
              </p>
                    <p class="card-text" id="oneColsSectionWithVid">
                <draggable
                  class="onCol"
                  :options="{group:{
                  name:'sections',
                  pull:false
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
                  class="onCol"
                  :options="{group:{
                  name:'sections',
                  pull:false
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

export default {
  name: "Navbar",

  methods: {
    goHome() {
      this.$router.push("/");
    },
    emitAddSection(evt) {
      let section = evt.path[1].id;
      this.$emit("addSection", 1, `${section}`);
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