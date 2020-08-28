<template>
  <div class="directMessagesContainer container">
    <div class="row">
      <div class="myCol messagesLeft col">
        <div class="messagesHeader">
          <div class="messagesHeaderDirect">
            <h4>Direct</h4>
          </div>
          <div class="messagesHeaderIcon">
            <span>
              <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div class="messagesUserLists">
          <div class="messagePhoto">
            <div>
              <img src="../assets/alperen2.jpg" />
            </div>
          </div>
          <div class="messageUsername">alperenszz</div>
          <div class="message">
            <div class="messageText">Selam alperen selam dfasdasdasgdfgdfgdfgaselam selam</div>
            <div class="messageDate">.3h</div>
          </div>
        </div>
      </div>
      <div class="myCol messagesRight col hideForSmall">
        <div class="messagesHeader">
          <div class="RightUsername">
            <div class="messageRightPhoto">
              <div>
                <img src="../assets/alperen2.jpg" />
              </div>
            </div>
            <span>Username</span>
          </div>
          <div class="messagesHeaderIcon">
            <span>
              <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div class="chatbody">
          <div class="chatmessages">
            <p class="chatMessage chatReceiver">selam gençler</p>

            <p class="chatMessage">hoşgeldin dostum</p>

            <p class="chatMessage chatReceiver">hoşbldk cigerim</p>
          </div>
        </div>
        <div class="messageController">
          <div class="message-footer message-add">
            <form>
              <input placeholder="Mesaj..." />
            </form>
          </div>
        </div>
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
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 75px;
  padding-bottom: 25px;
}

.myCol {
  border: 1px solid #efefef;
  width: 500px;
  margin: 0 !important;
  padding: 0 !important;
}
.messagesHeader {
  border-left: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  height: 67px;
}
.messagesHeaderDirect {
  margin: auto;
}
.messagesHeaderDirect h4 {
  font-size: 20px;
}
.messagesHeaderIcon {
  margin-right: 10px;
  font-weight: 200;
}
.leftHeaderText {
  text-align: center;
  align-items: center !important;
}
.leftHeaderEdit {
  float: right;
}

.messagesLeft {
  /* display: flex;
  align-items: center; */
}

.messagesUserLists {
  align-items: center;
}
.messagesUserLists:hover {
  background: #efefef;
  cursor: pointer;
}
.messagePhoto {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px 3px 8px;
}

.messagePhoto img {
  width: 60px;
  border-radius: 50%;
  border: 2px solid white;
}
.message {
  display: flex;
}
.messageUsername {
  font-size: 16px;
  margin-top: 13px;
}
.messageText {
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: gray;
}
.messageDate {
  color: gray;
}

.messagesUserLists {
  overflow-y: auto;
}

/************** */
.RightUsername {
  display: flex;
  align-items: center;
}
.messageRightPhoto {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px 3px 8px;
}

.messageRightPhoto img {
  width: 40px;
  border-radius: 50%;
  border: 2px solid white;
}
.messageController {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.message-footer {
  padding: 10px 13px 5px 15px;
}
.message-add {
  display: flex;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  padding-bottom: 20px;
}

.message-add form {
  display: inline-flex;
  width: 100%;
}

.message-add input {
  width: 100%;
  border: none;
}
input::placeholder {
  text-align: left !important;
  opacity: 0.8;
}

.chatbody {
  overflow-y: auto;
  padding-left: 10px;
  padding-right: 10px;
}

.chatMessage {
  position: relative;
  font-size: 16px;
  padding: 10px;
  background-color: #ffff;
  border: 1px solid #efefef;
  border-radius: 20px;
  margin-bottom: 5px;
  margin-top: 5px;
  width: fit-content;
}

.chatReceiver {
  margin-left: auto;
  border: none;
  background-color: #efefef;
}

@media screen and (max-width: 768px) {
  .hideForSmall {
    display: none;
  }
}

@media screen and (max-width: 508px) {
  .myCol {
    width: 400px;
  }
  .messagesHeaderIcon {
    font-size: 10px;
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
</style>
