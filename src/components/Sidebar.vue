<template>
  <section class="fullSideBar" contenteditable="false">
    <control-buttons
      :isEditMode="isEditMode"
      class="controlButtons"
      @edit="$emit('edit')"
      @share="$emit('share')"
      @preview="$emit('preview')"
      @save="$emit('save')"
      @publish="$emit('publish')"
    ></control-buttons>
    <transition name="slide-fade">
      <div v-if="isEditMode" class="sidebar" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn class="acordion-header" block href="#" v-b-toggle.accordion1 variant="info">
              <p class="sidebar-names">Sections</p>
            </b-btn>
          </b-card-header>
          <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body :style="{padding:0}">
              <drag :transfer-data="{method: 'addSection', data:'header'}">
                <p class="card-text" id="header">
                  <img src="@/assets/img/header.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'oneColsSection'}">
                <p class="card-text" id="oneColsSection">
                  <img src="@/assets/img/oneSection.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'twoColsSection'}">
                <p class="card-text" id="twoColsSection">
                  <img src="@/assets/img/section1.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'threeColsSection'}">
                <p class="card-text" id="threeColsSection">
                  <img src="@/assets/img/section2.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn class="acordion-header" block href="#" v-b-toggle.accordion2 variant="info">
              <p class="sidebar-names">Components</p>
            </b-btn>
          </b-card-header>
          <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
            <b-card-body :style="{padding:0}">
              <drag :transfer-data="{method: 'addSection', data:'emptySection'}">
                <p class="card-text" id="emptySection">
                  <img src="@/assets/img/emptySection.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'oneColsSectionWithMap'}">
                <p class="card-text" id="oneColsSectionWithMap">
                  <img src="@/assets/img/section w maps.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'oneColsSectionWithVid'}">
                <p class="card-text" id="oneColsSectionWithVid">
                  <img src="@/assets/img/section w vid.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'contactComponent'}">
                <p class="card-text" id="contactComponent">
                  <img src="@/assets/img/contact.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn class="acordion-header" block href="#" v-b-toggle.accordion3 variant="info">
              <p class="sidebar-names">Elements</p>
            </b-btn>
          </b-card-header>
          <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
            <b-card-body :style="{padding:0}">
              <drag :transfer-data="{method: 'addElement', data:'socialBtns'}">
                <p class="card-text" id="socialBtns">
                  <img src="@/assets/img/socailBtns.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addElement', data:'video'}">
                <p class="card-text" id="video">
                  <img src="@/assets/img/video.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addElement', data:'text' }">
                <p class="card-text" id="text">
                  <img src="@/assets/img/textCmp.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addElement', data:'image'}">
                <p class="card-text" id="img">
                  <img src="@/assets/img/image.png" title="DRAG ME IN TO THE PAGE! ">
                </p>
              </drag>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </transition>

    <b-btn class="publish-btn" v-b-modal.modal-center>Publish</b-btn>
  </section>
</template>

<script>
import ControlButtons from "@/components/ControlButtons.vue";

export default {
  props: ["isEditMode"],
  name: "Sidebar",
  methods: {
    goHome() {
      this.$router.push("/");
    }
  },
  components: {
    ControlButtons
  }
};
</script>

<style lang="scss" scoped>
.publish-btn {
  background: #42b983;
  margin-top: 0.5em;
  position: fixed;
  bottom: 1vh;
  left: 5vw;
  z-index: 20;
@media (max-width: 625px) {
transform: scale(0.7);
  left: 2vw;
}
@media (max-width: 900px) {
transform: scale(0.9);
  left: 4vw;
}
}
.publish-btn:hover {
  cursor: pointer;
  background: #317c88;
  color: wheat;
}

.card.mb-1 {
  border: none;
}
.btn {
  background: #1f3e63;
}
.btn:hover {
  background: #216774;
}
.card-header {
  border: none;
}
section {
  display: flex;
}
.sidebar p:hover {
  color: black;
  transition: 0.3s ease;
}
.sidebar img:hover {
  transition: 0.3s ease;
  cursor: grab;
  border: 1px solid black;
}
.sidebar img,
p {
  border: 2px solid transparent;
  padding-bottom: 3px;
}
.sidebar img:active {
  cursor: grabbing;
}
.sidebar {
  margin-top: 3em;
  height: 100%;
  width: 18vw;
  position: fixed;
  z-index: 10;
  img {
    width: 85%;
    padding: 2px;
  }
}


.card-body {
  transform: scale(0.85);
  max-height: 54vh;
  overflow: auto;
  @media (min-width: 625px) {
    transform: scale(1);
  }
  @media (max-width: 625px) {
    transform: scale(1.1);
  }

}

@media (min-width: 1250px) {
  .sidebar {
    height: 100%;
    width: 18vw;
    position: fixed;
    z-index: 10;
    img {
      margin-bottom: -10px;
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
  @media (max-width: 625px) {
    height: 5.5vw;
  }
  .sidebar {
    height: 100%;
    width: 18vw;
    position: fixed;
    z-index: 10;
  }
}
@media (max-width: 625px) {
  .sidebar-names {
    font-size: 2.3vw;
    float: left;
    margin: 0;
  }
  .sidebar {
    margin-top: 25px;
  }
  .card-header {
    transform: scale(0.9);
  }
  .card-body img {
    padding: 0;
  }
  .card-text {
    margin: 0;
  }
}
</style>