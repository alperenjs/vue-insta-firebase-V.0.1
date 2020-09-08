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
          ></homePosts>
        </div>
        <div class="col-4">
          <recommendation :username="dusername" :realname="drealname" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  components: {
    homePosts,
    recommendation,
    stories,
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
        });
        this.postsList.push({
          // key: key,
          key: key,
          dusername: data[key].postSender,
          durl: data[key].url,
          dpostText: data[key].text,
          dprofilImg: data[key].profilImg,
        });
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
