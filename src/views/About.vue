<script>

import Store from '@/store.js'

export default {
  data () {
    return {
        sections: []
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
    this.$store.dispatch('getSections')
    .then(res=> this.sections=res)
  }
}
</script>

<template>
  <div class="section-list">
    <div
      class="section-items"
      v-for="section in sections"
      v-dragging="{ item: section, list: sections, group: 'section',}"
      :key="section.text"
    > 
      <div>
        YOYO
        <h3>{{section.title}}</h3>
        <p>{{section.text}}</p>
      </div>
    </div>
  </div>
</template>

