<template>
  <div class="section-list">
    <nav-bar v-if="isPanelOpen"></nav-bar>
    <div v-if="sections">
      <draggable
        v-model="sections"
        :options="{group:'sections'}"
        @start="drag=true"
        @end="drag=false"
      >
        <div class="section-items" v-for="(section, idx) in sections" :key="section._id">
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
import NavBar from "@/components/NavBar.vue";
import SectionPreview from "@/components/SectionPreview.cmp.vue";
import ControlButtons from "@/components/ControlButtons.vue";
import draggable from "vuedraggable";


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
    addSection(idx, sectionName) {
      if (!sectionName) return;
      this.$store
        .dispatch("addSection", { idx, sectionName })
        .then(() => console.log(this.site));
    }
  },
  created() {
    this.$store.dispatch({ type: "getSite" }).then(res => {
      this.site = res;
      this.sections = res.elements;
    });
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
  }
};
</script>

<style  scoped>
.add-section {
  border: 1px dashed black;
}
</style>

