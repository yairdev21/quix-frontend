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
      class="hover-control"
      @isDraggable="$emit('isDraggable')"
      @notDraggable="$emit('notDraggable')"
      @changeColorToSection="changeColorEmit(section._id)"
      @changeBgImgToSection="changeBgImgEmit"
      @delleteSection="sendDeleteSection(section._id)"
      v-show="isBorder & isEditMode"
    ></edit-section-on-hover>
    <b-row>
      <b-col v-for="(col,idx) in cols" cols="12" :sm="section.data.sm" :key="col._id">
        <drop @drop="emitHandleDrop(arguments[0], idx)">
          <drag :transfer-data="{method: 'sort', data: idx}">
            <col-preview
              @deleteElement="deleteElement(col._id, section._id  )"
              @selectedText="emitSelected"
              :col="col"
              :isEditMode="isEditMode"
            ></col-preview>
          </drag>
        </drop>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import ColPreview from "@/components/ColPreview.cmp.vue";
import EditSectionOnHover from "@/components/EditSectionOnHover.cmp.vue";
import { EventBus } from "@/event-bus.js";

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
    emitHandleDrop(dragElement, idx) {
      this.$emit("handleDrop", dragElement, idx);
    },
    emitSelected(data) {
      this.$emit("selectedText", data, [this.section._id]);
    },
    sendDeleteSection(sectionId) {
      this.$emit("deleteSection", sectionId);
    },
    changeColorEmit(sectionId) {
      this.$emit("colorChangeSectionId", sectionId);
    },
    changeBgImgEmit(url) {
      this.$emit("imgChangeSectionId", url, this.section._id);
    },
    changeSectionColor(sectionId) {
      this.sectionId = sectionId;
    },
    changeSectionImg(url, sectionId) {
      this.sectionId = sectionId;
    },
    deleteElement(elId, sectionId) {
    this.$emit("deleteElement", {"elId":elId, "sectionId":sectionId});
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
  },
  created() {}
};
</script>

<style>
.section-item {
  resize: vertical;
  overflow: hidden;
  border: 2px solid transparent;
}
.isBorder {
  display: block;
  border: 2px dashed royalblue;
}
</style>
