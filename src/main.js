import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'
import firebaseConfig from './firebaseConfig'

Vue.use(firestorePlugin)
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const functions = firebase.functions()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
