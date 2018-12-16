<template>
  <div>
    <b-modal
      id="modal-center"
      ref="modal"
      :title="title"
      :ok-title="okTitle"
      ok-variant="success"
      :cancel-title="cancelTitle"
      @ok="handleOk"
      @shown="clearName"
    >
      <form v-if="showNameInput" @submit.stop.prevent="handleSubmit">
        <b-form-input type="text" placeholder="Enter site name" v-model="name"></b-form-input>
      </form>
      <transition name="fade">
        <div v-if="!showNameInput">
          <p>
            Your Link is:
            <a @click="openSite">{{site.url}}</a>
          </p>
          <p>
            <social-share :url="site.url"></social-share>
          </p>
        </div>
      </transition>
    </b-modal>
  </div>
</template>

<script>
import SocialShare from "@/components/SocialShare.vue";

export default {
  props: ["site"],
  data() {
    return {
      name: "",
      showNameInput: true,
      title: "Give your site a name",
      okTitle: "Publish",
      cancelTitle: "Cancel",
    };
  },
  methods: {
    clearName() {
      this.name = "";
    },
    handleOk(evt) {
      evt.preventDefault();
        if (!this.showNameInput) return this.$refs.modal.hide()
      if (!this.name) {
        alert("Please enter site name");
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
      this.site.url =
        window.location.protocol + "//" + window.location.host + routeData.href;
      this.showNameInput = false;
      this.cancelTitle = "Go back";
      this.title = "Share Your Site";
      this.okTitle = "Got it";
    },
    openSite() {
      window.open(this.site.url, "_blank");
    }
  },
  mounted() {
    if (!this.site.url) {
      this.title = "Give your site a name";
      this.showNameInput = true;
      this.okTitle = "Publish";
      this.cancelTitle = "Cancel";
      this.okDisabled = false;
      this.okVariant = "primary";
    }
  },
  components: {
    SocialShare
  }
};
</script>

<style lang="scss" scoped>
.modal-content{
  font-family: exo !important
}
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

