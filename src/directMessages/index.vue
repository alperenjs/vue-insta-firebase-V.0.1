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
        <div id="chatbox">
          <div id="chatmessages">
            <div class="sender">
              <div class="senderImg">
                <img src="../assets/alperen2.jpg" />
              </div>
              <div class="senderMsg">Hi Jack</div>
            </div>
            <div class="receiver">Hey Alperen</div>
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
#chatbox {
  overflow: none;
  position: relative;
  width: 100%;
  height: calc(100% - 130px);
}
#chatmessages {
  overflow: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
}
#chatmessages div {
  background-color: #ffff;
  border: 1px solid #efefef;
  width: fit-content;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
}

#chatmessages .receiver {
  margin-left: auto;
  border: none;
  background-color: #efefef;
  padding: 6px 10px 6px 10px !important;
}

.sender {
  display: flex;
  padding: 5px 2px 5px 2px !important;
}
.senderMsg {
  border: none !important;
}
.senderImg {
  display: flex !important;
  border: none !important;
}
.senderImg img {
  border: none !important;
  width: 20px;
  border-radius: 50%;
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
