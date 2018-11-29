<template>
  <div class="section-list">
    <nav-bar v-if="isPanelOpen" @addSection="addSection"></nav-bar>
    <div v-if="sections">
      <draggable
        v-model="sections"
        :options="{group:'sections', animation: 200}"
        @start="drag=true"
        @end="drag=false"
      >
        <div class="section-items" v-for="(section, idx) in sections" :key="section._id">
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
import draggable from "vuedraggable";
import sectionService from "../services/section-service.js";

export default {
  data() {
    return {
      site: null,
      sections: null,
      isPanelOpen: false
    };
  },
  methods: {
    processEditOperation(operation) {
      return (this.text = operation.api.origElements.innerHTML);
    },
    addSection(idx = 0, sectionName) {
      sectionService.getSectionByName(sectionName).then(section => {
        this.site.sections.splice(idx, 0, section);
      });
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
    draggable,
    ControlButtons
  },
};
</script>

<style  scoped>
.add-section {
  border: 1px dashed black;
}
.section-item {
  border:none;
}
</style>

