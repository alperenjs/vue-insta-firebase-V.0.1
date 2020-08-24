import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDWLjsCeUIJAtwu0X5oSVgjSHfP5hq5hDI",
  authDomain: "vue-insta-9f903.firebaseapp.com",
  databaseURL: "https://vue-insta-9f903.firebaseio.com",
  projectId: "vue-insta-9f903",
  storageBucket: "vue-insta-9f903.appspot.com",
  messagingSenderId: "244098576455",
  appId: "1:244098576455:web:85e78939098d9e55304162",
  measurementId: "G-Y9WPX7T38H"
})

Vue.use(VueResource)

Vue.http.options.root = "https://vue-insta-9f903.firebaseio.com"

// Vue.http.interceptors.push((request, next) => {
//   next(response => {
//     response.json = () => {
//       return {
//         userList: response.body
//       }
//     }
//   })
// })






new Vue({
  el: '#app',
  render: h => h(App)
})

/* firebase id https://vue-insta-9f903.firebaseio.com/ */