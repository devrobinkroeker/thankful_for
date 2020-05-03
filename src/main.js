import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

Vue.use(firestorePlugin)

if (process.env.NODE_ENV == 'production') {

  firebase.initializeApp(firebaseConfig.thankful_for)
}
else {

  firebase.initializeApp(firebaseConfig.thankful_for_test)
}

export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
