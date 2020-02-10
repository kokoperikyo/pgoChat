<template>
  <v-card class="mx-auto" tile>
    <v-dialog v-model="addNicknameModal" max-width="350">
      <v-card>
        <v-card-title class="headline">
          <div>ニックネームを入力</div>
          <v-text-field v-model="inputNickname"></v-text-field>
          <v-btn @click="addNickname()">登録</v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editNicknameModal" max-width="350">
      <v-card>
        <v-card-title class="headline">
          <div>ニックネームを編集</div>
          <v-text-field v-model="inputEditNickname"></v-text-field>
          <v-btn @click="editNickname()">更新</v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>
    <v-list>
      <v-list-item v-for="(friendList, i) in friendLists.friends" :key="i">
        <v-list-item-avatar size="10" :color="isOnline(friendList.lastLogin) ? '#04F620' : 'grey'"></v-list-item-avatar>
        <v-list-item-avatar class="mr-5">
          <v-img :src="friendList.avatarUrl"></v-img>
        </v-list-item-avatar>
        <div class="mr-2">{{friendList.name}}</div>

        <v-tooltip right v-if="isNickNameExist(friendList.nicknameList)">
          <template v-slot:activator="{ on }">
            <v-btn
              @click="addNicknameModalDis(friendList.id)"
              v-on="on"
              x-small
              fab
              dark
              color="primary"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>ニックネームを追加できます</span>
        </v-tooltip>
        <div v-else>
          ({{getNickname(friendList.nicknameList)}})
          <v-btn
            @click="editNicknameModalDis(friendList.id,getNickname(friendList.nicknameList))"
            x-small
            fab
            dark
            color="primary"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div
          class="mr-5"
          style="width:162px; text-align:center;"
        >{{getLastLogin(friendList.lastLogin)}}</div>
        <v-btn outlined @click="goProfile(friendList.id)" class="mr-2">プロフィール</v-btn>
        <v-btn outlined @click="goChat(friendList.id)" class="mr-2">チャット</v-btn>
        <v-btn @click="deleteFriend(friendList.id)" class="red" dark>削除</v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import { db } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";

export default {
  data: () => ({
    friendIdLists: [],
    items: [],
    search: null,
    caseSensitive: false,
    friendLists: Object,
    friendId: null,
    addNicknameModal: false,
    editNicknameModal: false,
    inputNickname: null,
    inputEditNickname: null,
    beforeNickname: null
  }),
  mounted() {
    //最終ログインを更新
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .update({
        lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
      });
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
    },
    addNicknameModalDis(friendId) {
      this.addNicknameModal = true;
      this.friendId = friendId;
    },
    editNicknameModalDis(friendId, beforeNickname) {
      this.editNicknameModal = true;
      this.friendId = friendId;
      this.beforeNickname = beforeNickname;
      this.inputEditNickname = beforeNickname;
    },
    addNickname() {
      db.collection("users")
        .doc(this.friendId)
        .update({
          nicknameList: firebase.firestore.FieldValue.arrayUnion({
            nickname: this.inputNickname,
            ref: this.$store.getters.user.uid
          })
        });
      this.addNicknameModal = false;
    },
    editNickname() {
      const user = db.collection("users").doc(this.friendId);
      user.update({
        nicknameList: firebase.firestore.FieldValue.arrayUnion({
          nickname: this.inputEditNickname,
          ref: this.$store.getters.user.uid
        })
      });
      user.update({
        nicknameList: firebase.firestore.FieldValue.arrayRemove({
          nickname: this.beforeNickname,
          ref: this.$store.getters.user.uid
        })
      });
      this.editNicknameModal = false;
    },
    getNickname(nicknameList) {
      if (nicknameList.length != 0) {
        const target = nicknameList.find(items => {
          return items.ref === this.$store.getters.user.uid;
        });
        if (target != undefined) {
          return target.nickname;
        }
      }
    },
    isNickNameExist(nicknameList) {
      if (nicknameList.length != 0) {
        return false;
      } else {
        return true;
      }
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
      friendLists: db.collection("users").doc(this.$store.getters.user.uid)
    };
  }
};
</script>
<style>
</style>