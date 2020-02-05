<template>
  <v-app>
    <v-navigation-drawer
      v-if="userStatus"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
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
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon v-if="userStatus" @click="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">ポケモンGOチャット</span>
      </v-toolbar-title>
      <v-spacer />
      <v-menu offset-y v-if="userStatus" :close-on-content-click="false">
        <template v-slot:activator="{ on }">
          <v-btn
            v-if="isRequest(getFriendRequestLists.length)"
            x-small
            depressed
            color="error"
            min-height="32"
            v-on="on"
          >{{getFriendRequestLists.length}}</v-btn>
          <v-btn
            v-else
            outlined
            dark
            x-small
            min-height="32"
            v-on="on"
          >{{getFriendRequestLists.length}}</v-btn>
        </template>
        <v-list v-if="lastReject">
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
                  <v-list-item-avatar>
                    <v-img :src="friendRequest.avatarUrl"></v-img>
                  </v-list-item-avatar>
                  <span class="indigo--text">{{ friendRequest.userName }}</span>
                  からフレンド申請が届いています
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-row>
                <v-col col="4">
                  <v-btn
                    block
                    @click="acceptFriendRequest(friendRequest.avatarUrl,friendRequest.id,friendRequest.userName)"
                    outlined
                    color="warning"
                  >フレンドになる</v-btn>
                </v-col>
                <v-col col="4">
                  <v-btn
                    block
                    @click="rejectFriendRequest(friendRequest.avatarUrl,friendRequest.id,friendRequest.userName)"
                    outlined
                    color="warning"
                  >拒否</v-btn>
                </v-col>
                <v-col col="4">
                  <v-btn block @click="goProfile(friendRequest.id)" outlined color="warning">プロフィール</v-btn>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-menu>
      <v-toolbar-items v-if="userStatus">
        <v-btn @click="doLogout" text>ログアウト</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn text to="/signIn">ログイン</v-btn>
        <v-btn text to="/signUp">登録</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import firebase from "@firebase/app";
import { db } from "@/plugins/firebase";
import "@firebase/firestore";

export default {
  computed: {
    userStatus() {
      // ログインするとtrue
      return this.$store.getters.isSignedIn;
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
          icon: "mdi-account-group-outline",
          text: "フレンド一覧",
          link: { name: "friendList" }
        },
        {
          icon: "mdi-magnify",
          text: "フレンド検索",
          link: { name: "friendSearch" }
        }
      ],
      userName: null,
      avatarUrl: null,
      getFriendRequestLists: [],
      lastReject: true
    };
  },
  methods: {
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
    rejectFriendRequest(avatarUrl, id, name) {
      //申請の削除
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .update({
          friendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: avatarUrl,
            id: id,
            userName: name
          })
        });
      //申請元の申請の削除
      db.collection("users")
        .doc(id)
        .update({
          sendFriendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.avatarUrl,
            friendId: this.$store.getters.user.uid,
            friendName: this.userName
          })
        });
      db.collection("users")
        .doc(id)
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
    },
    acceptFriendRequest(avatarUrl, friendId, name) {
      //ログイン中のユーザーのDBにフレンド追加
      const users = db.collection("users");
      users.doc(this.$store.getters.user.uid).update({
        friends: firebase.firestore.FieldValue.arrayUnion(users.doc(friendId))
      });
      //フレンドIDリスト（プロフィール画面でフレンドかどうかを判断するために必要）
      users.doc(this.$store.getters.user.uid).update({
        friendIdList: firebase.firestore.FieldValue.arrayUnion(friendId)
      });
      //申請を投げていたユーザーのDBにフレンド追加
      users.doc(friendId).update({
        friends: firebase.firestore.FieldValue.arrayUnion(
          users.doc(this.$store.getters.user.uid)
        )
      });
      //フレンドIDリスト（プロフィール画面でフレンドかどうかを判断するために必要）
      users.doc(friendId).update({
        friendIdList: firebase.firestore.FieldValue.arrayUnion(
          this.$store.getters.user.uid
        )
      });
      this.rejectFriendRequest(avatarUrl, friendId, name);
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
  }
};
</script>
