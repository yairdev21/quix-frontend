  <template>
  <div class="section-list">
    <nav-bar :sections="sections" v-if="isPanelOpen" @addSection="addSection"></nav-bar>
    <text-edit-buttons @openLinkModal="showModal" v-show="isTextSelected" :text="text"></text-edit-buttons>
    <create-link-modal v-show="isModalVisible" @closeModal="closeModal"></create-link-modal>
    <div v-if="sections">
      <draggable
        :move="checkMove"
        :options="{group:{name:'sections',  pull:false, animation: 200}}"
        v-model="sections"
        @start="drag=true"
        @end="drag=false"
      >
        <div class="section-items" v-for="(section) in sections" :key="section._id">
          <section-preview
            @colorChangeSectionId="changeSectionColor"
            @imgChangeSectionId="changeSectionImg"
            :showModal="showModal"
            @selectedText="editSelectedText"
            @deleteSection="showAlert"
            :section="section"
            :isEditMode="isEditMode"
          ></section-preview>
        </div>
      </draggable>
    </div>
    <section v-else class="add-section section-item">
      <h1 class="text-center">Drag & Drop New Section Here</h1>
    </section>
    <control-buttons
      class="control-buttons"
      :isEditMode="isEditMode"
      @preview="preview"
      @save="save"
      @publish="publish"
      @showPanel="isPanelOpen=!isPanelOpen"
    ></control-buttons>
  </div>
</template>

  <script>
import NavBar from "@/components/NavBar.vue";
import SectionPreview from "@/components/SectionPreview.cmp.vue";
import ControlButtons from "@/components/ControlButtons.vue";
import draggable from "vuedraggable";
import sectionService from "../services/section-service.js";
import TextEditButtons from "@/components/TextEditButtons.vue";
import createLinkModal from "@/components/textEdit/createLinkModal.vue";
import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {
      site: null,
      sections: null,
      sectionAdd: null,
      isPanelOpen: false,
      text: "",
      isTextSelected: false,
      isModalVisible: false,
      sectionId: "",
      isEditMode: null,
      index:null
    };
  },
  methods: {
    checkMove(evt) {
      console.log('ONNNNNN');
      
    //   let fromSection = evt.draggedContext.index
    //   let toSection =evt.relatedContext.index
    //   let Site= this.site.sections
    // [Site[fromSection], Site[toSection]] = [Site[toSection], Site[fromSection]]
    //   console.log(Site);
      
    },
    addSection(idx, sectionName) {
      sectionService.getSectionByName(sectionName).then(section => {
        this.site.sections.splice(idx, 0, section);
      });
    },
    editSelectedText(data) {
      if (data.toString().length === 0) return (this.isTextSelected = false);
      this.isTextSelected = true;
      this.text = data;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal(link) {
      EventBus.$emit("link-for-edit", link);
      this.isModalVisible = false;
    },
    showAlert(sectionId) {
      this.$swal({
        title: "Delete section?",
        text: "It will be gone FOREVER!",
        icon: "warning",
        showCancelButton: true,
        buttons: ["No, cancel it!", "Yes, I am sure!"],
        dangerMode: true
      }).then(isConfirm => {
        if (isConfirm.value) {
          let section = this.getSectionById(sectionId);
          let Idx = this.site.sections.indexOf(...section);
          this.site.sections.splice(Idx, 1);
        } else return;
      });
    },
    changeSectionColor(sectionId) {
      this.sectionId = sectionId;
    },
    changeSectionImg(url, sectionId) {
       this.sectionId = sectionId;
    },
    getSectionById(sectionId) {
      return this.site.sections.filter(section => {
        return section._id === sectionId;
      });
    },
    save() {
      let site = this.site;
      this.$store
        .dispatch({ type: "saveSite", site })
        .then(() => this.$swal("Saved!"));
    },
    preview() {
      let siteId = this.$route.params.siteId;
      this.$router.push(`/preview/${siteId}`);
    },
    publish() {
      const url =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
      this.$swal({
        title: "Got It!",
        html: `<span>Your Website link is:  <a href='${url}'>${url}</a></span>`
      });
    }
  },
  created() {
    EventBus.$on("publish", () => this.publish());
    this.$store.commit("setEditMode");
    this.isEditMode = this.$store.getters.getMode;
    let siteId = this.$route.params.siteId;
    this.$store.dispatch({ type: "getSiteById", siteId }).then(res => {
      this.site = res;
      this.sections = res.sections;
    });
  },
  mounted() {
    EventBus.$on("changeColor", color => {
      let section = this.getSectionById(this.sectionId);
      return (section[0].style.background = color);
    });
    EventBus.$on("changeBgImg", url => {
      let section = this.getSectionById(this.sectionId);
      console.log(section);
      return (section[0].style['background-image'] = `url(${url})`);
    });
  },
  components: {
    SectionPreview,
    NavBar,
    draggable,
    ControlButtons,
    TextEditButtons,
    createLinkModal
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

