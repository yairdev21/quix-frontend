<template>
  <section>
    <transition name="slide-fade">
      <div v-if="toShow" class="sidebar" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion1 variant="info">Sections</b-btn>
          </b-card-header>
          <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p class="card-text">
                <drag class="drag" transfer-data="twoColsSection">
                  <img src="@/assets/img/section1.png">
                </drag>
              </p>
              <p class="card-text">
                <drag class="drag" transfer-data="threeColsSection">
                  <img src="@/assets/img/section2.png">
                </drag>
              </p>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</b-btn>
          </b-card-header>
          <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p class="card-text">text</p>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-btn>
          </b-card-header>
          <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p class="card-text">text</p>
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
export default {
  name: 'Navbar',
   data: () => ({
     draggable: '',
     comp1: 'hello',
     toShow: true
  }),
  methods:{
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
position: fixed;
width: 25%;
top:0;
z-index: 999;
}
.side-bar-btns{
position: fixed;
left:80%;
top: 90%
}
.icon{
  width: 30px;
  transform: scale(2);
  margin:30px;

}
section{
display: flex;
}
main{
  width: 80vw;
}
.slide-fade-enter-active {
   transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>