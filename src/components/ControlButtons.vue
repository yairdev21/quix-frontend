<template>
  <div class="side-bar-btns" contenteditable="false" :style="middle">
    <button class="home-icon icon" @click.stop="goHome" title="Home">
      <i class="fas fa-home"></i>
    </button>
    <button class="save-icon icon" @click="$emit('save')" title="Save">
      <i class="far fa-save"></i>
    </button>
    <button v-if="!isEditMode" class="edit-icon icon" @click="$emit('edit')" title="Edit">
      <i class="far fa-edit"></i>
    </button>
    <button v-else class="preview-icon icon" @click="$emit('preview')" title="Preview">
      <i class="far fa-eye"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["isEditMode"],
  methods: {
    goHome() {
      this.$swal({
        background: "white",
        title: "Go Back?",
        text: "You will lose any unsaved changes",
        showCancelButton: true,
        confirmButtonColor: "#42b983",
        reverseButtons: true,
        confirmButtonClass: "button-font",
        cancelButtonClass: "button-font",
        confirmButtonText: "Yes",
        animation: "false"
      }).then(result => {
        if (result.value) {
          this.$router.push("/");
        }
      });
    }
  },
  computed: {
    middle() {
      if (!this.isEditMode) return { left: "0" };
    }
  }
};
</script>
<style lang="scss" scoped>
.side-bar-btns {
  z-index: 11;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  top: 0;
  width: 18vw;
}

.side-bar-btns button {
  display: flex;
  margin: 1em 0.8em;
}

.btn-info {
  background: #123b41 !important;
}

.btn-info:hover {
  background: #317c88 !important;
}

.icon {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: whitesmoke;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #073238;
  transform: scale(1.7);
  position: relative;
  transition: 0.3s ease;
}

.icon:hover {
  background: #088292;
  transition: 0.3s ease;
  border: 1px solid whitesmoke;
  cursor: pointer;
  color: black;
}

@media (max-width: 960px) {
  .side-bar-btns button {
    transform: scale(1.5);
    margin: 1em 0.6em;
  }
}

@media (min-width: 1250px) {
  .side-bar-btns button {
    width: 30px;
  }
}

@media (max-width: 845px) {
  .far {
    transform: scale(0.8);
  }
  .fa-home {
    transform: scale(0.8);
  }
  .side-bar-btns button {
    width: 20px;
  }
}

@media (max-width: 625px) {
  .side-bar-btns button {
    margin: 0.2em 0;
  }
  .far {
    transform: scale(0.9);
  }
  .fa-home {
    transform: scale(0.9);
  }
  .side-bar-btns button {
    transform: scale(0.9);
  }
}
</style>
