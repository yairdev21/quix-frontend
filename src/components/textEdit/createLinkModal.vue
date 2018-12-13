<template>
  <transition name="modal-fade">
    <div @keyup.escape="close" contenteditable="false" class="modal-backdrops">
      <div class="modalski">
        <b-button type="button" class="btn-close" @click="close">X</b-button>
        <section class="modal-body" id="modalDescription">
          <input
            autofocus
            type="text"
            @keyup.enter="close"
            v-model="getLink"
            placeholder="enter link..."
          >
          <b-button type="button" class="btn-save" @click="close">Save</b-button>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  data() {
    return {
      getLink: ""
    };
  },
  methods: {
    close() {
      this.$emit("closeModal", this.getLink);
      this.getLink = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-backdrops {
  z-index: 6;
  background: transparent;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
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
</style>