<template>
  <div class="home">
    <main-header class="main-header"></main-header>
    <section class="main">
      <div class="container"></div>
      <h1 hidden>Quix</h1>
    </section>
    <section class="template-section">
      <h1 class="title">Choose a template and start Quixly!</h1>
      <card-section></card-section>
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
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  max-width: 100vw;
  &.main {
    position: relative;
    background-image: url("../assets/img/homePage2.png");
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

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
.template-section {
  background-image: url("../assets/img/7968.jpg");
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  background: transparent;
  font-family: Palatino;
  // margin-top: 30px;
}

</style>