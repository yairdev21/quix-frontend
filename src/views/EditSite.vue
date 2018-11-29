<template>
  <div class="section-list">
    <nav-bar v-if="isPanelOpen"  @addSection="addSection"></nav-bar>
    <div v-if="sections">
      <medium-editor :options="options"/>
      <draggable
        v-model="sections"
        :options="{group:'sections'}"
        @start="drag=true"
        @end="drag=false"
      >
        <div
          class="section-items"
          v-for="(section, idx) in sections"
          :key="section._id"
        >
            <section-preview :section="section"></section-preview>
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
      isPanelOpen: false
    };
  },
  methods: {
    processEditOperation(operation) {
      return (this.text = operation.api.origElements.innerHTML);
    },
    addSection(idx, sectionName) {
      this.$store.dispatch("addSection", { idx, sectionName })
       .then(() => console.log(this.site, sectionName));
    }
  },
  created() {
    let siteId = this.$route.params.siteId;
    this.$store.dispatch({ type: "editSite", siteId }).then(res => {
      this.site = res[0];
      this.sections = res[0].sections;
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

