<template>
  <div id="home">
    <recommendation></recommendation>
    <homePosts></homePosts>
  </div>
</template>

<script>
import homePosts from "./homePosts";
import recommendation from "./recommendation";
export default {
  name: "home",
  components: {
    homePosts,
    recommendation,
  },
};
</script>

<style>
</style>
