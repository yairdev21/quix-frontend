<template>
  <section class="hover-section" style="background: transparent">
    <Spinner class="spinner" message="Uploading Image..." v-show="isLoading"/>
    <color-picker class="color-picker" v-show="showColorPicker" @setColor="setColor"></color-picker>
    <div class="edit-on-hover">
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
      <button
        title="drag section"
        @mousedown="$emit('isDraggable')"
        @mouseup="$emit('notDraggable')"
      >
        <i class="fas fa-arrows-alt"></i>
      </button>
    </div>
  </section>
</template>

<script>
import ColorPicker from "@/components/textEdit/ColorPicker.cmp.vue";
import { EventBus } from "@/event-bus.js";
import cloudinaryService from "../services/cloudinary.service.js";
import Spinner from "vue-simple-spinner";
export default {
  props: ["section"],
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
      console.log(this.section._id);
      this.$emit("changeBgImgToSection", this.section._id);
      document.getElementById("uploadImg").click();
    },
    getUrl() {

      this.isLoading = true;
      console.log("IS LOADING- ", this.isLoading);
      cloudinaryService(this.$refs.file).then(url => {
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

<style lang="scss" scoped>
.edit-on-hover button:hover {
  transition: 0.3 ease;
  cursor: pointer;
  color: black;
  background: white;
}
.edit-on-hover button {
  border: none;
  color: white;
  height: 30px;
  width: 30px;
  margin: 2px;
  z-index: 1;
  background: rgb(56, 44, 44);
  transition: 0.3 ease;
  margin-top: 0.2rem;
  border-radius: 3px;
}
.edit-on-hover {
  margin-top: 5px;
  display: flex;
  position: relative;
  top: -30px;
  justify-content: flex-end;
  z-index: 5;
}
.spinner{
  position: fixed;
  top: 20px;
  left:0;
  right: 0;
  display: block;
}
</style>
