<template>
  <transition name="modal-fade">
    <div contenteditable="false" class="modal-backdrops">
      <div class="modalski">
        <button type="button" class="btn-close" @click="setColor">x</button>
        <section class="modal-body" id="modalDescription">
          <p>Select a color:</p>
          <b-btn
            class="colorGradeSelect"
            v-show="isSelecting"
            @click="isSelecting=false, selectedColors=gradiants"
          >Gradiants</b-btn>
          <b-btn
            class="colorGradeSelect"
            v-show="isSelecting"
            @click="isSelecting=false, selectedColors=colors"
          >Full</b-btn>
          <table class="color-picker">
            <tr>
              <td v-for="(color,name) in selectedColors" @click="setColor(color)" :key="color">
                <svg height="50" width="50">
                  <circle cx="25" cy="25" r="20" :fill="name"></circle>
                </svg>
              </td>
            </tr>
          </table>
          <b-button  v-show="!isSelecting" type="button" class="btn-save" @click="setColor">Save</b-button>
        </section>
      </div>
    </div>
  </transition>
</template>
   <script>
export default {
  data() {
    return {
      isSelecting: true,
      selectedColors: "",
      colors: {
        black: "black",
        white: "white",
        crimson: "crimson",
        DeepPink: "DeepPink",
        indianred: "indianred",
        CornflowerBlue: "CornflowerBlue",
        BurlyWood: "BurlyWood",
        yellow: "yellow",
        orange: "orange",
        goldenrod: "goldenrod",
        purple: "purple",
        lightgreen: "lightgreen",
        darkblue: "darkblue",
        blue: "blue",
        green: "green",
        Chartreuse: "Chartreuse",
        DarkSlateGray: "DarkSlateGray",
        Fuchsia: "Fuchsia",
        LightSeaGreen: "LightSeaGreen",
        Gray: "Gray"
      },
      gradiants: {
        black: "linear-gradient(to right, #000000, #434343)",
        white: "linear-gradient(to right, #ffefba, #ffffff)",
        crimson: "linear-gradient(to right, #642b73, #c6426e)",
        DeepPink: "linear-gradient(to right, #f953c6, #b91d73)",
        indianred: "linear-gradient(to right, #e52d27, #b31217)",
        CornflowerBlue: "linear-gradient(to right, #3a7bd5, #3a6073)",
        BurlyWood: "linear-gradient(to right, #f0c27b, #4b1248)",
        yellow: "linear-gradient(to right, #fdc830, #f37335)",
        orange: "linear-gradient(to right, #f12711, #f5af19)",
        goldenrod: "linear-gradient(to right, #fceabb, #f8b500)",
        purple: "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
        lightgreen: "linear-gradient(to right, #52c234, #061700)",
        darkblue: "linear-gradient(to right, #141e30, #243b55)",
        blue: "linear-gradient(to right, #373b44, #4286f4)",
        green: "linear-gradient(to right, #56ab2f, #a8e063)",
        Chartreuse: "linear-gradient(to right, #ffe000, #799f0c)",
        DarkSlateGray: "linear-gradient(to right, #232526, #414345)",
        Fuchsia: "linear-gradient(to right, #b24592, #f15f79)",
        LightSeaGreen: "linear-gradient(to right, #283c86, #45a247)",
        Gray: "linear-gradient(to right, #3e5151, #decba4)"
      }
    };
  },
  methods: {
    setColor(color = null) {
      this.$emit("setColor", color);
      this.isSelecting = true;
    }
  }
};
</script>
<style>
.modal-backdrops {
  z-index: 6;
  background: transparent;
  position: fixed;
  align-items: center;
}

.modalski {
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  background: rgb(73, 71, 71);
  box-shadow: 2px 2px 20px 1px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 5px 5px;
}
.modal-body p {
  color: white;
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
.btn-close {
  border: none;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}
.btn-close:hover {
  color: #1f534a;
  cursor: pointer;
  background: transparent;
}

.btn-save {
  width: fit-content;
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
  margin: 10px;
}
.colorGradeSelect {
  margin: 2px;
}
</style>