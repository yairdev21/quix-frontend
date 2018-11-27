<template>
  <section class="hero-article section-item">
    <h1 class="text-center">{{section.title}}</h1>
    <b-row>
      <b-col v-for="n in 3" cols="12" :sm="section.sm" :key="section.sm">
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
</template>

<script>
export default {

props:["section"],
data(){return{
}},
computed:{
amount()
{
    console.log(section.amount);
    return section.amount}
}
}
</script>

<style>

</style>
