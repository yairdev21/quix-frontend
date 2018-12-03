<template>
  <div contenteditable="false" class="embed-container" :style="{ height: '100%' }">
    <iframe
      class="embed-container-iframe"
      :src="`https://www.youtube.com/embed/${video}`"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import { ID } from "../../services/utils.js";
import { EventBus } from "@/event-bus.js";

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: ID()
    };
  },

  computed: {
    video() {
      const video =
        this.data.src || "https://www.youtube.com/watch?v=e7sw5xA066Y";
      const videoId = video.match(
        /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
      );

      return videoId[1];
    }
  },
  created() {
    EventBus.$on('getVideoUrl', ()=>{this.$swal({
      title: "Enter youtube link",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Enter",
      showLoaderOnConfirm: true,
      preConfirm: login => {
        this.data.src = login;
      },
      allowOutsideClick: () => !this.$swal.isLoading()
    }).then(result => {
      return result;
    })})
  }
};
</script>

<style lang="scss" scoped>
.embed-container {
  position: relative;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
}
</style>
