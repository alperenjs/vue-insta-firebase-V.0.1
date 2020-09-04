<template>
  <div>
    <!-- <upload></upload> -->
    <div>
      <div>
        <p>Upload an image to Firebase:</p>
        <input type="file" @change="previewImage" accept="image/*" />
      </div>
      <div>
        <p>
          Progress: {{uploadValue.toFixed()+"%"}}
          <progress
            id="progress"
            :value="uploadValue"
            max="100"
          ></progress>
        </p>
      </div>
      <div v-if="imageData!=null">
        <img class="preview" style="height:240px; width:240px;" :src="picture" />
        <br />
        <button @click="onUpload">Upload</button>
      </div>
    </div>

    <div>
      <h1>{{ userName }}</h1>

      <input type="text" v-model="userName" placeholder="username" />
      <hr />
      <input type="text" v-model="post_text" placeholder="post açklaması" />
      <hr />
      <input type="text" v-model="mail" placeholder="mail" />

      <button class="btn btn-primary" @click="saveUser">Kaydet</button>
      <button class="btn btn-primary" @click="getUsers">getir</button>
      <hr />
      <ul class="list-group">
        <li :key="user.userName" v-for="user in userList">
          <span>{{user.userName}}</span>
          <hr />
          <span>{{user.mail}}</span>
          <hr />
          <img :src="user.img" />
          <hr />
          <span>{{user.post_text}}</span>

          <button @click="deleteUser(user.key)">sil</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
// import Upload from "./components/Upload";

export default {
  name: "Post",
  data() {
    return {
      img: null,
      userName: null,
      mail: null,
      userList: [],
      post_text: null,
      imageData: null,
      picture: null,
      uploadValue: 0,
    };
  },
  /* eslint-disable */

  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
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
            /*fotoğrafı link olarak this.picture içine
            yapıştırıp gösterebiliyor / benim de bunu database'e url olarak
            kaydetmem lazım ki her post fotoyou gösterebilsin */
          });
        }
      );
    },

    saveUser() {
      this.$http
        .post("users.json", {
          userName: this.userName,
          mail: this.mail,
          post_text: this.post_text,
          img: this.picture,
        })
        .then((response) => {
          this.userName = "";
          this.mail = "";
          this.post_text = "";
          // this.img = "fonksyion gelcek";
        });
    },

    getUsers() {
      this.$http.get("users.json").then((response) => {
        let data = response.data;
        for (let key in data) {
          console.log({
            key: key,
            userName: data[key].userName,
            mail: data[key].mail,
            img: data[key].img,
          });
          this.userList.push({
            key: key,
            userName: data[key].userName,
            post_text: data[key].post_text,
            mail: data[key].mail,
            img: data[key].img,
          });
        }
      });
      // .then((data) => {
      //   for (let key in data.userList) {
      //     this.userList.push({
      //       key: key,
      //       data: data.userList[key],
      //     });
      //   }
      // });
    },

    deleteUser(userKey) {
      this.$http.get("users/" + userKey + ".json").then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<style>
</style>
