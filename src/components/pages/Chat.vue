<template>
  <v-app>
    <v-container>
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
          <v-list-item-content>
            <v-list-item-title v-if="isOthersMessage(message.ref)" v-text="message.message"></v-list-item-title>
          </v-list-item-content>
          <div
            v-if="!isOthersMessage(message.ref)"
            style="white-space:pre-wrap; "
          >{{message.message}}</div>
        </v-list-item>
      </v-list>
      <v-row>
        <v-col cols="11">
          <v-textarea clearable clear-icon="cancel" v-model="inputMessage"></v-textarea>
        </v-col>
        <v-col cols="1">
          <v-btn @click="regMessage" :disabled="canSend">送信</v-btn>
        </v-col>
      </v-row>
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
      chatUser: ""
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