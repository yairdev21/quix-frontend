<template>
  <div class="section-list">
    <nav-bar v-if="isPanelOpen" @addSection="addSection"></nav-bar>
    <text-edit-buttons v-show="isTextSelected" :text="text"></text-edit-buttons>

    <div v-if="sections">
      <draggable
        v-model="sections"
        :options="{group:'sections', animation: 200}"
        @start="drag=true"
        @end="drag=false"
      >
        <div class="section-items" v-for="(section) in sections" :key="section._id">
          <section-preview  @selectedText="editSelectedText" :section="section"></section-preview>
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
import TextEditButtons from "@/components/TextEditButtons.vue";

export default {
  data() {
    return {
      site: null,
      sections: null,
      isPanelOpen: false,
      text: "",
      isTextSelected:false
    };
  },
  methods: {
    addSection(idx = 0, sectionName) {
      sectionService.getSectionByName(sectionName).then(section => {
        this.site.sections.splice(idx, 0, section);
      });
    },
    editSelectedText(data) {
      if (data.toString().length=== 0) return this.isTextSelected = false
      this.isTextSelected = true
      this.text = data;
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
    ControlButtons,
    TextEditButtons
  }
};
</script>

<style lang="scss" scoped>
.add-section {
  border: 1px dashed black;
}
.edit-buttons {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 45%;
  right: 5%;
  transform: scale(1.5);
  z-index: 5;
}
</style>

