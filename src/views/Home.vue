<template>
  <div class="home">
    <main-header class="main-header"></main-header>
    <section class="main">
      <div class="container"></div>
      <h5>A modern aproach to website building</h5>
      <h1>Build your website!</h1>
      <!-- <h3>Build a site in minutes!</h3> -->
      <!-- <h3>or whatever you'd like and publish it in just 5 minutes!</h3> -->
      <h1 hidden>Quix</h1>
    </section>
    <section class="template-section">
      <br>
      <h1 class="title">Choose a template and start Quixly!</h1>
      <card-section style="background:transparent"></card-section>
      <home-footer class="footer"></home-footer>
    </section>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
section {
  font-family: "Quicksand";
  max-width: 100vw;

  &.main {
    position: relative;
    background: url("../assets/img/MainHeaderImg.jpg") center center;
    // background: linear-gradient(#42b983, #8ae7a1);
    // background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: contain;
    height: 75vh;

    @media (max-width: 900px) {
      background-size: contain;
      background-position: center;
    }
    @media (max-width: 600px) {
      background-size: contain;
      background-position: center;
      height: 90vh;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
    }
    .container {
      padding: 80px;
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
.title {
  color: #42b983 !important;
  font-weight: bold;
  bottom: 0;
  background: transparent;
  background: transparent;
  // font-family: Palatino;
}
.template-section {
  // background-image: url("../assets/img/7968.jpg");
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main {
  margin-top: 0.5em;
  h1 {
    margin-top: 0.5em;
    margin-bottom: 0.8em;
    color: white;
    font-weight: 550;
    transform: scale(1.88);
  }
  h3 {
    letter-spacing: 2px;
    // text-decoration: overline;
    transform: scale(0.8);
    margin-bottom: 0.3em;
    font-weight: 600;
    color: white;
  }
  h5 {
    transform: scale(1.2);
    margin-top: 2.6em;
    font-weight: 550;
    color: white;
  }
}
</style>