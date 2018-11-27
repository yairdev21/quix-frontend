<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/edit">Build New Site</router-link>|
    </div>
    <section class="main flex align-center flex-column justify-center">
      <div class="container flex align-center flex-column justify-center">
        <h1>Welcome to the #23 best Website Builder!</h1>
        <button class="build-now">
          <router-link to="/edit">Build NOW</router-link>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>

#nav{
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  background: #555;
  color: #f1f1f1;
}

section {
.build-now {
  margin-top: 60px;
  border-radius: 10px;
}

    &.main {
      
        background-image: url('../assets/img/QuiX.jpeg');
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;

        &::before {
            content: "";
            position: absolute;
            width: 50%;
            height: 200%;
            z-index: -1;
        }

        .container {
          padding: 80px;
            width: 800px;
            max-width: 100%;
            margin: 0 auto;

            h1 {
                margin: 0 0 0.5em;
                font-size: 3em;
                font-weight: bold;
                line-height: 1.25;
                text-align: center;
                color: #fff;
                text-shadow: #000 0 0 5px;
            }

            p {
                margin: 0 0 1.5em;
                font-size: 1.75em;
                line-height: 1.5;
                color: #fff;
            }

            button {
                font-size: 1.5em;
                // border-color: #fff;
                color: #fff;
                &:hover {
                  color: black;
                  transform: scale(1.2);
                    background-color: rgba( 0, 0, 0, 0.5);
                }

                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }

    &.all-in-one {
        background-color: #fff;

        > p {
            max-width: 500px;
        }

        p {
            margin: 0 auto 1em;
            padding-bottom: 15px;
            font-size: 1.15em;
            font-weight: 300;
            line-height: 32px;
            color: #888;
        }

        .container {
            width: 1000px;
            max-width: 100%;
            margin: 0 auto;

            h2 {
                margin-top: 0;
                font-size: 1.75em;
                font-weight: bold;
            }

            p {
                margin-bottom: 0;
                font-size: 1.25em;
                font-weight: 300;
            }

        }
    }
}
</style>