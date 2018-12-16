<template>
  <transition name="modal-fade">
    <div contenteditable="false" class="modal-backdrops">
      <div class="modalski">
        <button type="button" class="btn-close" @click="setImage">x</button>
        <section class="modal-body" id="modalDescription">
          <p>Select a image:</p>
          <table class="image-picker">
            <tr>
              <td v-for="image in images" @click="setImage(image)" :key="image">
                <svg height="50" width="50">
                  <circle cx="25" cy="25" r="20" :fill="image"></circle>
                </svg>
              </td>
            </tr>
          </table>
          <b-button type="button" class="btn-save" @click="setImage">Save</b-button>
        </section>
      </div>
    </div>
  </transition>
</template>
   <script>
export default {
  data() {
    return {
      images: [
      ]
    };
  },
  methods: {
    setImage(image = null) {
      this.$emit("setImage", image);
    }
  }
};
</script>
<style>

.image-picker {
  display: flex;
  justify-content: center;
}

.image-picker tr {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px 50px;
}

.image-picker td:hover {
  cursor: pointer;
  transform: translateY(2px);
}
</style>