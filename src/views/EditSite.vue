  <template>
  <div class="section-list" @keyup.esc="isTextSelected=false" @click="checkData">
    <sidebar @addSection="addSection" :sections="sections"></sidebar>
    <text-edit-buttons
      @openLinkModal="showModal"
      v-show="isTextSelected"
      :text="text"
      :section="textEditSection"
      :editedParagraph="editedParagraph"
    ></text-edit-buttons>
    <main>
      <create-link-modal v-show="isModalVisible" @closeModal="closeModal"></create-link-modal>
      <div v-if="sections">
        <div class="section-items" v-for="(section,idx) in sections" :key="section._id">
          <drop @drop="handleDrop(arguments[0], idx)">
            <drag :draggable="isDraggable" :transfer-data="{method: 'sort', data: idx}">
              <section-preview
                @isDraggable="isDraggable=true"
                @notDraggable="isDraggable=false"
                @emitHandleDrop="handleDrop"
                @colorChangeSectionId="changeSectionColor"
                @imgChangeSectionId="changeSectionImg"
                :showModal="showModal"
                @selectedText="editSelectedText"
                @deleteSection="deleteSection"
                @deleteElement="deleteElement"
                :section="section"
                :isEditMode="isEditMode"
                :sectionIdx="idx"
              ></section-preview>
            </drag>
          </drop>
        </div>
      </div>

      <control-buttons :isEditMode="isEditMode" @preview="preview" @save="save" @publish="publish"></control-buttons>
    </main>
  </div>
</template>

  <script>
// v-show="isTextSelected"
import Sidebar from "@/components/Sidebar.vue";
import SectionPreview from "@/components/SectionPreview.cmp.vue";
import ControlButtons from "@/components/ControlButtons.vue";
import TextEditButtons from "@/components/TextEditButtons.vue";
import sectionService from "../services/section-service.js";
import createLinkModal from "@/components/textEdit/createLinkModal.vue";
import { EventBus } from "@/event-bus.js";
import { SET_IS_NEW } from "../modules/site-module.js";

export default {
  data() {
    return {
      site: null,
      sections: null,
      isDraggable: false,
      isPanelOpen: false,
      text: "",
      isTextSelected: false,
      isModalVisible: false,
      sectionId: "",
      isEditMode: null,
      editedParagraph: null,
      textEditSection: null,
      currPos: null
    };
  },
  methods: {
    handleDrop(dragElement, idx) {
      this.isDraggable = false;
      if (dragElement.method === "addSection")
        return this.addSection(dragElement.data, idx);
      if (dragElement.method === "sort")
        return this.sortSections(dragElement.data, idx);
      if (dragElement.method === "addElement")
        return this.addElement(dragElement.data, idx);
    },
    sortSections(dragedIdx, dropedIdx) {
      if (dragedIdx < dropedIdx) {
        this.site.sections.splice(
          dropedIdx + 1,
          0,
          this.site.sections[dragedIdx]
        );
        this.site.sections.splice(dragedIdx, 1);
      } else if (dragedIdx > dropedIdx) {
        this.site.sections.splice(dropedIdx, 0, this.site.sections[dragedIdx]);
        this.site.sections.splice(dragedIdx + 1, 1);
      }
    },
    addSection(sectionName, idx) {
      sectionService.getSectionByName(sectionName).then(section => {
        if (idx === -1) this.site.sections.splice(0, 1, section);
        else this.site.sections.splice(idx, 0, section);
      });
    },
    addElement(elementName, idx) {
      sectionService.getSectionByName(elementName).then(element => {
        switch (this.site.sections[idx].data.sm) {
          case "12":
            this.site.sections[idx].data.sm = "6";
            break;
          case "6":
            this.site.sections[idx].data.sm = "4";
            break;
          case "4":
            this.isEditMode = false;
            this.$swal(
              "Too many elements in one section. Please drop the element in another section!"
            );
            this.isEditMode = true;
            break;
        }
        this.site.sections[idx].elements.push(element);
      });
    },
    editSelectedText(data, id) {
      this.textEditSection = this.getSectionById(...id);
      if (!data) return (this.isTextSelected = false);
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
    deleteElement(colIdx, sectionId) {
      let section = this.getSectionById(sectionId);
      let sectionIdx = this.site.sections.indexOf(...section);
      this.isEditMode = false;
      this.$swal({
        title: "Delete Element?",
        text: "You can always add another one later!",
        icon: "warning",
        showCancelButton: true,
        buttons: ["No, Dont!", "Yes, It's all good"],
        dangerMode: true
      }).then(isConfirm => {
        if (isConfirm.value) {
          this.site.sections[sectionIdx].elements.splice(colIdx, 1);
          switch (this.site.sections[sectionIdx].data.sm) {
            case "12":
              return;
            case "6":
              this.site.sections[sectionIdx].data.sm = "12";
              break;
            case "4":
              this.site.sections[sectionIdx].data.sm = "6";
          }
          this.isEditMode = true;
        } else return (this.isEditMode = true);
      });
    },
    deleteSection(sectionId) {
      this.isEditMode = false;
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
          this.isEditMode = true;
        } else return (this.isEditMode = true);
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
      const user = this.$store.getters.getUser;
      if (!user) {
        this.$swal("Please login first");
        this.$router.push(`/login`);
        return;
      }

      const site = { ...this.site, user: user.id };
      this.$store.dispatch({ type: "saveSite", site }).then(() => {
        this.isEditMode = false;
        this.$swal("Saved!");
        this.isEditMode = true;
      });
    },
    preview() {
      let siteId = this.$route.params.siteId;
      this.$router.push(`/preview/${siteId}`);
    },
    publish() {
      const user = this.site.user || "templates";
      const url = `${window.location.protocol}//${
        window.location.host
      }/sites/${user}/${this.site._id}`;
      this.isEditMode = false;
      this.$swal({
        title: "Got It!",
        html: `<span>Your Website link is:  <a href='${url}'>${url}</a></span>`
      });
      this.isEditMode = true;
    },
    checkData() {
      if (this.currPos === this.text) return (this.isTextSelected = false);
      this.currPos = this.text;
    }
  },
  created() {
    document.designMode = this.checkEditMode ? "on" : "off";
    EventBus.$on("publish", () => this.publish());
    this.$store.commit("setEditMode");
    this.isEditMode = this.$store.getters.getMode;
    let siteId = this.$route.params.siteId;
    this.$store.dispatch({ type: "getSiteById", siteId }).then(res => {
      this.site = res;
      this.sections = res.sections;

      if (!!this.site.user) {
        this.$store.dispatch({ type: SET_IS_NEW, isNewSite: false });
      } else {
        this.$store.dispatch({ type: SET_IS_NEW, isNewSite: true });
      }
    });
  },
  mounted() {
    EventBus.$on("changeColor", color => {
      let section = this.getSectionById(this.sectionId);
      return (section[0].style.background = color);
    });

    EventBus.$on("changeBgImg", url => {
      let section = this.getSectionById(this.sectionId);
      section[0].style["background-image"] = `url(${url}`;
      section[0].style["background-size"] = "cover";
      return section[0].style;
    });
    EventBus.$on("updateLocation", (Place, sectionIdx) => {
      let El = this.site.sections[sectionIdx].elements.filter(
        element => element.name === "map"
      );
      El[0].data.place = Place;
      let site = this.site
      this.$store.dispatch({ type: "saveSite", site });
    });

    EventBus.$on("closeEditorButtons", () => (this.isTextSelected = false));
  },
  components: {
    SectionPreview,
    Sidebar,
    ControlButtons,
    createLinkModal,
    TextEditButtons
  }
};
</script>

<style lang="scss" scoped>
.section-list {
  background: whitesmoke;
}
main {
  overflow-y: hidden;
}

.add-section {
  border: 1px dashed black;
}

.section-items {
  float: right;
  width: 78.5vw;
}
</style>

