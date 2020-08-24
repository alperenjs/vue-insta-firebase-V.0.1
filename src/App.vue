<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1>{{ userName }}</h1>

    <input type="text" v-model="userName" placeholder="username" />

    <input type="text" v-model="mail" placeholder="mail" />
    <button class="btn btn-primary" @click="saveUser">Kaydet</button>
    <button class="btn btn-primary" @click="getUsers">getir</button>
    <hr />
    <ul class="list-group">
      <li :key="user.userName" v-for="user in userList">
        <span>{{user.userName}}</span>
        <hr />
        <span>{{user.mail}}</span>
        <button @click="deleteUser(user.key)">sil</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      userName: null,
      mail: null,
      userList: [],
    };
  },
  /* eslint-disable */

  methods: {
    saveUser() {
      this.$http
        .post("users.json", {
          userName: this.userName,
          mail: this.mail,
        })
        .then((response) => {
          this.userName = "";
          this.mail = "";
        });
    },

    getUsers() {
      this.$http.get("users.json").then((response) => {
        let data = response.data;
        for (let key in data) {
          // console.log({
          //   key: key,
          //   userName: data[key].userName,
          //   mail: data[key].mail,
          // });
          this.userList.push({
            key: key,
            userName: data[key].userName,
            mail: data[key].mail,
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
      this.$http.delete("users/" + userKey + ".json").then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
