<template>
  <section class="hover-section">
    <color-picker class="color-picker" v-show="showColorPicker" @setColor="setColor"></color-picker>
    <div class="edit-on-hover">
      <button @click="$emit('delleteSection')">
        <i class="far fa-trash-alt"></i>
      </button>
      <button @click="showColorPicker=!showColorPicker">
        <i class="fas fa-palette"></i>
      </button>
    </div>
  </section>
</template>

<script>
import ColorPicker from "@/components/textEdit/ColorPicker.cmp.vue";
export default {
  data() {
    return { showColorPicker: false };
  },
  methods: {
    setColor(color) {
      this.showColorPicker = false;
      console.log(color);
    }
  },
  components: {
    ColorPicker
  }
};
</script>

<style>
.edit-on-hover button:hover {
  transition: 0.3 ease;
  cursor: pointer;
  color: brown;
  background: rgb(129, 127, 127);
}
.edit-on-hover button {
  border: none;
  color: white;
  height: 30px;
  width: 30px;
  z-index: 1;
  background: rgb(122, 36, 36);
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
