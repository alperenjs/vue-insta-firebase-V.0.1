
  <template>
  <div class="profilePosts-container">
    <div class="posts-row">
      <div class="post">
        <div class="post-col">
          <img src="../assets/ppost2.jpg" />
          <div class="overlay"></div>
          <div class="text">
            <i class="fa fa-heart" aria-hidden="true">
              <span>135</span> &nbsp;
              <i class="fa fa-comment" aria-hidden="true">
                <span>32</span>
              </i>
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "taggedPosts",
};
</script>

<style scoped>
.post {
  display: flex;
}
.posts-row {
  width: 100%;
  height: 75%;
  overflow: hidden;
  margin-bottom: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

.posts-row .post {
  padding: 0;
  height: 100%;
  max-height: 300px;
  overflow: hidden;
}

.post-col img {
  height: 100%;
  width: 100%;
  object-fit: contain !important;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.1s ease;
  background-color: black;
}
.post-col {
  position: relative;
}
.text {
  color: white;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  transition: 0.1s ease;
}
.text span {
  margin-left: 5px;
}
.post-col:hover .text {
  opacity: 1;
}
.post-col:hover .overlay {
  opacity: 0.3;
}

@media only screen and (max-width: 735px) {
  .posts-row {
    grid-column-gap: 0.1em;
    grid-row-gap: 0.1em;
  }
}
</style>