<template>
  <div contenteditable="false" class="card" style="width: 18rem">
    <img class="card-img-top" :src="site.thumb" alt="Card image cap">
    <div v-if="index===0" class="website-menu" @click="editSite(site)"></div>
    <div v-else class="website-menu">
      <i class="far fa-eye" @click="previewSite(site)"></i>
      <i class="far fa-edit" @click="editSite(site)"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["site", "index"],
  data() {
    return { imgHover: false };
  },
  methods: {
    previewSite(site) {
      this.$router.push(`/preview/${site._id}`);
    },
    editSite(site) {
      this.$router.push(`/edit/${site._id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 3rem;
  min-width: 20%;
  max-width: 100%;
  transition: 0.4s;
  background: ghostwhite;
}

.card:hover:first-child {
  transition: 0.4s;
  cursor: pointer;
  opacity: 1 !important;
  transform: scale(1.01);
}

.card:hover > .card-img-top {
  transition: 0.4s;
  cursor: pointer;
  opacity: 0.4;
  transform: scale(1.01);
}

.card:hover > .website-menu:hover {
  opacity: 1;
  transition: 0.4s;
}
.website-menu {
  position: absolute;
  opacity: 0;
  transition: 0.4s;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.far {
  bottom: 0;
  display: block;
  margin: 50% 60px;
  transform: scale(3.5);
  float: left;
}
.far:last-child {
  float: right;
}

.far:hover {
  transform: scale(4);
  color: green;
  cursor: pointer;
}

.card-img-top {
  transition: 0.5s;
}
</style>
