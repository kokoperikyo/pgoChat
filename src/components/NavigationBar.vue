<template>
  <v-app>
    <!-- フレンド許可 -->
    <v-dialog v-model="requestAcceptDialog" max-width="290">
      <v-card>
        <v-card-title class="pb-0">フレンドになりますか？</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn rounded color="#004D40" dark @click="acceptFriendRequest" class="mr-5">なる</v-btn>
          <v-btn rounded color="#004D40" outlined @click="requestAcceptDialog = false">閉じる</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- フレンド申請拒否 -->
    <v-dialog v-model="requestRejectDialog" max-width="290">
      <v-card>
        <v-card-title class="pb-0">お断りしますか？</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn rounded color="#004D40" dark @click="rejectFriendRequest" class="mr-5">断る</v-btn>
          <v-btn rounded color="#004D40" outlined @click="requestRejectDialog = false">閉じる</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="acceptFriendRequestModal" max-width="350">
      <v-card>
        <v-card-title class="headline pb-0">フレンドになりました！</v-card-title>
        <v-row justify="center">
          <v-icon color="#8ac32b" size="200" style="center">mdi-checkbox-marked-circle-outline</v-icon>
        </v-row>
      </v-card>
    </v-dialog>
    <v-dialog v-model="rejectFriendRequestModal" max-width="350">
      <v-card>
        <v-card-title class="headline">フレンド申請を拒否しました</v-card-title>
        <v-row justify="center">
          <v-icon color="#FF3D00" size="200" style="center">mdi-checkbox-marked-circle-outline</v-icon>
        </v-row>
      </v-card>
    </v-dialog>
    <v-navigation-drawer v-if="userStatus && !isSmallerThanTablet" v-model="drawer" clipped app>
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- スマホ、タブレットの時のみ表示 -->
    <v-footer
      v-if="isSmallerThanTablet && userStatus"
      height="54px"
      color="#DE4097"
      padless
      absolute
      dark
    >
      <v-row style="position: relative;" justify="center" no-gutters>
        <v-col align="center" v-for="(item, index) in items" :key="index">
          <v-btn icon :to="item.link">
            <v-icon>{{item.icon}}</v-icon>
            <v-icon
              v-if="index == 0 && chatIcon"
              class="chatNotion"
              small
              color="#8ac32b"
            >mdi-checkbox-blank-circle</v-icon>
            <v-icon
              v-if="index == 4 && limitChatIcon"
              class="chatNotion"
              small
              color="#8ac32b"
            >mdi-checkbox-blank-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row style="position: relative;" justify="center" no-gutters>
        <v-col :to="item.link" align="center" v-for="(item, index) in items" :key="index">
          <div style="font-size:10px;">{{item.text}}</div>
        </v-col>
      </v-row>
    </v-footer>
    <v-app-bar clipped-left app absolute color="#DE4097" flat dark height="40px">
      <v-app-bar-nav-icon v-show="userStatus && !isSmallerThanTablet" @click="drawer = !drawer" />
      <div v-if="isMobileAndTab">
        <v-btn @click="back" icon small>
          <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>
        </v-btn>
        <v-btn @click="forward" icon small>
          <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
        </v-btn>
        <v-btn @click="tapRelord" icon small>
          <v-icon>mdi-restart</v-icon>
        </v-btn>
      </div>
      <v-spacer />
      <v-menu offset-y v-if="userStatus" :close-on-content-click="false">
        <template v-slot:activator="{ on }">
          <v-btn
            v-if="isRequest(getFriendRequestLists.length)"
            x-small
            depressed
            color="#8ac32b"
            min-height="28"
            v-on="on"
            class="mb-1"
          >{{getFriendRequestLists.length}}</v-btn>
          <v-btn
            v-else
            outlined
            dark
            x-small
            min-height="28"
            v-on="on"
          >{{getFriendRequestLists.length}}</v-btn>
        </template>
        <v-list v-if="lastReject" class="py-0">
          <v-subheader v-if="isRequest(getFriendRequestLists.length)">フレンド申請が届いています</v-subheader>
          <v-subheader v-else>フレンド申請はありません</v-subheader>
          <v-list-group
            v-for="(friendRequest, i) in getFriendRequestLists"
            :key="i"
            @click="() => {}"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  <v-list-item-avatar class="ml-0">
                    <v-img :src="friendRequest.avatarUrl"></v-img>
                  </v-list-item-avatar>
                  <v-text style="font-size:14px;" class="indigo--text">{{ friendRequest.userName }}</v-text>
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-row class="mx-3">
              <v-col>
                <v-btn
                  block
                  @click="acceptFriendRequestByDialog(friendRequest.avatarUrl,friendRequest.id,friendRequest.userName,0)"
                  dark
                  color="#8ac32b"
                  small
                  fab
                  depressed
                >
                  <v-icon>mdi-handshake</v-icon>
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  block
                  @click="goProfile(friendRequest.id)"
                  color="#8ac32b"
                  small
                  fab
                  dark
                  depressed
                >
                  <v-icon>mdi-shield-account</v-icon>
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  block
                  @click="rejectFriendRequestByDialog(friendRequest.avatarUrl,friendRequest.id,friendRequest.userName,1)"
                  color="#004D40"
                  small
                  fab
                  dark
                  depressed
                >
                  <v-icon>mdi-account-cancel</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-list-group>
        </v-list>
      </v-menu>
      <v-toolbar-items v-if="userStatus">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon dark v-on="on">
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn color="#004D40" to="profile" text class="p-0">
                <v-icon class="mr-1">mdi-account-circle-outline</v-icon>プロフィール
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn color="#004D40" @click="doLogout" text class="p-0">
                <v-icon class="mr-1">mdi-exit-run</v-icon>ログアウト
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <iconNotion v-on:friendRequestNotion="getFriendRequestNotion"></iconNotion>
        <iconNotion v-on:chatNotificationOn="getChatNotificationOn"></iconNotion>
        <iconNotion v-on:chatNotificationOff="getChatNotificationOff"></iconNotion>
        <iconNotion v-on:limitChatNotificationOn="getLimitChatNotificationOn"></iconNotion>
        <iconNotion v-on:limitChatNotificationOff="getLimitChatNotificationOff"></iconNotion>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn text to="/signIn">ログイン</v-btn>
        <v-btn text to="/signUp" class>新規登録</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content id="contentBox">
      <!-- <v-container> -->
      <router-view />
      <!-- </v-container> -->
    </v-content>
  </v-app>
</template>
<script>
import firebase from "@firebase/app";
import { db } from "@/plugins/firebase";
import { authorizationOfNotification } from "@/plugins/firebase";
import "@firebase/firestore";
import IconNotion from "@/components/pages/IconNotion.vue";

export default {
  components: {
    IconNotion
  },
  computed: {
    userStatus() {
      // ログインするとtrue
      return this.$store.getters.isSignedIn;
    },
    isSmallerThanTablet() {
      if (window.innerWidth < 700) {
        return true;
      } else {
        return false;
      }
    },
    isMobileAndTab() {
      return window.innerWidth <= 1024;
    }
  },
  data() {
    return {
      islogin: Boolean,
      drawer: true,
      items: [
        {
          icon: "mdi-account-circle-outline",
          text: "プロフィール",
          link: { name: "profile" }
        },
        {
          icon: "mdi-chat-processing-outline",
          text: "チャット",
          link: { name: "chatRoom" }
        },
        {
          icon: "mdi-account-group-outline",
          text: "フレンド",
          link: { name: "friendList" }
        },
        {
          icon: "mdi-magnify",
          text: "検索",
          link: { name: "friendSearch" }
        },
        // {
        //   icon: "mdi-tooltip-text-outline",
        //   text: "掲示板",
        //   link: { name: "bulletinBoard" }
        // },
        // {
        //   icon: "mdi-twitter",
        //   text: "Twitter",
        //   link: { name: "shareToke" }
        // },
        {
          icon: "mdi-dots-horizontal-circle-outline",
          text: "メニュー",
          link: { name: "menu" }
        }
      ],
      userName: null,
      avatarUrl: null,
      getFriendRequestLists: [],
      lastReject: true,
      friendAvatarUrl: null,
      friendId: null,
      friendName: null,
      acceptFriendRequestModal: false,
      rejectFriendRequestModal: false,
      requestAcceptDialog: false,
      requestRejectDialog: false,
      modalStatus: null,
      neww: "false",
      chatIcon: false,
      limitChatIcon: false
    };
  },
  methods: {
    getFriendRequestNotion() {
      this.neww = "true";
    },
    getChatNotificationOn() {
      this.chatIcon = true;
    },
    getChatNotificationOff() {
      this.chatIcon = false;
    },
    getLimitChatNotificationOn() {
      this.limitChatIcon = true;
    },
    getLimitChatNotificationOff() {
      this.limitChatIcon = false;
    },
    back() {
      history.back();
    },
    forward() {
      history.forward();
    },
    tapRelord() {
      location.reload();
    },
    sendNotification() {
      let argObj = {
        // 受信者のトークンIDと通知内容
        to: `/topics/${this.friendId}`,
        priority: "high",
        content_available: true,
        notification: {
          title: `${this.userName}とフレンドになりました`,
          badge: "1"
        }
      };
      let optionObj = {
        //送信者のサーバーキー
        headers: {
          "Content-Type": "application/json",
          Authorization: "key=" + `${authorizationOfNotification}`
        }
      };
      this.axios.post("https://fcm.googleapis.com/fcm/send", argObj, optionObj);
    },
    // ログアウト処理
    doLogout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/signIn");
        })
        .catch(error => {
          alert(error.message);
        });
    },
    isRequest(leng) {
      if (leng != 0) {
        return true;
      } else {
        return false;
      }
    },
    rejectFriendRequestByDialog(avatarUrl, friendId, name, status) {
      this.friendAvatarUrl = avatarUrl;
      this.friendId = friendId;
      this.friendName = name;
      this.requestRejectDialog = true;
      this.modalStatus = status;
    },
    rejectFriendRequest() {
      this.requestRejectDialog = false;
      //申請の削除
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .update({
          friendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.friendAvatarUrl,
            id: this.friendId,
            userName: this.friendName
          })
        });
      //申請元の申請の削除
      db.collection("users")
        .doc(this.friendId)
        .update({
          sendFriendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.avatarUrl,
            friendId: this.$store.getters.user.uid,
            friendName: this.userName
          })
        });
      db.collection("users")
        .doc(this.friendId)
        .update({
          sendFriendRequestNameList: firebase.firestore.FieldValue.arrayRemove(
            this.userName
          )
        });
      //申請一覧の再描画
      setTimeout(() => {
        this.getFriendRequestLists = [];
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .get()
          .then(doc => {
            //最後のフレンド申請を消したときに変な場所にドロップメニューが残る、このtrueで監視できているのでどうにかしたい
            //今のところ最善策はリロード、もしくはv-listを非表示にしちゃう
            if (doc.data().friendRequestList.length == 0) {
              this.lastReject = false;
              // window.location.reload();
            } else {
              doc.data().friendRequestList.forEach(item => {
                this.getFriendRequestLists.push(item);
              });
            }
          });
      }, 300);
      setTimeout(() => {
        if (this.modalStatus == 0) {
          this.acceptFriendRequestModal = true;
        } else {
          this.rejectFriendRequestModal = true;
        }
      }, 300);
      setTimeout(() => {
        if (this.modalStatus == 0) {
          this.acceptFriendRequestModal = false;
        } else {
          this.rejectFriendRequestModal = false;
        }
      }, 1500);
    },
    acceptFriendRequestByDialog(avatarUrl, friendId, name, status) {
      this.friendAvatarUrl = avatarUrl;
      this.friendId = friendId;
      this.friendName = name;
      this.requestAcceptDialog = true;
      this.modalStatus = status;
    },
    acceptFriendRequest() {
      this.sendNotification();
      this.requestAcceptDialog = false;
      //ログイン中のユーザーのDBにフレンド追加
      const users = db.collection("users");
      users.doc(this.$store.getters.user.uid).update({
        friends: firebase.firestore.FieldValue.arrayUnion(
          users.doc(this.friendId)
        )
      });
      //フレンドIDリスト（プロフィール画面でフレンドかどうかを判断するために必要）
      users.doc(this.$store.getters.user.uid).update({
        friendIdList: firebase.firestore.FieldValue.arrayUnion(this.friendId)
      });
      //申請を投げていたユーザーのDBにフレンド追加
      users.doc(this.friendId).update({
        friends: firebase.firestore.FieldValue.arrayUnion(
          users.doc(this.$store.getters.user.uid)
        )
      });
      //フレンドIDリスト（プロフィール画面でフレンドかどうかを判断するために必要）
      users.doc(this.friendId).update({
        friendIdList: firebase.firestore.FieldValue.arrayUnion(
          this.$store.getters.user.uid
        )
      });
      //ここでチャットの最新ログインを記録する
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("lastOpen")
        .doc(this.friendId)
        .set({
          lastOpen: firebase.firestore.Timestamp.fromDate(new Date()),
          id: this.friendId
        });
      db.collection("users")
        .doc(this.friendId)
        .collection("lastOpen")
        .doc(this.$store.getters.user.uid)
        .set({
          lastOpen: firebase.firestore.Timestamp.fromDate(new Date()),
          id: this.$store.getters.user.uid
        });
      this.rejectFriendRequest();
      //フレンド追加後に画面遷移するならこれ使う
      // this.$router.push({ name: "friendProfile", params: { uid: friendId } });
    },
    goProfile(friendId) {
      this.$router.push({
        name: "friendProfile",
        params: { uid: friendId }
      });
      setTimeout(() => {
        this.$router.go({
          force: true
        });
      }, 500);
    }
  },
  mounted() {
    //フレンド申請の受け取り
    setTimeout(() => {
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .get()
        .then(doc => {
          this.userName = doc.data().name;
          this.avatarUrl = doc.data().avatarUrl;

          //Cannot read property 'forEach' させないため
          if (doc.data().friendRequestList != undefined) {
            doc.data().friendRequestList.forEach(item => {
              this.getFriendRequestLists.push(item);
            });
          }
        });
    }, 5000);
    if (window.innerWidth <= 1024) {
      this.drawer = false;
    } else {
      this.drawer = true;
    }

    var t = document.getElementById("contentBox");
    var startX;
    var moveX;
    var distBack = 150;
    var distForward = 120;
    t.addEventListener("touchstart", function(e) {
      startX = e.touches[0].pageX;
    });
    t.addEventListener("touchmove", function(e) {
      moveX = e.changedTouches[0].pageX;
    });
    t.addEventListener("touchend", function() {
      if (startX > moveX && startX > moveX + distForward) {
        // 右から左の時の処理
        history.forward();
      } else if (startX < moveX && startX + distBack < moveX) {
        // 左から右の時の処理
        history.back();
      }
    });
  }
};
</script>
<style>
.chatNotion {
  position: absolute;
  bottom: 8px;
  left: 14px;
}
</style>
