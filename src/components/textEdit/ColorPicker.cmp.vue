<template>
  <transition name="modal-fade">
    <div contenteditable="false" class="modal-backdrops">
      <div class="modalski">
        <button type="button" class="btn-close" @click="setColor">x</button>
        <section class="modal-body" id="modalDescription">
          <p>Select a color:</p>
          <table class="color-picker">
            <tr>
              <td v-for="color in colors" @click="setColor(color)" :key="color">
                <svg height="50" width="50">
                  <circle cx="25" cy="25" r="20" :fill="color"></circle>
                </svg>
              </td>
            </tr>
          </table>
          <b-button type="button" class="btn-save" @click="setColor">Save</b-button>
        </section>
      </div>
    </div>
  </transition>
</template>
   <script>
export default {
  data() {
    return {
      colors: [
        "black",
        "white",
        "crimson",
        "DeepPink",
        "indianred",
        "CornflowerBlue",
        "BurlyWood",
        "yellow",
        "orange",
        "goldenrod",
        "purple",
        "brown",
        "lightgreen",
        "darkblue",
        "blue",
        "green",
        "Chartreuse",
        "DarkSlateGray",
        "Fuchsia",
        "LightSeaGreen"
      ]
    };
  },
  methods: {
    setColor(color = null) {
      this.$emit("setColor", color);
    }
  }
};
</script>
<style>
.modal-body p {
  color:white;
}
.color-picker {
  display: flex;
  justify-content: center;
}

.color-picker tr {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px 50px;
}

.color-picker td:hover {
  cursor: pointer;
  transform: translateY(2px);
}
</style>