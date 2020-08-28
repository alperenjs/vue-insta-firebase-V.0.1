<template>
  <div class="mainHeader">
    <nav class="navbar fixed-top navbar-light bg-light">
      <div class="bran">
        <router-link to="/">
          <div class="brandContent">
            <a class="navbar-brand" href="#">
              <img src="../assets/instaLogo.svg" />
            </a>
          </div>
        </router-link>
      </div>

      <div class="menuSearch">
        <div class="searchBox">
          <form class="search-form form-inline md-form form-sm mt-0">
            <i class="search-icon fa fa-search" style="color:#ced4da" aria-hidden="true"></i>
            <input
              class="search-form-control form-control-sm ml-3 w-45"
              type="text"
              placeholder="Ara"
              aria-label="Search"
            />
          </form>
        </div>
      </div>

      <div class="navList">
        <router-link to="/">
          <div class="navList-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
        </router-link>
        <router-link to="/directMessages">
          <div class="navList-item">
            <svg aria-label="Direct" class="_8-yf5" fill="#262626" width="22" viewBox="0 0 48 48">
              <path
                d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"
              />
            </svg>
          </div>
        </router-link>
        <router-link to="/discover">
          <div class="hideIconForMobil navList-item">
            <svg
              aria-label="Kişiler Bul"
              class="_8-yf5"
              fill="#262626"
              width="22"
              viewBox="0 0 48 48"
            >
              <path
                clip-rule="evenodd"
                d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </router-link>
        <router-link to="/notifications">
          <div class="hideIconForMobil navList-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </div>
        </router-link>
        <router-link to="/profil">
          <div class="navList-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-circle"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </router-link>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "MainHeader",
};
</script>

<style >
/* .mainHeader {
  padding-bottom: 90px;
} */
.navbar {
  top: 0;
  background-color: #fff !important;
  border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  justify-content: space-around !important;
}
.navContent {
  display: flex;
}
.navbar-brand {
  margin: 0 !important;
  padding: 0 !important;
}
.navbar-brand img {
  width: 100px !important;
}
.navList {
  display: flex;
}
.navList .navList-item {
  margin-left: 22px;
}
.brandContent {
  justify-content: center;
}

.search-form {
  justify-content: center;
}
.search-form-control {
  border: none !important;
  font-size: 14px;
}

.search-icon {
  margin-left: 5px;
  font-size: 12px;
}
input:focus {
  outline: none !important;
  border: none !important;
}
::placeholder {
  text-align: center;
}

.searchBox {
  border: 1px solid #ced4da;
  background: rgba(var(--b3f, 250, 250, 250), 1);
  border-radius: 4px;
}

/*Media Queries */
@media only screen and (max-width: 700px) {
  .menuSearch {
    display: none !important;
  }
}
@media screen and (max-width: 370px) {
  .myCol {
    width: 307px;
  }

  .hideIconForMobil {
    display: none;
  }
}
/*Media Queries */
</style>


