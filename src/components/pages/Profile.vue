<template>
  <v-app>
    <v-card class="mx-auto">
      <v-dialog v-model="acceptFriendRequestModal" max-width="350">
        <v-card min-height="250">
          <v-card-title class="headline">フレンドになりました！</v-card-title>
        </v-card>
      </v-dialog>
      <v-dialog v-model="rejectFriendRequestModal" max-width="350">
        <v-card>
          <v-card-title class="headline">フレンド申請を拒否しました</v-card-title>
        </v-card>
      </v-dialog>
      <v-dialog v-model="sendFriendRequestModal" max-width="350">
        <v-card>
          <v-card-title class="headline">フレンド申請をしました</v-card-title>
        </v-card>
      </v-dialog>
      <v-dialog v-model="cancelFriendRequestModal" max-width="450">
        <v-card>
          <v-card-title class="headline">フレンド申請を取り消しました</v-card-title>
        </v-card>
      </v-dialog>
      <div v-if="isEdit">
        <v-img :src="displayDamyHeaderImg" :aspect-ratio="4"></v-img>
        <v-file-input
          accept="image/*"
          show-size
          label="ヘッダー画像ファイルをアップロードしてください"
          prepend-icon="mdi-image"
          @change="desplayImg"
        ></v-file-input>
      </div>
      <div v-else>
        <v-img v-if="isMypage" :src="displayHeaderImg" :aspect-ratio="4"></v-img>
        <v-img v-else :src="displayFriendUserInfo.imageHeaderUrl" :aspect-ratio="4"></v-img>
      </div>
      <v-list-item>
        <v-list-item-avatar size="80">
          <div v-if="isEdit">
            <v-img :src="displayDemoAvatar"></v-img>
            <v-file-input
              accept="image/*"
              show-size
              label="アイコン画像ファイルをアップロードしてください"
              prepend-icon="mdi-image"
              @change="desplayAvatar"
            ></v-file-input>
          </div>
          <div v-else>
            <v-avatar>
              <v-img v-if="isMypage" :src="displayAvatar"></v-img>
              <v-img v-else :src="displayFriendUserInfo.avatarUrl"></v-img>
            </v-avatar>
          </div>
        </v-list-item-avatar>
        <v-list-item-content v-if="isEdit">
          <v-list-item-title class="headline">
            <v-text-field
              @keydown.enter="saveByEnter"
              placeholder="ポケGOのユーザー名を入力してください"
              v-model="displayUserName"
              :rules="rules"
            ></v-text-field>
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content v-else>
          <v-list-item-title v-if="isMypage" class="headline">{{displayUserName}}</v-list-item-title>
          <v-list-item-title v-else class="headline">{{displayFriendUserInfo.name}}</v-list-item-title>
        </v-list-item-content>
        <v-spacer></v-spacer>
        <!-- 相手ユーザーとのステータスの表示 -->
        <div v-if="!isMypage" class="mr-3 friendStatus">
          <div v-if="isFriend">友達</div>
          <div v-else-if="isRequest">申請が来てる</div>
          <div v-else-if="isSendRequest">申請中</div>
        </div>
        <div v-if="isMypage">
          <v-btn v-if="isEdit" @click="save">保存</v-btn>
          <v-btn v-else @click="edit">編集</v-btn>
        </div>
        <div v-else>
          <v-btn v-if="isFriend" @click="goChat()">チャット</v-btn>
          <div v-else-if="isRequest">
            <v-btn class="mr-3" @click="acceptFriendRequest(0)">フレンドになる</v-btn>
            <v-btn @click="rejectFriendRequest(1)">拒否</v-btn>
          </div>
          <v-btn v-else-if="isSendRequest" @click="cancelFriendRequest()">申請を取り消す</v-btn>
          <v-btn v-else @click="sendFriendRequest()">フレンド申請</v-btn>
        </div>
      </v-list-item>
      <v-card-text v-if="isEdit">
        <v-textarea
          v-model="displaySelfIntroduction"
          clearable
          clear-icon="cancel"
          label="Text"
          value="This is clearable text."
        ></v-textarea>
      </v-card-text>
      <div v-else>
        <v-card-text v-if="isMypage" style="white-space:pre-wrap; ">{{displaySelfIntroduction}}</v-card-text>
        <v-card-text
          v-else
          style="white-space:pre-wrap; "
        >{{displayFriendUserInfo.selfIntroduction}}</v-card-text>
      </div>

      <v-card-actions>
        <v-row>
          <v-col align="center">
            <v-btn text color="deep-purple accent-4" @click="status = 1">対戦情報</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-btn text color="deep-purple accent-4" @click="status = 2">対戦成績</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-btn text color="deep-purple accent-4" @click="status = 3">あああ</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-divider></v-divider>
      <v-card-text>
        <span v-if="status === 1">対戦情報</span>
        <span v-if="status === 2">
          対戦成績
          <v-list v-for="item in items" v-bind:key="item">{{item}}</v-list>
        </span>
        <span v-if="status === 3">あああ</span>
      </v-card-text>
    </v-card>
  </v-app>
</template>
<script>
import { db } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";
import "firebase/storage";

export default {
  data() {
    return {
      status: 1,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11],
      rules: [
        value => !!value || "必須",
        value =>
          value.match(/[0-9A-Za-z]/g) ||
          "ポケモンGOのニックネームを入力してください"
      ],
      param: this.$route.params["uid"],
      isEdit: false,
      displayUserName: null,
      displaySelfIntroduction: null,
      headerFile: null,
      avatarFile: null,
      displayHeaderImg: "",
      displayDamyHeaderImg: "",
      displayAvatar: "",
      displayDemoAvatar: "",
      displayFriendUserInfo: null,
      friendIdList: [],
      sendFriendRequestNameList: [],
      acceptFriendRequestModal: false,
      rejectFriendRequestModal: false,
      cancelFriendRequestModal: false,
      sendFriendRequestModal: false
    };
  },
  mounted() {
    //最終ログインを更新
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .update({
        lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
      });
    //2秒くらい待たないとstoreが空になってしまう
    //と思ったがそんなこともないかも
    // ここのユーザーデータ取得はfirestore()に移したいが、フレンドプロフィールを表示するために"this.$route.params["uid"]"を呼んでいてユーザーのプロフィールの際にはfirestore()を呼べない
    // setTimeout(() => {
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .get()
      .then(doc => {
        this.user = doc.data();
        //登録後初回ログインはドキュメントを作成する
        if (doc.data() == undefined) {
          //初期アバターのセット
          this.displayAvatar =
            "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/avatarSampleImg%2FSrBtEaccUUh5OMFVKMOZ2VIqZSQ2?alt=media&token=273fa8ce-b385-4e6e-b94d-743c96f6a2b8";
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .set({
              id: this.$store.getters.user.uid,
              lastLogin: firebase.firestore.Timestamp.fromDate(new Date()),
              //リスト系は入れておかないとフレンド検索でエラー吐いちゃう
              friends: [],
              sendFriendRequestNameList: [],
              sendFriendRequestList: [],
              friendIdList: [],
              nicknameList: [],
              //初期アバターのDB登録
              avatarUrl:
                "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/avatarSampleImg%2FSrBtEaccUUh5OMFVKMOZ2VIqZSQ2?alt=media&token=273fa8ce-b385-4e6e-b94d-743c96f6a2b8"
            });
        } else {
          // ニックネームが半角英数字以外ならばから文字を入れる
          if (!doc.data().name.match(/[0-9A-Za-z]/g)) {
            this.displayUserName = "";
          } else {
            this.displayUserName = doc.data().name;
          }
          this.displaySelfIntroduction = doc.data().selfIntroduction;
          this.disId = doc.data().id;
          this.displayHeaderImg = doc.data().imageHeaderUrl;
          this.displayAvatar = doc.data().avatarUrl;
          this.friendIdList = doc.data().friendIdList;
          this.sendFriendRequestNameList = doc.data().sendFriendRequestNameList;
        }
      });
    // }, 3000);
  },
  methods: {
    edit() {
      this.isEdit = true;
    },
    save() {
      const doc = db.collection("users").doc(this.$store.getters.user.uid);
      doc.update({
        name: this.displayUserName,
        selfIntroduction: this.displaySelfIntroduction
      });
      const storageRef = firebase.storage().ref();

      if (this.headerFile) {
        const imageRef = storageRef.child(
          `headerImg/${this.$store.getters.user.uid}`
        );
        imageRef.delete();
        imageRef.put(this.headerFile).then(snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            this.displayHeaderImg = downloadURL;
            db.collection("users")
              .doc(this.$store.getters.user.uid)
              .update({
                imageHeaderUrl: downloadURL
              });
          });
        });
      }
      if (this.avatarFile) {
        const imageRef = storageRef.child(
          `avatarImg/${this.$store.getters.user.uid}`
        );
        imageRef.delete();
        imageRef.put(this.avatarFile).then(snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            this.displayAvatar = downloadURL;
            db.collection("users")
              .doc(this.$store.getters.user.uid)
              .update({
                avatarUrl: downloadURL
              });
          });
        });
      }
      this.isEdit = false;
    },
    saveByEnter() {
      // 日本語入力中のEnterキー操作は無効にする
      if (event.keyCode !== 13) return;

      this.save();
    },
    goChat() {
      this.$router.push({
        name: "chat",
        params: { uid: this.$route.params["uid"] }
      });
    },
    acceptFriendRequest(status) {
      //ログイン中のユーザーのDBにフレンド追加
      const users = db.collection("users");
      users.doc(this.$store.getters.user.uid).update({
        friends: firebase.firestore.FieldValue.arrayUnion(
          users.doc(this.displayFriendUserInfo.id)
        )
      });
      //フレンドIDリスト（プロフィール画面でフレンドかどうかを判断するために必要）
      users.doc(this.$store.getters.user.uid).update({
        friendIdList: firebase.firestore.FieldValue.arrayUnion(
          this.displayFriendUserInfo.id
        )
      });
      //申請を投げていたユーザーのDBにフレンド追加
      users.doc(this.displayFriendUserInfo.id).update({
        friends: firebase.firestore.FieldValue.arrayUnion(
          users.doc(this.$store.getters.user.uid)
        )
      });
      //フレンドIDリスト（プロフィール画面でフレンドかどうかを判断するために必要）
      users.doc(this.displayFriendUserInfo.id).update({
        friendIdList: firebase.firestore.FieldValue.arrayUnion(
          this.$store.getters.user.uid
        )
      });
      //以下申請の削除
      this.rejectFriendRequest(status);
    },
    rejectFriendRequest(status) {
      //申請先側
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .update({
          friendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.displayFriendUserInfo.avatarUrl,
            id: this.displayFriendUserInfo.id,
            userName: this.displayFriendUserInfo.name
          })
        });
      //申請側
      db.collection("users")
        .doc(this.displayFriendUserInfo.id)
        .update({
          sendFriendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.displayAvatar,
            friendId: this.disId,
            friendName: this.displayUserName
          })
        });
      db.collection("users")
        .doc(this.displayFriendUserInfo.id)
        .update({
          sendFriendRequestNameList: firebase.firestore.FieldValue.arrayRemove(
            this.displayUserName
          )
        });
      if (status == 0) {
        this.acceptFriendRequestModal = true;
        setTimeout(() => {
          this.acceptFriendRequestModal = false;
        }, 1500);
        setTimeout(() => {
          this.$router.go({
            force: true
          });
        }, 2000);
      } else {
        this.rejectFriendRequestModal = true;
        setTimeout(() => {
          this.rejectFriendRequestModal = false;
        }, 1500);
        setTimeout(() => {
          this.$router.go({
            force: true
          });
        }, 2000);
      }
    },
    cancelFriendRequest() {
      //申請先側
      db.collection("users")
        .doc(this.displayFriendUserInfo.id)
        .update({
          friendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.displayAvatar,
            id: this.disId,
            userName: this.displayUserName
          })
        });
      //申請側
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .update({
          sendFriendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.displayFriendUserInfo.avatarUrl,
            friendId: this.displayFriendUserInfo.id,
            friendName: this.displayFriendUserInfo.name
          })
        });
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .update({
          sendFriendRequestNameList: firebase.firestore.FieldValue.arrayRemove(
            this.displayFriendUserInfo.name
          )
        });
      this.cancelFriendRequestModal = true;
      setTimeout(() => {
        this.cancelFriendRequestModal = false;
      }, 1500);
      setTimeout(() => {
        this.$router.go({
          force: true
        });
      }, 2000);
    },
    sendFriendRequest() {
      //申請を申請相手のDBに保存する
      const users = db.collection("users");
      users.doc(this.displayFriendUserInfo.id).update({
        friendRequestList: firebase.firestore.FieldValue.arrayUnion({
          id: this.$store.getters.user.uid,
          userName: this.displayUserName,
          avatarUrl: this.displayAvatar
        })
      });
      //申請したユーザーのDBに保存する（申請中ユーザー表示のため）
      users.doc(this.$store.getters.user.uid).update({
        sendFriendRequestList: firebase.firestore.FieldValue.arrayUnion({
          friendId: this.displayFriendUserInfo.id,
          friendName: this.displayFriendUserInfo.name,
          avatarUrl: this.displayFriendUserInfo.avatarUrl
        })
      });
      //申請した相手のユーザー名を申請したユーザーのDBに保存する（検索から除外するため）
      users.doc(this.$store.getters.user.uid).update({
        sendFriendRequestNameList: firebase.firestore.FieldValue.arrayUnion(
          this.displayFriendUserInfo.name
        )
      });
      this.sendFriendRequestModal = true;
      setTimeout(() => {
        this.sendFriendRequestModal = false;
      }, 1500);
      setTimeout(() => {
        this.$router.go({
          force: true
        });
      }, 2000);
    },
    //編集中にアップした画像を一時的に表示
    desplayImg(file) {
      var blobUrl = window.URL.createObjectURL(file);

      this.displayDamyHeaderImg = blobUrl;
      this.headerFile = file;
    },
    desplayAvatar(file) {
      var blobUrl = window.URL.createObjectURL(file);

      this.displayDemoAvatar = blobUrl;
      this.avatarFile = file;
    }
  },
  computed: {
    isMypage: function() {
      if (this.$route.params["uid"] == undefined) {
        return true;
      } else {
        return false;
      }
    },
    isFriend: function() {
      if (this.friendIdList.includes(this.$route.params["uid"])) {
        return true;
      } else {
        return false;
      }
    },
    isRequest: function() {
      //sendFriendRequestNameListのままだとincludsが使えない
      const arr = [];
      this.displayFriendUserInfo.sendFriendRequestNameList.forEach(items => {
        arr.push(items);
      });
      if (arr.includes(this.displayUserName)) {
        return true;
      } else {
        return false;
      }
    },
    isSendRequest: function() {
      if (
        this.sendFriendRequestNameList.includes(this.displayFriendUserInfo.name)
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  firestore() {
    return {
      displayFriendUserInfo: db
        .collection("users")
        .doc(this.$route.params["uid"])
    };
  }
};
</script>
<style>
.friendStatus {
  font-size: 10px;
  color: rgb(150, 150, 153);
  position: relative;
  bottom: 10px;
}
</style>