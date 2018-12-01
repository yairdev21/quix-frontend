<template>
  <div class="edit-buttons">
    <ul>
      <li>
        <button id="bold" @click.prevent="formatText('bold')">
          <!-- <b contenteditable="false">B</b> -->
          <!-- <i class="fas fa-bold"></i> -->
        </button>
      </li>
      <li>
        <button id="italic" @click="formatText('italic')"></button>
      </li>
      <li>
        <button id="underLine" @click="formatText('underline')"></button>
      </li>
      <!-- <li>
        <button id="blockQuote" @click="formatText('quote')">
        </button>
      </li>
      <li>
        <button id="bigger" @click="formatText('h1')"></button>
      </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    formatText(data) {
      if (data === "h1") {
        let element = document.createElement("h1");
        this.text.surroundContents(element);
      } else document.execCommand(`${data}`);
    }
  }
};
</script>

<style>
ul {
  list-style: none;
}
button {
  color: white;
  height: 30px;
  width: 30px;
  z-index: 1;
  background: rgb(54, 9, 9);
}
#bold::after {
  content: "B";
  font-weight: bold;
}
#underLine::after {
  content: "U";
  font-weight: bold;
  text-decoration: underline;
}
#blockQuote::after {
  content: "``";
  font-weight: bold;
}
#italic::after {
  content: "i";
  font-style: italic;
  font-weight: bold;
}
</style>
