<template>
  <div class="home">
    <main-header class="main-header"></main-header>
    <section class="main">
      <div class="container"></div>
      <div class="header-text">
        <!-- <h5>A modern aproach to website building</h5> -->
        <h1>Build your website</h1>
        <h5>Choose a template. Make it your own . Publish</h5>
        <h1 hidden>Quix</h1>
      </div>
    </section>
    <section class="template-section">
      <br>
      <h1 class="title">As fast as you can say Quixly!</h1>
      <card-section style="background:transparent"></card-section>
      <home-footer class="footer"></home-footer>
    </section>
  </div>
</template>

<script>
import HomeFooter from "@/components/HomeFooter.vue";
import MainHeader from "@/components/MainHeader.vue";
import CardSection from "@/components/CardSection.vue";

export default {
  name: "home",

  data() {
    return {};
  },
  components: {
    HomeFooter,
    MainHeader,
    CardSection
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}
section {
  font-family: "Quicksand";
  max-width: 100vw;
  &.main {
    position: relative;
    background: url("../assets/img/MainHeaderImg.jpg") center center;
    // background: linear-gradient(#42b983, #8ae7a1);
    // background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 490px;

    @media (max-width: 1100px) {
      height: 450px;
    }
    @media (max-width: 900px) {
      height: 400px;
    }
    @media (max-width: 600px) {
      height: 280px;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
    }
    .container {
      padding: 50px;
      width: 800px;
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      @media (max-width: 900px) {
        padding-top: 0;
      }
    }
  }
}
.header-text {
  margin-top: 5.5em;
  @media (max-width: 900px) {
    transform: scale(0.7);
    margin-top: 8.8em;
  }
  @media (max-width: 600px) {
    transform: scale(0.3);
    margin-top: -1em;
  }
}
.title {
  color: #42b983 !important;
  font-weight: bold;
  bottom: 0;
  background: transparent;
  background: transparent;
  @media (max-width: 900px) {
    transform: scale(0.9);
    margin-top: -1em;
  }
  @media (max-width: 600px) {
    transform: scale(0.6);
    margin-top: -2em;
  }
}
.template-section {
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main {
  margin-top: 0.6em;

  h1 {
    margin-top: 3.2em;
    color: white;
    font-weight: 550;
    transform: scale(1.88);
  }
  h3 {
    letter-spacing: 2px;
    transform: scale(0.8);
    margin-bottom: 0.3em;
    font-weight: 600;
    color: white;
  }
  h5 {
    transform: scale(1.2);
    margin-top: 1.4em;
    font-weight: 550;
    color: white;
  }
}
</style>