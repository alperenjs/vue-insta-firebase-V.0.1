<template>
  <div id="app">
    <MainHeader />
    <Post></Post>
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
