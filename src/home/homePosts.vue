<template>
  <div :id="postId" class="post-wrapper">
    <div class="post-card">
      <div class="post-header row">
        <div class="post-Profile-img">
          <div>
            <img :src="posterImg" />
          </div>
        </div>
        <div class="post-Profile-username">
          <h6>{{username}}</h6>
        </div>
        <div class="post-settings">
          <i class="fa fa-ellipsis-h"></i>
        </div>
      </div>

      <div class="posted-image">
        <img :src="url" />
      </div>

      <div class="post-footer">
        <div class="post-actions">
          <span class="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </span>
          <span class="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-message-circle"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              />
            </svg>
          </span>
          <span class="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-send"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </span>
          <span class="svg svg-saved">
            <svg aria-label="Kaydet" class="_8-yf5" height="24" viewBox="0 0 48 48" width="24">
              <path
                d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"
              />
            </svg>
          </span>
        </div>
        <div class="post-liked-by">
          <span>
            <strong>1.519 kişi</strong> tarafından beğenildi
          </span>
        </div>
        <div class="post-text">
          <div class="post-text-by-user">
            <strong>{{username}} &nbsp;</strong>
            <span>{{postText}}</span>
          </div>
          <div class="posted-time">
            <span class="postedDate">yorumları gör</span>
          </div>
          <div class="post-comments">
            <strong>{{commentUser}} &nbsp;</strong>
            <span>{{commentText}}</span>
          </div>
        </div>
        <div class="posted-time">
          <span class="postedDate">2 GÜN ÖNCE</span>
        </div>
      </div>
      <div class="post-footer post-add-comment">
        <form>
          <input placeholder="Yorum ekle..." />
        </form>
        <button>Paylaş</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homePosts",
  props: [
    "username",
    "url",
    "postText",
    "posterImg",
    "commentUser",
    "commentText",
    "postId",
    "postComments",
  ],
};
</script>

<style>
.post-wrapper {
  padding-top: 30px;
  padding-bottom: 50px;
  width: 726px;
  /* margin-left: 15rem; */
}

.post-card {
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}

.post-header {
  display: flex;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 15px;
}
.post-Profile-username h6 {
  margin: 0 !important;
  padding: 0 !important;
}

.post-Profile-img {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
  padding-left: 30px;
}
.avatar-color {
  padding: 3px;
  border-radius: 999px;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );
}
.post-Profile-img img {
  width: 40px;
  border-radius: 50%;
  border: 2px solid white;
}
.post-settings {
  margin-left: auto;
  margin-right: 40px;
}
.post-footer {
  padding: 10px 13px 5px 15px;
}

.post-actions {
  display: flex;
  justify-content: flex-start;
}

.post-actions .svg {
  margin-right: 15px;
}

.post-actions .svg a {
  text-decoration: none;
  color: black;
}

.post-actions .svg-saved {
  margin-left: auto;
}

.post-liked-by {
  margin-top: 5px;
  padding-bottom: 5px;
}

.postedDate {
  font-size: 11px;
  opacity: 0.7;
}

.post-add-comment {
  display: flex;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  padding-bottom: 20px;
}

.post-add-comment form {
  display: inline-flex;
  width: 100%;
}

.post-add-comment button {
  background: none;
  border: none;
  margin-left: auto;
}

.post-add-comment input {
  /* width: 550px; */
  border: none;
  width: 80%;
}

.posted-image {
  width: 100%;
  object-fit: contain;
}
.posted-image img {
  width: 100%;
  object-fit: contain;
}

input:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

input::placeholder {
  text-align: left !important;
  opacity: 0.8;
}

.post-add-comment button {
  color: rgb(82, 182, 247);
}

.post-add-comment button:hover {
  color: rgb(21 153 239);
}
.post-add-comment button:focus {
  border: none;
  outline: none;
  color: rgb(21 153 239);
}

/*Media Queries */
@media only screen and (max-width: 1199px) {
  .post-wrapper {
    width: 608px !important;
  }
}
@media only screen and (max-width: 1000px) {
  .post-wrapper {
    float: none;
  }

  .col-8 {
    max-width: none !important;
  }

  .post-wrapper {
    width: auto !important;
  }
}

/*Media Queries */
</style>
