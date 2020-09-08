<template>
  <div id="home" class="generalBackground">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="denemeRow">
            <stories />
          </div>
          <homePosts
            v-for="post in postsList"
            :key="post.key"
            :username="post.dusername"
            :url="post.durl"
            :postText="post.dpostText"
            :profilImg="post.dprofilImg"
            :posterImg="post.dposterImg"
          ></homePosts>
        </div>
        <div class="col-4">
          <recommendation :username="dusername" :realname="drealname" :profilImg="dprofilImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import homePosts from "./homePosts";
import recommendation from "./recommendation";
import stories from "./stories";
export default {
  name: "home",
  data: function () {
    return {
      dusername: "",
      drealname: "",
      durl: "",
      dpostText: "",
      dprofilImg: "",
      postsList: [],
      dposterImg: "",
    };
  },
  components: {
    homePosts,
    recommendation,
    stories,
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser;

      // console.log(" aktif kullanıcı idsi " + this.currentUser.uid);
    }
  },

  mounted() {
    this.$http.get("allPosts.json").then((response) => {
      let data = response.body;

      for (let key in data) {
        console.log({
          // key: key,
          key: key,
          dusername: data[key].postSender,
          durl: data[key].url,
          dpostText: data[key].text,
          dprofilImg: data[key].profilImg,
          dposterImg: data[key].posterImg,
        });
        this.postsList.push({
          // key: key,
          key: key,
          dusername: data[key].postSender,
          durl: data[key].url,
          dpostText: data[key].text,
          dprofilImg: data[key].profilImg,
          dposterImg: data[key].posterImg,
        });
      }
    });
    this.$http
      .get("users/" + this.currentUser.uid + ".json")
      .then((response) => {
        let data = response.body;
        for (let key in data) {
          this.key = key;
          // console.log(this.key);
          // console.log(key); //posts.ları çekiyor
          //current User'a göre veritabanından verileri yazıyor
          this.dusername = data[key].username;
          this.drealname = data[key].realname;
          this.dprofilImg = data[key].profilImg;
        }
      });
  },
};
</script>

<style>
.generalBackground {
  background: rgb(250, 250, 250) !important;
  padding-top: 80px;
}
</style>
