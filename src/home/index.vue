<template>
  <div id="home" class="generalBackground">
    <ul>
      <li v-for="comment in dpostComments" :key="comment.key">{{comment.dcommentUser}}</li>
    </ul>
    <div class="container">
      <div class="mediaRow row">
        <div class="col-8">
          <div class="denemeRow">
            <stories />
          </div>
          <div class="postscontainer">
            <homePosts
              v-for="post in postsList"
              :key="post.key"
              :postId="post.key"
              :username="post.dusername"
              :url="post.durl"
              :postText="post.dpostText"
              :profilImg="post.dprofilImg"
              :posterImg="post.dposterImg"
              :postComments="post.ypostComments"
            ></homePosts>
          </div>
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
      dcommentUser: "",
      dcommentText: "",
      dpostComments: [],
      ypostComments: [],
      did: "",
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
          ypostComments: [data[key].postComments],
        });

        this.postsList.push({
          // key: key,
          key: key,
          dusername: data[key].postSender,
          durl: data[key].url,
          dpostText: data[key].text,
          dprofilImg: data[key].profilImg,
          dposterImg: data[key].posterImg,
          ypostComments: data[key].postComments,
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

.postscontainer {
  display: inline-flex;
  flex-direction: column-reverse !important;
}
@media only screen and (max-width: 1000px) {
  .mediaRow {
    display: unset !important;
    margin: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .container {
    /* margin: 0 !important; */
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .post-wrapper {
    padding-bottom: 10px !important;
  }
}
</style>
