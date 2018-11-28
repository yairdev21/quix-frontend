<template>
  <section class="hero-article section-item">
      <h1 contenteditable="true" class="text-center">{{section.title}}</h1>
    <b-row>
      <b-col contenteditable="true" v-for="col in cols" cols="12" :sm="section.sm" :key="col.id">
        <col-preview :col="col"></col-preview>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import ColPreview from '@/components/ColPreview.cmp.vue'

export default {

props:["section"],
data(){return{
  }
},
computed:{
cols(){
  return this.section.cols
   }
},
components:{
  ColPreview,
  }
 
}
</script>

<style>

</style>
