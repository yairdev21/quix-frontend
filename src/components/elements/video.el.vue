<template>
  <div
    @mouseover="isVideo=true"
    @mouseleave="isVideo=false"
    contenteditable="false"
    class="embed-container"
    :style="{ height: '100%' }"
  >
    <div contenteditable="false" class="edit-video">
      <button
        class="link-btn"
        id="link"
        v-show="isVideo"
        @click.stop="changeLink"
        title="Change Link"
      >
        <i class="fas fa-link"></i>
      </button>
    </div>
    <h3>About Us:</h3>
    <iframe
      :width="width"
      :height="width/1.2"
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
      id: ID(),
      isVideo: false
    };
  },
  methods: {
    changeLink() {
      this.$swal({
        title: "Enter youtube link",
        input: "text",
        confirmButtonColor: "#42b983",
        confirmButtonClass: "button-font",
        cancelButtonClass: "button-font",
        reverseButtons: true,
        animation: false,
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Enter",
        showLoaderOnConfirm: true,
        preConfirm: url => {
          this.data.src = url;
        },
        allowOutsideClick: () => !this.$swal.isLoading()
      }).then(result => {
        return result;
      });
    }
  },
  computed: {
    width() {
      return window.innerWidth >= 900 ? 350 : 100;
    },
    video() {
      const video =
        this.data.src || "https://www.youtube.com/watch?v=069G-EgvTe0";
      const videoId = video.match(
        /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
      );
      return videoId[1];
    }
  },
  created() {
    EventBus.$on("getVideoUrl", () => {
      if (this.video) return;
      else this.changeLink();
    });
  }
};
</script>

<style lang="scss" scoped>
.embed-container {
  position: relative;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  border-left: 2px solid gray
}
.edit-video .link-btn:hover {
  cursor: pointer;
  color: brown;
  background: white;
}
.edit-video button {
  position: absolute;
  border: none;
  color: white;
  height: 30px;
  width: 30px;
  z-index: 1;
  background: brown;
  transition: 0.3 ease;
  border-radius: 3px;
}
.edit-video {
  padding-right: 1rem;
  z-index: 4;
}
</style>