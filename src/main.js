// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'

// デザイン
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'

// firebase
import firebase from 'firebase'
import {firebaseConfig} from '../firebase-config'
firebase.initializeApp(firebaseConfig).database()

Vue.use(VueMaterial)
Vue.use(firebase)
Vue.use(VueAnalytics, {
  id: 'UA-146707736-1',
  router
})
Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
