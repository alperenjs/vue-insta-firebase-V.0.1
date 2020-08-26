<template>
  <div>
    <h1>burası profil index sabit</h1>
    <router-link to="/profilePosts">
      <span>gönderiler</span>
    </router-link>
    <router-link to="/igtv">
      <span>igtv</span>
    </router-link>
    <router-link to="/savedPosts">
      <span>kaydedilenler</span>
    </router-link>
    <router-link to="/taggedPosts">
      <span>etiketlenenler</span>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "profil",
};
</script>