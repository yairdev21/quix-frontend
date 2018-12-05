<template>
  <div class="edit-buttons" contenteditable="false">
    <ul>
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
</template>

<script>
import { EventBus } from "@/event-bus.js";

export default {
  props: ["text", "section"],
  data() {
    return {
      fontCurrSize: 1,
      fontColor: "black",
      fontFamily: [
        "Courier New",
        "Franklin Gothic Medium",
        "Gill Sans",
        "Times New Roman",
        "Lucida Sans Regular",
        "Verdana",
        "Tahoma",
        "sans-serif",
        "cursive"
      ],
      fontNum: 0
    };
  },
  methods: {
    formatStyle(data) {
      if (data) {
        this.fontCurrSize += data;
      }
      this.getText().filter(text => {
        text.style = {
          "font-size": `calc(${this.fontCurrSize}*1vw`,
          color: `${this.fontColor}`,
          "font-family": `${this.fontFamily[this.fontNum]}`
        };
      });
    },
    formatText(data) {
      document.execCommand(`${data}`);
    },
    foramtLink() {
      this.$emit("openLinkModal");
    },
    changeFontColor() {
      if (this.fontColor === "black") this.fontColor = "white";
      else this.fontColor = "black";
      this.formatStyle();
    },
    changeFont() {
      this.fontNum++;
      if (this.fontNum === this.fontFamily.length) this.fontNum = 0;
      this.formatStyle();
    },
    getText() {
      let data = this.text;
      return this.section[0].elements.filter(element => {
        if (element.data.text) {
          return element.data.text.includes(data);
        } else return;
      });
    }
  },
  created() {
    let data = this.text;
    EventBus.$on("link-for-edit", link => {
      let element = document.createElement("a");
      element.setAttribute("contenteditable", "false");
      element.setAttribute("target", "_blank");
      element.setAttribute("href", `https://${link}`);
      console.log(this.text.toString());
      this.text.surroundContents(element);
      return this.section[0].elements
        .filter(element => {
          if (element.data.text) {
          } else return;
        })
        .filter(text => {
          text.data.text = this.text;
        });
    });
  }
};
</script>

<style>
ul {
  list-style: none;
}

.edit-buttons {
  /* position: fixed;
  display: flex;
  flex-direction: column;
  top: 45%;
  right: 5%;
  transform: scale(1.5);
  z-index: 5; */
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
