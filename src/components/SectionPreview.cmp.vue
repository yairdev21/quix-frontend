<template>
  <section class="hero-article section-item">
    <h1 class="text-center">{{section.title}}</h1>
    <b-row>
      <b-col v-for="col in cols" cols="12" :sm="section.sm" :key="col.id">
        <col-preview :col="col"></col-preview>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import ColPreview from '@/components/ColPreview.cmp.vue'
// Text Editor
import editor from 'vue2-medium-editor'
//

export default {

props:["section"],
data(){return{
}},
computed:{
cols(){
  return this.section.cols
   }
},
components:{
  ColPreview,
       'medium-editor': editor

}
 
}
</script>

<style>

</style>


   <!-- <medium-editor :text="myText" :options="options" custom-tag="h2" v-on:edit="applyTextEdit">
        </medium-editor> -->