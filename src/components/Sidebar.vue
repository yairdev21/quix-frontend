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
                  <img src="@/assets/img/header.png">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'oneColsSection'}">
                <p class="card-text" id="oneColsSection">
                  <img src="@/assets/img/oneSection.png">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'twoColsSection'}">
                <p class="card-text" id="twoColsSection">
                  <img src="@/assets/img/section1.png">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'threeColsSection'}">
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
              <p class="sidebar-names">Components</p>
            </b-btn>
          </b-card-header>
          <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
            <b-card-body :style="{padding:0}">
              <drag :transfer-data="{method: 'addSection', data:'emptySection'}">
                <p class="card-text" id="emptySection">
                  <img src="@/assets/img/emptySection.png">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'oneColsSectionWithMap'}">
                <p class="card-text" id="oneColsSectionWithMap">
                  <img src="@/assets/img/section w maps.png">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'oneColsSectionWithVid'}">
                <p class="card-text" id="oneColsSectionWithVid">
                  <img src="@/assets/img/section w vid.png">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addSection', data:'contactComponent'}">
                <p class="card-text" id="contactComponent">
                  <img src="@/assets/img/contact.png">
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
                  <img src="@/assets/img/socailBtns.png">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addElement', data:'video'}">
                <p class="card-text" id="video">
                  <img src="@/assets/img/video.png">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addElement', data:'text'}">
                <p class="card-text" id="text">
                  <img src="@/assets/img/textCmp.png">
                </p>
              </drag>
              <drag :transfer-data="{method: 'addElement', data:'image'}">
                <p class="card-text" id="img">
                  <img src="@/assets/img/image.png">
                </p>
              </drag>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </transition>

    <b-btn class="publish-btn" v-b-modal.modalPrevent>Publish</b-btn>
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
  background: #124127 ;
  font-size: 1.5em;
  margin-top: 0.5em;
  position: fixed;
  bottom: 1px;
  left: 4vw;
  z-index: 20;
}
.publish-btn:hover {
  cursor: pointer;
  background: #207446;
  color: black;
}
</style>