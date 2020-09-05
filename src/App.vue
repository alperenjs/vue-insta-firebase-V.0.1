<template>
  <div id="app">
    <!-- router link çalşyor menünün altında kalıyor -->
    <MainHeader />
    <Post />
    <!-- <Post></Post> -->
    <router-view></router-view>
    <!--router view rootla gidilen syfanın içeriğini basyıor-->
  </div>
</template>

<script>
import MainHeader from "./components/header";
import Post from "./components/Post";

export default {
  name: "app",
  components: {
    MainHeader,
    Post,
  },
};
</script>

<style>
</style>
