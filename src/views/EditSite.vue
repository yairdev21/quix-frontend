  <template>
  <div class="section-list" @keyup.esc="isTextSelected=false">
      <button
        contenteditable="false"
        v-if="isEditMode" 
        class="menu-icon icon open-panel-btn" 
        @click="isPanelOpen=!isPanelOpen"
        title="Add New Element"
        >
      <div v-show="isPanelOpen">
        <i class="fas fa-minus"></i>
      </div>
      <div  v-show="!isPanelOpen">
        <i class="fas fa-plus"></i>
      </div>
    </button>
    <nav-bar   v-if="isPanelOpen" @addSection="addSection" :sections="sections"></nav-bar>
    <text-edit-buttons
      @openLinkModal="showModal"
      v-show="isTextSelected"
      :text="text"
      :section="textEditSection"
      :editedParagraph="editedParagraph"
    ></text-edit-buttons>
    <create-link-modal v-show="isModalVisible" @closeModal="closeModal"></create-link-modal>
    <div v-if="sections">
      <div class="section-items" v-for="(section,idx) in sections" :key="section._id">
        <drop @drop="handleDrop(arguments[0], idx)">
          <drag :transfer-data="{method: 'sort', data: idx}">
            <section-preview
              @colorChangeSectionId="changeSectionColor"
              @imgChangeSectionId="changeSectionImg"
              :showModal="showModal"
              @selectedText="editSelectedText"
              @deleteSection="deleteSection"
              :section="section"
              :isEditMode="isEditMode"
            ></section-preview>
          </drag>
        </drop>
      </div>
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
    
    ></control-buttons>
  </div>
</template>

  <script>
import NavBar from "@/components/NavBar.vue";
import SectionPreview from "@/components/SectionPreview.cmp.vue";
import ControlButtons from "@/components/ControlButtons.vue";
import TextEditButtons from "@/components/TextEditButtons.vue";
import sectionService from "../services/section-service.js";
import createLinkModal from "@/components/textEdit/createLinkModal.vue";
import { EventBus } from "@/event-bus.js";

export default {
  data() {
    return {
      site: null,
      sections: null,
      isPanelOpen: false,
      text: "",
      isTextSelected: false,
      isModalVisible: false,
      sectionId: "",
      isEditMode: null,
      editedParagraph: null,
      textEditSection: null
    };
  },
  methods: {
    handleDrop(dragElement, idx) {
      if (dragElement.method === "add")
        return this.addSection(dragElement.data, idx);
      if (dragElement.method === "sort")
        return this.sortSections(dragElement.data, idx);
    },
    sortSections(dragedIdx, dropedIdx) {
      console.log(dragedIdx, dropedIdx);
      if (dragedIdx < dropedIdx) {
        this.site.sections.splice(
          dropedIdx + 1,
          0,
          this.site.sections[dragedIdx]
        );
        this.site.sections.splice(dragedIdx, 1);
      } else if (dragedIdx > dropedIdx) {
        this.site.sections.splice(
          dropedIdx,
          0,
          this.site.sections[dragedIdx]
        );
        this.site.sections.splice(dragedIdx+1, 1);
      }
    },
    addSection(sectionName, idx) {
      sectionService.getSectionByName(sectionName).then(section => {
        this.site.sections.splice(idx, 0, section);
      console.log( this.site.sections);
        
      });
    },
    editSelectedText(data, id) {
      this.textEditSection = this.getSectionById(...id);
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
    deleteSection(sectionId) {
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
      return (section[0].style["background-image"] = `url(${url})`);
    });
  },
  components: {
    SectionPreview,
    NavBar,
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

.icon {
  color: whitesmoke;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #17a2b8;
  position: relative;
  width: 30px;
  transform: scale(2);
  margin: 30px;
}

.icon:hover {
  border: 1px solid whitesmoke;
  cursor: pointer;
  color: black;
}

.open-panel-btn{
  position: fixed;
  left: 0;
  margin:20px;

}
</style>

