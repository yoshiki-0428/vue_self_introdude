<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <div class="md-layout md-alignment-center-center">
        <md-card class="md-layout-item md-size-80 ">
          <md-card-header>
            <div class="md-title">Contact for me with message!</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('yourName')">
                  <label for="first-name">Your Name</label>
                  <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.yourName" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.yourName.required">Your name is required</span>
                  <span class="md-error" v-else-if="!$v.form.yourName.minlength">Invalid first name</span>
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('gender')">
                  <label for="gender">Gender</label>
                  <md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="sending">
                    <md-option value="M">M</md-option>
                    <md-option value="F">F</md-option>
                  </md-select>
                  <span class="md-error">The gender is required</span>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('age')">
                  <label for="age">Age</label>
                  <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                  <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
                </md-field>
              </div>
            </div>

            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
              <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>

            <md-field>
              <label>Message</label>
              <md-textarea v-model="form.message"></md-textarea>
            </md-field>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Send message</md-button>
          </md-card-actions>
        </md-card>
      </div>

      <md-snackbar :md-active.sync="messageSend">Sending is success! Thank you!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'
import firebase from 'firebase'

export default {
  name: 'FormValidation',
  mixins: [validationMixin],
  data: () => ({
    form: {
      yourName: null,
      gender: null,
      age: null,
      email: null,
      message: null
    },
    messageSend: false,
    sending: false,
    userName: null
  }),
  validations: {
    form: {
      yourName: {
        required,
        minLength: minLength(3)
      },
      age: {
        required,
        maxLength: maxLength(3)
      },
      gender: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.yourName = null
      this.form.age = null
      this.form.gender = null
      this.form.email = null
    },
    saveContactMessage () {
      this.sending = true
      console.log(this.form)

      this.userName = `${this.form.yourName}`
      // TODO 重複のためID採番
      firebase.database().ref('contact/' + this.form.yourName).set({
        form: this.form
      })

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.messageSend = true
        this.sending = false
        this.clearForm()
      }, 1500)
    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveContactMessage()
      }
    }
  }
}
</script>

<style scoped>
md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
