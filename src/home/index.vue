<template>
  <div id="home" class="generalBackground">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="denemeRow">
            <stories />
          </div>
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
import stories from "./stories";
export default {
  name: "home",
  components: {
    homePosts,
    recommendation,
    stories,
  },
};
</script>

<style>
.generalBackground {
  background: rgb(250, 250, 250) !important;
  padding-top: 80px;
}
</style>
