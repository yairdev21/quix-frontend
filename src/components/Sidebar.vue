<template>
  <section v-if="isEditMode" contenteditable="false">
    <transition name="slide-fade">
      <div class="sidebar" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn class="acordion-header" block href="#" v-b-toggle.accordion1 variant="info">
              <p class="sidebar-names">Sections</p>
            </b-btn>
          </b-card-header>
          <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
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
            <b-card-body>
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
            <b-card-body>
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
  </section>
</template>

<script>
export default {
  props:['isEditMode'],
  name: "Sidebar",
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>

</style>