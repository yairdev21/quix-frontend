<template>
  <section class="hero-article section-item" :style="{style}">
    <h1 class="text-center" :v-if="section.title">{{section.title}}</h1>
    <b-row>
      <b-col contenteditable="true" v-for="col in cols" cols="12" :sm="section.data.sm" :key="col._id">
        <col-preview :col="col"></col-preview>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import ColPreview from "@/components/ColPreview.cmp.vue";

export default {
  props: ["section", "idx"],
  data() {
    return {};
  },
  
  computed: {
    cols() {
      return this.section.elements;
    },
    style() {
      return this.section.style || null;
    }
  },
  components: {
    ColPreview
  }
};
</script>

<style>
</style>
