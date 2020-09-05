<template>
  <div class="loginGeneral">
    <div class="container">
      <div class="row myRow">
        <div class="col-sm-6 phonecol">
          <img class="phone" src="../assets/loginpng.png" />
        </div>
        <div class="col-sm-6 formcol">
          <div class="right-column text-center">
            <img src="../assets/instaLogo.svg" class="instagram-logo" />

            <form>
              <div class="form-group">
                <input v-model="mail" type="text" class="form-control" placeholder="E-posta" />
                <input v-model="password" type="password" class="form-control" placeholder="Şifre" />
              </div>
              <button @click="login" class="myBtnLogin btn btn-primary btn-block">Giriş Yap</button>
            </form>
          </div>
          <div class="right-column-2 text-center">
            <p>Hesabın yok mu?</p>&nbsp;
            <a href="signup">Kaydol</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      mail: "",
      password: "",
    };
  },
  methods: {
    login(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.mail, this.password)
        .then(
          (user) => {
            alert("You are logged in as");
            this.$router.go("/");
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
.myRow {
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
  margin-top: 100px;
  height: 300px;
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

.myBtnLogin {
  margin: 12px auto;
  font-weight: 600 !important;
  padding: 4px !important;
}

.myBtnLogin {
  background-color: #3897f0 !important;
  border: 1px solid #3897f0 !important;
}

.form-group input {
  margin-top: 10px;
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
