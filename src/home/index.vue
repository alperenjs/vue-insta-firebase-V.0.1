<template>
  <div id="home" class="generalBackground">
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
.generalBackground {
  background: rgb(250, 250, 250) !important;
  padding-top: 50px;
}
</style>
