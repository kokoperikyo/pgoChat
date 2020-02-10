<template>
  <v-app>
    <v-container>
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
          <v-spacer></v-spacer>
          <v-toolbar-title>{{chatUser.name}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card class="overflow-y-auto scroll" style="max-height: 400px">
          <v-list color="#FFFAFA">
            <v-list-item style="white-space:pre-wrap; " v-for="(message, i) in messages" :key="i">
              <v-list-item-avatar v-if="isOthersMessage(message.ref)">
                <v-img :src="chatUser.avatarUrl"></v-img>
              </v-list-item-avatar>
              <div
                v-if="isOthersMessage(message.ref)"
                :class="{ firstMesMargin: isFristMes(message.createdAt,i),notFirstMesMargin: !isFristMes(message.createdAt,i)}"
                class="other_message px-5 py-2"
              >{{message.message}}</div>
              <div
                v-if="isOthersMessage(message.ref)"
                class="display-get-time"
              >{{displaySendTime(message.createdAt)}}</div>
              <v-spacer></v-spacer>
              <div
                v-if="!isOthersMessage(message.ref)"
                :class="{ firstMesMargin: isFristMes(message.createdAt,i),notFirstMesMargin: !isFristMes(message.createdAt,i)}"
                class="my_message px-5 pt-2"
              >
                {{message.message}}
                <div class="display-send-time">{{displaySendTime(message.createdAt)}}</div>
              </div>
              <div v-if="!editStatus">
                <v-btn
                  v-if="!isOthersMessage(message.ref)"
                  @click="editMesAction(message.message,message.uid)"
                  :class="{ firstMesMargin: isFristMes(message.createdAt,i),notFirstMesMargin: !isFristMes(message.createdAt,i)}"
                  class="ml-3"
                  outlined
                  x-small
                  fab
                  color="indigo"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                  v-if="!isOthersMessage(message.ref)"
                  @click="deleteMesAction(message.uid)"
                  :class="{ firstMesMargin: isFristMes(message.createdAt,i),notFirstMesMargin: !isFristMes(message.createdAt,i)}"
                  class="ml-1"
                  outlined
                  x-small
                  fab
                  color="error"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
              <div
                v-if="isFristMes(message.createdAt,i)"
                class="first-mes-position"
                :style="{right: getChatCardWidth + 'px' }"
              >{{firstMes(message.createdAt,i)}}</div>
              <div
                v-else-if="i == 0"
                class="first-first-mes-position"
                :style="{right: getChatCardWidth + 'px' }"
              >{{firstMes(message.createdAt,i)}}</div>
            </v-list-item>
          </v-list>
        </v-card>
        <v-card color="#C0C0C0">
          <v-row>
            <v-col cols="10">
              <v-textarea
                class="ml-2 mt-5"
                ml-2
                rows="1"
                auto-grow
                clearable
                clear-icon="cancel"
                v-model="inputMessage"
                background-color="white"
                outlined
                row-height="10"
              ></v-textarea>
            </v-col>
            <v-col cols="1" class="mt-5">
              <v-btn v-if="!canSend" @click="regMessage">送信</v-btn>
              <div v-else>
                <v-btn v-if="editStatus" @click="editStatus = false">編集</v-btn>
                <v-btn v-else @click="editStatus = true,editingModal = false">完了</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-container>
  </v-app>
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
      editingModal: false
    };
  },
  computed: {
    canSend: function() {
      if (this.inputMessage) {
        return false;
      } else {
        return true;
      }
    },
    getChatCardWidth: function() {
      //80っのはfirst-mes-positionで定義してある
      return (this.chatCardWidth - 80) / 2;
    }
  },
  methods: {
    isOthersMessage(who) {
      if (who == this.$store.getters.user.uid + this.$route.params["uid"]) {
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
    isFristMes(date, i) {
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
}
.my_message {
  background: #f5a37d;
  border: 1px solid;
  /* border-color: white; */
  border-radius: 10px 0px 10px 10px;
  /*左下だけ尖らせて吹き出し感を出す*/
}
.submit-area {
  border: 1px solid;
}
.display-send-time {
  position: relative;
  right: 70px;
}
.display-get-time {
  position: relative;
  top: 20px;
  left: 15px;
}
.editBtn {
  border: 3px solid;
  color: red;
}
.first-mes-position {
  position: absolute;
  bottom: 74px;
  font-size: 12px;
  width: 80px;
  text-align: center;
}
.first-first-mes-position {
  position: absolute;
  bottom: 50px;
  font-size: 12px;
  width: 80px;
  text-align: center;
}
.firstMesMargin {
  margin-top: 70px;
}
.notFirstMesMargin {
  margin-top: 10px;
}
</style>