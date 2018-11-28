<template>
  <div class="card-container">
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="http://res.cloudinary.com/shuvy/image/upload/v1533415097/yduj9uttcwn3ahowbp36.png"
        alt="Card image cap"
      >
      <div class="website-menu">
        <i class="far fa-eye" @click="previewSite"></i>
        <i class="far fa-edit" @click="editSite"></i>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="http://res.cloudinary.com/shuvy/image/upload/v1533400161/vmb1keecmv2t2qdhqet2.png"
        alt="Card image cap"
      >
      <div class="website-menu">
        <i class="far fa-eye" @click="previewSite"></i>
        <i class="far fa-edit" @click="editSite"></i>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="http://res.cloudinary.com/shuvy/image/upload/v1534250831/xi9cvczp13ot7ockb6as.png"
        alt="Card image cap"
      >
      <div class="website-menu">
        <i class="far fa-eye" @click="previewSite"></i>
        <i class="far fa-edit" @click="editSite"></i>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="http://res.cloudinary.com/shuvy/image/upload/v1533758331/n7x1bsmmdxqiv8uscmzc.png"
        alt="Card image cap"
      >
      <div class="website-menu">
        <i class="far fa-eye" @click="previewSite"></i>
        <i class="far fa-edit" @click="editSite"></i>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="http://res.cloudinary.com/shuvy/image/upload/v1533415097/yduj9uttcwn3ahowbp36.png"
        alt="Card image cap"
      >
      <div class="website-menu">
        <i class="far fa-eye" @click="previewSite"></i>
        <i class="far fa-edit" @click="editSite"></i>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="http://res.cloudinary.com/shuvy/image/upload/v1533415097/yduj9uttcwn3ahowbp36.png"
        alt="Card image cap"
      >
      <div class="website-menu">
        <i class="far fa-eye" @click="previewSite"></i>
        <i class="far fa-edit" @click="editSite"></i>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="http://res.cloudinary.com/shuvy/image/upload/v1533415097/yduj9uttcwn3ahowbp36.png"
        alt="Card image cap"
      >
      <div class="website-menu">
        <i class="far fa-eye" @click="previewSite"></i>
        <i class="far fa-edit" @click="editSite"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgHover: false
    };
  },
  methods: {
    previewSite() {},
    editSite() {}
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  z-index: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.card {
  margin: 3rem;
  min-width: 20%;
  max-width: 100%;
  transition: 0.4s;
  background: ghostwhite;
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
  margin: 50% 20px;
  transform: scale(1.8);
  float: left;
}
.far:last-child {
  float: right;
}

.far:hover {
  transform: scale(2.01);
  color: green;
  cursor: pointer;
}
</style>
