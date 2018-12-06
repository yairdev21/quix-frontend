<template>
  <div contenteditable="false" class="img-div">
    <img :src="data.src" alt="image" contenteditable="false">
    <input v-if="!isSrc" type="file" id="uploadSmallImg" ref="img" @change="getUrl">
  </div>
</template>

<script>
import { ID } from "../../services/utils.js";
import cloudinaryService from "@/services/cloudinary.service.js";

export default {
  props: {
    isNewImg: {
      type: Boolean,
      required: true
    },
    isEditMode: {},
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
  methods: {
    getUrl() {
      this.isLoading = true;
      console.log("IS LOADING- ", this.isLoading);
      cloudinaryService(this.$refs.img).then(url => {
        this.data.src = url;
        console.log(this.data);

        this.isLoading = false;
      });
    }
  },
  computed: {
    isSrc() {
      return this.data.src.length > 0;
    },
    imgSrc() {
      return (
        this.style ||
        "http://via.placeholder.com/1200x600?text=My%20Awsome%20Image"
      );
    }
  },
  created() {
    document.designMode = "off";
    if (this.isNewImg) this.data.src = "";
  }
};
</script> 

<style lang="scss" scoped>
.img {
  width: 150px;
  height: 85vh;
}
.img-div {
  object-fit: contain;
}
// #uploadSmallImg{
//      position: absolute;
//     left: 1000px;
// }
</style>
