<template>
  <section>
    <div class="card-container">
      <sites-template-preview :site="site"  v-for="site of sites" :key="site.id"></sites-template-preview>
    </div>
  </section>
</template>

<script>
import SitesTemplatePreview from "@/components/SitesTemplatePreview.vue";
export default {
  data() {
    return {
      sites: null
    };
  },

  created() {
    this.$store.dispatch("getSites").then(res => {
      this.sites = res;
    });
  },
  components: {
    SitesTemplatePreview
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
