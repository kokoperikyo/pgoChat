<template>
  <div>
    <v-dialog v-model="repDialogSt" max-width="400px">
      <v-card>
        <v-container>
          <v-row>
            <v-textarea
              rows="1"
              auto-grow
              clearable
              clear-icon="cancel"
              v-model="repMes"
              append-icon="send"
              @click:append="rep"
              class="mx-2"
              color="#8ac32b"
            ></v-textarea>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-textarea
      rows="1"
      placeholder="フレンド募集等々お好きなように"
      auto-grow
      v-model="inputMessage"
      append-icon="send"
      @click:append="regMessage"
      color="#8ac32b"
    ></v-textarea>
    <v-card flat class="overflow-y-auto scroll" :height="getChatCardHeifht">
      <v-list v-for="mes in boardMes" :key="mes" dense>
        <v-list-item>
          <v-list-item-content>
            <div v-if="mes.repflag == 1" style="color:#DE4097;">
              <v-icon color="#DE4097">mdi-chevron-double-right</v-icon>
              {{mes.repToWho}}
            </div>
            <v-list-item-title>
              <v-list-item-avatar class="ml-0">
                <v-img :src="mes.avatar"></v-img>
              </v-list-item-avatar>
              <span>{{mes.name}}</span>
              <span class="dis_uid">{{mes.uid}}</span>
              <span class="rep_btn">
                <v-btn @click="repDialog(mes.uid)" color="#8ac32b" dark>
                  <v-icon>reply</v-icon>返信
                </v-btn>
              </span>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div class="ml-3" style="white-space:pre-line;">{{mes.mes}}</div>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <div class="mt-5">{{getTime(mes.createdAt)}}</div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
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
      userInfo: "",
      boardMes: "",
      screenHeight: 0,
      inputMessage: "",
      repMes: "",
      repDialogSt: false,
      selectedRepuid: ""
    };
  },
  methods: {
    regMessage() {
      var len = 8;
      var str = "abcdefghijklmnopqrstuvwxyz";
      var strLen = str.length;
      var result = "";
      for (var i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * strLen)];
      }
      db.collection("boardMes").add({
        ref: this.$store.getters.user.uid,
        mes: this.inputMessage,
        name: this.userInfo.name,
        avatar: this.userInfo.avatarUrl,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        uid: result,
        repflag: 0
      });
      this.inputMessage = "";
    },
    repDialog(repuid) {
      this.repDialogSt = true;
      this.selectedRepuid = repuid;
    },
    rep() {
      var len = 8;
      var str = "abcdefghijklmnopqrstuvwxyz";
      var strLen = str.length;
      var result = "";
      for (var i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * strLen)];
      }
      db.collection("boardMes").add({
        ref: this.$store.getters.user.uid,
        mes: this.repMes,
        name: this.userInfo.name,
        avatar: this.userInfo.avatarUrl,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        uid: result,
        repflag: 1,
        repToWho: this.selectedRepuid
      });
      this.repDialogSt = false;
      this.repMes = "";
    },
    getTime(time) {
      const now = new Date();
      const timeDate = now.getTime() - time.toDate().getTime();
      const floorDate = Math.floor(timeDate / (1000 * 60 * 60));

      if (floorDate <= 1) {
        return format(new Date(time.toDate()), "HH:mm");
      } else {
        return format(new Date(time.toDate()), "yyyy年M月d日HH:mm");
      }
    }
  },
  computed: {
    getChatCardHeifht: function() {
      //ヘッダー、フッター、タブバー、パディング
      var header = 40;
      var footer = 54;
      var textarea = 66;
      var padOfiphone = 20;
      var padOfLargeiphone = 78;
      var padOfTab = 40;
      var andMobBar = 60;
      // iphoneの時
      if (navigator.userAgent.indexOf("iPhone") >= 0) {
        // iphone8plus以下
        if (window.innerHeight <= 716) {
          return this.screenHeight - header - footer - textarea - padOfiphone;
          // iphoneX以上
        } else {
          return (
            this.screenHeight - header - footer - textarea - padOfLargeiphone
          );
        }
      }
      //androidモバイルの時
      else if (
        navigator.userAgent.indexOf("Android") >= 0 &&
        navigator.userAgent.indexOf("Mobile") >= 0
      ) {
        return this.screenHeight - header - footer - textarea - andMobBar;
      }
      //androidタブレットの時
      else if (navigator.userAgent.indexOf("Android") >= 0) {
        return this.screenHeight - header - textarea - andMobBar;
      }
      //タブレットの時
      else if (window.innerWidth > 700 && window.innerWidth <= 1024) {
        return this.screenHeight - header - textarea - padOfTab;
      } else {
        return null;
      }
    }
  },
  mounted() {
    this.screenHeight = window.parent.screen.height;
  },
  firestore() {
    return {
      userInfo: db.collection("users").doc(this.$store.getters.user.uid),
      boardMes: db
        .collection("boardMes")
        .orderBy("createdAt", "desc")
        .limit(30)
    };
  }
};
</script>
<style>
.dis_uid {
  position: absolute;
  right: 20px;
}
.rep_btn {
  position: absolute;
  right: 20px;
  bottom: 10px;
}
</style>