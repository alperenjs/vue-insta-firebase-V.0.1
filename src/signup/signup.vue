<template>
  <div class="loginGeneral">
    <div class="container">
      <div class="row Myrow">
        <div class="col-sm-6 phonecol">
          <img class="phone" src="../assets/loginpng.png" />
        </div>
        <div class="col-sm-6 formcol">
          <div class="right-column text-center">
            <img src="../assets/instaLogo.svg" class="instagram-logo" />

            <form>
              <div class="form-group">
                <label style="float:left" for="file">Bir fotoğraf seç</label>
                <input
                  @change="previewImage"
                  accept="image/*"
                  class="file form-control"
                  type="file"
                />
                <input v-model="mail" type="text" class="form-control" placeholder="E-posta" />
                <input v-model="realname" type="text" class="form-control" placeholder="Adı" />
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  placeholder="Kullanıcı adı"
                />
                <input v-model="password" type="password" class="form-control" placeholder="Şifre" />
              </div>
              <button @click="register" class="MybtnSignup btn btn-primary btn-block">Kaydol</button>
              <p class="terms">
                Kaydolarak, Koşullar'ı, Veri İlkesi'ni ve Çerezler İlkesi'ni
                kabul etmiş olursun.
              </p>
            </form>
          </div>
          <div class="right-column-2 text-center">
            <p>Hesabın var mı?</p>&nbsp;
            <a href="login">Giriş Yap</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Signup",
  data() {
    return {
      key: "",
      username: "",
      mail: "",
      password: "",
      newUserId: "",
      posts: [],
      realname: "",
      profilPic: "",
    };
  },
  methods: {
    // auth kayıt + database'e kayıt açma
    previewImage(event) {
      this.profilPic = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      this.profilPic = null;
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
            this.profilPic = url;
            // this.img = url;
            console.log(this.picture);
            /*fotoğrafı link olarak this.picture içine
            yapıştırıp gösterebiliyor / benim de bunu database'e url olarak
            kaydetmem lazım ki her post fotoyou gösterebilsin */
          });
        }
      );
    },

    register(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.mail, this.password)
        .then(
          (user) => {
            this.newUserId = user.user.uid;
            console.log(this.newUserId);

            this.$http
              .post("users/" + this.newUserId + ".json", {
                key: "",
                posts: this.posts,
                postNumber: "",
                username: this.username,
                mail: this.mail,
                password: this.password,
                profilText1: "",
                profilText2: "",
                profilText3: "",
                profilImg: this.profilPic,
                realname: this.realname,
              })
              .then((response) => {
                /* 
                yukarda kullanıcı oluşturuluoyr, aşağıda key veriliyor
                bu key /posts kısmına post atıp çekmek için
                */
                this.$http
                  .get("users/" + this.newUserId + ".json")
                  .then((response) => {
                    let data = response.body;

                    for (let key in data) {
                      this.key = key;

                      this.$http
                        .patch(
                          "users/" + this.newUserId + "/" + this.key + ".json",
                          {
                            key: this.key,
                          }
                        )
                        .then((response) => {
                          console.log("currentuser " + this.newUserId);
                          console.log(
                            "erişim için" + this.key + "key başarıyla eklendi"
                          );
                        });
                    }
                  });
                console.log(
                  "hesap BAŞARIYLA " + this.newUserId + " için oluşturuldu"
                );
              });

            // alert("Account created");
            // this.$router.go("/profilePosts");
          },
          (err) => {
            alert(err.message);
          }
        );

      e.preventDefault();
    },
  },
};
</script>

<style >
.mainHeader {
  display: none;
}

.Myrow {
  padding-top: 50px !important;
}

.phone {
  padding-top: 70px;
  height: 650px;
  float: right;
  margin: 10px;
}

.loginGeneral {
  height: 100vh;
  background-color: #fafafa !important;
}

.right-column {
  background: #fff;
  border: 1px solid #e6e6e6;
  width: 350px;
  margin: 10px;
  padding: 40px;
  margin-top: 50px;
  height: 522px;
}

.right-column-2 {
  background: #fff;
  border: 1px solid #e6e6e6;
  width: 350px;
  margin: 10px;
  padding: 40px;

  display: flex;
  text-align: center;
  justify-content: center;
}
.right-column-2 p {
  font-size: 14px;
  opacity: 0.8;
}
.right-column-2 a {
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
}

.instagram-logo {
  width: 200px;
  margin: 15px auto;
}

.or {
  font-size: 13px !important;
  color: #999;
  font-weight: 600;
  text-align: center;
}

.or::before {
  content: "";
  background-color: #efefef;
  display: block;
  width: 110px;
  height: 2px;
  position: relative;
  top: 11px;
}

.or::after {
  content: "";
  background-color: #efefef;
  display: block;
  width: 110px;
  height: 2px;
  position: relative;
  bottom: 10px;
  left: 160px;
}

.form-group {
  margin-bottom: 6px !important;
}

.form-control {
  background-color: #fafafa !important;
  border: 1px solid #efefef !important;
  font-size: 12px;
}

::placeholder {
  color: #999 !important;
  text-align: left;
  padding-left: 10px;
}

.MybtnSignup {
  margin: 12px auto;
  font-weight: 600 !important;
  padding: 4px !important;
}

.MybtnSignup {
  background-color: #3897f0 !important;
  border: 1px solid #3897f0 !important;
}

.form-group input {
  margin-top: 10px;
}

.terms {
  opacity: 0.7;
  font-size: 12px !important;
}

@media only screen and (max-width: 993px) {
  .phone {
    height: 520px;
  }
}

@media only screen and (max-width: 781px) {
  .phonecol {
    display: none;
  }

  .formcol {
    margin: auto;
  }

  @media only screen and (max-width: 576px) {
    .right-column {
      width: auto !important;
    }

    .right-column-2 {
      width: auto !important;
    }
  }
}
</style>
