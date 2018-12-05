<template>
  <section class="hover-section">
    <Spinner message="Uploading Image..." v-show="isLoading"/>
    <color-picker class="color-picker" v-show="showColorPicker" @setColor="setColor"></color-picker>
    <div class="edit-on-hover">
      <div>
        <button
          title="drag section"
          @mousedown="$emit('isDraggable')"
          @mouseup="$emit('notDraggable')"
        >
          <i class="fas fa-arrows-alt"></i>
        </button>
      </div>
      <button title="Delete" @click="$emit('delleteSection')">
        <i class="far fa-trash-alt"></i>
      </button>
      <button title="Choose Background Color" @click="showColorPicker=!showColorPicker">
        <i class="fas fa-palette"></i>
      </button>
      <button title="Choose Background Image" @click="uploadImage">
        <i class="fas fa-file-image"></i>
      </button>
      <input hidden id="uploadImg" ref="file" type="file" @change="getUrl">
    </div>
  </section>
</template>

<script>
import ColorPicker from "@/components/textEdit/ColorPicker.cmp.vue";
import { EventBus } from "@/event-bus.js";
import cloudinaryService from "../services/cloudinary.service.js";
import Spinner from "vue-simple-spinner";
export default {
  data() {
    return { showColorPicker: false, isLoading: false };
  },
  methods: {
    setColor(color) {
      this.showColorPicker = false;
      this.$emit("changeColorToSection");
      EventBus.$emit("changeColor", color);
    },
    uploadImage() {
      document.getElementById("uploadImg").click();
    },
    getUrl() {
      this.isLoading = true;
      console.log("IS LOADING- ", this.isLoading);
      cloudinaryService(this.$refs.file).then(url => {
        this.$emit("changeBgImgToSection", url);
        EventBus.$emit("changeBgImg", url);
        this.isLoading = false;
      });
    }
  },
  components: {
    ColorPicker,
    Spinner
  }
};
</script>

<style>
.edit-on-hover button:hover {
  transition: 0.3 ease;
  cursor: pointer;
  color: black;
  background: #1cc5df;
}
.edit-on-hover button {
  border: none;
  color: white;
  height: 30px;
  width: 30px;
  z-index: 1;
  background: #17a2b8;
  transition: 0.3 ease;
  margin-top: 0.2rem;
  border-radius: 3px;
}
.edit-on-hover {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  margin-right: 0.6rem;
  z-index: 5;
}
</style>
