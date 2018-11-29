<template>
  <div class="home">
    <main-header></main-header>
    <section class="main">
      <div class="container">


      <img src="@/assets/img/homePage.png/"/>
      </div>
    </section>

    <card-section></card-section>
    <home-footer class="footer"></home-footer>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import HomeFooter from "@/components/HomeFooter.vue";
import MainHeader from "@/components/MainHeader.vue";
import CardSection from "@/components/CardSection.vue";
export default {
  name: "home",

  data() {
    return {
    };
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
    // background-image: url("../assets/img/homePage.png");
    // background-attachment: fixed;
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-size: cover ;
    height: 90vh;
    // max-width: 85vw;

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

      h1 {
        margin: 0 0 0.5em;
        font-size: 3em;
        font-weight: bold;
        line-height: 1.25;
        text-align: center;
        color: #fff;
        text-shadow: #000 0 0 5px;
      }

      p {
        margin: 0 0 1.5em;
        font-size: 1.75em;
        line-height: 1.5;
        color: #fff;
      }

      button {
        font-size: 1.5em;
        // border-color: #fff;
        color: #fff;
        &:hover {
          color: black;
          transform: scale(1.2);
          background-color: rgba(0, 0, 0, 0.5);
        }

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }

    .container {
      width: 1000px;
      max-width: 100%;
      margin: 0 auto;

      h2 {
        margin-top: 0;
        font-size: 1.75em;
        font-weight: bold;
      }

      p {
        margin-bottom: 0;
        font-size: 2.25em;
        font-weight: 300;
      }
    }
  }
}

.footer {
  height: 50px;
}
</style>