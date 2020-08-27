<template>
  <div class="directMessagesContainer container">
    <div class="row">
      <div class="myCol messagesLeft col">
        <div class="messagesHeader">selam</div>
        <div class="messagesUserLists">users</div>
      </div>
      <div class="myCol messagesRight col hideForSmall">
        <div class>mesaj text</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "directMessages",
};
</script>

<style scoped>
.directMessagesContainer {
  margin-top: 80px;
  display: flex;
}
.myCol {
  border: 2px solid red;
  height: 100vh;
  width: 500px;
  margin: 0 !important;
  padding: 0 !important;
}

.messagesHeader {
  align-items: center !important;
  border: 1px solid black;
  height: 70px;
  background: rgb(255, 255, 255);
}
.leftHeaderText {
  text-align: center;
  align-items: center !important;
}
.leftHeaderEdit {
  float: right;
}

@media screen and (max-width: 768px) {
  .myCol {
    border: 2px solid green;
  }
}
</style>
