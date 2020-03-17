<template>
  <v-card class="mx-auto" tile>
    <v-dialog v-model="addNicknameModal" max-width="350">
      <v-card>
        <v-card-title class="headline">
          <div>ニックネームを入力</div>
          <v-text-field
            @keydown.enter="addNicknameByEnter"
            v-model="inputNickname"
            class="mr-5"
            clearable
            clear-icon="cancel"
          ></v-text-field>
          <v-btn @click="addNickname()" small fab>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editNicknameModal" max-width="350">
      <v-card>
        <v-card-title class="headline">
          <div>ニックネームを編集</div>
          <v-text-field
            @keydown.enter="editNicknameByEnter"
            v-model="inputEditNickname"
            class="mr-5"
            clearable
            clear-icon="cancel"
          ></v-text-field>
          <v-btn @click="editNickname()" small fab>
            <v-icon>mdi-autorenew</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>
    <v-toolbar color="light-blue" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>フレンドリスト</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- こっからフレンドリスト -->
    <v-list>
      <div v-if="friendLists.friends.length == 0">フレンドはいません</div>
      <v-list-item
        v-else
        class="px-2"
        two-line
        v-for="(friendList, i) in friendLists.friends"
        :key="i"
      >
        <v-list-item-avatar
          class="ml-3"
          v-if="$vuetify.breakpoint.mdAndUp"
          size="8"
          :color="isOnline(friendList.lastLogin) ? '#04F620' : 'grey'"
        ></v-list-item-avatar>
        <v-list-item-avatar size="40" class="mr-3">
          <v-img :src="friendList.avatarUrl"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="friendList.name"></v-list-item-title>
          <v-list-item-subtitle style="font-size:12px;">
            <v-tooltip right v-if="isNickNameExist(getNickname(friendList.nicknameList))">
              <template v-slot:activator="{ on }">
                <v-btn
                  @click="addNicknameModalDis(friendList.id)"
                  v-on="on"
                  x-small
                  fab
                  dark
                  color="primary"
                  class="ml-1"
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
                class="ml-1"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
        <div v-if="$vuetify.breakpoint.mdAndUp">
          <v-text
            class="mr-5"
            style="width:80px; text-align:center;"
          >{{getLastLogin(friendList.lastLogin)}}</v-text>
          <v-btn outlined @click="goProfile(friendList.id)" class="mr-2" small fab>
            <v-icon>mdi-shield-account-outline</v-icon>
          </v-btn>
          <v-btn outlined @click="goChat(friendList.id)" class="mr-2" small fab>
            <v-icon>mdi-chat-processing-outline</v-icon>
          </v-btn>
          <v-btn @click="deleteFriend(friendList.id)" class="red mr-2" small dark fab>
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </div>
        <v-list-item-action class="ml-0" v-if="$vuetify.breakpoint.smAndDown">
          <v-list-item-title>
            {{getLastLogin(friendList.lastLogin)}}
            <v-list-item-avatar
              class="ml-5"
              size="8"
              :color="isOnline(friendList.lastLogin) ? '#04F620' : 'grey'"
            ></v-list-item-avatar>
          </v-list-item-title>
          <v-list-item-titile>
            <v-btn outlined @click="goProfile(friendList.id)" class="mr-1" x-small fab>
              <v-icon>mdi-shield-account-outline</v-icon>
            </v-btn>
            <v-btn outlined @click="goChat(friendList.id)" class="mr-1" x-small fab>
              <v-icon>mdi-chat-processing-outline</v-icon>
            </v-btn>
            <v-btn @click="deleteFriend(friendList.id)" class="red" x-small dark fab>
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-list-item-titile>
        </v-list-item-action>
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
      if (this.inputEditNickname != this.beforeNickname) {
        user.update({
          nicknameList: firebase.firestore.FieldValue.arrayRemove({
            nickname: this.beforeNickname,
            ref: this.$store.getters.user.uid
          })
        });
      }
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
    isNickNameExist(nickname) {
      if (nickname == undefined) {
        return true;
      } else {
        return false;
      }
    },
    addNicknameByEnter() {
      // 日本語入力中のEnterキー操作は無効にする
      if (event.keyCode !== 13) return;

      this.addNickname();
    },
    editNicknameByEnter() {
      // 日本語入力中のEnterキー操作は無効にする
      if (event.keyCode !== 13) return;

      this.editNickname();
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