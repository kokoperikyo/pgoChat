<template>
  <v-card class="mx-auto" max-width>
    <v-sheet class="pa-4 primary lighten-2">
      <v-text-field
        v-model="search"
        dense
        hide-details
        clearable
        clear-icon="mdi-close-circle"
        background-color="white"
      ></v-text-field>
      <v-checkbox v-model="caseSensitive" dark hide-details label="完全一致検索"></v-checkbox>
    </v-sheet>
    <v-list>
      <v-treeview :items="friendList.friends" :search="search" :filter="filter">
        <template v-slot:prepend="{ item }">
          <v-list-item-avatar size="10" :color="isOnline(item.lastLogin) ? '#04F620' : 'grey'"></v-list-item-avatar>
          <v-list-item-avatar class="mr-5">
            <v-img :src="item.avatarUrl"></v-img>
          </v-list-item-avatar>
        </template>
        <template v-slot:append="{ item }">
          <span class="mr-5">{{getLastLogin(item.lastLogin)}}</span>
          <v-btn outlined @click="goProfile(item.id)">プロフィール</v-btn>
          <v-btn outlined class="ml-2" @click="goChat(item.id)">チャット</v-btn>
          <v-btn outlined dark class="ml-2 red" @click="deleteFriend(item.id)">削除</v-btn>
        </template>
      </v-treeview>
      <v-card class="mx-2 mt-5">
        <v-btn block outlined color="light-blue" dark to="/friendSearch">新しいフレンドを探す</v-btn>
      </v-card>
    </v-list>
  </v-card>
</template>
<script>
import { db } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";

export default {
  data: () => ({
    friendIdList: [],
    items: [],
    search: null,
    caseSensitive: false,
    friendList: Object
  }),
  mounted() {
    //最終ログインを更新
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .update({
        lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
      });
    //ふれんどのuidをリストに保存
  },
  methods: {
    getLastLogin: function(loginDate) {
      const now = new Date();
      const timeDate = now.getTime() - loginDate.toDate().getTime();
      const diffDayDate = timeDate / (1000 * 60 * 60 * 24);
      const diffHourDate = timeDate / (1000 * 60 * 60);
      const diffMinutesDate = timeDate / (1000 * 60);
      const day = Math.floor(diffDayDate);
      const hour = Math.floor(diffHourDate);
      const minutes = Math.floor(diffMinutesDate);
      if (day > 0) {
        return day + "日前";
      } else if (hour > 0) {
        return hour + "時間前";
      } else if (minutes > 0) {
        return minutes + "分前";
      } else {
        return "オンライン";
      }
    },
    isOnline: function(loginDate) {
      const now = new Date();
      const timeDate = now.getTime() - loginDate.toDate().getTime();
      const floorDate = Math.floor(timeDate / (1000 * 60));
      if (floorDate <= 1) {
        return true;
      } else {
        return false;
      }
    },
    goProfile: function(uid) {
      this.$router.push({ name: "friendProfile", params: { uid: uid } });
    },
    goChat(uid) {
      this.$router.push({ name: "chat", params: { uid: uid } });
    },
    deleteFriend(friendId) {
      //ログイン中のユーザーのDB
      const users = db.collection("users");
      users.doc(this.$store.getters.user.uid).update({
        friends: firebase.firestore.FieldValue.arrayRemove(users.doc(friendId))
      });
      users.doc(this.$store.getters.user.uid).update({
        friendIdList: firebase.firestore.FieldValue.arrayRemove(friendId)
      });
      //フレンドのDB
      users.doc(friendId).update({
        friends: firebase.firestore.FieldValue.arrayRemove(
          users.doc(this.$store.getters.user.uid)
        )
      });
      users.doc(friendId).update({
        friendIdList: firebase.firestore.FieldValue.arrayRemove(
          this.$store.getters.user.uid
        )
      });
    }
  },
  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    }
  },
  firestore() {
    return {
      friendList: db.collection("users").doc(this.$store.getters.user.uid)
    };
  }
};
</script>