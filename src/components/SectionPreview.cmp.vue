<template>
  <section
    class="preview-section-item"
    :class="borderStyle"
    @mouseenter="isBorder=!isBorder"
    @mouseleave="isBorder=!isBorder"
    :style="style"
    contenteditable="false"
  >
    <edit-section-on-hover
    :section="section"
      class="hover-control"
      @isDraggable="$emit('isDraggable')"
      @notDraggable="$emit('notDraggable')"
      @changeColorToSection="changeColorEmit(section._id)"
      @changeBgImgToSection="changeBgImgEmit"
      @delleteSection="sendDeleteSection(section._id)"
      :style="isShow"
    ></edit-section-on-hover>
    <b-row :style="showBorder">
      <b-col v-for="(col,idx) in cols" cols="12" :sm="section.data.sm" :key="col._id">
        <drop @drop="emitHandleDrop(arguments[0], idx)">
          <drag :transfer-data="{method: 'sort', data: idx}">
            <col-preview
              @deleteElement="$emit('deleteElement', idx, section._id)"
              @selectedText="emitSelected"
              :col="col"
              :sectionIdx="sectionIdx"
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
  props: ["section", "isEditMode", "sectionIdx"],
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
    changeBgImgEmit(sectionId) {
      this.$emit("imgChangeSectionId", sectionId);
    },
    changeSectionColor(sectionId) {
      this.sectionId = sectionId;
    },
    changeSectionImg(url, sectionId) {
      this.sectionId = sectionId;
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
      if (this.isEditMode) return { isBorder: this.isBorder, };
      else return false;
    },
    isShow() {
      if (this.isBorder & this.isEditMode) return { visibility: "visible" };
      else return { visibility: "hidden" };
    },
    showBorder(){
      if (this.isEditMode) return { "border": "2px solid transparent"}
    }
  },
  created() {
    document.designMode = this.checkEditMode ? "on" : "off";
  },
  components: {
    ColPreview,
    EditSectionOnHover
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.preview-section-item {
  background: white;
  padding: 3rem;
  padding-top: 2rem;
  overflow: hidden;
  border: 2px solid transparent;

}

.isBorder {
  resize: vertical;
  display: block;
  border: 2px dashed rgb(103, 113, 145);
}
</style>
