<template>
  <div class="social-share" @click="$emit('hideButtons')">
    <facebook class="share-item" :url="url" scale="3"></facebook>
    <twitter class="share-item" :url="url" title="Check My New Website" scale="3"></twitter>
    <linkedin class="share-item" :url="url" scale="3"></linkedin>
    <whats-app class="share-item" :url="url" title="Hello" scale="3"></whats-app>
    <email class="share-item" :url="url" subject="Hello" scale="3"></email>
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

</style>

