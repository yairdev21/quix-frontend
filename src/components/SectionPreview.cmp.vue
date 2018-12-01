<template>
  <section class="section-item" :style="style">
    <text-edit-buttons :text="text"></text-edit-buttons>
    <b-row>
      <b-col v-for="col in cols" cols="12" :sm="section.data.sm" :key="col._id">
        <col-preview @selectedText="emitSelected" :col="col"></col-preview>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import ColPreview from "@/components/ColPreview.cmp.vue";
import TextEditButtons from "@/components/TextEditButtons.vue";

export default {
  props: ["section", "idx"],
  data() {
    return { text: "" };
  },
  methods: {
    emitSelected(data) {
      this.text = data;
    }
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
    ColPreview,
    TextEditButtons
  }
};
</script>

<style>
</style>
