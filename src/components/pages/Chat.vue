<template>
  <div>
    <v-dialog v-model="editingModal" class="mx-auto">
      <v-card class="mx-auto">
        <v-container>
          <v-row>
            <v-textarea
              rows="1"
              auto-grow
              clearable
              clear-icon="cancel"
              v-model="editMes"
              outlined
              row-height="10"
              background-color="#f5a37d"
            ></v-textarea>
            <v-btn @click="updateMes" class="ml-3">更新</v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
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
                src="https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/league%2F%E3%82%B9%E3%83%BC%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=b917de82-c48f-432f-9da7-9fe241bc30cf"
              ></v-img>
            </v-btn>
          </v-col>
          <v-col align="center">
            <v-btn icon @click="startSixToThree(2)">
              <v-img
                width="60px"
                src="https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/league%2F%E3%83%8F%E3%82%A4%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=ed6574c7-a541-4b2d-95a1-2077a57ac4ff"
              ></v-img>
            </v-btn>
          </v-col>
          <v-col align="center">
            <v-btn icon @click="startSixToThree(3)">
              <v-img
                width="60px"
                src="https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/league%2F%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=e5321c5c-7dbb-41e9-92ee-17aa7d94b0f3"
              ></v-img>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <!-- パーティー申請したがわ -->
    <v-dialog v-model="selectSixThreeDialog.sixThreeSelect" max-width="500" persistent>
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
              <v-btn small icon fab @click="removeArray(index)" class="closeBtn">
                <v-icon color="black">mdi-close-circle</v-icon>
              </v-btn>
              <v-img width="60" :src="getImg(item)" class="pokemonImg"></v-img>
            </v-col>
          </v-row>
        </v-card>
        <div>
          <v-btn rounded @click="closeSixThreeDialogOfMy" class="ml-1 mr-2">閉じる</v-btn>
          <v-btn rounded :disabled="!isSixPatry" @click="doneSelectingPartyOfMy">決定</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <!-- パーティー選択申請を受けたがわ -->
    <v-dialog v-model="selectSixThreeDialogOfOther" max-width="500" persistent>
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
              <v-btn small icon fab @click="removeArray(index)" class="closeBtn">
                <v-icon color="black">mdi-close-circle</v-icon>
              </v-btn>
              <v-img width="60" :src="getImg(item)" class="pokemonImg"></v-img>
            </v-col>
          </v-row>
        </v-card>
        <div>
          <v-btn rounded @click="selectSixThreeDialogOfOther = false" class="ml-1 mr-2">閉じる</v-btn>
          <v-btn rounded :disabled="!isSixPatry" @click="doneSelectingPartyOfOther">決定</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <v-card max-width="1100px" class="mx-auto" id="chatCard" flat>
      <v-toolbar color="gray" dark>
        <v-toolbar-title>{{chatUser.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="editStatus" @click="editStatus = false" fab small>
          <v-icon>mdi-comment-edit-outline</v-icon>
        </v-btn>
        <v-btn v-else @click="editStatus = true,editingModal = false" fab small>
          <v-icon>mdi-content-save-edit-outline</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card class="overflow-y-auto scroll" style="max-height: 380px;">
        <v-list color="#E3F2FD">
          <v-list-item
            class="mt-2"
            v-for="(message, i) in messages"
            :key="i"
            style="white-space:pre-wrap;"
          >
            <!-- 自分のメッセージは右側に表示するのでスペースを入れる -->
            <v-spacer v-if="!isMyMessage(message.ref)"></v-spacer>
            <!-- 相手のメッセージの左にアバター表示 -->
            <v-list-item-avatar v-if="isMyMessage(message.ref)" size="25">
              <v-img
                :src="chatUser.avatarUrl"
                :class="{ first_mes_margin: isFirstMes(message.createdAt,i)}"
              ></v-img>
            </v-list-item-avatar>
            <div :class="{ first_mes_margin: isFirstMes(message.createdAt,i)}">
              <!-- メッセージの色分け -->
              <!-- 自分がわ（右） -->
              <div v-if="!isMyMessage(message.ref)">
                <div v-if="!editStatus && message.stanpSt != 1 && message.stanpSt != 2">
                  <v-btn
                    @click="editMesAction(message.message,message.uid)"
                    class="mb-1"
                    outlined
                    x-small
                    fab
                    color="indigo"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    @click="deleteMesAction(message.uid)"
                    class="mb-1 ml-1"
                    outlined
                    x-small
                    fab
                    color="error"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
                <div v-if="message.stanpSt == 1">
                  <div class="my_six_three p-2">{{getRequestLeague(message.league)}}申し込み</div>
                  <div class="display_send_time">{{displaySendTime(message.createdAt)}}</div>
                </div>
                <div v-else-if="message.stanpSt == 2">
                  <div v-if="isLatestMessage(message.createdAt)">
                    <div v-if="canShowParty()">
                      <v-card width="240" color="#9ccc65" class="px-3" flat>
                        <v-row>
                          <v-col cols="4" v-for="(item, index) in message.message" :key="index">
                            <v-img width="60px" :src="getImg(item)" class="pokemonImgOnChat"></v-img>
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
                  <div v-else>
                    <v-card width="240" color="#9ccc65" class="px-3" flat>
                      <v-row>
                        <v-col cols="4" v-for="(item, index) in message.message" :key="index">
                          <v-img width="60px" :src="getImg(item)" class="pokemonImgOnChat"></v-img>
                        </v-col>
                      </v-row>
                    </v-card>
                    <div class="display_send_time">{{displaySendTime(message.createdAt)}}</div>
                  </div>
                </div>
                <div v-else-if="message.stanpSt == 0">
                  <div class="my_message p-2">{{message.message}}</div>
                  <div class="display_send_time">{{displaySendTime(message.createdAt)}}</div>
                </div>
              </div>
              <!-- 相手側（左） -->
              <div v-else>
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
                <div v-else-if="message.stanpSt == 2">
                  <div v-if="isLatestMessage(message.createdAt)">
                    <div v-if="canShowParty()">
                      <v-card width="240" color="#9ccc65" class="px-3" flat>
                        <v-row>
                          <v-col cols="4" v-for="(item, index) in message.message" :key="index">
                            <v-img width="60px" :src="getImg(item)" class="pokemonImgOnChat"></v-img>
                          </v-col>
                        </v-row>
                      </v-card>
                      <span class>{{displaySendTime(message.createdAt)}}</span>
                    </div>
                    <div v-else>
                      待機中...
                      <v-progress-linear indeterminate color="green darken-2"></v-progress-linear>
                    </div>
                  </div>
                  <div v-else>
                    <v-card width="240" color="#9ccc65" class="px-3" flat>
                      <v-row>
                        <v-col cols="4" v-for="(item, index) in message.message" :key="index">
                          <v-img width="60px" :src="getImg(item)" class="pokemonImgOnChat"></v-img>
                        </v-col>
                      </v-row>
                    </v-card>
                    <span class>{{displaySendTime(message.createdAt)}}</span>
                  </div>
                </div>
                <div v-else>
                  <div style="white-space:pre-line;" class="other_message py-2 pl-5 pr-2">
                    {{message.message}}
                    <span
                      class="display_get_time"
                    >{{displaySendTime(message.createdAt)}}</span>
                  </div>
                </div>
              </div>
              <div
                v-if="isFirstMes(message.createdAt,i)"
                class="first_mes_position"
                :style="{right: getChatCardWidth + 'px' }"
              >{{firstMes(message.createdAt,i)}}</div>
              <div
                v-else-if="i == 0"
                class="first_first_mes_position"
                :style="{right: getChatCardWidth + 'px' }"
              >{{firstMes(message.createdAt,i)}}</div>
            </div>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card color="#C0C0C0">
        <v-row>
          <v-col md="10" cols="8">
            <v-textarea
              class="ml-3 mt-5"
              rows="1"
              auto-grow
              outlined
              v-model="inputMessage"
              background-color="white"
              append-icon="send"
              @click:append="regMessage"
            ></v-textarea>
          </v-col>
          <v-col md="2" cols="3">
            <v-row class="mt-7 mr-2 ml-3" justify="center">
              <v-btn rounded @click="selectLeagueDialog = true">6-3対戦</v-btn>
              <!-- <v-btn rounded disabled>スタンプ</v-btn> -->
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";
import { format } from "date-fns";

export default {
  data() {
    return {
      chatCardWidth: 0,
      messages: [],
      inputMessage: "",
      chatUser: "",
      selectLeagueDialog: false,
      selectSixThreeDialog: false,
      selectSixThreeDialogOfOther: false,
      leagueBaseColor: null,
      leagueRowColor: null,
      leagueImg: null,
      editMes: "",
      mesUid: "",
      editStatus: true,
      editingModal: false,
      isMyMessageCla: false,
      partySelectedStatus: Object,
      showParty: false,
      items: [
        {
          name: "フシギソウ（ふしぎそう）",
          index: 2,
          img:
            "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/pokemon%2F0002.PNG?alt=media&token=4ad36e70-9b08-4acf-9e2c-ff4be907d3f6"
        },
        {
          name: "フシギバナ（ふしぎばな）",
          index: 3,
          img:
            "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/pokemon%2F0003.PNG?alt=media&token=3f3ab5c3-9d4c-4085-9f23-97ae65e52f8b"
        },
        {
          name: "リザードン（りざーどん）",
          index: 6,
          img:
            "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/pokemon%2F0006.PNG?alt=media&token=5b691454-1cbd-43bd-90b7-8b7e4fd80da1"
        },
        {
          name: "カメックス（かめっくす）",
          index: 9,
          img:
            "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/pokemon%2F0009.PNG?alt=media&token=085a83af-f45b-426b-8360-f1861480328a"
        },
        {
          name: "スピアー（すぴあー）",
          index: 15,
          img:
            "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/pokemon%2F0015.PNG?alt=media&token=9e5fc809-388a-41d6-b4c1-bc135253a05d"
        },
        {
          name: "ライチュウ（らいちゅう）",
          index: 26,
          img:
            "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/pokemon%2F0026.PNG?alt=media&token=a33e2ba5-1cce-4150-be8b-e94058ba5541"
        },
        {
          name: "ピクシー（ぴくしー）",
          index: 36,
          img:
            "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/pokemon%2F0036.PNG?alt=media&token=11527678-5cf1-46cd-9717-c10599cf5d86"
        },
        {
          name: "キュウコン（きゅうこん）",
          index: 38,
          img:
            "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/pokemon%2F0038.PNG?alt=media&token=7f09680f-b1e0-4128-8478-4179a0f8dec9"
        },
        {
          name: "プクリン（ぷくりん）",
          index: 40,
          img:
            "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/pokemon%2F0040.PNG?alt=media&token=d10de3ba-2a82-4a64-b5ed-4706e56cb306"
        }
      ],
      partyValue: null,
      partyList: []
    };
  },
  computed: {
    getChatCardWidth: function() {
      //80っのはfirst_mes_positionで定義してある
      return (this.chatCardWidth - 80) / 2;
    },
    isSixPatry: function() {
      // return true;
      if (this.partyList.length == 6) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    isMyMessage(mesId) {
      if (mesId == this.$store.getters.user.uid + this.$route.params["uid"]) {
        this.isMyMessageCla = true;
        return true;
      } else {
        return false;
      }
    },
    regMessage() {
      // 空文字入力を防ぐ
      if (this.inputMessage == "") {
        return;
      }
      var len = 12;
      var str = "abcdefghijklmnopqrstuvwxyz";
      var strLen = str.length;
      var result = "";
      for (var i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * strLen)];
      }
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .add({
          message: this.inputMessage,
          ref: this.$route.params["uid"],
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          uid: result,
          stanpSt: 0
        });
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .add({
          message: this.inputMessage,
          ref: this.$route.params["uid"] + this.$store.getters.user.uid,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          uid: result,
          stanpSt: 0
        });
      this.inputMessage = "";
      setTimeout(() => {
        this.scrollToEnd();
      }, 100);
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
    judgeLeague(st) {
      if (st == 1) {
        this.leagueBaseColor = "#0D47A1";
        this.leagueRowColor = "#EF5350";
        this.leagueImg =
          "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/league%2F%E3%82%B9%E3%83%BC%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=b917de82-c48f-432f-9da7-9fe241bc30cf";
      } else if (st == 2) {
        this.leagueBaseColor = "#263238";
        this.leagueRowColor = "#FFEA00";
        this.leagueImg =
          "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/league%2F%E3%83%8F%E3%82%A4%E3%83%8F%E3%82%9A%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=ed6574c7-a541-4b2d-95a1-2077a57ac4ff";
      } else {
        this.leagueBaseColor = "#4527A0";
        this.leagueRowColor = "#E040FB";
        this.leagueImg =
          "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/league%2F%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%AF%E3%82%99.png?alt=media&token=e5321c5c-7dbb-41e9-92ee-17aa7d94b0f3";
      }
    },
    //６−３を投げる
    startSixToThree(st) {
      this.selectLeagueDialog = false;
      this.judgeLeague(st);
      var len = 12;
      var str = "abcdefghijklmnopqrstuvwxyz";
      var strLen = str.length;
      var result = "";
      for (var i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * strLen)];
      }
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .add({
          message: this.inputMessage,
          ref: this.$route.params["uid"],
          uid: result,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          stanpSt: 1,
          league: st
        });
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .add({
          message: this.inputMessage,
          ref: this.$route.params["uid"] + this.$store.getters.user.uid,
          uid: result,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          stanpSt: 1,
          league: st
        });
      this.inputMessage = "";
      setTimeout(() => {
        this.scrollToEnd();
      }, 100);
      //6-3のパーティー表示ステータスをリセットする
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("test")
        .doc(this.$store.getters.user.uid)
        .update({
          status: false
        });
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("test")
        .doc(this.$route.params["uid"])
        .update({
          status: false
        });
      this.showParty = false;
    },
    // ６−３の申請を受けてパーティ選択ダイアログを出す
    acceptSixThree(st) {
      this.judgeLeague(st);
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("chatStatus")
        .doc(this.$store.getters.user.uid)
        .update({
          sixThreeSelect: true
        });
      this.selectSixThreeDialogOfOther = true;
      this.showParty = false;
    },
    //申請したがわの選択画面閉じる処理
    closeSixThreeDialogOfMy() {
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("chatStatus")
        .doc(this.$route.params["uid"])
        .update({
          sixThreeSelect: false
        });
    },
    //申請したがわのパーティ選択完了処理
    doneSelectingPartyOfMy() {
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("chatStatus")
        .doc(this.$route.params["uid"])
        .update({
          sixThreeSelect: false
        });
      this.inputMessage = "パーティ選択完了";
      this.regMessage();

      //選択したパーティを登録
      var len = 12;
      var str = "abcdefghijklmnopqrstuvwxyz";
      var strLen = str.length;
      var result = "";
      for (var i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * strLen)];
      }
      setTimeout(() => {
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .collection("messages")
          .add({
            message: this.partyList,
            ref: this.$route.params["uid"],
            uid: result,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
            stanpSt: 2
          });
        db.collection("users")
          .doc(this.$route.params["uid"])
          .collection("messages")
          .add({
            message: this.partyList,
            ref: this.$route.params["uid"] + this.$store.getters.user.uid,
            uid: result,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
            stanpSt: 2
          });
      }, 500);

      this.inputMessage = "";
      this.showParty = true;
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("test")
        .doc(this.$store.getters.user.uid)
        .update({
          status: true
        });
    },
    //申請されたがわのパーティ選択完了処理
    doneSelectingPartyOfOther() {
      this.selectSixThreeDialogOfOther = false;
      this.inputMessage = "パーティ選択完了";
      this.regMessage();
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("test")
        .doc(this.$store.getters.user.uid)
        .update({
          status: true
        });
      var len = 12;
      var str = "abcdefghijklmnopqrstuvwxyz";
      var strLen = str.length;
      var result = "";
      for (var i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * strLen)];
      }
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .add({
          message: this.partyList,
          ref: this.$route.params["uid"],
          uid: result,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          stanpSt: 2
        });
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .add({
          message: this.partyList,
          ref: this.$route.params["uid"] + this.$store.getters.user.uid,
          uid: result,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
          stanpSt: 2
        });
      this.showParty = true;
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
    },
    displaySendTime(date) {
      return format(new Date(date.toDate()), "HH:mm");
    },
    editMesAction(mes, uid) {
      this.editMes = mes;
      this.mesUid = uid;
      this.editingModal = true;
    },
    updateMes() {
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .where("uid", "==", this.mesUid)
        .get()
        .then(doc => {
          var editingMesMyDocId;
          editingMesMyDocId = doc.docs[0].id;
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .collection("messages")
            .doc(editingMesMyDocId)
            .update({
              message: this.editMes,
              updatedAt: firebase.firestore.Timestamp.fromDate(new Date())
            });
        });
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .where("uid", "==", this.mesUid)
        .get()
        .then(doc => {
          var editingMesOtherDocId;
          editingMesOtherDocId = doc.docs[0].id;
          db.collection("users")
            .doc(this.$route.params["uid"])
            .collection("messages")
            .doc(editingMesOtherDocId)
            .update({
              message: this.editMes,
              updatedAt: firebase.firestore.Timestamp.fromDate(new Date())
            });
        });
      this.editingModal = false;
    },
    deleteMesAction(uid) {
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .where("uid", "==", uid)
        .get()
        .then(doc => {
          var editingMesMyDocId;
          editingMesMyDocId = doc.docs[0].id;
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .collection("messages")
            .doc(editingMesMyDocId)
            .delete();
        });
      db.collection("users")
        .doc(this.$route.params["uid"])
        .collection("messages")
        .where("uid", "==", uid)
        .get()
        .then(doc => {
          var editingMesOtherDocId;
          editingMesOtherDocId = doc.docs[0].id;
          db.collection("users")
            .doc(this.$route.params["uid"])
            .collection("messages")
            .doc(editingMesOtherDocId)
            .delete();
        });
    },
    isLatestMessage(time) {
      const now = new Date();
      const timeDate = now.getTime() - time.toDate().getTime();
      const floorDate = Math.floor(timeDate / (1000 * 60));
      if (floorDate < 5) {
        return true;
      } else {
        return false;
      }
    },
    isFirstMes(date, i) {
      if (i != 0) {
        const thisTimeDate = date.toDate().getDate();
        const oneBeforeTimeDate = this.messages[i - 1].createdAt
          .toDate()
          .getDate();
        if (thisTimeDate - oneBeforeTimeDate == 0) {
          return false;
        } else {
          return true;
        }
      }
      return false;
    },
    isTopMes(i) {
      if (i == 0) {
        return true;
      } else {
        return false;
      }
    },
    firstMes(date, i) {
      const weekArray = ["", "日", "月", "火", "水", "木", "金", "土"];
      const today = new Date().getDate();
      if (i == 0) {
        return (
          format(new Date(date.toDate()), "M/d") +
          "(" +
          weekArray[format(new Date(date.toDate()), "c")] +
          ")"
        );
      } else if (today - date.toDate().getDate() == 1) {
        return "昨日";
      } else {
        return (
          format(new Date(date.toDate()), "M/d") +
          "(" +
          weekArray[format(new Date(date.toDate()), "c")] +
          ")"
        );
      }
    },
    adjustFirstMesPosition() {
      this.chatCardWidth = document.getElementById("chatCard").clientWidth;
    },
    getImg(sendIndex) {
      const target = this.items.find(item => {
        return item.index === sendIndex;
      });
      return target.img;
    },
    removeArray(index) {
      this.partyList.splice(index, 1);
    }
  },
  mounted() {
    this.chatCardWidth = document.getElementById("chatCard").clientWidth;
    window.addEventListener("resize", this.adjustFirstMesPosition);
    //最終ログインを更新
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .update({
        lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
      });
    setTimeout(() => {
      this.scrollToEnd();
    }, 1000);
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .collection("test")
      .doc(this.$route.params["uid"])
      .set({
        status: true
      });
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .collection("chatStatus")
      .doc(this.$route.params["uid"])
      .set({
        sixThreeSelect: false
      });
    this.showParty = true;
    db.collection("users")
      .doc(this.$route.params["uid"])
      .collection("test")
      .doc(this.$store.getters.user.uid)
      .update({
        status: true
      });
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
  firestore() {
    return {
      messages: db
        .collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .where("ref", "in", [
          this.$route.params["uid"],
          this.$store.getters.user.uid + this.$route.params["uid"]
        ])
        .orderBy("createdAt", "asc"),
      chatUser: db.collection("users").doc(this.$route.params["uid"]),
      partySelectedStatus: db
        .collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("test")
        .doc(this.$route.params["uid"]),
      selectSixThreeDialog: db
        .collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("chatStatus")
        .doc(this.$route.params["uid"])
    };
  }
};
</script>
<style>
.other_message {
  background: white;
  border-radius: 0px 20px 20px 20px; /*左下だけ尖らせて吹き出し感を出す*/
  /* max-width: 200px; */
}
.other_six_three {
  background: #9ccc65;
  border-radius: 0px 20px 20px 20px; /*左下だけ尖らせて吹き出し感を出す*/
  /* max-width: 200px; */
}
.my_message {
  background: #9ccc65;
  border-radius: 20px 0px 20px 20px;
  /*左下だけ尖らせて吹き出し感を出す*/
}
.my_six_three {
  background: #9ccc65;
  border-radius: 20px 0px 20px 20px;
  /*左下だけ尖らせて吹き出し感を出す*/
}
.display_send_time {
  position: relative;
  right: 46px;
  bottom: 20px;
}
.display_get_time {
  position: relative;
  top: 10px;
  left: 60px;
  color: black;
}
.display_get_time_on_six_three {
  position: relative;
  bottom: 20px;
  left: 160px;
}
.first_mes_margin {
  margin-top: 40px;
}
.first_mes_position {
  position: absolute;
  top: 10px;
  font-size: 12px;
  width: 80px;
  text-align: center;
}
.first_first_mes_position {
  position: absolute;
  bottom: 60px;
  font-size: 12px;
  width: 80px;
  text-align: center;
}
.pokemonImg {
  position: relative;
  border-radius: 10px;
  bottom: 20px;
  z-index: 1;
}
.pokemonImgOnChat {
  border-radius: 10px;
}
.closeBtn {
  position: absolute;
  left: 30px;
  top: 2px;
  z-index: 2;
}
</style>