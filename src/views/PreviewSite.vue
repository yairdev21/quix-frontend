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
    <control-buttons
      v-if="!isPublishMode"
      @edit="edit"
      @publish="publish"
      :isEditMode="isEditMode	"
    ></control-buttons>
  </div>
</template>

<script>
import SectionPreview from "@/components/SectionPreview.cmp.vue";
import ControlButtons from "@/components/ControlButtons.vue";
import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {
      site: null,
      sections: null,
      isEditMode: null,
      isPublishMode: null
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
    publish() {
      const user = this.site.user || "templates";
      const url = `${window.location.protocol}//${
        window.location.host
      }/${user}/${this.site._id}`;
      this.$swal({
        title: "Got It!",
        html: `<span>Your Website link is:  <a href='${url}' target="_blank">${url}</a></span>`

      });
    }
  },
  created() {
    this.$store.commit("setPreviewMode");
    this.isEditMode = this.$store.getters.getMode;
    let siteId = this.$route.params.siteId;
    let user = this.$route.params.user;
    this.isPublishMode = user ? true : false;
    this.$store.dispatch({ type: "getSiteById", siteId }).then(res => {
      this.site = res;
      this.sections = res.sections;
    });
  },
  components: {
    SectionPreview,
    ControlButtons
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

