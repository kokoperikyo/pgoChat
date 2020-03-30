<template>
  <div>
    <v-dialog v-model="exitModal" max-width="376">
      <v-card>
        <v-card-title class="pb-0">アカウント情報が全て削除されます</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn rounded color="primary" @click="deleteAccount" class="mr-5">退会</v-btn>
          <v-btn rounded color="primary" outlined @click="exitModal = false">閉じる</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-btn rounded outlined @click="exitModal = true">退会</v-btn>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
import firebase from "@firebase/app";

export default {
  data: () => ({
    exitModal: false,
    userInfo: null,
    test: null
  }),
  mounted() {},
  methods: {
    deleteAccount() {
      this.deleteFriendFromFriendsData();
      this.deleteFriendReqFromFriendsData();

      var user = firebase.auth().currentUser;
      user
        .delete()
        .then(function() {})
        .catch(function() {
          alert(
            "大変申し訳ございませんが、ログアウトして再度ログインした後実行してくだい"
          );
        });
    },
    deleteFriendFromFriendsData() {
      this.userInfo.friends.forEach(friend => {
        this.deleteFromfriendIdList(friend.id);
        this.deleteFromfriends(friend.id);
      });
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .delete();
    },
    deleteFromfriendIdList(friendId) {
      db.collection("users")
        .doc(friendId)
        .update({
          friendIdList: firebase.firestore.FieldValue.arrayRemove(
            this.$store.getters.user.uid
          )
        });
    },
    deleteFromfriends(friendId) {
      db.collection("users")
        .doc(friendId)
        .update({
          friends: firebase.firestore.FieldValue.arrayRemove(
            db.collection("users").doc(this.$store.getters.user.uid)
          )
        });
    },
    deleteFriendReqFromFriendsData() {
      this.userInfo.friendRequestList.forEach(friend => {
        this.deleteFromSendFriendRequestList(friend.id);
        this.deleteFromSendFriendRequestNameList(friend.id);
      });
    },
    deleteFromSendFriendRequestList(friendId) {
      db.collection("users")
        .doc(friendId)
        .update({
          sendFriendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.userInfo.avatarUrl,
            friendId: this.$store.getters.user.uid,
            friendName: this.userInfo.name
          })
        });
    },
    deleteFromSendFriendRequestNameList(friendId) {
      db.collection("users")
        .doc(friendId)
        .update({
          sendFriendRequestNameList: firebase.firestore.FieldValue.arrayRemove(
            this.userInfo.name
          )
        });
    }
  },
  firestore() {
    return {
      userInfo: db.collection("users").doc(this.$store.getters.user.uid)
    };
  }
};
</script>