<template>
  <div>
    <div class="left-side" :style="{}">
      <div class="article">{{text}}</div>
    </div>
  </div>
</template>
<script>


export default {
props:["col"],
data(){return{
   }
},
created(){
   this.text= this.col.text
},
components:{
}
}
</script>

<style>

</style>
