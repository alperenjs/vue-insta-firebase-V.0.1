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
  margin-bottom: 44px;
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
</style>