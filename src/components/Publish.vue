<template>
  <div>
    <b-modal
      id="modalPrevent"
      ref="modal"
      title="Give your site a name"
      ok-title="Go Publish"
      @ok="handleOk"
      @shown="clearName"
    >
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text" placeholder="Enter site name" v-model="name"></b-form-input>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["site"],
  data() {
    return {
      name: "",
      names: []
    };
  },
  methods: {
    clearName() {
      this.name = "";
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault();
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
          this.clearName();
          this.$refs.modal.hide();
          this.$emit('publish')
        })
        .catch(err => {
          alert("can't save your site!");
          console.log(err);
          this.clearName();
          this.$refs.modal.hide();
        });
    }
  },
};
</script>
