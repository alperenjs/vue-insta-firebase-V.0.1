<template>
  <div class="profilePosts-container">
    <div class="posts-row">
      <div :key="post.text" v-for="post in user.posts" class="post">
        <div class="post-col">
          <img :src="post.url" />
          <div class="overlay"></div>
          <div class="text">
            <i class="fa fa-heart" aria-hidden="true">
              <span>135</span> &nbsp;
              <i class="fa fa-comment" aria-hidden="true">
                <span>32</span>
              </i>
            </i>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row posts-row">
      <div class="col">
        <div class="post-col">
          <img src="../assets/ppost4.jpg" />
        </div>
      </div>
      <div class="col col-mid">
        <div class="post-col">
          <img src="../assets/ppost3.jpg" />
        </div>
      </div>
      <div class="col">
        <div class="post-col">
          <img src="../assets/ppost2.jpg" />
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "profilePosts",
  data: function () {
    return {
      selected: 1,
      isLoggedIn: false,
      currentUser: false,
      user: {
        postsKey: "",
        url: "",
        mail: "",
        username: "",
        postNumber: "",
        followerNumber: "",
        followedNumber: "",
        profilDisplayName: "",
        profilText1: "",
        profilText2: "",
        profilText3: "",
        posts: [], // postlar arraya gönderilecek
        followers: ["3", "3", "3", "3"], // followers arraya gönderilecek
        following: ["3", "3", "3", "3"], // following arraya gönderilecek
      },
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser;

      // console.log(" profildeki aktif kullanıcı idsi " + this.currentUser.uid);
    }
  },
  mounted() {
    this.$http
      .get("users/" + this.currentUser.uid + ".json")
      .then((response) => {
        let data = response.body;
        for (let key in data) {
          this.postsKey = data[key].key;

          this.$http
            .get(
              "users/" +
                this.currentUser.uid +
                "/" +
                this.postsKey +
                "/posts.json"
            )
            .then((response) => {
              let data = response.body;
              for (let key in data) {
                // console.log({
                //   // key: key,
                //   url: data[key].url,
                //   text: data[key].text,
                // });
                this.user.posts.push({
                  // key: key,
                  url: data[key].url,
                  text: data[key].text,
                });
              }
              this.$http.patch(
                "users/" + this.currentUser.uid + "/" + this.postsKey + ".json",
                {
                  postNumber: this.user.posts.length,
                }
              );
              console.log("posts.length " + this.user.posts.length);
              this.user.postNumber = this.user.posts.length;
              console.log("postNumber  " + this.user.postNumber);
            });
        }
      });
  },
};

//https://firebasestorage.googleapis.com/v0/b/vue-insta-9f903.appspot.com/o/ppost2.jpg?alt=media&token=16e9b6de-0f5f-48aa-81d8-77253ff63af9
</script>
    
<style scoped>
.post {
  display: flex;
}
.posts-row {
  width: 100%;
  height: 75%;
  overflow: hidden;
  margin-bottom: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.posts-row .post {
  padding: 0;
  height: 100%;
  max-height: 300px;
  overflow: hidden;
}

.post-col img {
  height: 100%;
  width: 100%;
  object-fit: contain !important;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.1s ease;
  background-color: black;
}
.post-col {
  position: relative;
}
.text {
  color: white;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  transition: 0.1s ease;
}
.text span {
  margin-left: 5px;
}
.post-col:hover .text {
  opacity: 1;
}
.post-col:hover .overlay {
  opacity: 0.3;
}

@media only screen and (max-width: 735px) {
  .posts-row {
    grid-column-gap: 0.1em;
    grid-row-gap: 0.1em;
  }
}
</style>