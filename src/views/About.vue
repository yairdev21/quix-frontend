<template>
  <div class="section-list">
    <div
      class="section-items"
      v-for="section in sections"
      v-dragging="{ item: section, list: sections, group: 'section'}"
      :key="section.id"
    >
      <section-preview :section="section"></section-preview>
    </div>
  </div>
</template>

<script>

import Store from '@/store.js'
import SectionPreview from '@/components/SectionPreview.cmp.vue'

export default {
  data () {
    return {
        site: null,
        sections:null
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
    this.sections= res.sections
  })
  },
  components:{
    SectionPreview
  }
}
</script>


