<template>
  <div>
    <div class="footer">
      <p>
        <a type="button" data-toggle="modal" data-target="#exampleModal" data-backdrop="false">
          <i class="fa fa-plus-square-o" aria-hidden="true"></i>
        </a>
      </p>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <div>
                <input class="input" type="file" @change="previewImage" accept="image/*" />
              </div>
              <div>
                <p v-if="imageData!=null">
                  {{uploadValue.toFixed()+"%"}}
                  <progress
                    id="progress"
                    :value="uploadValue"
                    max="100"
                  ></progress>
                </p>
              </div>
              <div v-if="imageData!=null">
                <img class="preview" style="height:150px; width:150px;" :src="picture" />
                <!-- <button @click="onUpload">İleri</button> -->
                <textarea
                  v-model="post_text"
                  class="postText"
                  placeholder="Açıklama yaz..."
                  rows="5"
                  cols="60"
                  name="description"
                ></textarea>
                <br />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">İptal</button>
            <button @click="sendPost" type="button" class="btn btn-primary">Paylaş</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "myFooter",
  data: function () {
    return {
      img: null,
      userName: null,
      mail: null,
      post_text: null,
      imageData: null,
      picture: null,
      uploadValue: 0,
      id: null,
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

      console.log(
        " footer profildeki aktif kullanıcı idsi " + this.currentUser.uid
      );
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

              this.$http
                .get(
                  "users/" +
                    this.currentUser.uid +
                    "/" +
                    this.postsKey +
                    ".json"
                )
                .then((response) => {
                  let data = response.body;
                  //this.profilImg dicez profilden çekcez postlara göndercez
                  this.username = data.username;
                  console.log(this.username);
                });

              for (let key in data) {
                // console.log({
                //   // key: key,
                //   url: data[key].url,
                //   text: data[key].text,
                // });
              }
            });
        }
      });
  },

  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            this.img = url;
            console.log(this.picture);
            /*fotoğrafı link olarak this.picture içine
            yapıştırıp gösterebiliyor / benim de bunu database'e url olarak
            kaydetmem lazım ki her post fotoyou gösterebilsin */
          });
        }
      );
    },
    // increasePost() {
    //   this.$http.patch(
    //     "users/" + this.currentUser.uid + "/" + this.postsKey + ".json",
    //     {
    //       postNumber: this.user.posts.length,
    //     }
    //   );
    // },

    sendPost() {
      this.$http.post("allPosts.json", {
        postSender: this.username,
        text: this.post_text,
        url: this.picture,
      });
      this.$http
        .post(
          "users/" + this.currentUser.uid + "/" + this.postsKey + "/posts.json",
          {
            postSender: this.username,
            text: this.post_text,
            url: this.picture,
          }
        )
        .then((response) => {
          this.$router.go("profilePosts");
        });
    },

    // getUsers() {
    //   this.$http
    //     .get("users/HJUSB0uv40Vaz3fItDd2lQ7KTC43.json")
    //     .then((response) => {
    //       let data = response.body;

    //       for (let key in data) {
    //         console.log({
    //           // key: key,
    //           key: key,
    //           id: data[key].id,
    //           userName: data[key].userName,
    //           mail: data[key].mail,
    //           img: data[key].img,
    //           password: data[key].password,
    //         });
    //         this.userList.push({
    //           // key: key,
    //           key: key,
    //           id: data[key].id,
    //           userName: data[key].userName,
    //           post_text: data[key].post_text,
    //           mail: data[key].mail,
    //           img: data[key].img,
    //         });
    //       }
    //     });

    //   .then((data) => {
    //     for (let key in data.userList) {
    //       this.userList.push({
    //         key: key,
    //         data: data.userList[key],
    //       });
    //     }
    //   });
    // },

    // deleteUser(userKey) {
    //   this.$http.delete("users/" + userKey + ".json").then((response) => {
    //     console.log(userKey + "silindi");
    //     // console.log(response.data);
    //   });
    // },
  },
};
</script>

<style>
.postText {
  border: 1px solid #e0dddd;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  /*  linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);; */
  opacity: 0.9;
  text-align: center;
}

.postText:focus {
  outline: none;
}

.footer p {
  font-size: 40px;
  background: -moz-linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  background: -webkit-linear-gradient(top, #e72c83 0%, #a742c6 100%);
  background: linear-gradient(to bottom, #e72c83 0%, #a742c6 100%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer i::before {
  display: inline;
}
</style>