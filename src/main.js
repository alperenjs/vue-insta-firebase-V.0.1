import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import firebase from "firebase";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./home/index.vue";
import directMessages from "./directMessages/index.vue";
import discover from "./discover/index.vue";
import notifications from "./notifications/index.vue";
import profil from "./profil/index.vue";
import profilePosts from "./profil/profilePosts.vue";
import igtv from "./profil/igtv.vue";
import savedPosts from "./profil/savedPosts.vue";
import taggedPosts from "./profil/taggedPosts.vue";
import login from "./login/login.vue";
import signup from "./signup/signup.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: home },
    { path: "/directMessages", component: directMessages },
    { path: "/discover", component: discover },
    { path: "/notifications", component: notifications },
    { path: "/login", component: login },
    { path: "/signup", component: signup },
    {
      path: "/profil",
      component: profil,
      children: [
        { path: "/profilePosts", component: profilePosts },
        { path: "/igtv", component: igtv },
        { path: "/savedPosts", component: savedPosts },
        { path: "/taggedPosts", component: taggedPosts }
      ]
    }
  ]
});

firebase.initializeApp({
  apiKey: "AIzaSyDWLjsCeUIJAtwu0X5oSVgjSHfP5hq5hDI",
  authDomain: "vue-insta-9f903.firebaseapp.com",
  databaseURL: "https://vue-insta-9f903.firebaseio.com",
  projectId: "vue-insta-9f903",
  storageBucket: "vue-insta-9f903.appspot.com",
  messagingSenderId: "244098576455",
  appId: "1:244098576455:web:85e78939098d9e55304162",
  measurementId: "G-Y9WPX7T38H"
});

Vue.use(VueResource);

Vue.http.options.root = "https://vue-insta-9f903.firebaseio.com";

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
  el: "#app",
  render: h => h(App),
  router
});

/* firebase id https://vue-insta-9f903.firebaseio.com/ */
