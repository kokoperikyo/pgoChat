<template>
  <div>
    <v-dialog v-model="cantTweetDialog" max-width="400">
      <v-card>
        <v-card-title>共有用のURLは1つしか作成できません</v-card-title>
      </v-card>
    </v-dialog>
    <v-dialog v-model="deleteChatRoomDialog" max-width="290">
      <v-card>
        <v-card-title class="pb-0">投稿中のURLのリンクが無効になります</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn rounded color="#004D40" dark @click="deleteChatRoom" class="mr-5">削除</v-btn>
          <v-btn rounded color="#004D40" outlined @click="deleteChatRoomDialog = false">閉じる</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row class="mt-5 ml-5">
      <div>twitterにチャットルームのURLを投稿できます</div>
    </v-row>
    <v-row class="mt-1 ml-5">
      <div>同時に投稿できるのは1つまでです</div>
    </v-row>
    <v-row align="center" justify="center" class="mt-5">
      <v-btn x-small color="primary" @click="popUpTweetWindow" height="40" width="40">
        <v-icon class="fab fa-twitter"></v-icon>
      </v-btn>
    </v-row>
    <!-- チャットルームが存在する -->
    <div v-if="userInfo.myTimeLimitChat != 'none'" class="mt-3">
      <!-- ゲストがログイン済み -->
      <v-list color="#8ac32b" class="mx-2" v-if="userInfo.canLoginTimeLimitChat">
        <v-list-item-content>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>ゲストがログイン！</v-list-item-title>
              <v-list-item-title>入室してください</v-list-item-title>
            </v-list-item-content>
            <v-btn fab depressed @click="toTimeLimitChat" class="mr-2">
              <v-icon color="#004D40">mdi-login-variant</v-icon>
            </v-btn>
            <v-btn x-small fab depressed @click="deleteChatRoomDialog = true">
              <v-icon small color="#004D40">mdi-delete</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-content>
      </v-list>
      <!-- まだ誰も入っていない -->
      <v-list color="#FCE4EC" class="mx-2" v-else>
        <v-list-item-content>
          <v-list-item>
            参加者待機中
            <v-spacer></v-spacer>
            <v-btn fab depressed @click="deleteChatRoomDialog = true">
              <v-icon color="#DE4097" large>mdi-delete</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-content>
      </v-list>
    </div>
    <div v-else class="ml-5 mt-3">投稿中のチャットルームはありません</div>
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
// import firebase from "@firebase/app";

export default {
  data() {
    return {
      userInfo: null,
      cantTweetDialog: false,
      deleteChatRoomDialog: false,
      roomId: null
    };
  },
  methods: {
    test() {},
    toTimeLimitChat() {
      var uid = this.userInfo.myTimeLimitChat + this.$store.getters.user.uid;
      this.$router.push({
        name: "timeLimitChat",
        params: { uid: uid }
      });
    },
    popUpTweetWindow() {
      if (this.userInfo.myTimeLimitChat == "none") {
        var len = 20;
        var str = "abcdefghijklmnopqrstuvwxyz";
        var strLen = str.length;
        var result = "";
        for (var i = 0; i < len; i++) {
          result += str[Math.floor(Math.random() * strLen)];
        }
        const user = db.collection("users").doc(this.$store.getters.user.uid);
        user.update({
          myTimeLimitChat: result
        });
        db.collection("timeLimitChat")
          .doc(result + this.$store.getters.user.uid)
          .collection("isOpenChat")
          .doc(result + this.$store.getters.user.uid)
          .set({
            st: true
          });
        var shareURL =
          "https://twitter.com/intent/tweet?text=" +
          "先着１名対戦できます" +
          "%20%23PGOチャット" +
          "%20%23ポケモンGO" +
          "&url=" +
          // `http://192.168.3.68:8080/timeLimitChatLogin/${result}${this.$store.getters.user.uid}`;
          `https://pgochat-91c46.firebaseapp.com//timeLimitChatLogin/${result}${this.$store.getters.user.uid}`;
        location.href = shareURL;
      } else {
        this.cantTweetDialog = true;
      }
    },
    deleteChatRoom() {
      //自分のデータをnoneに更新
      const user = db.collection("users").doc(this.$store.getters.user.uid);
      user.update({
        myTimeLimitChat: "none"
      });
      var roomId = this.userInfo.myTimeLimitChat;
      var doc = roomId + this.$store.getters.user.uid;
      //オープンチャットじゃなくする
      db.collection("timeLimitChat")
        .doc(doc)
        .collection("isOpenChat")
        .doc(doc)
        .update({
          st: false
        });
      this.deleteChatRoomDialog = false;

      //チャットルームに誰か入ったことを確認するステータスをfalseに
      user.update({
        canLoginTimeLimitChat: false
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {},
  created() {},
  firestore() {
    return {
      userInfo: db.collection("users").doc(this.$store.getters.user.uid)
    };
  }
};
</script>