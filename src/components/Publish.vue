<template>
  <div>
    <b-modal
      id="modal-center"
      size="lg"
      centered
      ref="modal"
      :title="title"
      :ok-title="okTitle"
      ok-variant="success"
      :cancel-title="cancelTitle"
      @ok="handleOk"
      @shown="clearName"
      header-bg-variant="success"
      header-text-variant="light"
      body-bg-variant="light"
      footer-bg-variant="light"
    >
      <form v-if="showNameInput" @submit.stop.prevent="handleSubmit">
        <b-form-input type="text" ref="textInput" placeholder="Enter site name" v-model="name"></b-form-input>
      </form>
      <transition name="fade">
        <div v-if="!showNameInput">
          <p>
            Your Link is:
            <a @click="openSite">{{url}}</a>
          </p>
          <p>
            <social-share :url="url"></social-share>
          </p>
        </div>
      </transition>
    </b-modal>
  </div>
</template>

<script>
import SocialShare from "@/components/SocialShare.vue";
import { EventBus } from "@/event-bus.js";

export default {
  props: ["site"],
  data() {
    return {
      name: "",
      showNameInput: true,
      title: "Give your site a name",
      okTitle: "Publish",
      cancelTitle: "Cancel",
      url: null
    };
  },
  methods: {
    clearName() {
      this.name = "";
    },
    handleOk(evt) {
      console.log('publish site', this.site);
      
      evt.preventDefault();
      if (!this.showNameInput) return this.$refs.modal.hide();
      if (!this.name) {
        this.$swal("Please enter site name");
      } else {
        this.handleSubmit();
      }
    },
    handleSubmit() {
      this.site.name = this.name;
      const user = this.$store.getters.getUser;
      if (!user) {
        this.$swal("Please login first");
        this.$router.push(`/login`);
        return;
      }
      const site = { ...this.site, user: user.id };
      this.$store
        .dispatch({ type: "saveSite", site })
        .then(() => {
          console.log("saved!");
          this.clearName();
          this.publish();
        })
        .catch(err => {
          alert("can't save your site!");
          console.log(err);
          this.clearName();
          this.$refs.modal.hide();
        });
    },
    publish() {
      const siteName = this.site.name;
      const routeData = this.$router.resolve({ path: `/${siteName}` });
      this.url =
        window.location.protocol + "//" + window.location.host + routeData.href;
      this.showNameInput = false;
      this.cancelTitle = "Go back";
      this.title = "Share Your Site";
      this.okTitle = "Got it";
      this.site.url = this.url;
    },
    openSite() {
      window.open(this.url, "_blank");
    }
  },
  created() {
    EventBus.$on("focusInput", () => {
      this.$refs.textInput.focus();
    });
    if (!this.site.name) {
      this.title = "Give your site a name";
      this.showNameInput = true;
      this.okTitle = "Publish";
      this.cancelTitle = "Cancel";
      this.okDisabled = false;
      this.okVariant = "primary";
    }else {
      this.showNameInput = false;
      publish()
    }
  },
  components: {
    SocialShare
  }
};
</script>

<style lang="scss" scoped>
a {
  color: rgb(0, 0, 206) !important;
  font-weight: bold;
}
a:hover {
  cursor: pointer;
  text-decoration: underline !important;
}

p {
  color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

