<template lang="pug">
  div
    form.md-layout(novalidate='', @submit.prevent='validateUser')
      .md-layout.md-alignment-center-center
        md-card.md-layout-item.md-size-80
          md-card-header
            .md-title Contact for me with message!
          |
          md-card-content
            .md-layout.md-gutter
              .md-layout-item.md-small-size-100
                md-field(:class="getValidationClass('yourName')")
                  label(for='first-name') Your Name
                  |
                  md-input#first-name(name='first-name', autocomplete='given-name', v-model='form.yourName', :disabled='sending')
                    span.md-error(v-if='!$v.form.yourName.required') Your name is required
                    |
                    span.md-error(v-else-if='!$v.form.yourName.minlength') Invalid first name
            |
            .md-layout.md-gutter
              .md-layout-item.md-small-size-100
                md-field(:class="getValidationClass('gender')")
                  label(for='gender') Gender
                  |
                  md-select#gender(name='gender', v-model='form.gender', md-dense='', :disabled='sending')
                    md-option(value='M') M
                    |
                    md-option(value='F') F
                  |
                  span.md-error The gender is required
              |
              .md-layout-item.md-small-size-100
                md-field(:class="getValidationClass('age')")
                  label(for='age') Age
                  |
                  md-input#age(type='number', name='age', autocomplete='age', v-model='form.age', :disabled='sending')
                    span.md-error(v-if='!$v.form.age.required') The age is required
                    |
                    span.md-error(v-else-if='!$v.form.age.maxlength') Invalid age
            |
            md-field(:class="getValidationClass('email')")
              label(for='email') Email
              |
              md-input#email(type='email', name='email', autocomplete='email', v-model='form.email', :disabled='sending')
                span.md-error(v-if='!$v.form.email.required') The email is required
                |
                span.md-error(v-else-if='!$v.form.email.email') Invalid email
            |
            md-field
              label Message
              |
              md-textarea(v-model='form.message')
          |
          md-progress-bar(md-mode='indeterminate', v-if='sending')
            md-card-actions
              md-button.md-primary(type='submit', :disabled='sending') Send message
      |
      md-snackbar(:md-active.sync='messageSend') Sending is success! Thank you!

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
.md-layout {
  margin-top: 10px;
}

md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
