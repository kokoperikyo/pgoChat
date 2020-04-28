<template>
  <v-card class="mx-auto" tile flat>
    <v-dialog v-model="deleteFriendDialog" max-width="320">
      <v-card class="pa-3">
        <div class="ml-4">フレンドを削除しますか？</div>
        <div class="ml-4">ブロックしますか？</div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn rounded dark depressed color="#004D40" @click="deleteFriend">削除</v-btn>
          <v-btn rounded dark depressed color="#004D40" @click="blockFriend">ブロック</v-btn>
          <v-btn rounded outlined color="#004D40" @click="deleteFriendDialog = false">閉じる</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-alert
          style="font-size:11px;"
          class="py-2 mx-2 mt-2"
          color="red"
          type="info"
        >ブロックするとその人からはフレンド通知が届かなくなります</v-alert>
      </v-card>
    </v-dialog>
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
            color="#8ac32b"
          ></v-text-field>
          <v-btn @click="addNickname()" small fab depressed dark color="#8ac32b">
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
            color="#8ac32b"
          ></v-text-field>
          <v-btn @click="editNickname()" small fab depressed dark color="#8ac32b">
            <v-icon>mdi-autorenew</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>
    <v-dialog v-model="blockAccountDialog" max-width="420">
      <v-card class>
        <v-list>
          <v-list-item v-for="blockList in friendLists.blockListDis" :key="blockList.id">
            <v-list-item-avatar size="40" class="mr-3">
              <v-img :src="blockList.avatarUrl"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle v-text="blockList.userName"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action class>
              <v-btn x-small color="#004D40" outlined rounded @click="removeBlock(blockList)">
                <v-icon small>mdi-account-key-outline</v-icon>ブロック解除
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>

    <v-toolbar height="40px" color="#8ac32b" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>フレンドリスト</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="blockAccountDialog = true">
        <v-icon>mdi-account-cancel</v-icon>
      </v-btn>
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>-->
    </v-toolbar>
    <!-- こっからフレンドリスト -->
    <v-card flat class="overflow-y-auto scroll" :max-height="getChatCardHeifht">
      <v-list>
        <div v-if="friendLists.friends.length == 0">フレンドはいません</div>
        <v-list-item
          v-else
          class="pl-2 pr-0"
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
            <v-list-item-title v-text="friendList.name" class="mt-1"></v-list-item-title>
            <v-list-item-subtitle style="font-size:12px;" class="mt-1">
              <v-tooltip right v-if="isNickNameExist(getNickname(friendList.nicknameList))">
                <template v-slot:activator="{ on }">
                  <v-btn
                    @click="addNicknameModalDis(friendList.id)"
                    v-on="on"
                    x-small
                    fab
                    dark
                    depressed
                    color="#8ac32b"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <span>ニックネームを追加できます</span>
              </v-tooltip>
              <div v-else>
                {{getNickname(friendList.nicknameList)}}
                <v-btn
                  @click="editNicknameModalDis(friendList.id,getNickname(friendList.nicknameList))"
                  x-small
                  fab
                  dark
                  color="#8ac32b"
                  class="ml-1"
                  depressed
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
            <v-btn
              @click="goProfile(friendList.id)"
              color="#8ac32b"
              class="mr-2"
              depressed
              small
              fab
              dark
            >
              <v-icon>mdi-shield-account</v-icon>
            </v-btn>
            <v-btn
              @click="goChat(friendList.id)"
              color="#8ac32b"
              class="mr-2"
              small
              fab
              depressed
              dark
            >
              <v-icon>mdi-chat-processing</v-icon>
            </v-btn>
            <v-btn
              @click="deleteFriendByDialog(friendList.avatarUrl,friendList.id,friendList.name)"
              class="mr-2"
              small
              dark
              fab
              color="#004D40"
              depressed
            >
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </div>
          <v-list-item-action class="ml-0" v-if="$vuetify.breakpoint.smAndDown">
            <v-list-item-title>
              {{getLastLogin(friendList.lastLogin)}}
              <v-list-item-avatar
                class="ml-1"
                size="8"
                :color="isOnline(friendList.lastLogin) ? '#04F620' : 'grey'"
              ></v-list-item-avatar>
            </v-list-item-title>
            <v-list-item-subtitle class="mr-5">
              <v-btn
                @click="goProfile(friendList.id)"
                color="#8ac32b"
                class="mr-1"
                icon
                dark
                depressed
              >
                <v-icon x-large>mdi-account-circle</v-icon>
              </v-btn>
              <v-btn
                @click="goChat(friendList.id)"
                color="#8ac32b"
                class="mr-1"
                x-small
                fab
                dark
                depressed
              >
                <v-icon>mdi-chat-processing</v-icon>
              </v-btn>
              <v-btn
                @click="deleteFriendByDialog(friendList.avatarUrl,friendList.id,friendList.name)"
                class="#004D40 mr-2"
                x-small
                dark
                fab
                color="#004D40"
                depressed
              >
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
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
    beforeNickname: null,
    deleteFriendAvatar: null,
    deleteFriendId: null,
    deleteFriendName: null,
    deleteFriendDialog: false,
    blockAccountDialog: false,
    screenHeight: 0
  }),
  mounted() {
    this.screenHeight = window.parent.screen.height;
    //最終ログインを更新
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .update({
        lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
      });
    this.screenHeight = window.parent.screen.height;
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
    deleteFriend() {
      //ログイン中のユーザーのDB
      const users = db.collection("users");
      users.doc(this.$store.getters.user.uid).update({
        friends: firebase.firestore.FieldValue.arrayRemove(
          users.doc(this.deleteFriendId)
        )
      });
      users.doc(this.$store.getters.user.uid).update({
        friendIdList: firebase.firestore.FieldValue.arrayRemove(
          this.deleteFriendId
        )
      });
      //フレンドのDB
      users.doc(this.deleteFriendId).update({
        friends: firebase.firestore.FieldValue.arrayRemove(
          users.doc(this.$store.getters.user.uid)
        )
      });
      users.doc(this.deleteFriendId).update({
        friendIdList: firebase.firestore.FieldValue.arrayRemove(
          this.$store.getters.user.uid
        )
      });
      this.deleteFriendDialog = false;
    },
    blockFriend() {
      const users = db.collection("users");
      users.doc(this.$store.getters.user.uid).update({
        blockList: firebase.firestore.FieldValue.arrayUnion(this.deleteFriendId)
      });
      users.doc(this.$store.getters.user.uid).update({
        blockListDis: firebase.firestore.FieldValue.arrayUnion({
          avatarUrl: this.deleteFriendAvatar,
          id: this.deleteFriendId,
          userName: this.deleteFriendName
        })
      });
      this.deleteFriend();
    },
    removeBlock(blockInfo) {
      const users = db.collection("users");
      users.doc(this.$store.getters.user.uid).update({
        blockList: firebase.firestore.FieldValue.arrayRemove(blockInfo.id)
      });
      users.doc(this.$store.getters.user.uid).update({
        blockListDis: firebase.firestore.FieldValue.arrayRemove({
          avatarUrl: blockInfo.avatarUrl,
          id: blockInfo.id,
          userName: blockInfo.userName
        })
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
      if (
        this.inputNickname == null ||
        this.inputNickname == "" ||
        this.inputNickname == " "
      ) {
        this.addNicknameModal = false;
      } else {
        db.collection("users")
          .doc(this.friendId)
          .update({
            nicknameList: firebase.firestore.FieldValue.arrayUnion({
              nickname: this.inputNickname,
              ref: this.$store.getters.user.uid
            })
          });
        this.addNicknameModal = false;
      }
    },
    editNickname() {
      const user = db.collection("users").doc(this.friendId);
      if (
        this.inputEditNickname == null ||
        this.inputEditNickname == "" ||
        this.inputEditNickname == " "
      ) {
        user.update({
          nicknameList: firebase.firestore.FieldValue.arrayRemove({
            nickname: this.beforeNickname,
            ref: this.$store.getters.user.uid
          })
        });
      } else {
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
    },
    deleteFriendByDialog(friendAvatar, friendId, friendName) {
      this.deleteFriendDialog = true;
      this.deleteFriendAvatar = friendAvatar;
      this.deleteFriendId = friendId;
      this.deleteFriendName = friendName;
    }
  },
  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    },
    getChatCardHeifht() {
      //ヘッダー、フッター、タブバー、パディング
      var header = 40;
      var footer = 54;
      var toolbar = 40;
      var padOfiphone = 20;
      var padOfLargeiphone = 78;
      var padOfTab = 40;
      var andMobBar = 60;
      // iphoneの時
      if (navigator.userAgent.indexOf("iPhone") >= 0) {
        // iphone8plus以下
        if (window.innerHeight <= 716) {
          return this.screenHeight - header - footer - toolbar - padOfiphone;
          // iphoneX以上
        } else {
          return (
            this.screenHeight - header - footer - toolbar - padOfLargeiphone
          );
        }
      }
      //androidモバイルの時
      else if (
        navigator.userAgent.indexOf("Android") >= 0 &&
        navigator.userAgent.indexOf("Mobile") >= 0
      ) {
        return this.screenHeight - header - footer - toolbar - andMobBar;
      }
      //androidタブレットの時
      else if (navigator.userAgent.indexOf("Android") >= 0) {
        return this.screenHeight - header - toolbar - andMobBar;
      }
      //タブレット(ipad)の時
      else if (window.innerWidth > 700 && window.innerWidth <= 1024) {
        return this.screenHeight - header - toolbar - padOfTab;
      } else {
        return null;
      }
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