<template>
  <div class="profilePosts-container">
    <div class="row posts-row">
      <div class="col">
        <div class="post-col">
          <img src="../assets/ppost2.jpg" />
        </div>
      </div>
      <div class="col col-mid">
        <div class="post-col">
          <img src="../assets/ppost4.jpg" />
        </div>
      </div>
      <div class="col">
        <div class="post-col">
          <img src="../assets/ppost3.jpg" />
        </div>
      </div>
    </div>
    <!-- <div class="row posts-row">
      <div class="col">
        <div class="post-col">
          <img src="../assets/ppost4.jpg" />
        </div>
      </div>
      <div class="col col-mid">
        <div class="post-col">
          <img src="../assets/ppost3.jpg" />
        </div>
      </div>
      <div class="col">
        <div class="post-col">
          <img src="../assets/ppost2.jpg" />
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "profilePosts",
};
</script>

<style scoped>
.posts-row {
  width: 100%;
  height: 75%;
  overflow: hidden;
  margin-bottom: 20px;
  margin-top: 20px;
}

.posts-row .col-mid {
  margin: 0 20px 0 20px;
}

.posts-row .col {
  padding: 0;
  height: 75%;
  max-height: 300px;
  overflow: hidden;
  border: 1px dashed black;
}

.post-col img {
  height: 100%;
  width: 100%;
  object-fit: scale-down !important;
  display: inline-block;
}
</style>