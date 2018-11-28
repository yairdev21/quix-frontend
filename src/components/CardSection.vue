<template>
  <div class="card-container">
    <div
      class="card"
      style="width: 18rem;"
      @mouseover="imgHover = true"
      @mouseout="imgHover = false"
    >
      <img
        class="card-img-top"
        src="http://res.cloudinary.com/shuvy/image/upload/v1533415097/yduj9uttcwn3ahowbp36.png"
        alt="Card image cap"
      >
      <div class="card-body">
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>

      <div class="website-menu" v-show="imgHover === true">
        <i class="far fa-eye"></i>
        <i class="far fa-edit"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgHover: false
    }
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.card {
  transition: 0.4s;
  background: ghostwhite;
}

.card:hover {
  transition: 0.4s;
  cursor: pointer;
  opacity: 0.4;
}
.card:hover > .website-menu:hover {
  opacity: 2;
}
.website-menu {
  bottom: 0;
  width: 100%;
  height: 5vh;
  background: gray;
  position: absolute;
}

.far {
    display: inline-block;
    margin-left: 50px;
}
</style>
