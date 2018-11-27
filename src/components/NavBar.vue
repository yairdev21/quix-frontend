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
            <drag class="drag" :transfer-data="{ comp1 }">
              <img src="@/assets/img/section1.png">
            </drag>
          </p>
          <p class="card-text">
            <drag class="drag">
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
          <p class="card-text">
             text
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            text
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
  </transition>

     <drop class="drop" @drop="handleDrop()">
        <main>{{draggable}}</main>
      </drop>
        <div>
       <b-button class="menu-icon" @click="toShow=!toShow">☰</b-button>
      </div>
</section>
</template>

<style lang="scss" scoped>
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

<script>
export default {
  name: 'Navbar',
   data: () => ({
     draggable: 'null',
     comp1: 'hello',
     toShow: false
  }),
  methods:{
    handleDrop(){
      this.draggable = this.comp1
      
    }
  }
}
</script>