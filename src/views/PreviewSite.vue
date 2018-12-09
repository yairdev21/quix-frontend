<template>
  <div class="preview-section-list">
    <div v-if="sections">
      <div class="preview-section-items" v-for="(section) in sections" :key="section._id">
        <section-preview :section="section" :isEditMode="isEditMode"></section-preview>
      </div>
    </div>
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
      const user = this.$store.getters.getUser;
      if (!user) {
        this.$swal("Please login first");
        this.$router.push(`/login`);
        return;
      }
      const site = { ...this.site, user: user.id };
      this.$store.dispatch({ type: "saveSite", site });
    },
    publish() {
      this.save();
      const user = this.site.user || "templates";
      const url = `/sites/${user}/${this.site._id}`;
      this.isEditMode = false;
      this.$swal({
        title: "Site Saved!",
        showCancelButton: true,
        confirmButtonText: "Go To Your Website!",
        dangerMode: true
      }).then(isConfirm => {
        if (isConfirm.value) {
          let routeData = this.$router.resolve({ path: url });
          window.open(routeData.href, "_blank");
          this.isEditMode = true;
        } else return (this.isEditMode = true);
      });
      this.isEditMode = true;
    },

    checkData() {
      if (this.currPos === this.text) return (this.isTextSelected = false);
      this.currPos = this.text;
    }
  },
  created() {
    this.$store.commit("setPreviewMode");
    this.isEditMode = this.$store.getters.getMode;
    this.site =  this.$store.getters.getSite
    // let siteId = this.$route.params.siteId;
    // let user = this.$route.params.user;
    // this.isPublishMode = user ? true : false;
    // this.$store.dispatch({ type: "getSiteById", siteId }).then(res => {
    //   this.site = res;
    //   this.sections = res.sections;
    // });
  },
  components: {
    SectionPreview,
    ControlButtons
  }
};
</script>

<style lang="scss" scoped>
.preview-section-list {
  margin: 0 3rem;
display: block;
}
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

