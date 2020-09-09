<template>
  <div class="main">
    <div class="content">
      <div class="row profilHeader">
        <div class="headerLeft">
          <div class="profile-img">
            <img :src="user.profilPic" />
          </div>
        </div>
        <div class="headerRight">
          <div class="row UserNameRow">
            <span>{{user.username}}</span>
            <div>
              <button
                data-toggle="modal"
                data-target="#exampleModal1"
                data-backdrop="false"
              >Profili Düzenle</button>
            </div>
          </div>
          <div class="row numbersRow">
            <span class="numbers">
              <span class="data">{{user.postNumber}}</span> gönderi
            </span>
            <span class="numbers">
              <span class="data">{{user.followerNumber}}</span> takipçi
            </span>
            <span class="numbers">
              <span class="data">{{user.followedNumber}}</span> takip
            </span>
          </div>
          <div class="row about">
            <span>
              <h1>{{user.realname}}</h1>
              {{user.profilText1}}
              <br />
              {{user.profilText2}}
              <br />
              {{user.profilText3}}
            </span>
          </div>
        </div>
      </div>

      <div class="row profil-stories-row">
        <div class="col storiesWrapper">
          <div class="buttons">
            <div class="left">
              <button class="myButton" v-on:click="scrollLeft" id="left-button">
                <span>&#60;</span>
              </button>
            </div>
            <div class="right">
              <button class="myButton" v-on:click="scrollRight" id="right-button">
                <span>&#62;</span>
              </button>
            </div>
          </div>

          <div class="center profil-center" ref="content" id="content">
            <div class="internal">
              <div class="story-profil-img post-Profile-img">
                <div class="row">
                  <img src="../assets/s1.jpg" />
                </div>
                <div class="row">
                  <span class="story-username">notionof</span>
                </div>
              </div>
            </div>
            <div class="internal">
              <div class="story-profil-img post-Profile-img">
                <div class="row">
                  <img src="../assets/s2.jpg" />
                </div>
                <div class="row">
                  <span class="story-username">helolo32</span>
                </div>
              </div>
            </div>
            <div class="internal">
              <div class="story-profil-img post-Profile-img">
                <div class="row">
                  <img src="../assets/s3.jpg" />
                </div>
                <div class="row">
                  <span class="story-username">myinsta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--- media query display--->
      <div class="row after-numbers-row">
        <span class="numbers">
          <span class="data">110</span> gönderi
        </span>
        <span class="numbers">
          <span class="data">593</span> takipçi
        </span>
        <span class="numbers">
          <span class="data">60</span> takip
        </span>
      </div>
      <!--- media query display--->
      <div class="row submenu-row">
        <div class="col line"></div>
      </div>

      <div class="row submenu-list">
        <router-link to="/profilePosts">
          <div class="submenu" @click="selected = 1" :class="{active:selected==1}">
            <i class="fa fa-th" aria-hidden="true">
              &nbsp;
              <span>GÖNDERİLER</span>
            </i>
          </div>
        </router-link>
        <router-link to="/igtv">
          <div class="submenu" @click="selected = 2" :class="{active:selected==2}">
            <i class="fa fa-television" aria-hidden="true">
              &nbsp;
              <span>IGTV</span>
            </i>
          </div>
        </router-link>
        <router-link to="/savedPosts">
          <div class="submenu" @click="selected = 3" :class="{active:selected==3}">
            <i class="fa fa-bookmark-o" aria-hidden="true">
              &nbsp;
              <span>KAYDEDİLENLER</span>
            </i>
          </div>
        </router-link>
        <router-link to="/taggedPosts">
          <div class="submenu" @click="selected = 4" :class="{active:selected==4}">
            <i class="fa fa-tag" aria-hidden="true">
              &nbsp;
              <span>ETİKETLENENLER</span>
            </i>
          </div>
        </router-link>
      </div>

      <router-view></router-view>
    </div>

    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6>Profili Düzenle</h6>
          </div>
          <div class="modal-body">
            <link
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
              rel="stylesheet"
            />
            <div class="container">
              <div class="row flex-lg-nowrap">
                <div class="col">
                  <div class="row">
                    <div class="col mb-3">
                      <div>
                        <div>
                          <div class="e-profile">
                            <div class="row">
                              <div class="col-12 col-sm-auto mb-3">
                                <div class="mx-auto" style="width: 140px;">
                                  <div
                                    class="d-flex justify-content-center align-items-center rounded"
                                    style=" border-radius:50%!important; height: 140px; background-color: rgb(233, 236, 239);"
                                  >
                                    <img
                                      style="    height: 140px;
    width: 140px;
    border-radius: 50%;"
                                      :src="user.profilPic"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col d-flex flex-column flex-sm-row justify-content-between mb-3"
                              >
                                <div class="text-center text-sm-left mb-2 mb-sm-0">
                                  <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap"></h4>
                                  <p class="mb-0"></p>

                                  <div class="mt-2">
                                    <label>Fotoğraf değiştir</label>
                                    <input
                                      class="input"
                                      type="file"
                                      @change="previewImage"
                                      accept="image/*"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="tab-content pt-3">
                              <div class="tab-pane active">
                                <form class="form" novalidate>
                                  <div class="row">
                                    <div class="col">
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Adın</label>
                                            <input
                                              v-model="user.realname"
                                              class="form-control"
                                              type="text"
                                              name="name"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Kullanıcı Adı</label>
                                            <input
                                              v-model="user.username"
                                              class="form-control"
                                              type="text"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Biyografi 1</label>
                                            <input
                                              v-model="user.profilText1"
                                              class="form-control"
                                              type="text"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Biyografi 2</label>
                                            <input
                                              v-model="user.profilText2"
                                              class="form-control"
                                              type="text"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Biyografi 3</label>
                                            <input
                                              v-model="user.profilText3"
                                              class="form-control"
                                              type="text"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="row">
                                    <div class="col d-flex justify-content-end">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >İptal</button>
                                      <button @click="updateUser" class="btn btn-primary">Güncelle</button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import profilePosts from "./profilePosts";
import profilePostsVue from "./profilePosts.vue";
export default {
  name: "profil",
  data: function () {
    return {
      selected: 1,
      isLoggedIn: false,
      currentUser: false,
      imageData: "",
      user: {
        key: "",
        mail: "",
        username: "",
        realname: "",
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
        profilPic: "",
      },
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser;

      // console.log(" aktif kullanıcı idsi " + this.currentUser.uid);
    }
  },

  mounted() {
    this.$http
      .get("users/" + this.currentUser.uid + ".json")
      .then((response) => {
        let data = response.body;
        for (let key in data) {
          this.key = key;
          // console.log(this.key);
          // console.log(key); //posts.ları çekiyor
          //current User'a göre veritabanından verileri yazıyor
          this.user.mail = data[key].mail;
          this.user.username = data[key].username;
          this.user.followerNumber = data[key].followerNumber;
          this.user.followedNumber = data[key].followedNumber;
          this.user.profilDisplayName = data[key].profilDisplayName;
          this.user.profilText1 = data[key].profilText1;
          this.user.profilText2 = data[key].profilText2;
          this.user.profilText3 = data[key].profilText3;
          this.user.followerNumber = this.user.followers.length;
          this.user.followedNumber = this.user.following.length;
          this.user.postNumber = data[key].postNumber;
          this.user.realname = data[key].realname;
          this.user.profilPic = data[key].profilImg;
        }
      });

    // console.log("ebem ebem  " + profilePosts.data);
  },

  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.user.profilPic = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      this.user.profilPic = null;
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
            this.user.profilPic = url;
            /*fotoğrafı link olarak this.picture içine
            yapıştırıp gösterebiliyor / benim de bunu database'e url olarak
            kaydetmem lazım ki her post fotoyou gösterebilsin */
          });
        }
      );
    },

    scrollLeft() {
      this.$refs.content.scrollLeft -= 300;
    },
    scrollRight() {
      this.$refs.content.scrollLeft += 300;
    },
    updateUser() {
      event.preventDefault();
      this.$http.patch(
        "users/" + this.currentUser.uid + "/" + this.key + ".json",
        {
          profilText1: this.user.profilText1,
          profilText2: this.user.profilText2,
          profilText3: this.user.profilText3,
          realname: this.user.realname,
          username: this.user.username,
          profilImg: this.user.profilPic,
        }
      );
    },
  },
};
</script>

<style  scoped>
/* modal  buranın altında*/
.editRow h6 {
  margin: 0 !important;
}
.modal-header {
  justify-content: center;
  text-align: center;
}
.editRow {
  align-content: center;
  align-items: center;
  align-self: center;
  padding-bottom: 15px;
  display: block;
}
.editRow h6 {
  margin: 0 !important;
}

.editRow input {
  margin-left: 15px;
  border: 1px solid #dadada;
  width: 80%;
}

/* modal buranın üstünde*/

.row {
  margin: 0 !important;
  padding-top: 0 !important;
}
.main {
  display: flex;
  justify-content: center;

  padding-top: 90px;
  padding-bottom: 25px;
  /* height: 100vh; */
  background: rgb(250, 250, 250);
}
.content {
  width: 100%;
  max-width: 935px;
}
.profilHeader {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-bottom: 44px !important;
}
.profile-img {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
  padding-left: 12px;
}
.profile-img img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
.headerLeft {
  /* margin-left: auto; */
  margin-right: 100px;
}

.headerRight {
  /* margin-left: auto;  mediaquery ile ekle*/
  margin-right: auto;
}
.UserNameRow {
  margin-bottom: 15px !important;
  align-items: center;
}

.UserNameRow span {
  font-size: 28px;
  font-weight: lighter;
  margin-right: 25px;
  color: #262626;
}

.UserNameRow button {
  background-color: transparent;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 3px 8px 3px 8px;
  margin-right: 20px;
}

.numbers {
  margin-right: auto;
  margin-bottom: 20px;
}
.numbers .data {
  font-weight: 600;
}
.about {
  text-align: start;
}
.about h1 {
  font-size: 15px;
  font-weight: 600;
  color: #262626;
}

/*  profil stories kısmı  */
.center {
  scroll-behavior: smooth !important;
}

.storiesWrapper {
  height: 100px;
  padding-left: 0;
}

button:focus {
  outline: 0;
}
.myButton {
  border: none;
  border-radius: 999px;
  background: black;
  opacity: 0.3;
}
.myButton span {
  text-align: center;
  justify-content: center;
  padding: 2px 2px;
  font-weight: 600;
  color: white;
}
.left {
  margin-top: 40px;
  float: left;
  z-index: 20;
  position: absolute;
  margin-left: 20px;
}
.right {
  margin-top: 40px;
  float: right;
  z-index: 20;
  position: absolute;
  right: 0;
  margin-right: 25px;
}

.internal {
  z-index: 10;
  width: 13%;
  height: 100%;

  display: inline-block;
}

.center {
  border: none;
  background-color: rgb(250, 250, 250);
  float: left;
  width: 100%;
  height: 100%;
  margin: 1px;
  overflow: hidden;
  /*will change this to hidden later to deny scolling to user*/
  white-space: nowrap;
}

.profile-center {
  height: 100%;
}
.story-profil-img {
  padding-left: 41px !important;
  margin-top: 6px !important;
  display: block !important;
}
.story-profil-img img {
  width: 75px !important;
  border-radius: 50%;
  border: 1.3px solid #dbdbdb;
}
.story-profil-img .row {
  justify-content: center;
}
.story-username {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0px;
  text-align: center;
}

.myButton:active {
  text-decoration: none;
  outline: none;
}

/*  profil stories kısmı  */

/* line */

.line {
  border-bottom: 1px solid #dbdbdb;
  padding-top: 60px;
}

.submenu-list {
  display: flex;
  justify-content: center;
}
.submenu {
  margin-right: 40px;
  font-size: 14px;
  font-weight: 500;
  padding-top: 15px;
  color: gray;
  opacity: 0.8;
}

.submenu-list a {
  margin: auto;
}

.active {
  border-top: 1px solid black;
  color: black;
}
/* line */

/* after small numbers */
.after-numbers-row {
  border-top: 1px solid #dbdbdb;
  margin-top: 11px !important;
  display: none;
}

.after-numbers-row .numbers {
  display: grid;
  margin: auto;
  text-align: center;
  padding: 10px 0 10px 0;
  color: gray;
  font-size: 14px;
}

.numbers .data {
  color: black;
}

/*small numbers after */
@media only screen and (max-width: 735px) {
  .numbersRow {
    display: none;
  }
  .profilHeader {
    margin-bottom: 12px !important;
  }
  .UserNameRow {
    display: block;
  }
  .UserNameRow button {
    width: 100%;
  }

  .profile-img img {
    height: 85px;
    width: 85px;
  }
  .headerLeft {
    margin-right: unset;
  }

  .about {
    margin-left: -87px !important;
    margin-top: 33px !important;
    font-size: 14px;
  }
  .story-profil-img img {
    width: 60px !important;
  }
  .submenu span {
    display: none;
  }
  .submenu-list {
    justify-content: unset;
  }
  .submenu i {
    font-size: 24px;
    margin-left: 30px;
  }

  .submenu {
    margin: auto;
  }
  .line {
    padding-top: 0px;
  }
  .after-numbers-row {
    display: flex;
  }

  .active {
    border-top: unset;
    color: rgb(0, 171, 238);
  }
}

@media only screen and (max-width: 471px) {
  .internal {
    width: 24%;
  }
  .UserNameRow span {
    font-size: 24px;
  }
}
@media only screen and (max-width: 324px) {
  .profile-img img {
    height: 50px;
    width: 50px;
  }
  .UserNameRow {
    margin-bottom: 0px !important;
  }
  .UserNameRow span {
    font-size: 18px;
  }
  .about {
    margin-left: -56px !important;
    margin-top: 19px !important;
    font-size: 14px;
  }
}
</style>