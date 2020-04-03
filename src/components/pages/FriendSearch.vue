<template>
  <div>
    <v-alert v-show="addFriendSuccess" type="success">フレンド申請をしました</v-alert>
    <v-text-field v-model="searchUserName" label="ユーザー名を入力してください" append-icon="search"></v-text-field>
    <v-card class="mx-auto" tile>
      <v-list v-if="searchUserName">
        {{noResultMessage}}
        <v-list-item
          v-for="(serchedUser, i) in serchedUsers"
          :key="i"
          @click="goProfile(serchedUser.id)"
        >
          <v-list-item-avatar>
            <v-img :src="serchedUser.avatarUrl"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="serchedUser.name" style="font-size:16px;"></v-list-item-title>
          </v-list-item-content>
          <v-btn @click="goProfile(serchedUser.id)" class="mr-2" fab small outlined>
            <v-icon>mdi-shield-account-outline</v-icon>
          </v-btn>
          <v-btn
            fab
            small
            outlined
            v-on:click.stop="sendFriendRequest"
            @click="sendFriendRequest(serchedUser.id,serchedUser.name,serchedUser.avatarUrl)"
          >
            <v-icon>mdi-account-plus-outline</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="mt-5" tile>
      <v-toolbar color="indigo" dark>
        <v-spacer></v-spacer>
        <v-toolbar-title>申請中ユーザー</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list>
        <div v-if="user.sendFriendRequestList.length == 0">申請中のユーザーはいません</div>
        <v-list-item v-else v-for="(sendFriendRequest, i) in user.sendFriendRequestList" :key="i">
          <v-list-item-avatar>
            <v-img :src="sendFriendRequest.avatarUrl"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="sendFriendRequest.friendName"></v-list-item-title>
          </v-list-item-content>
          <v-btn
            fab
            small
            outlined
            v-on:click.stop="sendFriendRequest"
            @click="goProfile(sendFriendRequest.friendId)"
            class="mr-2"
          >
            <v-icon>mdi-shield-account-outline</v-icon>
          </v-btn>

          <v-btn
            fab
            small
            outlined
            @click="rejectFriendRequest(sendFriendRequest.avatarUrl,sendFriendRequest.friendId,sendFriendRequest.friendName)"
          >
            <v-icon>mdi-account-cancel</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";
export default {
  data() {
    return {
      searchUserName: null,
      serchedUsers: Object,
      noResultMessage: null,
      user: null,
      friendIdList: [],
      friendNameList: [],
      addFriendSuccess: false,
      sendFriendNameList: []
    };
  },
  mounted() {
    //最終ログインを更新
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .update({
        lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
      });
    //フレンドID取得
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .get()
      .then(doc => {
        //Cannot read property 'forEach' させないため
        if (doc.data().friends != undefined) {
          doc.data().friends.forEach(item => {
            this.friendIdList.push(item.id);
          });
          //フレンドネーム一覧取得
          db.collection("users")
            .where("id", "in", this.friendIdList)
            .get()
            .then(snap => {
              snap.forEach(doc => {
                this.friendNameList.push(doc.data().name);
              });
            });
        }
      });
  },
  methods: {
    //フレンド申請
    sendFriendRequest: function(id, friendName, firendAvatarUrl) {
      //申請を申請相手のDBに保存する
      const users = db.collection("users");
      users.doc(id).update({
        friendRequestList: firebase.firestore.FieldValue.arrayUnion({
          id: this.$store.getters.user.uid,
          userName: this.user.name,
          avatarUrl: this.user.avatarUrl
        })
      });
      //申請を申請したユーザーのDBに保存する（申請中ユーザー表示のため）
      users.doc(this.$store.getters.user.uid).update({
        sendFriendRequestList: firebase.firestore.FieldValue.arrayUnion({
          friendId: id,
          friendName: friendName,
          avatarUrl: firendAvatarUrl
        })
      });
      //申請した相手のユーザー名を申請したユーザーのDBに保存する（検索から除外するため）
      users.doc(this.$store.getters.user.uid).update({
        sendFriendRequestNameList: firebase.firestore.FieldValue.arrayUnion(
          friendName
        )
      });
      this.searchUserName = "";
      this.addFriendSuccess = true;
      setTimeout(() => {
        this.addFriendSuccess = false;
      }, 3000);
    },
    goProfile(friendId) {
      this.$router.push({ name: "friendProfile", params: { uid: friendId } });
    },
    rejectFriendRequest(avatarUrl, friendId, friendName) {
      //申請先側
      db.collection("users")
        .doc(friendId)
        .update({
          friendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.user.avatarUrl,
            id: this.$store.getters.user.uid,
            userName: this.user.name
          })
        });
      //申請側
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .update({
          sendFriendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: avatarUrl,
            friendId: friendId,
            friendName: friendName
          })
        });
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .update({
          sendFriendRequestNameList: firebase.firestore.FieldValue.arrayRemove(
            friendName
          )
        });
    }
  },
  watch: {
    searchUserName: function() {
      db.collection("users")
        .orderBy("name")
        .startAt(this.searchUserName)
        .endAt(this.searchUserName + "\uf8ff")
        .get()
        .then(snap => {
          const array = [];
          snap.forEach(doc => {
            // 自分と既存フレンドはフレンド検索から排除
            if (
              !this.friendNameList.includes(doc.data().name) &&
              doc.data().name != this.user.name &&
              !this.user.sendFriendRequestNameList.includes(doc.data().name)
            ) {
              array.push(doc.data());
            }
          });
          this.serchedUsers = array;
          if (this.serchedUsers.length == 0) {
            this.noResultMessage = "一致するユーザーがいません";
          } else {
            this.noResultMessage = "";
          }
        });
    }
  },
  firestore() {
    return {
      user: db.collection("users").doc(this.$store.getters.user.uid)
    };
  }
};
</script>