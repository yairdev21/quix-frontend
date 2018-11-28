<template>
  <div class="section-list">
    <nav-bar v-if="isPanelOpen"></nav-bar>
    <div v-if="sections">
      <medium-editor :options="options"/>
      <draggable
        v-model="sections"
        :options="{group:'sections'}"
        @start="drag=true"
        @end="drag=false"
      >
        <div
          v-if="sections"
          class="section-items"
          v-for="(section, idx) in sections"
          :key="section._id"
        >
          <drop @drop="addSection(idx, ...arguments)">
            <section-preview :section="section"></section-preview>
          </drop>
        </div>
      </draggable>
    </div>
    <section v-else class="add-section section-item">
      <h1 class="text-center">Drag & Drop New Section Here</h1>
    </section>
    <control-buttons @showPanel="isPanelOpen=!isPanelOpen"></control-buttons>
  </div>
</template>

<script>
import Store from "@/store.js";
import NavBar from "@/components/NavBar.vue";
import SectionPreview from "@/components/SectionPreview.cmp.vue";
import ControlButtons from "@/components/ControlButtons.vue";
import MediumEditor from "vue2-medium-editor";
import draggable from "vuedraggable";

var options = {
  toolbar: {
    allowMultiParagraphSelection: true,
    buttons: ["bold", "italic", "underline", "h2", "h3"],
    diffLeft: 0,
    diffTop: -10,
    firstButtonClass: "medium-editor-button-first",
    lastButtonClass: "medium-editor-button-last",
    relativeContainer: null,
    standardizeSelectionStart: false,
    static: false,
    align: "center"
  }
};
export default {
  data() {
    return {
      site: null,
      sections: null,
      options,
      isPanelOpen:true
    };
  },
  methods: {
    processEditOperation(operation) {
      return (this.text = operation.api.origElements.innerHTML);
    },
    addSection(idx, sectionName) {
      if (!sectionName) return
      this.$store.dispatch("addSection", { idx, sectionName })
       .then(() => console.log(this.site));
    }
  },
  // mounted () {
  //   this.$dragging.$on('dragged', ({ value }) => {
  //     console.log(value.item)
  //     console.log(value.list)
  //   })
  //   this.$dragging.$on('dragend', () => {
  //   })
  // },
  created() {
    this.$store.dispatch({ type: "getSite" }).then(res => {
      this.site = res;
      this.sections = res.elements;
    });
  },
  components: {
    SectionPreview,
    NavBar,
    MediumEditor,
    draggable,
    ControlButtons
  }
};
</script>

<style  scoped>
.add-section {
  border: 1px dashed black;
}
</style>

