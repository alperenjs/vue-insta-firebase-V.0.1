<template>
  <div id="home" class="generalBackground">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <homePosts></homePosts>
        </div>
        <div class="col-4">
          <recommendation></recommendation>
        </div>
      </div>
    </div>
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
