<template>
  <section
    class="section-item"
    :class="borderStyle"
    @mouseenter="isBorder=!isBorder"
    @mouseleave="isBorder=!isBorder"
    :style="style"
    contenteditable="false"
  >
    <edit-section-on-hover
      @changeColorToSection="changeColorEmit(section._id)"
      @delleteSection="sendDeleteSection(section._id)"
      v-show="isBorder & isEditMode"
    ></edit-section-on-hover>
    <b-row>
      <b-col v-for="col in cols" cols="12" :sm="section.data.sm" :key="col._id">
        <col-preview @selectedText="emitSelected" :col="col" :isEditMode="isEditMode"></col-preview>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import ColPreview from "@/components/ColPreview.cmp.vue";
import EditSectionOnHover from "@/components/EditSectionOnHover.cmp.vue";

export default {
  props: ["section", "isEditMode"],
  data() {
    return {
      text: "",
      isBorder: false,
      isTextSelected: false
    };
  },
  methods: {
    emitSelected(data) {
      this.$emit("selectedText", data);
    },
    sendDeleteSection(sectionId) {
      this.$emit("deleteSection", sectionId);
    },
    changeColorEmit(sectionId) {
      this.sectionId = sectionId;
      this.$emit("colorChangeSectionId", sectionId);
    }
  },
  computed: {
    cols() {
      return this.section.elements;
    },
    style() {
      return this.section.style || null;
    },
    borderStyle() {
      if (this.isEditMode) return { isBorder: this.isBorder };
      else return false;
    }
  },
  components: {
    ColPreview,
    EditSectionOnHover
  }
};
</script>

<style>
.section-item {
  resize: vertical;
  overflow: hidden;
  border: 2px solid transparent;
}
.isBorder {
  cursor: move;
  display: block;
  border: 2px dashed royalblue;
}
</style>
