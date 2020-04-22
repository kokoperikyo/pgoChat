<template>
  <div>
    <!-- リーグの選択 -->
    <v-dialog v-model="selectLeagueDialog" max-width="350">
      <v-card class="px-2 py-3" height="122px">
        <v-row>
          <h5 class="font-weight-black my-2 ml-5">リーグを選んでください</h5>
          <v-spacer></v-spacer>
          <v-btn fab x-small icon class="mr-2" @click="selectLeagueDialog = false">
            <v-icon color="black">mdi-close-circle</v-icon>
          </v-btn>
        </v-row>
        <v-row no-gutters>
          <v-col align="center">
            <v-btn icon @click="startSixToThree(1)">
              <v-img
                width="60px"
                src="https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/leagueImg%2F%E3%82%B9%E3%83%BC%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=2daccd4d-c422-47a8-9457-19c88562f3f5"
              ></v-img>
            </v-btn>
          </v-col>
          <v-col align="center">
            <v-btn icon @click="startSixToThree(2)">
              <v-img
                width="60px"
                src="https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/leagueImg%2F%E3%83%8F%E3%82%A4%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=07b49c27-20f9-49fb-a663-a0b4c278a1fc"
              ></v-img>
            </v-btn>
          </v-col>
          <v-col align="center">
            <v-btn icon @click="startSixToThree(3)">
              <v-img
                width="60px"
                src="https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/leagueImg%2F%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=b66582c4-0af9-4165-9944-00de24a4cd77"
              ></v-img>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <!-- パーティー選択申請を受けたがわ ゲスト -->
    <v-dialog v-model="selectSixThreeDialogOfGuest" max-width="500" persistent>
      <v-card class="mx-auto px-2 pb-3" :color="leagueBaseColor">
        <v-row class="ml-0">
          <h3 class="font-weight-black mt-2" style="color:white;">６匹選んでください</h3>
          <v-col>
            <v-img width="30px" :src="leagueImg"></v-img>
          </v-col>
        </v-row>
        <v-autocomplete
          v-model="partyValue"
          :items="items"
          :disabled="isSixPatry"
          item-text="name"
          item-value="index"
          prepend-icon="mdi-database-search"
          dense
          clearable
          label="ポケモンを検索"
          dark
        ></v-autocomplete>
        <v-card :color="leagueRowColor" class="mx-1 mb-3">
          <v-row no-gutters>
            <v-col align="center" cols="4" v-for="(item, index) in partyList" :key="index">
              <div v-if="isShadow(item)">
                <v-avatar size="30" class="shadowIcon">
                  <v-img
                    src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/icon%2FIMG_5832_2-removebg-preview.png?alt=media&token=047d6779-fa2a-4781-997b-f3b044861011"
                  ></v-img>
                </v-avatar>
                <v-btn small icon fab @click="removeArray(index)" class="closeBtnSub">
                  <v-icon color="black">mdi-close-circle</v-icon>
                </v-btn>
              </div>
              <div v-else>
                <v-btn small icon fab @click="removeArray(index)" class="closeBtn">
                  <v-icon color="black">mdi-close-circle</v-icon>
                </v-btn>
              </div>
              <v-img width="60" :src="getImg(item)" class="pokemonImg"></v-img>
            </v-col>
          </v-row>
        </v-card>
        <v-alert
          style="font-size:11px;"
          class="py-2 mx-2"
          color="red"
          type="info"
        >相手が選択完了するまでパーティは見られないのでご安心ください</v-alert>
        <div>
          <v-btn rounded @click="selectSixThreeDialogOfGuest = false" class="ml-1 mr-2">閉じる</v-btn>
          <v-btn rounded :disabled="!isSixPatry" @click="doneSelectingPartyOfOther">決定</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <!-- パーティー申請したがわ ホスト -->
    <div v-if="isHost">
      <v-dialog v-model="selectSixThreeDialog.sixThreeSelect " max-width="500" persistent>
        <v-card class="mx-auto px-2 pb-3" :color="leagueBaseColor">
          <v-row class="ml-0">
            <h3 class="font-weight-black mt-2" style="color:white;">６匹選んでくださいsita</h3>
            <v-col>
              <v-img width="30px" :src="leagueImg"></v-img>
            </v-col>
          </v-row>
          <v-autocomplete
            v-model="partyValue"
            :items="items"
            :disabled="isSixPatry"
            item-text="name"
            item-value="index"
            prepend-icon="mdi-database-search"
            dense
            clearable
            label="ポケモンを検索"
            dark
          ></v-autocomplete>
          <v-card :color="leagueRowColor" class="mx-1 mb-3">
            <v-row no-gutters>
              <v-col align="center" cols="4" v-for="(item, index) in partyList" :key="index">
                <div v-if="isShadow(item)">
                  <v-avatar size="30" class="shadowIcon">
                    <v-img
                      src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/icon%2FIMG_5832_2-removebg-preview.png?alt=media&token=047d6779-fa2a-4781-997b-f3b044861011"
                    ></v-img>
                  </v-avatar>
                  <v-btn small icon fab @click="removeArray(index)" class="closeBtnSub">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
                <div v-else>
                  <v-btn small icon fab @click="removeArray(index)" class="closeBtn">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
                <v-img width="60" :src="getImg(item)" class="pokemonImg"></v-img>
              </v-col>
            </v-row>
          </v-card>
          <v-alert
            style="font-size:11px;"
            class="py-2 mx-2"
            color="red"
            type="info"
          >相手が選択完了するまでパーティは見られないのでご安心ください</v-alert>
          <div>
            <v-btn rounded @click="closeSixThreeDialogOfMy()" class="ml-1 mr-2">閉じる</v-btn>
            <v-btn rounded :disabled="!isSixPatry" @click="doneSelectingPartyOfMy">決定</v-btn>
          </div>
        </v-card>
      </v-dialog>
    </div>
    <!-- チャット本体 -->
    <v-card flat tile id="chatCard">
      <v-card flat class="overflow-y-auto scroll" :height="getChatCardHeight">
        <v-list>
          <v-list-item
            class="mt-2"
            v-for="(message, i) in messages"
            :key="i"
            style="white-space:pre-wrap;"
          >
            <!-- 自分のメッセージは右側に表示するのでスペースを入れる -->
            <v-spacer v-if="isMyMessage(message.whoesMes)"></v-spacer>
            <!-- 相手のメッセージの左にアバター表示 -->
            <v-list-item-avatar v-if="!isMyMessage(message.whoesMes)" size="25">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/sampleAvatarImg%2Favatar-default-icon.png?alt=media&token=ba07e33a-c66a-4194-8aa2-c0ef3fe32dd0"
              ></v-img>
            </v-list-item-avatar>
            <div>
              <!-- メッセージの色分け -->
              <!-- 自分がわ（右） -->
              <div v-if="isMyMessage(message.whoesMes)">
                <!-- ６−３申し込み -->
                <div v-if="message.stanpSt == 1">
                  <div class="my_six_three p-2">{{getRequestLeague(message.league)}}申し込み</div>
                  <div class="display_send_time">{{displaySendTime(message.createdAt)}}</div>
                </div>
                <!-- パーティ画像 -->
                <div v-else-if="message.stanpSt == 2">
                  <div v-if="canShowParty()">
                    <v-card width="240" color="#9ccc65" class="px-3" flat>
                      <v-row>
                        <v-col cols="4" v-for="(item, index) in message.partyListDis" :key="index">
                          <v-img width="60px" :src="getImg(item)" class="pokemonImgOnChat"></v-img>
                          <v-avatar v-show="isShadow(item)" size="30" class="shadowIconOnChat">
                            <v-img
                              src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/icon%2FIMG_5832_2-removebg-preview.png?alt=media&token=047d6779-fa2a-4781-997b-f3b044861011"
                            ></v-img>
                          </v-avatar>
                        </v-col>
                      </v-row>
                    </v-card>
                    <div class="display_send_time">{{displaySendTime(message.createdAt)}}</div>
                  </div>
                  <div v-else class="mt-0">
                    待機中...
                    <v-progress-linear indeterminate color="green darken-2"></v-progress-linear>
                  </div>
                </div>
                <!-- 普通のメッセージ -->
                <div v-else-if="message.stanpSt == 0">
                  <div class="my_message p-2">{{message.message}}</div>
                  <div class="display_send_time">{{displaySendTime(message.createdAt)}}</div>
                </div>
              </div>
              <!-- 相手側（左） -->
              <div v-else>
                <!-- ６−３申し込み -->
                <div v-if="message.stanpSt == 1">
                  <div style="white-space:pre-line;" class="other_six_three p-2">
                    <P>{{getRequestLeague(message.league)}}</P>
                    <p>６-３出し申請</p>
                    <v-divider></v-divider>
                    <v-btn
                      @click="acceptSixThree(message.league)"
                      color="#33691E"
                      dark
                      rounded
                      depressed
                    >ポケモン選択</v-btn>
                  </div>
                  <span class="display_get_time_on_six_three">{{displaySendTime(message.createdAt)}}</span>
                </div>
                <!-- パーティ画像 -->
                <div v-else-if="message.stanpSt == 2">
                  <div v-if="canShowParty()">
                    <v-card width="240" color="#9ccc65" class="px-3" flat>
                      <v-row>
                        <v-col cols="4" v-for="(item, index) in message.partyListDis" :key="index">
                          <v-img width="60px" :src="getImg(item)" class="pokemonImgOnChat"></v-img>
                          <v-avatar v-show="isShadow(item)" size="30" class="shadowIconOnChat">
                            <v-img
                              src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/icon%2FIMG_5832_2-removebg-preview.png?alt=media&token=047d6779-fa2a-4781-997b-f3b044861011"
                            ></v-img>
                          </v-avatar>
                        </v-col>
                      </v-row>
                    </v-card>
                    <span class>{{displaySendTime(message.createdAt)}}</span>
                  </div>
                  <div v-else class="mt-0">
                    待機中...
                    <v-progress-linear indeterminate color="green darken-2"></v-progress-linear>
                  </div>
                </div>
                <!-- 普通のメッセージ -->
                <div v-else>
                  <div style="white-space:pre-line;" class="other_message py-2 pl-5 pr-2">
                    {{message.message}}
                    <span
                      class="display_get_time"
                    >{{displaySendTime(message.createdAt)}}</span>
                  </div>
                </div>
              </div>
            </div>
          </v-list-item>
        </v-list>
      </v-card>
      <v-row style="background:#FCE4EC; height:130px;" class="mr-0">
        <v-col md="10" cols="8" class="ml-3">
          <v-textarea
            rows="2"
            color="#8ac32b"
            v-model="inputMessage"
            background-color="white"
            append-icon="send"
            @click:append="regMessage"
          ></v-textarea>
        </v-col>
        <v-col md="1" cols="3" v-if="isHost">
          <v-row class="mt-5 ml-3" justify="center">
            <v-btn depressed color="#8ac32b" dark rounded @click="selectLeagueDialog = true">6-3対戦</v-btn>
            <!-- <v-btn rounded disabled>スタンプ</v-btn> -->
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
import { authorizationOfNotification } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";
import { format } from "date-fns";
import { pokemonList, shadowList } from "@/js/pokemonList";

export default {
  data() {
    return {
      notFoundList: null,
      chatLoginDialog: true,
      selectLeagueDialog: false,
      selectSixThreeDialog: false,
      leagueBaseColor: null,
      leagueRowColor: null,
      partyValue: null,
      items: pokemonList,
      partyList: [],
      selectSixThreeDialogOfGuest: false,
      leagueImg: null,
      messages: [],
      inputMessage: "",
      isOpenChat: null,
      showParty: false,
      screenHeight: 0
    };
  },
  mounted() {
    this.screenHeight = window.parent.screen.height;

    var st = this.$route.params["uid"];
    var roomId = st.substr(0, 20);
    var userId = st.substr(20, 48);
    var getSession = window.sessionStorage.getItem(["roomId"]);

    //アクセスできないURLか判定
    setTimeout(() => {
      if (
        (this.$store.getters.isSignedIn &&
          this.$store.getters.user.uid == userId) ||
        getSession == roomId
      ) {
        // 投稿者が入った場合はリダイレクトされない;
      } else if (this.isOpenChat.st == true) {
        // 投稿者以外で初ログイン
        // オープンチャットじゃなくして
        // 投稿者に通知して
        // セッション登録
        db.collection("timeLimitChat")
          .doc(this.$route.params["uid"])
          .collection("isOpenChat")
          .doc(this.$route.params["uid"])
          .update({
            st: false
          });
        db.collection("timeLimitChat")
          .doc(this.$route.params["uid"])
          .update({
            isNotionIcon: true
          });
        db.collection("users")
          .doc(userId)
          .update({
            canLoginTimeLimitChat: true
          });
        window.sessionStorage.setItem(["roomId"], [`${roomId}`]);
        this.sendNotification("Twitterに投稿したチャットにログインしました");
      } else {
        this.$router.push("/notFound");
      }
    }, 2000);

    this.showParty = true;
    db.collection("timeLimitChat")
      .doc(this.$route.params["uid"])
      .collection("canShowParty")
      .doc(this.$route.params["uid"])
      .set({
        status: true
      });
    db.collection("timeLimitChat")
      .doc(this.$route.params["uid"])
      .collection("selectDialgo")
      .doc(this.$route.params["uid"])
      .set({
        sixThreeSelect: false
      });
    setTimeout(() => {
      this.scrollToEnd();
    }, 1500);
    setTimeout(() => {
      this.imgLoad = true;
    }, 500);
  },
  methods: {
    //６−３を投げる
    startSixToThree(st) {
      this.sendNotification("６−３が申し込まれました");
      this.selectLeagueDialog = false;
      this.judgeLeague(st);
      var str = this.$route.params["uid"];
      var result = str.substr(20, 48);
      var refSt = 0;
      if (
        this.$store.getters.isSignedIn &&
        this.$store.getters.user.uid == result
      ) {
        refSt = 0;
      } else {
        refSt = 1;
      }
      db.collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .add({
          message: "",
          ref: this.$route.params["uid"],
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          stanpSt: 1,
          whoesMes: refSt,
          league: st
        });
      this.inputMessage = "";
      setTimeout(() => {
        this.scrollToEnd();
      }, 100);
      // 6-3のパーティー表示ステータスをリセットする
      db.collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("canShowParty")
        .doc(this.$route.params["uid"])
        .update({
          status: false
        });
      this.showParty = false;
    },
    isShadow(sendIndex) {
      return shadowList.some(v => v === sendIndex);
    },
    removeArray(index) {
      this.partyList.splice(index, 1);
    },
    getImg(sendIndex) {
      const target = this.items.find(item => {
        return item.index === sendIndex;
      });
      return target.img;
    },
    //申請されたがわのパーティ選択完了処理
    doneSelectingPartyOfOther() {
      this.selectSixThreeDialogOfGuest = false;
      this.inputMessage = "パーティ選択完了";
      this.regMessage();
      var str = this.$route.params["uid"];
      var result = str.substr(20, 48);
      var refSt = 0;
      if (
        this.$store.getters.isSignedIn &&
        this.$store.getters.user.uid == result
      ) {
        refSt = 0;
      } else {
        refSt = 1;
      }
      db.collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("canShowParty")
        .doc(this.$route.params["uid"])
        .update({
          status: true
        });
      db.collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .add({
          message: "パーティ選択完了",
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          stanpSt: 2,
          whoesMes: refSt,
          partyListDis: this.partyList
        });
      this.showParty = true;
    },
    //申請したがわの選択画面閉じる処理
    closeSixThreeDialogOfMy() {
      db.collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("selectDialgo")
        .doc(this.$route.params["uid"])
        .update({
          sixThreeSelect: false
        });
    },
    //申請したがわのパーティ選択完了処理
    doneSelectingPartyOfMy() {
      this.closeSixThreeDialogOfMy();
      this.inputMessage = "パーティ選択完了";
      this.regMessage();
      var str = this.$route.params["uid"];
      var result = str.substr(20, 48);
      var refSt = 0;
      if (
        this.$store.getters.isSignedIn &&
        this.$store.getters.user.uid == result
      ) {
        refSt = 0;
      } else {
        refSt = 1;
      }
      //選択したパーティを登録
      setTimeout(() => {
        db.collection("timeLimitChat")
          .doc(this.$route.params["uid"])
          .collection("messages")
          .add({
            message: "パーティ選択完了",
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
            stanpSt: 2,
            whoesMes: refSt,
            partyListDis: this.partyList
          });
      }, 500);
      this.inputMessage = "";
      this.showParty = true;
      db.collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("canShowParty")
        .doc(this.$route.params["uid"])
        .update({
          status: true
        });
    },
    isMyMessage(whoesMesId) {
      var st = this.$route.params["uid"];
      var userId = st.substr(20, 48);

      if (
        this.$store.getters.isSignedIn &&
        this.$store.getters.user.uid == userId
      ) {
        if (whoesMesId == 0) {
          return true;
        } else {
          return false;
        }
      } else {
        if (whoesMesId != 0) {
          return true;
        } else {
          return false;
        }
      }
    },
    getRequestLeague(st) {
      if (st == 1) {
        return "スーパーリーグ";
      } else if (st == 2) {
        return "ハイパーリーグ";
      } else {
        return "マスターリーグ";
      }
    },
    displaySendTime(date) {
      return format(new Date(date.toDate()), "HH:mm");
    },
    // ６−３の申請を受けてパーティ選択ダイアログを出す
    acceptSixThree(st) {
      this.judgeLeague(st);
      db.collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("selectDialgo")
        .doc(this.$route.params["uid"])
        .update({
          sixThreeSelect: true
        });
      this.selectSixThreeDialogOfGuest = true;
      this.showParty = false;
    },
    judgeLeague(st) {
      if (st == 1) {
        this.leagueBaseColor = "#0D47A1";
        this.leagueRowColor = "#EF5350";
        this.leagueImg =
          "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/leagueImg%2F%E3%82%B9%E3%83%BC%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=2daccd4d-c422-47a8-9457-19c88562f3f5";
      } else if (st == 2) {
        this.leagueBaseColor = "#263238";
        this.leagueRowColor = "#FFEA00";
        this.leagueImg =
          "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/leagueImg%2F%E3%83%8F%E3%82%A4%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=07b49c27-20f9-49fb-a663-a0b4c278a1fc";
      } else {
        this.leagueBaseColor = "#4527A0";
        this.leagueRowColor = "#E040FB";
        this.leagueImg =
          "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/leagueImg%2F%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=b66582c4-0af9-4165-9944-00de24a4cd77";
      }
    },
    regMessage() {
      this.sendNotification(this.inputMessage);
      // 空文字入力を防ぐ
      if (this.inputMessage == "") {
        return;
      }
      var st = this.$route.params["uid"];
      var result = st.substr(20, 48);
      var refSt = 0;
      if (
        this.$store.getters.isSignedIn &&
        this.$store.getters.user.uid == result
      ) {
        refSt = 0;
      } else {
        refSt = 1;
      }
      db.collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .add({
          message: this.inputMessage,
          ref: this.$route.params["uid"],
          whoesMes: refSt,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          stanpSt: 0
        });
      this.inputMessage = "";
      setTimeout(() => {
        this.scrollToEnd();
      }, 100);
    },
    sendNotification(body) {
      var st = this.$route.params["uid"];
      var result = st.substr(20, 48);
      let argObj = {
        // 受信者のトークンIDと通知内容
        to: `/topics/${result}`,
        priority: "high",
        content_available: true,
        notification: {
          title: `${this.userInfo.name}`,
          body: `${body}`,
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
    scrollToEnd() {
      var container = document.querySelector(".scroll");
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },
    canShowParty() {
      if (this.partySelectedStatus.status == true && this.showParty == true) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    messages() {
      setTimeout(() => {
        this.scrollToEnd();
      }, 1000);
    },
    partyValue() {
      if (this.partyValue != undefined) {
        this.partyList.push(this.partyValue);
      }
    }
  },
  computed: {
    isSixPatry() {
      // return true;
      if (this.partyList.length == 6) {
        return true;
      } else {
        return false;
      }
    },
    isHost() {
      var st = this.$route.params["uid"];
      var result = st.substr(20, 48);
      if (
        this.$store.getters.isSignedIn &&
        this.$store.getters.user.uid == result
      ) {
        return true;
      } else {
        return false;
      }
    },
    getChatCardHeight: function() {
      //ヘッダー、フッター、タブバー、チャットゾーン、スマホの上下
      var header = 40;
      var footer = 60;
      var chat = 130 - 20;
      var padOfiphone = 20;
      var padOfLargeiphone = 78;
      var padOfTab = 64;
      var andMobBar = 60;
      // iphoneの時
      if (navigator.userAgent.indexOf("iPhone") >= 0) {
        // iphone8plus以下
        if (window.innerHeight <= 716) {
          return this.screenHeight - header - footer - chat - padOfiphone;
          // iphoneX以上
        } else {
          return this.screenHeight - header - footer - chat - padOfLargeiphone;
        }
      }
      //androidモバイルの時
      else if (
        navigator.userAgent.indexOf("Android") >= 0 &&
        navigator.userAgent.indexOf("Mobile") >= 0
      ) {
        return this.screenHeight - header - footer - chat - andMobBar;
      }
      //androidタブレットの時
      else if (navigator.userAgent.indexOf("Android") >= 0) {
        return this.screenHeight - header - chat - andMobBar - 30;
      }
      //タブレットの時
      else if (window.innerWidth > 700 && window.innerWidth <= 1024) {
        return this.screenHeight - header - chat - padOfTab;
      } else {
        return this.screenHeight - header - chat - 20 - 200;
      }
    }
  },
  created() {},
  firestore() {
    return {
      isOpenChat: db
        .collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("isOpenChat")
        .doc(this.$route.params["uid"]),
      messages: db
        .collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .orderBy("createdAt", "asc"),
      selectSixThreeDialog: db
        .collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("selectDialgo")
        .doc(this.$route.params["uid"]),
      partySelectedStatus: db
        .collection("timeLimitChat")
        .doc(this.$route.params["uid"])
        .collection("canShowParty")
        .doc(this.$route.params["uid"])
    };
  }
};
</script>
<style>
.shadowIcon {
  position: absolute;
  right: 4px;
  top: 4px;
  background-color: rgb(16, 17, 4);
  z-index: 2;
}
.closeBtnSub {
  position: absolute;
  left: 14px;
  top: 2px;
  z-index: 2;
}
.closeBtn {
  position: absolute;
  left: 30px;
  top: 2px;
  z-index: 2;
}
.pokemonImg {
  position: relative;
  border-radius: 10px;
  bottom: 20px;
  z-index: 1;
}
.my_six_three {
  background: #8ac32b;
  border-radius: 20px 0px 20px 20px;
  /*左下だけ尖らせて吹き出し感を出す*/
}
.display_send_time {
  position: relative;
  right: 46px;
  bottom: 20px;
}
.pokemonImgOnChat {
  border-radius: 10px;
}
.shadowIconOnChat {
  position: absolute;
  right: 12px;
  bottom: 66px;
  background-color: rgb(16, 17, 4);
  z-index: 2;
}
.my_message {
  background: #8ac32b;
  border-radius: 20px 0px 20px 20px;
  /*左下だけ尖らせて吹き出し感を出す*/
}
.other_six_three {
  background: #8ac32b;
  border-radius: 0px 20px 20px 20px; /*左下だけ尖らせて吹き出し感を出す*/
  /* max-width: 200px; */
}
.display_get_time_on_six_three {
  position: relative;
  bottom: 20px;
  left: 160px;
}
.other_message {
  background: #fce4ec;
  border-radius: 0px 20px 20px 20px; /*左下だけ尖らせて吹き出し感を出す*/
  /* max-width: 200px; */
}
.display_get_time {
  position: relative;
  top: 10px;
  left: 60px;
  color: black;
}
</style>