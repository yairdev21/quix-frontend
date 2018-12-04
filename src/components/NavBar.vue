<template>
  <section contenteditable="false">
    <transition name="slide-fade">
      <div class="sidebar" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn class="acordion-header" block href="#" v-b-toggle.accordion1 variant="info">
              <p class="navbar-names">Sections</p>
            </b-btn>
          </b-card-header>
          <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <drag :transfer-data="{method: 'add', data:'oneColsSection'}">
              <p class="card-text" id="oneColsSection">
                 <img src="@/assets/img/oneSection.png">
              </p>
            </drag>
            <drag :transfer-data="{method: 'add', data:'twoColsSection'}">
              <p class="card-text" id="twoColsSection">
                  <img src="@/assets/img/section1.png">
              </p>
            </drag>
             <drag :transfer-data="{method: 'add', data:'threeColsSection'}">
              <p class="card-text" id="threeColsSection">
                  <img src="@/assets/img/section2.png">
              </p>
            </drag>

            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn class="acordion-header" block href="#" v-b-toggle.accordion2 variant="info">
              <p class="navbar-names">Components</p>
            </b-btn>
          </b-card-header>
          <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <drag :transfer-data="{method: 'add', data:'oneColsSectionWithMap'}">
              <p class="card-text" id="oneColsSectionWithMap">
                 <img src="@/assets/img/section w maps.png">
              </p>
            </drag>
            <drag :transfer-data="{method: 'add', data:'oneColsSectionWithVid'}">
              <p class="card-text" id="oneColsSectionWithVid">
                  <img src="@/assets/img/section w vid.png">
              </p>
            </drag>

            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn class="acordion-header" block href="#" v-b-toggle.accordion3 variant="info">
              <p class="navbar-names">Buttons</p>
            </b-btn>
          </b-card-header>
          <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
            <drag :transfer-data="{method: 'add', data:'socialBtns'}">
              <p class="card-text" id="socialBtns">
                  <img src="@/assets/img/socailBtns.png">
              </p>
            </drag>

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
// import { EventBus } from "@/event-bus.js";

export default {
  name: "Navbar",
  props: ["sections"],
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 25%;
  top: 70px;
  z-index: 999;
 img{
     width: 100%;
  }
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