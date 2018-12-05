<template>
  <div class="user-login">
    <main-header></main-header>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <div class="panel panel-login">
            <div class="panel-heading">
              <hr>
            </div>
                <div class="col">
                  <form
                    enctype="multipart/form-data"
                    id="login-form"
                    role="form"
                    style="display: block;"
                    @submit.prevent="handleSubmit"
                  >
                  <p v-show="errors.items.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                      <li v-for="(error, idx) in errors.items" :key="idx">{{ error.msg }}</li>
                    </ul>
                  </p>

                    <div class="form-group">
                      <input
                        type="email"
                        v-validate="{ required: true, email: true }" 
                        data-vv-as="email"
                        v-model="userInfo.email"
                        name="email"
                        key="email-input"
                        tabindex="1"
                        :class="emailClass"
                        placeholder="Your Email"
                      >
                    </div>

                    <div class="form-group" v-if="isNewRagistrater">
                      <input
                        v-validate="{ required: true, min: 5 }" 
                        data-vv-as="user name"
                        key="username-input"
                        type="text"
                        name="username"
                        v-model="userInfo.userName"
                        tabindex="2"
                        :class="usernameClass"
                        placeholder="User Name"
                      >
                    </div>

                    <div class="form-group" >
                      <input
                        type="password"
                        data-vv-as="password"
                        name="password"
                        v-validate="{ required: true, min: 6 }" 
                        v-model="userInfo.password"
                        tabindex="3"
                        :class="passwordClass"
                        placeholder="Password"
                      >
                    </div>
                    <div class="form-group" v-if="isNewRagistrater">
                      <input
                        type="password"
                        v-validate="{ is: userInfo.password }"
                        data-vv-as="password"
                        name="confirm-password"
                        id="confirm-password"
                        tabindex="4"
                        :class="confirmClass"
                        placeholder="Confirm Password"
                      >
                    </div>

                    <div class="custom-file form-group" v-if="isNewRagistrater">
                      <input 
                          type="file" 
                          :class="fileInputClass" 
                          ref="fileInput"
                          v-validate="'mimes:image/*'" 
                          name="image"
                          data-vv-as="image">

                      <label class="custom-file-label" for="validatedCustomFile">{{imgText}}</label>
                    </div>

                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-6 col-sm-offset-3">
                          <input
                            type="submit"
                            name="login-submit"
                            tabindex="5"
                            class="form-control btn btn-login"
                            :value="(isNewRagistrater) ? 'Register' : 'Log In'"
                          >
                        </div>

                        <div class="col-sm-6 col-sm-offset-3">
                          <input
                            @click="() => isNewRagistrater = !isNewRagistrater"
                            type="button"
                            tabindex="6"
                            class="form-control btn btn-login"
                            :value="(isNewRagistrater) ? 'Existing User?' : 'New User?'"
                          >
                        </div>
                      </div>

                      <Spinner v-show="isLoading" message="Creating new account..." />

                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="text-center">
                            <a
                              href=""
                              tabindex="5"
                              class="forgot-password"
                            >Forgot Password?</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uploadImg from '@/services/cloudinary.service.js';
import {logIn} from '@/services/api.service.js';
import MainHeader from "@/components/MainHeader.vue";
import Spinner from 'vue-simple-spinner';
import { LOAD_USER } from '../modules/user-module';

export default {
  components: {
    MainHeader,
    Spinner
  },

  data() {
    return {
      isNewRagistrater: false,
      isLoading: false,
      userInfo: {
        userName: '',
        password: '',
        email: ''
      }
    }
  },

  methods: {
      async handleSubmit() {
        if(this.errors.items.length > 0) return;
        
        if( this.isNewRagistrater ) {
          this.createUser();
        } else {
            try {
              const { email, password } = this.userInfo;
              const data  = await logIn({ email, password });
              debugger
              const { userName, id, image } = data;

              this.$store.commit({ type: LOAD_USER, user: { userName, email, id, image } });
              
              this.$awn.success(`Welcome ${userName}`);
              this.$router.history.push('/');

          } catch({ response }) {
            console.log(response);
            
            this.$awn.warning( response.data.message );
          }
        }
    },

    async createUser() {
      console.log('in', this.$refs.fileInput.files.length > 0);
      
      const { email, userName, password } = this.userInfo;
      const user = { email, userName, password };
      if(this.$refs.fileInput.files.length > 0) {
        this.isLoading = true;
        const { url } = await uploadImg(this.$refs.fileInput);
        this.isLoading = false;
        user.image = url;
      }
      const { image, id } = await signUp(user);
      
      this.$store.commit({ type: LOAD_USER, user: { userName, email, id, image } });
      this.$awn.success(`Welcome ${userName}`);
      this.$router.history.push('/');
    }
  },

  computed: {
    usernameClass() {
      return ( this.userInfo.userName === '') ? 'form-control' : (this.errors.has('username')) ? 'form-control is-invalid' : 'form-control is-valid';
    },

    emailClass() {
      return ( this.userInfo.email === '') ? 'form-control' : (this.errors.has('email')) ? 'form-control is-invalid' : 'form-control is-valid';
    },

    confirmClass() {
      return ( this.userInfo.password === '') ? 'form-control' : (this.errors.has('confirm-password')) ? 'form-control is-invalid' : 'form-control is-valid';
    },

    passwordClass() {
      return ( this.userInfo.password === '') ? 'form-control' : (this.errors.has('password')) ? 'form-control is-invalid' : 'form-control is-valid';      
    },

    fileInputClass() {
      return ( this.userInfo.password === '') ? 'custom-file-input' : (this.errors.has('image')) ? 'custom-file-input is-invalid' : 'custom-file-input is-valid';      
    },

    imgText() {
      if(!this.$refs.fileInput) return 'Upload Image...';

      return (this.$refs.fileInput.files.length > 0) ? 'file selected' : 'upload image...';
    }
  }
};
</script>


<style <style lang="scss">
@import '~vue-awesome-notifications/dist/styles/style.scss';
.custom-file {
  margin-bottom: 10px;
}
.container {
  padding-top: 150px;
}
.panel-login {
  border-color: #ccc;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
}
.panel-login > .panel-heading {
  color: #00415d;
  background-color: #fff;
  border-color: #fff;
  text-align: center;
}
.panel-login > .panel-heading a {
  text-decoration: none;
  color: #666;
  font-weight: bold;
  font-size: 15px;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  transition: all 0.1s linear;
}
.panel-login > .panel-heading a.active {
  color: #029f5b;
  font-size: 18px;
}
.panel-login > .panel-heading hr {
  margin-top: 10px;
  margin-bottom: 0px;
  clear: both;
  border: 0;
  height: 1px;
  background-image: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0)
  );
  background-image: -moz-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0)
  );
  background-image: -ms-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0)
  );
  background-image: -o-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0)
  );
}
.panel-login input[type="text"],
.panel-login input[type="email"],
.panel-login input[type="password"] {
  height: 45px;
  border: 1px solid #ddd;
  font-size: 16px;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  transition: all 0.1s linear;
}
.panel-login input:hover,
.panel-login input:focus {
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border-color: #ccc;
}
.btn-login {
  background-color: #59b2e0;
  outline: none;
  color: #fff;
  font-size: 14px;
  height: auto;
  font-weight: normal;
  padding: 14px 0;
  text-transform: uppercase;
  border-color: #59b2e6;
}
.btn-login:hover,
.btn-login:focus {
  color: #fff;
  background-color: #53a3cd;
  border-color: #53a3cd;
}
.forgot-password {
  text-decoration: underline;
  color: #888;
}
.forgot-password:hover,
.forgot-password:focus {
  text-decoration: underline;
  color: #666;
}

.btn-register {
  background-color: #1cb94e;
  outline: none;
  color: #fff;
  font-size: 14px;
  height: auto;
  font-weight: normal;
  padding: 14px 0;
  text-transform: uppercase;
  border-color: #1cb94a;
}
.btn-register:hover,
.btn-register:focus {
  color: #fff;
  background-color: #1ca347;
  border-color: #1ca347;
}

#login-form {
  margin: 10px 0;
}
.is-invalid {
  border-color: red !important;
}
</style>
