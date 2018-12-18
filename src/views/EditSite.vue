  <template>
  <div
    class="section-list"
    @keyup.esc="isTextSelected=false"
    @click="checkData"
    v-bind:class="{ preview: isEditMode }"
  >
    <sidebar
      :isEditMode="isEditMode"
      @addSection="addSection"
      :sections="sections"
      @edit="edit"
      @share="showShareBtns = !showShareBtns"
      @preview="preview"
      @save="save"
    ></sidebar>
    <publish-modal :site="site"></publish-modal>
    <text-edit-buttons
      @openLinkModal="showModal"
      v-show="isTextSelected"
      :text="text"
      :section="textEditSection"
      :editedParagraph="editedParagraph"
    ></text-edit-buttons>
    <main>
      <create-link-modal v-show="isModalVisible" @closeModal="closeModal"></create-link-modal>
      <div v-if="sections" :class="{sectionsList:isEditMode}">
        <transition-group name="list-complete" tag="p">
          <div
            v-bind:class="{ 'section-items': isEditMode }"
            class="list-complete-item"
            v-for="(section,idx) in sections"
            :key="section._id"
          >
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
        </transition-group>
      </div>
    </main>
  </div>
</template>

  <script>
import Sidebar from "@/components/Sidebar.vue";
import SectionPreview from "@/components/SectionPreview.cmp.vue";
import TextEditButtons from "@/components/TextEditButtons.vue";
import PublishModal from "@/components/Publish.vue";
import sectionService from "../services/section-service.js";
import createLinkModal from "@/components/textEdit/createLinkModal.vue";
import { EventBus } from "@/event-bus.js";
import { SET_IS_NEW } from "../modules/site-module.js";
import { ID } from "../services/utils.js";

export default {
  data() {
    return {
      site: null,
      sections: null,
      url: null,
      isDraggable: false,
      isPanelOpen: false,
      showShareBtns: false,
      text: "",
      isTextSelected: false,
      isModalVisible: false,
      sectionId: "",
      isEditMode: null,
      editedParagraph: null,
      textEditSection: null,
      currPos: null,
      showPublishCmp: false
    };
  },
  methods: {
    edit() {
      this.isEditMode = true;
    },
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
        section._id = ID();
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
            this.$swal({
              title:
                "Too many elements in one section. Please drop the element in another section!",
              confirmButtonColor: "#42b983",
              confirmButtonClass: "button-font",
              cancelButtonClass: "button-font",
              reverseButtons: true
            });
            this.isEditMode = true;
            return;
        }
        this.site.sections[idx].elements.push(element);
      });
    },
    editSelectedText(data, id) {
      // console.log('editSelectedText',data);
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
      this.$swal({
        title: "Delete Element?",
        icon: "warning",
        confirmButtonClass: "button-font",
        cancelButtonClass: "button-font",
        confirmButtonColor: "#42b983",
        reverseButtons: true,
        showCancelButton: true,
        animation: false
      }).then(isConfirm => {
        if (isConfirm.value) {
          this.site.sections[sectionIdx].elements.splice(colIdx, 1);
          switch (this.site.sections[sectionIdx].data.sm) {
            case "12":
              break;
            case "6":
              this.site.sections[sectionIdx].data.sm = "12";
              break;
            case "4":
              this.site.sections[sectionIdx].data.sm = "6";
              break;
          }
        } else return;
      });
    },
    deleteSection(sectionId) {
      this.$swal({
        background: "whitesmoke ",
        title: "Delete section?",
        icon: "warning",
        confirmButtonColor: "#42b983",
        confirmButtonClass: "button-font",
        cancelButtonClass: "button-font",
        reverseButtons: true,
        showCancelButton: true,
        buttons: ["No, cancel it!", "Yes, I am sure!"],
        animation: false
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

    preview() {
      this.isEditMode = false;
    },

    async save() {
      const user = this.$store.getters.getUser;
      if (!user) {
        this.$swal("Please login first");
        this.$router.push(`/login`);
        return;
      }
      const site = { ...this.site, user: user.id };
      const siteId = await this.$store.dispatch({ type: "saveSite", site });
      this.$swal({
        title: "Site Saved!",
        position: "top-right",
        background: "white",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        showCancelButton: false,
        animation: false,
        timer: 1000
      });
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
      console.log("site is:", this.site);

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
    EventBus.$on("updateLocation", (place, sectionIdx) => {
      let El = this.site.sections[sectionIdx].elements.filter(
        element => element.name === "map"
      );
      El[0].data = place;
      let site = this.site;
      this.$store.commit({ type: "saveSite", site });
    });

    EventBus.$on("closeEditorButtons", () => (this.isTextSelected = false));
  },
  components: {
    SectionPreview,
    Sidebar,
    createLinkModal,
    TextEditButtons,
    PublishModal
  }
};
</script>

<style lang="scss" scoped>
.list-complete-item {
  overflow-x: hidden;
  transition: all 0.6s ease-in-out;
  margin: auto 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.section-list {
  background: white;
}
main {
  margin: 0.5rem;
  overflow-y: hidden;
}

.add-section {
  border: 1px dashed black;
}

.section-items {
  padding-left: 1rem;
  float: right;
  width: 78.5vw;
}
.slide-fade-enter-active {
  transition: all 0.8s;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>

