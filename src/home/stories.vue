<template>
  <div class="storiesWrapper">
    <div class="buttons">
      <div class="left">
        <button class="myButton" v-on:click="scrollLeft" id="left-button">
          <span>&#60;</span>
        </button>
      </div>
      <div class="right">
        <button class="myButton" v-on:click="scrollRight" id="right-button">
          <span>&#62;</span>
        </button>
      </div>
    </div>

    <div class="center" ref="content" id="content">
      <div class="internal">
        <div class="story-profil-img post-Profile-img">
          <div class="row avatar-color">
            <img src="../assets/alperen2.jpg" />
          </div>
          <div class="row">
            <span class="story-username">notionof</span>
          </div>
        </div>
      </div>
      <div class="internal">
        <div class="story-profil-img post-Profile-img">
          <div class="row avatar-color">
            <img src="../assets/p2.png" />
          </div>
          <div class="row">
            <span class="story-username">helolo32</span>
          </div>
        </div>
      </div>
      <div class="internal">
        <div class="story-profil-img post-Profile-img">
          <div class="row avatar-color">
            <img src="../assets/p2.png" />
          </div>
          <div class="row">
            <span class="story-username">myinsta</span>
          </div>
        </div>
      </div>
      <div class="internal">
        <div class="story-profil-img post-Profile-img">
          <div class="row avatar-color">
            <img src="../assets/p2.png" />
          </div>
          <div class="row">
            <span class="story-username">user09</span>
          </div>
        </div>
      </div>
      <div class="internal">
        <div class="story-profil-img post-Profile-img">
          <div class="row avatar-color">
            <img src="../assets/alperen2.jpg" />
          </div>
          <div class="row">
            <span class="story-username">notionof</span>
          </div>
        </div>
      </div>
      <div class="internal">
        <div class="story-profil-img post-Profile-img">
          <div class="row avatar-color">
            <img src="../assets/alperen2.jpg" />
          </div>
          <div class="row">
            <span class="story-username">notionof</span>
          </div>
        </div>
      </div>
      <div class="internal">
        <div class="story-profil-img post-Profile-img">
          <div class="row avatar-color">
            <img src="../assets/alperen2.jpg" />
          </div>
          <div class="row">
            <span class="story-username">notionof</span>
          </div>
        </div>
      </div>
      <div class="internal">
        <div class="story-profil-img post-Profile-img">
          <div class="row avatar-color">
            <img src="../assets/alperen2.jpg" />
          </div>
          <div class="row">
            <span class="story-username">notionof</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stories",
  methods: {
    scrollLeft() {
      this.$refs.content.scrollLeft -= 300;
    },
    scrollRight() {
      this.$refs.content.scrollLeft += 300;
    },
  },
};
</script>

<style>
.center {
  scroll-behavior: smooth !important;
}

.storiesWrapper {
  height: 100px;
}

button:focus {
  outline: 0;
}
.myButton {
  border: none;
  border-radius: 50%;
  background: white;
  -webkit-box-shadow: -1px 2px 20px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 20px -4px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 20px -4px rgba(0, 0, 0, 0.75);
}
.myButton span {
  text-align: center;
  justify-content: center;
  padding: 2px 2px;
  font-weight: 800;
}
.left {
  margin-top: 30px;
  float: left;
  z-index: 20;
  position: absolute;
  margin-left: 20px;
}
.right {
  margin-top: 30px;
  float: right;
  z-index: 20;
  position: absolute;
  right: 0;
  margin-right: 25px;
}

.internal {
  z-index: 10;
  width: 12%;
  height: 100%;

  display: inline-block;
}

.center {
  background-color: #fff;
  float: left;
  width: 100%;
  height: 100px;
  border: 1px solid #dbdbdb;
  margin: 1px;
  overflow: hidden;
  /*will change this to hidden later to deny scolling to user*/
  white-space: nowrap;
}
.story-profil-img {
  padding-left: 41px !important;
  margin-top: 6px !important;
  display: block !important;
}
.story-profil-img img {
  width: 60px !important;
  border-radius: 50%;
  border: 2px solid white;
}
.story-profil-img .row {
  justify-content: center;
}
.story-username {
  font-size: 10px;
  letter-spacing: -0.8px;
  text-align: center;
}

.myButton:active {
  text-decoration: none;
  outline: none;
}
@media only screen and (max-width: 767px) {
  .internal {
    width: 15%;
  }
}
@media only screen and (max-width: 456px) {
  .internal {
    width: 18%;
  }
}
@media only screen and (max-width: 385px) {
  .internal {
    width: 23%;
  }
}
</style>