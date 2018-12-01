<template>
  <div class="edit-buttons">
      <button id="bold" @click="formatText('bold')">
        <i class="fas fa-bold"></i>
      </button>
    <button id="bold" @click="formatText('italic')">
      <i class="fas fa-italic"></i>
    </button>

    <button id="bold" @click="formatText('h1')">h1</button>
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

button{
  height: 30px;
  width: 30px;
  z-index:1;
}
i {
  z-index: 3;
}
</style>
