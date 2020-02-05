<template>
  <v-app>
    <v-container>
      <v-card class="mx-auto" max-width="1100px">
        <v-toolbar color="gray" dark>
          <v-spacer></v-spacer>
          <v-toolbar-title>{{chatUser.name}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list disabled>
          <v-list-item v-for="(message, i) in messages" :key="i">
            <v-list-item-avatar v-if="isOthersMessage(message.ref)">
              <v-img :src="chatUser.avatarUrl"></v-img>
            </v-list-item-avatar>
            <v-list-item-content
              v-if="isOthersMessage(message.ref)"
              :style="{ 'margin-right': getMarginRight(message.message)}"
              :class="{ 'other_message': isOthersMessage(message.ref) }"
              class="mt-2"
            >
              <v-list-item-title
                style="white-space:pre-wrap;"
                v-text="message.message"
                class="pl-5"
              ></v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <div
              v-if="!isOthersMessage(message.ref)"
              style="white-space:pre-wrap; "
              class="my_message px-5 py-2 mt-2"
            >{{message.message}}</div>
          </v-list-item>
        </v-list>
        <v-row>
          <v-col cols="10">
            <v-textarea clearable clear-icon="cancel" v-model="inputMessage"></v-textarea>
          </v-col>
          <v-col cols="1">
            <v-btn @click="regMessage" :disabled="canSend">送信</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { db } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";

export default {
  data() {
    return {
      messages: [],
      inputMessage: "",
      chatUser: "",
      test: "600px"
    };
  },
  computed: {
    canSend: function() {
      if (this.inputMessage) {
        return false;
      } else {
        return true;
      }
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
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .add({
          message: this.inputMessage,
          ref: this.$route.params["uid"],
          createdAt: firebase.firestore.Timestamp.fromDate(new Date())
        });
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .add({
          message: this.inputMessage,
          ref: this.$route.params["uid"] + this.$store.getters.user.uid,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date())
        });
      this.inputMessage = "";
    },
    getMarginRight(message) {
      const spaceIndexNumberList = [];
      const mesLengthList = [];
      var lastRowMes = 0;
      // var messageLength = 0;

      // const chatWidth = 1100;
      // const avatarAndPad = 80;
      // const mesLeftPad = 20;
      // var paddingRight = 0;

      if (message.includes("\n")) {
        Array.prototype.forEach.call(message, function(str, index) {
          if (str.includes("\n")) {
            spaceIndexNumberList.push(index);
          }
        });
        spaceIndexNumberList.forEach((items, index) => {
          // eslint-disable-next-line no-console
          console.log(spaceIndexNumberList);

          if (index == 0) {
            mesLengthList.push(items);
            // eslint-disable-next-line no-console
            console.log(items);
          } else {
            mesLengthList.push(
              spaceIndexNumberList[index] - spaceIndexNumberList[index - 1] - 1
            );
            lastRowMes = message.length - spaceIndexNumberList[index] - 1;
            mesLengthList.push(lastRowMes);
          }
        });
        // eslint-disable-next-line no-console
        // console.log(mesLengthList);
        // messageLength = Math.max.apply(null, mesLengthList);
      } else {
        // messageLength = message.length;
      }

      // ここのかける１７について
      // 全角文字が１文字１６.５くらい
      // 本来なら半角と全角も厳密に判定するべし
      // paddingRight =
      // chatWidth - avatarAndPad - mesLeftPad * 3 - messageLength * 16.8;

      return 100 + "px";
    }
  },
  mounted() {
    //最終ログインを更新
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .update({
        lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
      });
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
/* :root {
  --padding-right: 200px;
} */
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
  border-radius: 10px 0px 10px 10px; /*左下だけ尖らせて吹き出し感を出す*/
}
</style>