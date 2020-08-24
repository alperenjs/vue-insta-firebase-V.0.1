import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

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