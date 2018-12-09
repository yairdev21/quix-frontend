<template>
  <div contenteditable="false" class="img-div">
    <img v-show="isSrc" :src="data.src" class="img" contenteditable="false">
    <Spinner message="Uploading Image..."  v-show="isLoading"/>
    <input type="file" id="uploadSmallImg" ref="img" @change="getUrl" hidden>
    <label
      v-show="!isSrc && !isLoading"
      class="uploadImageBtn"
      contenteditable="false"
      for="uploadSmallImg"
    >Upload Image</label>
  </div>
</template>

<script>
document.designMode = "off";
import { ID } from "../../services/utils.js";
import cloudinaryService from "@/services/cloudinary.service.js";
import Spinner from "vue-simple-spinner";

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
      id: ID(),
      isLoading:false
    };
  },
  methods: {
    getUrl() {
      this.isLoading = true;
      console.log("IS LOADING- ", this.isLoading);
      cloudinaryService(this.$refs.img).then(url => {
        this.data.src = url;
        this.isLoading = false;
      });
    }
  },
  computed: {
    isSrc() {
      return this.data.src.length > 0;
    },
    imgSrc() {
      return this.style;
    }
  },
  created() {
    document.designMode = "off";
    if (this.isNewImg) this.data.src = "";
  },
  components:{
    Spinner
  }
};
</script> 

<style lang="scss" scoped>
.uploadImageBtn {
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  transition: 0.2s;
}
.uploadImageBtn:hover {
  transition: 0.2s;
  cursor: pointer;
  color: white;
  background: #17a2b8;
}

.img {
  width: 300px;
  height: 300px;
  // transform: scale(0.8)
}
.img-div {
  object-fit: contain;
}
// #uploadSmallImg{
//      position: absolute;
//     left: 1000px;
// }
</style>
