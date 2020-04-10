<template>
  <div>
    <v-alert color="#8ac32b" v-show="addFriendSuccess" type="success">フレンド申請をしました</v-alert>
    <v-text-field
      v-model="searchUserName"
      label="ユーザー名を入力してください"
      append-icon="search"
      color="#8ac32b"
    ></v-text-field>
    <div v-if="serchedUsers.length != 0">{{serchedUsers.length}}人います</div>
    <v-card class="overflow-y-auto scroll" flat :max-height="getCardHeight">
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
          <v-btn
            @click="goProfile(serchedUser.id)"
            small
            class="mr-2"
            color="#8ac32b"
            fab
            dark
            depressed
          >
            <v-icon>mdi-shield-account-outline</v-icon>
          </v-btn>
          <v-btn
            color="#8ac32b"
            small
            fab
            dark
            depressed
            v-on:click.stop="sendFriendRequest"
            @click="sendFriendRequest(serchedUser.id,serchedUser.name,serchedUser.avatarUrl)"
          >
            <v-icon>mdi-account-plus-outline</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="mt-3" flat>
      <v-toolbar flat color="#8ac32b" dark>
        <v-spacer></v-spacer>
        <v-toolbar-title>申請中ユーザー</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list>
        <v-card class="overflow-y-auto scroll" tile flat :max-height="getCardHeight">
          <div v-if="user.sendFriendRequestList.length == 0">申請中のユーザーはいません</div>
          <v-list-item v-else v-for="(sendFriendRequest, i) in user.sendFriendRequestList" :key="i">
            <v-list-item-avatar>
              <v-img :src="sendFriendRequest.avatarUrl"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="sendFriendRequest.friendName"></v-list-item-title>
            </v-list-item-content>
            <v-btn
              color="#8ac32b"
              fab
              dark
              depressed
              small
              v-on:click.stop="sendFriendRequest"
              @click="goProfile(sendFriendRequest.friendId)"
              class="mr-2"
            >
              <v-icon>mdi-shield-account-outline</v-icon>
            </v-btn>

            <v-btn
              color="#004D40"
              fab
              dark
              depressed
              small
              @click="rejectFriendRequest(sendFriendRequest.avatarUrl,sendFriendRequest.friendId,sendFriendRequest.friendName)"
            >
              <v-icon>mdi-account-cancel</v-icon>
            </v-btn>
          </v-list-item>
        </v-card>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
import { iosAuthorizationOfNotification } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";
export default {
  data() {
    return {
      searchUserName: null,
      serchedUsers: [],
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
  computed: {
    getCardHeight() {
      //iphone
      if (navigator.userAgent.indexOf("iPhone") >= 0) {
        // iphoneSE以下
        if (window.innerWidth <= 320) {
          return 150;
          // iphone11pro,x,xs,6,7,8
        } else if (window.innerWidth <= 375) {
          return 200;
          // iphoneのそれ以外
        } else {
          return 260;
        }
      }
      //android
      else if (
        navigator.userAgent.indexOf("Mobile") >= 0 &&
        navigator.userAgent.indexOf("Android") >= 0
      ) {
        if (window.innerWidth <= 320) {
          return 150;
        } else {
          return 200;
        }
      } else {
        return null;
      }
      //タブレットの時
    }
  },
  methods: {
    sendNotification(id) {
      let argObj = {
        // 受信者のトークンIDと通知内容
        to: `/topics/${id}`,
        priority: "high",
        content_available: true,
        notification: {
          title: `${this.user.name}からフレンド申請がきています`,
          badge: "1"
        }
      };
      let optionObj = {
        //送信者のサーバーキー
        headers: {
          "Content-Type": "application/json",
          Authorization: "key=" + `${iosAuthorizationOfNotification}`
        }
      };
      this.axios.post("https://fcm.googleapis.com/fcm/send", argObj, optionObj);
    },
    //フレンド申請
    sendFriendRequest: function(id, friendName, firendAvatarUrl) {
      this.sendNotification(id);
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
      this.noResultMessage = "";
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
              !this.user.sendFriendRequestNameList.includes(doc.data().name) &&
              this.searchUserName != ""
            ) {
              setTimeout(() => {
                array.push(doc.data());
              }, 1000);
            }
          });
          this.serchedUsers = array;
          setTimeout(() => {
            if (this.serchedUsers.length == 0) {
              this.noResultMessage = "一致するユーザーがいません";
            } else {
              this.noResultMessage = "";
            }
          }, 1200);
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