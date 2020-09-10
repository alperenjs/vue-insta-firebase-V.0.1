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

import aprofil from "./adminProfil/aindex.vue";
import aprofilePosts from "./adminProfil/aprofilePosts.vue";
import aigtv from "./adminProfil/aigtv.vue";
import asavedPosts from "./adminProfil/asavedPosts.vue";
import ataggedPosts from "./adminProfil/ataggedPosts.vue";

//const tu let yaptım bozlrsa düzelt
let router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: home, meta: { requiresAuth: true } },
    { path: "/login", component: login, meta: { requiresGuest: true } },
    { path: "/signup", component: signup, meta: { requiresGuest: true } },
    {
      path: "/directMessages",
      component: directMessages,
      meta: { requiresAuth: true }
    },
    { path: "/discover", component: discover, meta: { requiresAuth: true } },
    {
      path: "/notifications",
      component: notifications,
      meta: { requiresAuth: true }
    },
    {
      path: "/profil",
      component: profil,
      meta: { requiresAuth: true },
      children: [
        {
          path: "/profilePosts",
          component: profilePosts,
          meta: { requiresAuth: true }
        },
        { path: "/igtv", component: igtv, meta: { requiresAuth: true } },
        {
          path: "/savedPosts",
          component: savedPosts,
          meta: { requiresAuth: true }
        },
        {
          path: "/taggedPosts",
          component: taggedPosts,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: "/notionofthemotion/profilePosts",
      component: aprofil,

      children: [
        {
          path: "/notionofthemotion/profilePosts",
          component: aprofilePosts
        },
        {
          path: "/notionofthemotion/igtv",
          component: aigtv
        },
        {
          path: "/notionofthemotion/savedPosts",
          component: asavedPosts
        },
        {
          path: "/notionofthemotion/taggedPosts",
          component: ataggedPosts
        }
      ]
    }
  ]
});

/* down section is for auth */

router.beforeEach((to, from, next) => {
  //check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //check if not logged in
    if (!firebase.auth().currentUser) {
      //go to login
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      //proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    //check if logged in
    //check if  logged in
    if (firebase.auth().currentUser) {
      //go to login
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      //proceed to route
      next();
    }
  } else {
    //proceed to route
    next();
  }
});

export default router;

/* up section is for auth */

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

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: "#app",
      render: h => h(App),
      router
    });
  }
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

/* firebase id https://vue-insta-9f903.firebaseio.com/ */
