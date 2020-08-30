<template>
  <div class="main">
    <div class="content">
      <div class="row profilHeader">
        <div class="headerLeft">
          <div class="profile-img">
            <img src="../assets/myprofimg.jpg" />
          </div>
        </div>
        <div class="headerRight">
          <div class="row UserNameRow">
            <span>notionofthemotion</span>
            <div>
              <button>Profili Düzenle</button>
            </div>
          </div>
          <div class="row numbersRow">
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
          <div class="row about">
            <span>
              <h1>AlperenS</h1>World Champion of 50.Mffzg
              <br /># Somut Olmayan Kültürel Miras Avcısı #
              <br /># Intangible Cultural Heritage Hunter #
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

      <div class="row submenu-row">
        <div class="col line"></div>
      </div>

      <div class="row submenu-list">
        <div class="submenu">
          <i class="fa fa-th" aria-hidden="true">
            &nbsp;
            <span>GÖNDERİLER</span>
          </i>
        </div>
        <div class="submenu">
          <i class="fa fa-television" aria-hidden="true">
            &nbsp;
            <span>IGTV</span>
          </i>
        </div>
        <div class="submenu">
          <i class="fa fa-bookmark-o" aria-hidden="true">
            &nbsp;
            <span>KAYDEDİLENLER</span>
          </i>
        </div>
        <div class="submenu">
          <i class="fa fa-tag" aria-hidden="true">
            &nbsp;
            <span>ETİKETLENENLER</span>
          </i>
        </div>
      </div>

      <!-- <router-link to="/profilePosts">
        <span>gönderiler</span>
      </router-link>
      <router-link to="/igtv">
        <span>igtv</span>
      </router-link>
      <router-link to="/savedPosts">
        <span>kaydedilenler</span>
      </router-link>
      <router-link to="/taggedPosts">
        <span>etiketlenenler</span>
      </router-link>-->

      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "profil",
  methods: {
    scrollLeft() {
      this.$refs.content.scrollLeft -= 300;
    },
    scrollRight() {
      this.$refs.content.scrollLeft += 300;
    },
  },
};
</script>

<style  scoped>
.row {
  margin: 0 !important;
  padding-top: 0 !important;
}
.main {
  display: flex;
  justify-content: center;

  padding-top: 90px;
  padding-bottom: 25px;
  height: 100vh;
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
  margin-left: auto;
  margin-right: auto;
}

.headerRight {
  /* margin-left: auto;  mediaquery ile ekle*/
  margin-right: auto;
}
.UserNameRow {
  margin-bottom: 15px;
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
  width: 12%;
  height: 100%;

  display: inline-block;
}

.center {
  border: none;
  background-color: #fff;
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
/* line */
@media only screen and (max-width: 562px) {
  .headerRight {
    margin-left: auto;
  }
}
</style>