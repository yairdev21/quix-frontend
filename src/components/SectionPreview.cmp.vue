<template>
  <section
    :class="{isBorder:isBorder}"
    @mouseenter="isBorder=!isBorder"
    @mouseleave="isBorder=!isBorder"
    class="section-item"
    :style="style"
    contenteditable="false"
  >
    <edit-section-on-hover 
    @changeColorToSection="changeColorEmit(section._id)"
    @delleteSection="sendDeleteSection(section._id)" 
    v-show="isBorder"
    ></edit-section-on-hover>
    <b-row>
      <b-col v-for="col in cols" cols="12" :sm="section.data.sm" :key="col._id">
        <col-preview @selectedText="emitSelected" :col="col"></col-preview>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import ColPreview from "@/components/ColPreview.cmp.vue";
import EditSectionOnHover from "@/components/EditSectionOnHover.cmp.vue";

export default {
  props: ["section"],
  data() {
    return {
      text: "",
      isBorder: false,
      isTextSelected: false,
    };
  },
  methods: {
    emitSelected(data) {
      this.$emit("selectedText", data);
    },
    sendDeleteSection(sectionId) {
      this.$emit("deleteSection", sectionId);
    },
    changeColorEmit(sectionId){
      this.sectionId=sectionId
      this.$emit('colorChangeSectionId', sectionId)
    }
  },
  computed: {
    cols() {
      return this.section.elements;
    },
    style() {
      return this.section.style || null;
    }
  },
  components: {
    ColPreview,
    EditSectionOnHover
  },
};
</script>

<style>
.section-item {
  border: 2px solid transparent;
  cursor: move;
}
.isBorder {
  display: block;
  border: 2px dashed royalblue;
}
</style>
