<template>
  <div class="container" contenteditable="">
    <ul class="accordion">
      <li class="tab">
        <div class="social youtube">
          <a href="https://www.youtube.com/channel/UCuy0OxF9jhdk2avpu8q4QLg" target="_blank">Youtube</a>
        </div>
        <div class="content">
          <h1>YouTube</h1>
          <p>Stay tuned for new videos!</p>
        </div>
      </li>
      <li class="tab">
        <div class="social facebook">
          <a href="https://www.facebook.com/bebarefoot" target="_blank">Facebook</a>
        </div>
        <div class="content">
          <h1>Facebook</h1>
          <p>Be our friends!</p>
        </div>
      </li>
      <li class="tab">
        <div class="social instegram">
          <a href="https://www.instagram.com/barefootband/" target="_blank">Instegram</a>
        </div>
        <div class="content">
          <h1>Instegram</h1>
          <p>Get a look behind the scenes</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "social"
};
</script>

<style>
.container {
  margin: 0 0 0 36%;
  width: 75%;
}

header h1 {
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
}

.accordion {
  left: 0;
  align-content: center;
  background: transparent;
  width: 100%;
  min-width: 360px;
  display: block;
  list-style-type: none;
  overflow: hidden;
  height: 180px;
  font-size: 0;
}

.tab {
  display: inline-block;
  background-color: #444;
  border-right: #333 1px solid;
  width: 80px;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin: 0;
  transition: all 0.5s ease-in-out 0.1s;
}

.tab:hover {
  width: 450px;
}

.tab:hover .social a:before {
  margin-left: -100px;
}

.tab:hover .social a:after {
  margin-left: -5px;
}

.tab .content {
  background: #fff;
  width: 360px;
  height: 200px;
  margin-left: 80px;
  padding: 50px 0 0 15px;
  position: relative;
}

.tab .content h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.tab .content p {
  font-size: 0.85rem;
  line-height: 1.4rem;
  padding-right: 30px;
}

.social a:after,
.social a:before {
  transition: all 0.4s ease-in-out 0.1s;
  width: 80px;
  height: 200px;
  position: absolute;
  text-indent: 0;
  padding-top: 90px;
  padding-left: 25px;
  display: block;
  font: normal 30px Genericons;
  color: #fff;
}

.social a:after {
  font-size: 48px;
  padding-left: 20px;
  padding-top: 80px;
  margin-left: 85px;
}

.youtube a:before,
.youtube a:after {
  content: "\f213";
}
.youtube a:after {
  background-color: #ff0000;
}

.facebook a:before,
.facebook a:after {
  content: "\f204";
}
.facebook a:after {
  background-color: #3b5998;
}

.instegram a:before,
.instegram a:after {
  content: "\f215";
}
.instegram a:after {
  background-color: #6dc993;
}
</style>
