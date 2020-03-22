<template>
  <div>
    <v-dialog v-model="editingModal" class="mx-auto">
      <v-card class="mx-auto">
        <v-container>
          <v-row>
            <v-textarea
              rows="1"
              auto-grow
              clearable
              clear-icon="cancel"
              v-model="editMes"
              outlined
              row-height="10"
              background-color="#f5a37d"
            ></v-textarea>
            <v-btn @click="updateMes" class="ml-3">更新</v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-card max-width="1100px" class="mx-auto" id="chatCard">
      <v-toolbar color="gray" dark>
        <v-toolbar-title>{{chatUser.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="editStatus" @click="editStatus = false" fab>
          <v-icon large>mdi-comment-edit-outline</v-icon>
        </v-btn>
        <v-btn v-else @click="editStatus = true,editingModal = false" fab>
          <v-icon large>mdi-content-save-edit-outline</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card class="overflow-y-auto scroll" style="max-height: 400px">
        <v-list>
          <v-list-item
            class="mt-2"
            v-for="(message, i) in messages"
            :key="i"
            style="white-space:pre-wrap;"
          >
            <!-- 自分のメッセージは右側に表示するのでスペースを入れる -->
            <v-spacer v-if="!isMyMessage(message.ref)"></v-spacer>
            <!-- 相手のメッセージの左にアバター表示 -->
            <v-list-item-avatar v-if="isMyMessage(message.ref)" size="25">
              <v-img
                :src="chatUser.avatarUrl"
                :class="{ firstMesMargin: isFirstMes(message.createdAt,i)}"
              ></v-img>
            </v-list-item-avatar>
            <div :class="{ firstMesMargin: isFirstMes(message.createdAt,i)}">
              <!-- メッセージの色分け -->
              <!-- 自分がわ（右） -->
              <div v-if="!isMyMessage(message.ref)">
                <div v-if="!editStatus">
                  <v-btn
                    @click="editMesAction(message.message,message.uid)"
                    class="mb-1"
                    outlined
                    x-small
                    fab
                    color="indigo"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    @click="deleteMesAction(message.uid)"
                    class="mb-1 ml-1"
                    outlined
                    x-small
                    fab
                    color="error"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
                <div class="my_message p-2">{{message.message}}</div>
                <div class="display-send-time">{{displaySendTime(message.createdAt)}}</div>
              </div>
              <!-- 相手側（左） -->
              <div v-else>
                <div style="white-space:pre-line;" class="other_message py-2 pl-5">
                  {{message.message}}
                  <span
                    class="display-get-time"
                  >{{displaySendTime(message.createdAt)}}</span>
                </div>
              </div>

              <div
                v-if="isFirstMes(message.createdAt,i)"
                class="first-mes-position"
                :style="{right: getChatCardWidth + 'px' }"
              >{{firstMes(message.createdAt,i)}}</div>
              <div
                v-else-if="i == 0"
                class="first-first-mes-position"
                :style="{right: getChatCardWidth + 'px' }"
              >{{firstMes(message.createdAt,i)}}</div>
            </div>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card color="#C0C0C0">
        <v-row>
          <v-col>
            <v-textarea
              class="mx-2 mt-5"
              rows="1"
              auto-grow
              v-model="inputMessage"
              background-color="white"
              outlined
              row-height="10"
              append-icon="send"
              @click:append="regMessage"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";
import { format } from "date-fns";

export default {
  data() {
    return {
      chatCardWidth: 0,
      messages: [],
      inputMessage: "",
      chatUser: "",
      editMes: "",
      mesUid: "",
      editStatus: true,
      editingModal: false,
      isMyMessageCla: false
    };
  },
  computed: {
    getChatCardWidth: function() {
      //80っのはfirst-mes-positionで定義してある
      return (this.chatCardWidth - 80) / 2;
    }
  },
  methods: {
    isMyMessage(mesId) {
      if (mesId == this.$store.getters.user.uid + this.$route.params["uid"]) {
        this.isMyMessageCla = true;
        return true;
      } else {
        return false;
      }
    },
    regMessage() {
      var len = 12;
      var str = "abcdefghijklmnopqrstuvwxyz";
      var strLen = str.length;
      var result = "";
      for (var i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * strLen)];
      }
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .add({
          message: this.inputMessage,
          ref: this.$route.params["uid"],
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          uid: result
        });
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .add({
          message: this.inputMessage,
          ref: this.$route.params["uid"] + this.$store.getters.user.uid,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          uid: result
        });
      this.inputMessage = "";
      setTimeout(() => {
        this.scrollToEnd();
      }, 100);
    },
    scrollToEnd() {
      var container = document.querySelector(".scroll");
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },
    displaySendTime(date) {
      return format(new Date(date.toDate()), "HH:mm");
    },
    editMesAction(mes, uid) {
      this.editMes = mes;
      this.mesUid = uid;
      this.editingModal = true;
    },
    updateMes() {
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .where("uid", "==", this.mesUid)
        .get()
        .then(doc => {
          var editingMesMyDocId;
          editingMesMyDocId = doc.docs[0].id;
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .collection("messages")
            .doc(editingMesMyDocId)
            .update({
              message: this.editMes,
              updatedAt: firebase.firestore.Timestamp.fromDate(new Date())
            });
        });
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .where("uid", "==", this.mesUid)
        .get()
        .then(doc => {
          var editingMesOtherDocId;
          editingMesOtherDocId = doc.docs[0].id;
          db.collection("users")
            .doc(this.$route.params["uid"])
            .collection("messages")
            .doc(editingMesOtherDocId)
            .update({
              message: this.editMes,
              updatedAt: firebase.firestore.Timestamp.fromDate(new Date())
            });
        });
      this.editingModal = false;
    },
    deleteMesAction(uid) {
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .where("uid", "==", uid)
        .get()
        .then(doc => {
          var editingMesMyDocId;
          editingMesMyDocId = doc.docs[0].id;
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .collection("messages")
            .doc(editingMesMyDocId)
            .delete();
        });
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .where("uid", "==", uid)
        .get()
        .then(doc => {
          var editingMesOtherDocId;
          editingMesOtherDocId = doc.docs[0].id;
          db.collection("users")
            .doc(this.$route.params["uid"])
            .collection("messages")
            .doc(editingMesOtherDocId)
            .delete();
        });
    },
    isFirstMes(date, i) {
      if (i != 0) {
        const thisTimeDate = date.toDate().getDate();
        const oneBeforeTimeDate = this.messages[i - 1].createdAt
          .toDate()
          .getDate();
        if (thisTimeDate - oneBeforeTimeDate == 0) {
          return false;
        } else {
          return true;
        }
      }
      return false;
    },
    isTopMes(i) {
      if (i == 0) {
        return true;
      } else {
        return false;
      }
    },
    firstMes(date, i) {
      const weekArray = ["", "日", "月", "火", "水", "木", "金", "土"];
      const today = new Date().getDate();
      if (i == 0) {
        return (
          format(new Date(date.toDate()), "M/d") +
          "(" +
          weekArray[format(new Date(date.toDate()), "c")] +
          ")"
        );
      } else if (today - date.toDate().getDate() == 1) {
        return "昨日";
      } else {
        return (
          format(new Date(date.toDate()), "M/d") +
          "(" +
          weekArray[format(new Date(date.toDate()), "c")] +
          ")"
        );
      }
    },
    adjustFirstMesPosition() {
      this.chatCardWidth = document.getElementById("chatCard").clientWidth;
    }
  },
  mounted() {
    this.chatCardWidth = document.getElementById("chatCard").clientWidth;
    window.addEventListener("resize", this.adjustFirstMesPosition);
    //最終ログインを更新
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .update({
        lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
      });
    setTimeout(() => {
      this.scrollToEnd();
    }, 1000);
  },
  firestore() {
    return {
      messages: db
        .collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .where("ref", "in", [
          this.$route.params["uid"],
          this.$store.getters.user.uid + this.$route.params["uid"]
        ])
        .orderBy("createdAt", "asc"),
      chatUser: db.collection("users").doc(this.$route.params["uid"])
    };
  }
};
</script>
<style>
.other_message {
  background: #6cfcfc;
  border: 1px solid;
  /* border-color: white; */
  border-radius: 0px 10px 10px 10px; /*左下だけ尖らせて吹き出し感を出す*/
  /* max-width: 200px; */
}
.my_message {
  background: #f5a37d;
  border: 1px solid;
  /* border-color: white; */
  border-radius: 10px 0px 10px 10px;
  /*左下だけ尖らせて吹き出し感を出す*/
}
.display-send-time {
  position: relative;
  right: 46px;
  bottom: 20px;
}
.display-get-time {
  position: relative;
  top: 10px;
  left: 50px;
}
.firstMesMargin {
  margin-top: 40px;
}
.first-mes-position {
  position: absolute;
  top: 10px;
  font-size: 12px;
  width: 80px;
  text-align: center;
}
.first-first-mes-position {
  position: absolute;
  bottom: 64px;
  font-size: 12px;
  width: 80px;
  text-align: center;
}
</style>