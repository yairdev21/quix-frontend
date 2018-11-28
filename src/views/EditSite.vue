<template>
  <div class="section-list">
    <nav-bar></nav-bar>
    <medium-editor :options="options"/>
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
import MediumEditor from 'vue2-medium-editor'

var options = {
  toolbar: {
    allowMultiParagraphSelection: true,
    buttons: ['bold', 'italic', 'underline',  'h2', 'h3'],
    diffLeft: 0,
    diffTop: -10,
    firstButtonClass: 'medium-editor-button-first',
    lastButtonClass: 'medium-editor-button-last',
    relativeContainer: null,
    standardizeSelectionStart: false,
    static: false,
    align: 'center',
  }
}
export default {
  data () {
    return {
        site: null,
        sections:null,
        options
    }
  },  
  methods:{
    processEditOperation(operation) {
      return this.text = operation.api.origElements.innerHTML
    },
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
    NavBar,
    MediumEditor
  }
}
</script>

<style  scoped>

.add-section{
    border: 1px dashed black;
}

</style>

