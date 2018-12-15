<template>
  <div>
    <b-modal
      id="modalPrevent"
      ref="modal"
      title="Lets Publish Your Site!"
      :ok-title="okTitle"
      :cancel-title="cancelTitle"
      @ok="handleOk"
      @shown="clearName"
    >
      <form v-if="showNameInput" @submit.stop.prevent="handleSubmit">
        <b-form-input type="text" placeholder="Enter site name" v-model="name"></b-form-input>
      </form>
      <div v-else>
        Your website link is:
        <br>
        <a @click="openSite">{{site.url}}</a>
        <div class="social-share">
            <br>
          <h4>Let everybody know!</h4>
            <br>
          <facebook class="share-item" :url="site.url" scale="3"></facebook>
          <twitter class="share-item" :url="site.url" title="Check My New Website" scale="3"></twitter>
          <linkedin class="share-item" :url="site.url" scale="3"></linkedin>
          <whats-app class="share-item" :url="site.url" title="Hello" scale="3"></whats-app>
          <email class="share-item" :url="site.url" subject="Hello" scale="3"></email>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {
  Facebook,
  Twitter,
  Linkedin,
  WhatsApp,
  Email
} from "vue-socialmedia-share";

export default {
  props: ["site"],
  data() {
    return {
      name: "",
      showNameInput: true,
      okTitle: "Publish!",
      cancelTitle: "Cancel"
    };
  },
  methods: {
    clearName() {
      this.name = "";
    },
    handleOk(evt) {
      evt.preventDefault();
      if (this.okTitle === "Publish!") {
        if (!this.name) {
          alert("Please enter site name");
        } else {
          this.handleSubmit();
        }
      } else if (this.okTitle === "Share!") {
        this.share();
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
      this.okTitle = "Share!";
      this.cancelTitle = "Go back";
    },
    openSite() {
      window.open(this.site.url, "_blank");
    },
    share() {
      // this.$refs.modal.hide();
    }
  },
  created() {
    if (!this.site.url) {
      this.showNameInput = true;
      this.okTitle = "Publish!";
      this.cancelTitle = "Cancel";
    }
  },
  components: { Facebook, Twitter, Linkedin, WhatsApp, Email }
};
</script>

<style lang="scss" scoped>

a {
  border: 1px solid wheat;
  padding: 2px;
}
a:hover {
  cursor: pointer;
  font-weight: 400;

  text-decoration: underline !important;
}
</style>

