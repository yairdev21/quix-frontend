<template>
  <div class="section-list">
    <div
      class="section-items"
      v-for="section in sections"
      v-dragging="{ item: section, list: sections, group: 'section'}"
      :key="section.text"
    >
      <section class="hero-article section-item">
        <h1 class="text-center">{{section.title}}</h1>
        <b-row>
          <b-col cols="12" :sm="section.sm">
            <div class="left-side" :style="{}">
              <h2 class="text-center">{{section.title}}</h2>
              <div class="article">
                {{section.text}}
                {{section.text}}
              </div>
            </div>
          </b-col>
        </b-row>
      </section>
    </div>
  </div>
</template>

<script>

import Store from '@/store.js'

export default {
  data () {
    return {
        sections: [{text:'X'}, {title:''},{sm:6}]
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
  }
}
</script>



