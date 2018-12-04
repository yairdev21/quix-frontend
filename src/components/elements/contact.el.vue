<template>
  <div>
    <div id="contact-form" class="contact-form">
      <h1 class="contact-form_title">Contact Us</h1>
      <div class="separator"></div>

      <div v-if="isSending" class="loading">Sending...</div>

      <form class="form" type="submit" onSubmit="onSubmit">
        <input
          placeholder="Name"
          type="text"
          autocomplete="off"
        >
        <input
          placeholder="E-mail"
          type="email"
          autocomplete="off"
        >
        <textarea name="message" rows="4" placeholder="Message"></textarea>
        <button class="button" type="submit" >Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ID } from "../../services/utils.js";

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    isEditMode: {
      type: Boolean
    }
  },

  data() {
    return {
      isSending:false,
      id: ID(),
      content: this.data.text,
    };
  },

  created() {
    document.designMode = this.checkEditMode;
  },

  methods: {
    getContent() {
      return this.content;
    },
    saveText(ev) {
      this.content = ev.target.innerText;
    },
    onSubmit(){
      console.log('sent');
      return
      // this.$swal('Email Sent Biatch')
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  font-family: 16px;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 28px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #93d667;
  border: solid 1px #da552f;
  color: white; 
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s
}

.contact-form .button:hover {
  background: #ea532a;
  border: solid 1px #ea532a;
  transition: 0.3s

}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}
</style>
