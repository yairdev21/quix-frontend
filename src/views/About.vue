<template>
<div>
    <main-header></main-header>
<section class="about-container">
         <h1>
            About
        </h1>
    
         <h1>
            About
        </h1>
        <h3>Words words words</h3>
        <h3>Words words words</h3>
        <h3>Words words words</h3>
        <h3>Words words words</h3>
        <h3>Words words words</h3>
        <h3>Words words words</h3>
        <h3>Words words words</h3>
</section>
</div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
components:{
    MainHeader
}
}
</script>

<style lang="scss" scoped>
.about-container {
    margin-top:100px;
      background-image: url("../assets/img/7968.jpg");
          background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

.about-container h1 {
margin-top:30px;
}
.about-container h3 {
margin-top:100px;
}
</style>