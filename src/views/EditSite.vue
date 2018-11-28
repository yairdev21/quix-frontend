<template>
  <div class="section-list">
    <nav-bar></nav-bar>
    <div
      v-if="sections"
      class="section-items"
      v-for="section in sections"
      v-dragging="{ item: section, list: sections, group: 'section'}"
      :key="section._id"
    >
      <section-preview :section="section"></section-preview>
    </div>
    <drop @drop="addSection">
      <section class="add-section section-item">
        <h1 class="text-center">Drag & Drop New Section Here</h1>
      </section>
    </drop>
  </div>
</template>

<script>

import Store from '@/store.js'
import NavBar from '@/components/NavBar.vue'
import SectionPreview from '@/components/SectionPreview.cmp.vue'

export default {
  data () {
    return {
        site: null,
        sections:null
    }
  },  
  methods:{
     addSection(sectionType){
     this.$store.dispatch('addSection', {sectionType} );
     }
  },
  mounted () {
    this.$dragging.$on('dragged', ({ value }) => {
      console.log(value.item)
      console.log(value.list)
    })
    this.$dragging.$on('dragend', () => {
        
    })
  },
  created(){
  this.$store.dispatch({type:'getSite'})
  .then(res=> {
    this.site=res
    this.sections=res.elements
  })
  },
  components:{
    SectionPreview,
    NavBar
  }
}
</script>

<style  scoped>

.add-section{
    border: 1px dashed black;
}

</style>

