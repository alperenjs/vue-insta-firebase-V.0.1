<template>
  <div class="recomWrapper">
    <div class="box">
      <div class="recomHeader">
        <div class="recom-Profile-img">
          <img :src="profilImg" />
        </div>
        <div class="recom-Profile-username">
          <h6>{{username}}</h6>
          <span>{{realname}}</span>
        </div>
      </div>
      <div class="recom-list">
        <div class="recom-list-header row justify-content-between">
          <div class="col-6">
            <span class="spanLeft">Senin İçin Öneriler</span>
          </div>
          <div class="col-6">
            <span class="spanRight">Tümünü Gör</span>
          </div>
        </div>
        <div class="recom-list-users row justify-content-between">
          <div class="col-8">
            <div class="recom-list-user">
              <div class="recom-list-user-img">
                <img src="../assets/logo.png" />
              </div>
              <div class="recom-list-user-username">
                <h6>notionofthemotion</h6>
                <span>instagram'da Yeni</span>
              </div>
            </div>
          </div>
          <div class="col-4 follow">
            <a href="#">
              <span>Takip Et</span>
            </a>
          </div>
        </div>
        <div class="recom-list-users row justify-content-between">
          <div class="col-8">
            <div class="recom-list-user">
              <div class="recom-list-user-img">
                <img src="../assets/alperen2.jpg" />
              </div>
              <div class="recom-list-user-username">
                <h6>alpiş</h6>
                <span>3 ortak arkadaş</span>
              </div>
            </div>
          </div>
          <div class="col-4 follow">
            <a href="#">
              <span>Takip Et</span>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div class="recom-list-footer row">
        <a href="#">Hakkında</a>
        &nbsp;
        <a href="#">&#9900; Yardım</a>
        &nbsp;
        <a href="#">&#9900; Basın</a>
        &nbsp;
        <a href="#">&#9900; Apı</a>&nbsp;
        <a href="#">&#9900; İş Fırsatları</a>&nbsp;
        <a href="#">&#9900; Gizlilik</a>&nbsp;
        <a href="#">&#9900; Koşullar</a>
        &nbsp;
        <a href="#">&#9900; Güvenlik</a>
        &nbsp;
        <a href="#">&#9900; Başlıca Hesaplar</a>&nbsp;
        <a href="#">&#9900; Konu Etiketleri</a>&nbsp;
        <a href="#">&#9900; Dil</a>
        <br />
        <br />
        <span>© 2020 INSTAGRAM CLONE FROM ALPEREN</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommendation",
  props: ["username", "realname", "profilImg"],
};
</script>


<style>
/* .recomWrapper {
  margin: auto !important;
} */

.box {
  background: rgb(250, 250, 250) !important;
  height: 100vh;
  width: 350px;
  /* float: right; */
  position: fixed;
  /* right: 10px; */
  /* margin-right: 20rem; */
}

.recomHeader {
  display: flex;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 15px;
}

.recom-Profile-img {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
  padding-left: 12px;
}
.recom-Profile-img img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.recom-Profile-username h6 {
  margin: 0 !important;
  padding: 0 !important;
  font-weight: 650;
  letter-spacing: 0.2px;
}
.recom-Profile-username span {
  opacity: 0.7;
}

.recom-list {
  padding-top: 18px;
  padding-bottom: 15px;
}
/* 
.recom-list-header {
  
} */
.recom-list-header span {
  font-size: 13px;
}

.spanLeft {
  font-weight: 500;
  color: gray;
}
.spanRight {
  font-weight: 500;
}

.recom-list-users {
  margin-top: 15px;
  align-items: center;
}

.recom-list-user {
  display: flex;
  align-items: center;
}
.recom-list-user-username h6 {
  margin-bottom: -4px !important;
  font-size: 15px !important;
}
.recom-list-user-username span {
  color: gray;
  font-size: 13px !important;
  margin-top: 0px !important;
}

.recom-list-user-img {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
  padding-left: 10px;
}
.recom-list-user-img img {
  width: 30px;
  border-radius: 50%;
}
.follow a {
  text-decoration: none;
  letter-spacing: 0px;
  font-size: 14px;
  font-weight: 400;
  color: #0095f6 !important;
}
.recom-list-footer {
  line-height: 1;
  text-align: left;
  margin-left: 5px;
}
.recom-list-footer a {
  text-decoration: none;
  font-size: 11px;
  line-break: auto;
  color: gray;
  opacity: 0.6;
}

.recom-list-footer span {
  font-size: 11px;
  color: gray;
  opacity: 0.6;
}

/*media queries */
@media only screen and (max-width: 1000px) {
  .recomWrapper {
    display: none;
  }
}
/*media queries */
</style>