<template>
  <div class="edit-buttons" contenteditable="false">
    <ul>
      <li>
        <button id="bold" @click.stop="formatText('bold')"></button>
      </li>
      <li>
        <button id="italic" @click.stop="formatText('italic')"></button>
      </li>
      <li>
        <button id="underline" @click.stop="formatText('underline')"></button>
      </li>
      <li>
        <button id="link" @click.stop="foramtLink('link')">
          <i class="fas fa-link"></i>
        </button>
      </li>
      <li>
        <button id="title" @click.stop="formatSize(3)"></button>
      </li>
      <li>
        <button id="mid" @click.stop="formatSize(2)"></button>
      </li>
      <li>
        <button id="regular" @click.stop="formatSize(1)"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus.js";

export default {
  props: ["text", "section"],
  data() {
    return {};
  },
  methods: {
    formatSize(size) {
      console.log(this.section[0].elements);
      
      let data=this.text
      return this.section[0].elements
        .filter(element => {
          return element.data.text.includes(data);
        })
        .filter(text => {
          text.style = { transform: `scale(${size})` };
        });
    },
    formatText(data) {
      document.execCommand(`${data}`);
    },
    foramtLink() {
      this.$emit("openLinkModal");
    }
  },
  created() {
    EventBus.$on("link-for-edit", link => {
      let element = document.createElement("a");
      element.setAttribute("contenteditable", "false");
      element.setAttribute("href", `https://${link}`);
      this.text.surroundContents(element);
    });
  }
};
</script>

<style>
ul {
  list-style: none;
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
  content: "h1";
  font-weight: bold;
}
#mid::after {
  content: "h2";
  font-weight: bold;
}
#regular::after {
  content: "p";
  font-weight: bold;
}

#italic::after {
  content: "i";
  font-style: italic;
  font-weight: bold;
}
</style>
