<template>
  <div class="social-share">
    <facebook :url="url" scale="3"></facebook>
    <twitter :url="url" title="Check My New Website" scale="3"></twitter>
    <linkedin :url="url" scale="3"></linkedin>
    <whats-app :url="url" title="Hello" scale="3"></whats-app>
    <email :url="url" subject="Hello" scale="3"></email>
  </div>
</template>

<script>
import {
  Facebook,
  Twitter,
  Linkedin,
  Pinterest,
  Reddit,
  Telegram,
  WhatsApp,
  Email,
  Google
} from "vue-socialmedia-share";
export default {
  props: ["url"],
  // created() {
  //   if (!url) return this.$swal("Please save your site first");
  // },
  components: {
    Facebook,
    Twitter,
    Linkedin,
    Pinterest,
    Reddit,
    Telegram,
    WhatsApp,
    Email,
    Google
  }
};
</script>

<style lang="scss" scoped>
.social-share {
  position: fixed;
  right: 42vw;
  top: 92vh;
  background-color: white;
}
</style>

