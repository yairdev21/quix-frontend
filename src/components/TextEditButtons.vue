
<template>
  <section>
    <div v-bind:style="{ left: width, top: height }" class="edit-buttons" contenteditable="false">
      <ul @mousedown="isMenu=false">
        <li>
          <button id="bold" @click.stop="formatText('bold')" title="Bold Text"></button>
        </li>
        <li>
          <button id="italic" @click.stop="formatText('italic')" title="Italic Text"></button>
        </li>
        <li>
          <button id="underline" @click.stop="formatText('underline')" title="Underline Text"></button>
        </li>
        <li>
          <button id="link" @click.stop="foramtLink('link')" title="Make Link">
            <i class="fas fa-link"></i>
          </button>
        </li>
        <li>
          <button id="title" @click.stop="formatStyle(0.1)" title="Text Size Up"></button>
        </li>
        <li>
          <button id="mid" @click.stop="formatStyle(-0.1)" title="Text Size Down"></button>
        </li>
        <li>
          <button id="blackorwhite" @click.stop="changeFontColor" title="Black Or White Text"></button>
        </li>
        <li>
          <button id="font" @click.stop="changeFont" title="Change Font"></button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { EventBus } from "@/event-bus.js";
export default {
  props: ["text", "section"],
  data() {
    return {
      element: null,
      width: 0,
      isMenu: true,
      height: 0,
      fontCurrSize: 0.3,
      fontColor: "black",
      fontColorOptions: [
        "black",
        "green",
        "red",
        "white",
        "gray",
        "yellow",
        "purple",
        "brown"
      ],
      fontFamily: [
        "Segoe UI",
        "Exo",
        "ShadowsIntoLight",
        "Franklin Gothic Medium",
        "Gill Sans",
        "WorkSans",
        "Quicksand",
        "Tahoma",
        "Comfortaa",
        "cursive",
        "Cinzel",
        "Alegreya",
        "Acme",
        "Palatino",
        "Rancho",
        "Patrcik",
        "Italiano"
      ],
      fontNum: 0,
      fontColorNum: 0
    };
  },
  methods: {
    formatStyle(data) {
      this.isMenu = false;
      const currEl = this.getTextElement();
      this.element = currEl[0];
      console.log(this.element);
      this.element.fontFamily =
        this.element.fontFamily || this.fontFamily[0];
      this.element.fontColor =
        this.element.fontColor || this.fontColor[0];

      if (data) {
        this.element.fontSize = !this.element.fontSize
          ? 0.7 + data
          : (this.element.fontSize += data);
      }
      this.element.style = {
        "font-size": `calc(${this.element.fontSize}*2.5vw`,
        color: `${this.element.fontColor}`,
        "font-family": `${this.element.fontFamily}`
      };
    },
    mouseClick(e) {
      if (this.isMenu === false) return (this.isMenu = true);
      this.width = `${e.pageX - 120}px`;
      this.height = `${e.pageY + 20}px`;
    },
    formatText(data) {
      this.isMenu = false;
      document.execCommand(`${data}`);
      const currEl = this.getTextElement();
      this.element = currEl[0];
      this.element.data.text = this.text.commonAncestorContainer.parentElement.innerHTML;
    },
    foramtLink() {
      this.isMenu = false;
      this.$emit("openLinkModal");
    },
    changeFontColor() {
      let element = this.getTextElement();
      this.element = element[0];
      this.fontColorNum++;
      if (this.fontColorNum === this.fontColorOptions.length) this.fontColorNum = 0;
      this.element.fontColor = this.fontColorOptions[this.fontColorNum];
      this.element.style["color"] = this.element.fontColor;
      this.formatStyle();
    },
    changeFont() {
      const currEl = this.getTextElement();
      this.element = currEl[0];
      this.fontNum++;
      this.element.fontNum = !this.element.fontNum
        ? this.fontNum
        : this.fontNum++;
      if (this.fontNum === this.fontFamily.length) this.fontNum = 0;
      this.element.style["font-family"] = this.fontNum;
      this.element.fontFamily = this.fontFamily[this.element.fontNum];
      this.formatStyle();
    },
    getTextElement() {
      const data = this.text;
      console.log("txt", this.text);
      return this.section[0].elements.filter(element => {
        if (element.data.text) {
          return element.data.text.includes(data);
        } else return;
      });
    }
  },

  created() {
    EventBus.$on("link-for-edit", link => {
      if (link==='') return
      let currEl = this.getTextElement();
      this.element = currEl[0];
      let element = document.createElement("a");
      element.setAttribute("contenteditable", "false");
      element.setAttribute("target", "_blank");
      element.setAttribute("href", `https://${link}`);
      element.setAttribute("class", "btn btn-success btn-lg");
      this.text.surroundContents(element);
      this.element.data.text = this.text.commonAncestorContainer.innerHTML;
      return this.section[0].elements
        .filter(element => {
          if (element.data.text) {
          } else return;
        })
        .filter(text => {
          text.data.text === this.text;
        });
    }),
      window.addEventListener("mouseup", this.mouseClick);
  }
};
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}

.edit-buttons {
  border-radius: 6px;
  transition: 0.8s;
  position: absolute;
  z-index: 10;
}
.edit-buttons button {
  border: none;
  color: white;
  height: 30px;
  width: 30px;
  z-index: 1;
  background: rgb(54, 9, 9);
  transition: 0.3 ease;
}
.edit-buttons button:hover {
  transition: 0.3 ease;
  cursor: pointer;
  color: brown;
  background: rgb(129, 127, 127);
}
#bold::after {
  content: "B";
  font-weight: bold;
}
#underline::after {
  content: "U";
  font-weight: bold;
  text-decoration: underline;
}
#link::after {
  /* content: ""; */
  font-weight: bold;
}
#title::after {
  content: "+";
  font-weight: bold;
}
#mid::after {
  content: "-";
  font-weight: bold;
}
#font::after {
  content: "F";
  font-weight: bold;
}
#blackorwhite::after {
  font-size: 70%;
  content: "b/w";
  font-weight: bold;
}
#italic::after {
  content: "i";
  font-style: italic;
  font-weight: bold;
}
</style>
