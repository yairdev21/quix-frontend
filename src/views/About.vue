<script>

import Store from '@/store.js'
import sectionPreview from '@/components/section-preview.cmp.vue'
import NavBar from '@/components/NavBar.vue'


export default {
  data () {
    return {
        sections: [{text:'X'}, {title:''},{sm:6}]
    }
  },  
  computed:{
    amount() {
       
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
  let data = this.$store.dispatch({type:'getSections'})
  .then(res=> this.sections=res)
  },
  components:{
    sectionPreview,
    NavBar
  },
}
</script>

<template>

  <div class="section-list">
    <nav-bar></nav-bar>
    <div
      class="section-items"
      v-for="section in sections"
      v-dragging="{ item: section, list: sections, group: 'section'}"
      :key="section.text"
    >
      <section-preview :section="section">

      </section-preview>

    </div>
  </div>
</template>

