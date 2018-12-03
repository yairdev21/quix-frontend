<template>
  <div class="section-list">
    <div v-if="sections">
      <div class="section-items" v-for="(section) in sections" :key="section._id">
        <section-preview :section="section" :isEditMode="isEditMode"></section-preview>
      </div>
    </div>
    <section v-else class="add-section section-item">
      <h1 class="text-center">Drag & Drop New Section Here</h1>
    </section>
    <control-buttons @edit="edit" @publish="publish" :isEditMode="isEditMode	"></control-buttons>
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";
import SectionPreview from "@/components/SectionPreview.cmp.vue";
import ControlButtons from "@/components/ControlButtons.vue";
// import draggable from "vuedraggable";
// import sectionService from "../services/section-service.js";
// import TextEditButtons from "@/components/TextEditButtons.vue";
// import createLinkModal from "@/components/textEdit/createLinkModal.vue";
// import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {
      site: null,
      sections: null,
      isEditMode: null
    };
  },
  methods: {
    edit() {
      let siteId = this.$route.params.siteId;
      this.$router.push(`/edit/${siteId}`);
    },
    save() {
      const site = this.site;
      this.$store
        .dispatch({ type: "saveSite", site })
        .then(() => alert("site saved!"));
    },
    publish() {}
  },
  created() {
    this.$store.commit("setPreviewMode");
    this.isEditMode = this.$store.getters.getMode
    let siteId = this.$route.params.siteId;
    this.$store.dispatch({ type: "getSiteById", siteId }).then(res => {
      this.site = res;
      console.log(this.site);
      this.sections = res.sections;
    });
  },
  components: {
    SectionPreview,
    // NavBar,
    // draggable,
    ControlButtons,
    // TextEditButtons,
    // createLinkModal
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

